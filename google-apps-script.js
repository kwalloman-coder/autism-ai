// ============================================
// Google Apps Script - Autism AI Rating Backend
// ============================================
// 
// HOW TO SETUP:
// 1. Create a new Google Sheet
// 2. Name the first sheet "Ratings"
// 3. Add these headers in row 1:
//    Timestamp | Stars | Comment | Tags | User ID | User Agent | Page | Language
// 4. Open Extensions > Apps Script
// 5. Delete default code and paste ALL of this
// 6. Click Deploy > New deployment > Web App
// 7. Set "Who has access" to "Anyone"
// 8. Copy the Web App URL
// 9. Replace RATING_API_URL in your index.html
//
// ============================================

const SHEET_NAME = 'Ratings';

// Handle POST requests (submit rating)
function doPost(e) {
  try {
    // Parse the request data
    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch {
      // Try form data
      data = e.parameter;
    }

    // Get the active spreadsheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Stars', 'Comment', 'Tags', 'User ID', 'User Agent', 'Page', 'Language']);
      // Format header
      sheet.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#4285f4').setFontColor('white');
    }

    // Append the rating data
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      parseInt(data.stars) || 0,
      data.comment || '',
      Array.isArray(data.tags) ? data.tags.join(', ') : (data.tags || ''),
      data.userId || 'anonymous',
      data.userAgent || '',
      data.page || '',
      data.language || ''
    ]);

    // Return success
    return jsonResponse({
      success: true,
      message: 'تم حفظ التقييم بنجاح',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    return jsonResponse({
      success: false,
      error: error.toString()
    }, 500);
  }
}

// Handle GET requests (get stats)
function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // If no sheet exists yet, return empty stats
    if (!sheet) {
      return jsonResponse({
        success: true,
        average: 0,
        count: 0,
        distribution: [0, 0, 0, 0, 0],
        ratings: []
      });
    }

    // Get all data
    const data = sheet.getDataRange().getValues();

    if (data.length <= 1) {
      return jsonResponse({
        success: true,
        average: 0,
        count: 0,
        distribution: [0, 0, 0, 0, 0],
        ratings: []
      });
    }

    // Calculate statistics
    let total = 0;
    let count = 0;
    const distribution = [0, 0, 0, 0, 0]; // 1-5 stars
    const recentRatings = [];

    // Skip header row (index 0)
    for (let i = 1; i < data.length; i++) {
      const stars = parseInt(data[i][1]) || 0;
      if (stars >= 1 && stars <= 5) {
        total += stars;
        count++;
        distribution[stars - 1]++;

        // Collect recent ratings (last 10)
        if (recentRatings.length < 10) {
          recentRatings.push({
            stars: stars,
            comment: data[i][2] || '',
            tags: data[i][3] || '',
            timestamp: data[i][0] || ''
          });
        }
      }
    }

    const average = count > 0 ? (total / count) : 0;

    // Check for callback (JSONP)
    const callback = e.parameter.callback;
    const response = {
      success: true,
      average: average.toFixed(1),
      count: count,
      distribution: distribution,
      ratings: recentRatings,
      lastUpdated: new Date().toISOString()
    };

    if (callback) {
      // JSONP response
      return ContentService.createTextOutput(callback + '(' + JSON.stringify(response) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return jsonResponse(response);

  } catch (error) {
    return jsonResponse({
      success: false,
      error: error.toString()
    }, 500);
  }
}

// Helper function for JSON responses
function jsonResponse(data, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);

  // Set CORS headers
  return output;
}

// Test function (run this to verify)
function testSetup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Stars', 'Comment', 'Tags', 'User ID', 'User Agent', 'Page', 'Language']);
    Logger.log('Sheet created successfully!');
  } else {
    Logger.log('Sheet already exists. Rows: ' + sheet.getLastRow());
  }

  // Add a test rating
  sheet.appendRow([
    new Date().toISOString(),
    5,
    'تقييم تجريبي',
    '👶 سهل الاستخدام',
    'test_user',
    'Test Agent',
    'https://autism-ai.kwalloman.com',
    'ar'
  ]);

  Logger.log('Test rating added!');
}
