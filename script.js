    }
}

async function loadMobileNetModel() {
    const prediction = document.getElementById('cameraPrediction');
    prediction.textContent = 'جاري تحميل نموذج MobileNet...';
    try {
        aiState.model = await mobilenet.load();
        prediction.textContent = '✅ النموذج جاهز! اضغط "تشغيل" لبدء الكاميرا';
    } catch (err) {
        prediction.textContent = '❌ فشل تحميل النموذج. تحقق من الاتصال.';
        console.error(err);
    }
}

async function startCamera() {
    const video = document.getElementById('cameraVideo');
    const prediction = document.getElementById('cameraPrediction');

    try {
        aiState.videoStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        video.srcObject = aiState.videoStream;
        aiState.cameraActive = true;
        prediction.textContent = '🔍 جاري التحليل...';
        predictCameraFrame();
    } catch (err) {
        prediction.textContent = '❌ لا يمكن الوصول للكاميرا. تأكد من إذن الكاميرا.';
    }
}

function stopCamera() {
    const video = document.getElementById('cameraVideo');
    if (aiState.videoStream) {
        aiState.videoStream.getTracks().forEach(t => t.stop());
        aiState.videoStream = null;
    }
    aiState.cameraActive = false;
    video.srcObject = null;
    document.getElementById('cameraPrediction').textContent = '⏹️ تم إيقاف الكاميرا';
}

async function predictCameraFrame() {
    if (!aiState.cameraActive || !aiState.model) return;

    const video = document.getElementById('cameraVideo');
    const prediction = document.getElementById('cameraPrediction');

    try {
        const predictions = await aiState.model.classify(video);
        if (predictions && predictions.length > 0) {
            const top = predictions[0];
            const arabicMap = {
                'apple': 'تفاحة', 'banana': 'موزة', 'orange': 'برتقال', 'cat': 'قطة', 'dog': 'كلب',
                'bird': 'عصفور', 'book': 'كتاب', 'ball': 'كرة', 'car': 'سيارة', 'chair': 'مقعد',
                'table': 'طاولة', 'bottle': 'زجاجة', 'cup': 'كوب', 'phone': 'هاتف', 'laptop': 'حاسوب',
                'shoe': 'حذاء', 'shirt': 'قميص', 'pants': 'بنطلون', 'hat': 'قبعة', 'watch': 'ساعة',
                'glasses': 'نظارات', 'pen': 'قلم', 'pencil': 'قلم رصاص', 'bag': 'حقيبة', 'box': 'صندوق',
                'flower': 'زهرة', 'tree': 'شجرة', 'grass': 'عشب', 'sky': 'سماء', 'cloud': 'سحابة',
                'sun': 'شمس', 'moon': 'قمر', 'star': 'نجمة', 'water': 'ماء', 'milk': 'حليب'
            };

            let label = top.className.split(',')[0].trim().toLowerCase();
            let arabicLabel = arabicMap[label] || label;
            prediction.textContent = `🔍 ${arabicLabel} (${Math.round(top.probability * 100)}%)`;

            // Speak the detected object
            if (top.probability > 0.5) {
                const utterance = new SpeechSynthesisUtterance(`هذا ${arabicLabel}`);
                utterance.lang = 'ar-SA';
                utterance.rate = 0.9;
                speechSynthesis.speak(utterance);
            }
        }
    } catch (err) {
        console.error('Prediction error:', err);
    }

    if (aiState.cameraActive) {
        requestAnimationFrame(predictCameraFrame);
    }
}

// ==================== SMART RECOMMENDATIONS ====================
function showRecommendations() {
    const panel = document.getElementById('recommendationsPanel');
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
        generateRecommendations();
        gtag('event', 'recommendations_open');
    }
}

function generateRecommendations() {
    const content = document.getElementById('recommendationsContent');

    if (state.attempts.length === 0) {
        content.innerHTML = `
            <div style="text-align:center;padding:20px;">
                <div style="font-size:3rem;margin-bottom:10px;">🎯</div>
                <p style="color:#ffffffcc;font-size:1.1rem;">ابدأ جلسة ليظهر التوصيات المخصصة!</p>
                <p style="color:#ffffffaa;font-size:14px;margin-top:10px;">سنقترح لك الأنشطة المناسبة بناءً على أداء طفلك.</p>
            </div>
        `;
        return;
    }

    // Calculate success rates
    const totalAttempts = state.attempts.length;
    const successCount = state.attempts.filter(a => a.result === 'success').length;
    const partialCount = state.attempts.filter(a => a.result === 'partial').length;
    const failCount = state.attempts.filter(a => a.result === 'fail').length;
    const successRate = totalAttempts > 0 ? Math.round(successCount / totalAttempts * 100) : 0;

    // Recommendations logic
    let recommendations = [];

    if (successRate < 30) {
        recommendations.push({
            icon: '🔢',
            title: 'ابدأ بالتسلسلات',
            desc: 'نسبة النجاح منخفضة. التسلسلات أسهل وتحسن الثقة.',
            action: () => { switchTab('sequences', document.getElementById('tab-sequences')); }
        });
        recommendations.push({
            icon: '😊',
            title: 'تعرف على المشاعر',
            desc: 'نشاط بصري بسيط يبني الثقة قبل الكلمات.',
            action: () => { switchTab('emotions', document.getElementById('tab-emotions')); }
        });
    } else if (successRate < 60) {
        recommendations.push({
            icon: '🎤',
            title: 'استمر في الكلمات',
            desc: 'أداء جيد! استمر في الكلمات السهلة والمتوسطة.',
            action: () => { switchTab('words', document.getElementById('tab-words')); }
        });
        recommendations.push({
            icon: '👋',
            title: 'التعليمات الحركية',
            desc: 'أضف تنوعاً بالتعليمات الحركية لتعزيز الاستجابة.',
            action: () => { switchTab('instructions', document.getElementById('tab-instructions')); }
        });
    } else {
        recommendations.push({
            icon: '💬',
            title: 'المحادثات الموجهة',
            desc: 'أداء ممتاز! جرب المحادثات المتقدمة.',
            action: () => { switchTab('intraverbals', document.getElementById('tab-intraverbals')); }
        });
        recommendations.push({
            icon: '📂',
            title: 'التصنيفات',
            desc: 'تحدي جديد: تصنيف الأشياء إلى مجموعات.',
            action: () => { switchTab('categories', document.getElementById('tab-categories')); }
        });
    }

    // Add weak words recommendation
    const weakWords = state.attempts.filter(a => a.result === 'fail').map(a => a.word);
    if (weakWords.length > 0) {
        recommendations.push({
            icon: '📝',
            title: 'كلمات تحتاج تدريب',
            desc: `ركز على: ${[...new Set(weakWords)].slice(0, 3).join('، ')}`,
            action: () => { switchTab('words', document.getElementById('tab-words')); }
        });
    }

    content.innerHTML = `
        <div style="margin-bottom:15px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px;">
                <span style="font-weight:700;color:white;">معدل النجاح العام</span>
                <span style="color:${successRate >= 60 ? '#34d399' : successRate >= 30 ? '#fbbf24' : '#ff4757'};font-weight:900;font-size:1.5rem;">${successRate}%</span>
            </div>
            <div style="height:10px;background:rgba(255,255,255,0.2);border-radius:5px;overflow:hidden;">
                <div style="height:100%;width:${successRate}%;background:${successRate >= 60 ? '#34d399' : successRate >= 30 ? '#fbbf24' : '#ff4757'};border-radius:5px;transition:width 0.5s;"></div>
            </div>
            <div style="display:flex;gap:15px;margin-top:10px;font-size:13px;color:#ffffffaa;">
                <span>✅ ${successCount} صحيح</span>
                <span>🤔 ${partialCount} جزئي</span>
                <span>❌ ${failCount} يحتاج تدريب</span>
            </div>
        </div>
        <div style="display:grid;gap:10px;">
            ${recommendations.map((rec, i) => `
                <div onclick="recommendations[${i}].action()" style="padding:15px;background:rgba(255,255,255,0.05);border:1px solid var(--glass-border);border-radius:12px;cursor:pointer;transition:all 0.3s;text-align:right;" onmouseover="this.style.background='rgba(0,212,255,0.1)';this.style.borderColor='var(--accent)'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='var(--glass-border)'">
                    <div style="display:flex;align-items:center;gap:12px;">
                        <span style="font-size:2rem;">${rec.icon}</span>
                        <div style="flex:1;">
                            <div style="font-weight:800;color:white;margin-bottom:3px;">${rec.title}</div>
                            <div style="font-size:13px;color:#ffffffaa;">${rec.desc}</div>
                        </div>
                        <span style="color:var(--accent);">←</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    // Store recommendations for click handlers
    window.recommendations = recommendations;
}

// ==================== PARENT DASHBOARD ====================
function showParentDashboard() {
    document.getElementById('appScreen').classList.add('hidden');
    document.getElementById('mainScreen').classList.add('hidden');
    document.getElementById('parentDashboard').classList.remove('hidden');
    document.getElementById('sessionEndModal').classList.add('hidden');
    renderParentData();
    gtag('event', 'parent_dashboard_view');
}

function backToStart() {
    document.getElementById('parentDashboard').classList.add('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('adminLoginScreen').classList.add('hidden');
    document.getElementById('appScreen').classList.remove('hidden');
}

function renderParentData() {
    const sessions = data.sessions;
    document.getElementById('totalSessions').textContent = sessions.length;
    const totalStars = sessions.reduce((sum, s) => sum + s.stars, 0); document.getElementById('totalStarsParent').textContent = totalStars;
    let totalAttempts = 0, successAttempts = 0, totalIntra = 0, intraSuccess = 0, totalSeq = 0, seqSuccess = 0;
    sessions.forEach(s => {
        s.attempts.forEach(a => { totalAttempts++; if (a.result === 'success') successAttempts++; });
        (s.intraAttempts || []).forEach(a => { totalIntra++; if (a.result === 'success') intraSuccess++; });
        (s.seqAttempts || []).forEach(a => { totalSeq++; if (a.result === 'success') seqSuccess++; });
    });
    const rate = totalAttempts > 0 ? Math.round(successAttempts / totalAttempts * 100) : 0;
    document.getElementById('successRate').textContent = rate + '%';
    document.getElementById('totalWords').textContent = successAttempts;
    document.getElementById('totalIntra').textContent = intraSuccess;
    document.getElementById('totalSeq').textContent = seqSuccess;
    document.getElementById('sessionsTable').innerHTML = sessions.slice().reverse().map(s => `
        <tr><td>${s.date}</td><td style="font-weight:700;">${s.childName}</td><td>${s.duration} دقيقة</td><td><span style="background:rgba(251,191,36,0.2);padding:4px 12px;border-radius:8px;color:#fbbf24;font-weight:700;">⭐ ${s.stars}</span></td><td>${s.wordsCount || 0} كلمة</td><td>${(s.intraAttempts || []).length} محادثة</td><td>${(s.seqAttempts || []).length} تسلسل</td></tr>
    `).join('');
    const analysisDiv = document.getElementById('wordsAnalysis');
    if (sessions.length === 0) { analysisDiv.innerHTML = '<p style="color:#ffffffaa;text-align:center;">لا توجد بيانات بعد</p>'; document.getElementById('therapistNote').textContent = 'ابدأ جلسة جديدة ليظهر التحليل هنا.'; return; }
    const lastSession = sessions[sessions.length - 1]; const wordStats = {};
    lastSession.attempts.forEach(a => { if (!wordStats[a.word]) wordStats[a.word] = { attempts: 0, success: 0 }; wordStats[a.word].attempts++; if (a.result === 'success') wordStats[a.word].success++; });
    analysisDiv.innerHTML = Object.entries(wordStats).map(([word, stats]) => {
        const pct = Math.round(stats.success / stats.attempts * 100);
        let color = pct >= 80 ? '#34d399' : pct >= 50 ? '#fbbf24' : '#ff4757';
        return `<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;"><span style="font-weight:700;width:80px;color:white;">${word}</span><div style="flex:1;height:10px;background:rgba(255,255,255,0.2);border-radius:5px;overflow:hidden;"><div style="height:100%;width:${pct}%;background:${color};border-radius:5px;transition:width 0.5s;"></div></div><span style="color:#ffffffaa;font-size:13px;width:40px;">${pct}%</span></div>`;
    }).join('');
    const advancedDiv = document.getElementById('advancedAnalysis');
    const intraStats = lastSession.intraAttempts || []; const seqStats = lastSession.seqAttempts || []; const catStats = lastSession.catAttempts || [];
    let advancedHTML = '';
    if (intraStats.length > 0) { const intraRate = Math.round(intraStats.filter(a => a.result === 'success').length / intraStats.length * 100); advancedHTML += `<div style="margin-bottom:15px;"><div style="display:flex;justify-content:space-between;margin-bottom:5px;color:white;"><span>المحادثات الموجهة</span><span>${intraRate}%</span></div><div style="height:8px;background:rgba(255,255,255,0.2);border-radius:4px;overflow:hidden;"><div style="height:100%;width:${intraRate}%;background:#f472b6;border-radius:4px;"></div></div></div>`; }
    if (seqStats.length > 0) { const seqRate = Math.round(seqStats.filter(a => a.result === 'success').length / seqStats.length * 100); advancedHTML += `<div style="margin-bottom:15px;"><div style="display:flex;justify-content:space-between;margin-bottom:5px;color:white;"><span>التسلسلات</span><span>${seqRate}%</span></div><div style="height:8px;background:rgba(255,255,255,0.2);border-radius:4px;overflow:hidden;"><div style="height:100%;width:${seqRate}%;background:#a78bfa;border-radius:4px;"></div></div></div>`; }
    if (catStats.length > 0) { const catRate = Math.round(catStats.filter(a => a.result === 'success').length / catStats.length * 100); advancedHTML += `<div style="margin-bottom:15px;"><div style="display:flex;justify-content:space-between;margin-bottom:5px;color:white;"><span>التصنيفات</span><span>${catRate}%</span></div><div style="height:8px;background:rgba(255,255,255,0.2);border-radius:4px;overflow:hidden;"><div style="height:100%;width:${catRate}%;background:#60a5fa;border-radius:4px;"></div></div></div>`; }
    advancedDiv.innerHTML = advancedHTML || '<p style="color:#ffffffaa;text-align:center;">لا توجد بيانات متقدمة في آخر جلسة</p>';
    const weakWords = Object.entries(wordStats).filter(([w, s]) => s.success / s.attempts < 0.5).map(([w]) => w);
    if (weakWords.length > 0) document.getElementById('therapistNote').textContent = `الكلمات التي تحتاج تدريباً: ${weakWords.join('، ')}. نسبة النجاح العامة ${rate}%.`;
    else document.getElementById('therapistNote').textContent = `أداء ممتاز! نسبة النجاح ${rate}%. يمكن الانتقال لكلمات أكثر صعوبة.`;
}

// ==================== PWA SERVICE WORKER ====================
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(reg => {
        console.log('SW registered:', reg.scope);
    }).catch(err => {
        console.log('SW registration failed:', err);
    });
}

// ==================== INIT ====================
loadData();
const style = document.createElement('style'); style.textContent = `@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }`; document.head.appendChild(style);
window.addEventListener('wheel', (e) => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });

// Keyboard navigation for word cards
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close any open modals/panels
        document.getElementById('sessionEndModal').classList.add('hidden');
        document.getElementById('aiChatbotPanel').classList.add('hidden');
        document.getElementById('cameraAIPanel').classList.add('hidden');
        document.getElementById('recommendationsPanel').classList.add('hidden');
    }
});
