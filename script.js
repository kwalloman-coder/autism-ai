// ==================== DEFAULT DATA ====================
const DEFAULT_DATA = {
    words: [
        { id: 1, word: 'تفاحة', emoji: '🍎', category: 'food', difficulty: 'medium' },
        { id: 2, word: 'ماء', emoji: '💧', category: 'drink', difficulty: 'easy' },
        { id: 3, word: 'سيارة', emoji: '🚗', category: 'toy', difficulty: 'easy' },
        { id: 4, word: 'بسكويت', emoji: '🍪', category: 'food', difficulty: 'medium' },
        { id: 5, word: 'كتاب', emoji: '📖', category: 'object', difficulty: 'easy' },
        { id: 6, word: 'قطة', emoji: '🐱', category: 'animal', difficulty: 'easy' },
        { id: 7, word: 'كلب', emoji: '🐕', category: 'animal', difficulty: 'easy' },
        { id: 8, word: 'كرة', emoji: '⚽', category: 'toy', difficulty: 'easy' },
        { id: 9, word: 'موزة', emoji: '🍌', category: 'food', difficulty: 'medium' },
        { id: 10, word: 'حليب', emoji: '🥛', category: 'drink', difficulty: 'medium' },
        { id: 11, word: 'عصفور', emoji: '🐦', category: 'animal', difficulty: 'medium' },
        { id: 12, word: 'فراشة', emoji: '🦋', category: 'animal', difficulty: 'hard' }
    ],
    emotions: [
        { emoji: '😊', name: 'happy', text: 'سعيد' },
        { emoji: '😢', name: 'sad', text: 'حزين' },
        { emoji: '😠', name: 'angry', text: 'غاضب' },
        { emoji: '😲', name: 'surprised', text: 'متفاجئ' },
        { emoji: '😨', name: 'scared', text: 'خائف' },
        { emoji: '😴', name: 'tired', text: 'نعسان' }
    ],
    instructions: [
        { icon: '👃', text: 'المس أنفك' },
        { icon: '👂', text: 'المس أذنك' },
        { icon: '✋', text: 'ارفع يدك' },
        { icon: '👏', text: 'صفق مرتين' },
        { icon: '👀', text: 'اغمض عينيك' },
        { icon: '🦶', text: 'ارفع رجلك' },
        { icon: '🫳', text: 'المس الأرض' },
        { icon: '🫴', text: 'افتح يديك' }
    ],
    intraverbals: [
        { id: 1, question: 'ما اسمك؟', answer: 'اسمي', hint: 'قل: اسمي ...', category: 'introduction' },
        { id: 2, question: 'كيف حالك؟', answer: 'بخير', hint: 'قل: أنا بخير', category: 'feelings' },
        { id: 3, question: 'كم عمرك؟', answer: 'عمري', hint: 'قل: عمري ...', category: 'introduction' },
        { id: 4, question: 'ما لون السماء؟', answer: 'أزرق', hint: 'قل: السماء زرقاء', category: 'general' },
        { id: 5, question: 'بماذا نأكل؟', answer: 'فم', hint: 'قل: نأكل بفمنا', category: 'body' },
        { id: 6, question: 'أين ننام؟', answer: 'سرير', hint: 'قل: ننام في السرير', category: 'general' }
    ],
    sequences: [
        { id: 1, title: 'غسل اليدين', steps: ['🚰 افتح الماء', '🧼 خذ الصابون', '🤲 افرك يديك', '💧 اشطف يديك'] },
        { id: 2, title: 'ارتداء الملابس', steps: ['👕 القميص', '👖 البنطلون', '🧦 الجوارب', '👟 الحذاء'] },
        { id: 3, title: 'تحضير الطعام', steps: ['🍞 خذ الخبز', '🧈 ضع الزبدة', '🧀 ضع الجبن', '🥪 قدم السندويتش'] }
    ],
    categories: [
        { id: 1, name: 'حيوانات', items: ['🐱','🐕','🐦'], distractors: ['🍎','🚗','📖'] },
        { id: 2, name: 'طعام', items: ['🍎','🍌','🍪'], distractors: ['🐱','⚽','👃'] },
        { id: 3, name: 'ملابس', items: ['👕','👖','🧦'], distractors: ['🐕','🍎','📖'] }
    ],
    stories: [
        { id: 1, title: 'الذهاب إلى المدرسة', text: 'صباح الخير! أستيقظ مبكراً. ألبس ملابسي. أتناول إفطاري. أذهب إلى المدرسة بالحافلة. أرى أصدقائي. ألعب معهم. أتعلم دروسي. أعود إلى البيت سعيداً.', image: '' },
        { id: 2, title: 'زيارة الطبيب', text: 'أذهب مع أمي إلى العيادة. أنتظر دوري بهدوء. أدخل إلى غرفة الطبيب. أجلس على الكرسي. الطبيب يفحصني. أنا شجاع. أحصل على ملصق. أعود إلى البيت.', image: '' }
    ],
    schedule: [
        { id: 1, icon: '🛏️', text: 'الاستيقاظ', done: false },
        { id: 2, icon: '🪥', text: 'تنظيف الأسنان', done: false },
        { id: 3, icon: '🍳', text: 'الإفطار', done: false },
        { id: 4, icon: '📚', text: 'جلسة التدريب', done: false },
        { id: 5, icon: '🍎', text: 'الفطور الصحي', done: false },
        { id: 6, icon: '🎨', text: 'الرسم واللعب', done: false },
        { id: 7, icon: '🍽️', text: 'الغداء', done: false },
        { id: 8, icon: '😴', text: 'القيلولة', done: false }
    ],
    settings: { duration: 10, reward1: 5, reward2: 20, reward3: 50 },
    sessions: []
};

// ==================== STATE ====================
let data = JSON.parse(JSON.stringify(DEFAULT_DATA));
let state = {
    childName: '', duration: 10, stars: 0, sessionStars: 0, startTime: null, timerInterval: null,
    currentTab: 'words', wordMode: 'tact', selectedWord: null, isRecording: false,
    mediaRecorder: null, recordedChunks: [], currentEmotion: null,
    currentInstructionIndex: 0, currentIntraverbalIndex: 0, currentSequence: null,
    currentCategory: null, attempts: [], intraAttempts: [], seqAttempts: [], catAttempts: []
};

// ==================== STORAGE ====================
function loadData() {
    const saved = localStorage.getItem('aba_data');
    if (saved) {
        try { data = JSON.parse(saved); } catch(e) { console.error('Invalid data'); }
    }
    updateDataPreview();
}
function saveData() {
    localStorage.setItem('aba_data', JSON.stringify(data));
    updateDataPreview();
}
function updateDataPreview() {
    const el = document.getElementById('dataPreview');
    if (el) el.textContent = JSON.stringify(data, null, 2).substring(0, 800) + '...';
}
function exportData() {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'aba_data_' + new Date().toISOString().slice(0,10) + '.json';
    a.click(); URL.revokeObjectURL(url);
    showToast('✅ تم تصدير البيانات', 'success');
}
function importData(input) {
    const file = input.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            data = imported; saveData(); renderAdminLists();
            showToast('✅ تم استيراد البيانات', 'success');
        } catch(err) { showToast('❌ ملف غير صالح', 'error'); }
    };
    reader.readAsText(file);
}
function clearAllData() {
    if (!confirm('هل أنت متأكد من مسح جميع البيانات؟')) return;
    localStorage.removeItem('aba_data'); data = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveData(); renderAdminLists(); showToast('🗑️ تم مسح البيانات', 'success');
}
function loadDefaultData() {
    data = JSON.parse(JSON.stringify(DEFAULT_DATA)); saveData(); renderAdminLists();
    showToast('✅ تم استعادة البيانات الافتراضية', 'success');
}

// ==================== LANDING PAGE NAVIGATION ====================
function showApp() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('appScreen').classList.remove('hidden');
}
function showLanding() {
    document.getElementById('landingPage').classList.remove('hidden');
    document.getElementById('appScreen').classList.add('hidden');
    document.getElementById('mainScreen').classList.add('hidden');
    document.getElementById('parentDashboard').classList.add('hidden');
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('adminLoginScreen').classList.add('hidden');
    window.scrollTo(0, 0);
}
function toggleMobileNav() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.toggle('show');
}

// ==================== ADMIN LOGIN ====================
function showAdminLogin() {
    document.getElementById('appScreen').classList.add('hidden');
    document.getElementById('adminLoginScreen').classList.remove('hidden');
}
function checkAdminLogin() {
    const pass = document.getElementById('adminPassword').value;
    if (pass === '1234') {
        document.getElementById('adminLoginScreen').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        renderAdminLists(); updateDataPreview();
        document.getElementById('settingDuration').value = data.settings.duration;
        document.getElementById('settingReward1').value = data.settings.reward1;
        document.getElementById('settingReward2').value = data.settings.reward2;
        document.getElementById('settingReward3').value = data.settings.reward3;
    } else {
        showToast('❌ كلمة المرور خاطئة', 'error');
    }
}
function backToApp() {
    document.getElementById('adminDashboard').classList.add('hidden');
    document.getElementById('adminLoginScreen').classList.add('hidden');
    document.getElementById('appScreen').classList.remove('hidden');
}

// ==================== FIXED ADMIN TAB SWITCHING ====================
function switchAdminTab(tab, btn) {
    console.log('Switching to tab:', tab);

    // Hide all admin tabs
    document.querySelectorAll('.admin-tab').forEach(el => {
        el.classList.add('hidden');
    });

    // Show selected tab
    const selectedTab = document.getElementById('admin-' + tab);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
        console.log('Tab shown:', 'admin-' + tab);
    } else {
        console.error('Tab not found:', 'admin-' + tab);
    }

    // Update active button
    document.querySelectorAll('.admin-nav-btn').forEach(b => {
        b.classList.remove('active');
    });
    if (btn) btn.classList.add('active');
}

// ==================== ADMIN CRUD ====================
function addWord() {
    const text = document.getElementById('newWordText').value.trim();
    const emoji = document.getElementById('newWordEmoji').value.trim();
    const category = document.getElementById('newWordCategory').value;
    const difficulty = document.getElementById('newWordDifficulty').value;
    if (!text || !emoji) { showToast('❌ أدخل الكلمة والإيموجي', 'error'); return; }
    const id = Date.now();
    data.words.push({ id, word: text, emoji, category, difficulty });
    saveData(); renderAdminLists(); renderWords();
    document.getElementById('newWordText').value = ''; document.getElementById('newWordEmoji').value = '';
    showToast('✅ تمت الإضافة', 'success');
}
function deleteWord(id) {
    data.words = data.words.filter(w => w.id !== id); saveData(); renderAdminLists(); renderWords();
}
function addEmotion() {
    const emoji = document.getElementById('newEmotionEmoji').value.trim();
    const name = document.getElementById('newEmotionName').value.trim();
    const text = document.getElementById('newEmotionText').value.trim();
    if (!emoji || !name || !text) { showToast('❌ أدخل جميع الحقول', 'error'); return; }
    data.emotions.push({ emoji, name, text }); saveData(); renderAdminLists();
    document.getElementById('newEmotionEmoji').value = ''; document.getElementById('newEmotionName').value = ''; document.getElementById('newEmotionText').value = '';
    showToast('✅ تمت الإضافة', 'success');
}
function deleteEmotion(index) { data.emotions.splice(index, 1); saveData(); renderAdminLists(); }
function addInstruction() {
    const icon = document.getElementById('newInstIcon').value.trim();
    const text = document.getElementById('newInstText').value.trim();
    if (!icon || !text) { showToast('❌ أدخل جميع الحقول', 'error'); return; }
    data.instructions.push({ icon, text }); saveData(); renderAdminLists();
    document.getElementById('newInstIcon').value = ''; document.getElementById('newInstText').value = '';
    showToast('✅ تمت الإضافة', 'success');
}
function deleteInstruction(index) { data.instructions.splice(index, 1); saveData(); renderAdminLists(); }
function addIntraverbal() {
    const q = document.getElementById('newIntraQuestion').value.trim();
    const a = document.getElementById('newIntraAnswer').value.trim();
    const h = document.getElementById('newIntraHint').value.trim();
    if (!q || !a) { showToast('❌ أدخل السؤال والإجابة', 'error'); return; }
    data.intraverbals.push({ id: Date.now(), question: q, answer: a, hint: h || q, category: 'general' });
    saveData(); renderAdminLists();
    document.getElementById('newIntraQuestion').value = ''; document.getElementById('newIntraAnswer').value = ''; document.getElementById('newIntraHint').value = '';
    showToast('✅ تمت الإضافة', 'success');
}
function deleteIntraverbal(index) { data.intraverbals.splice(index, 1); saveData(); renderAdminLists(); }
function addSequence() {
    const title = document.getElementById('newSeqTitle').value.trim();
    const s1 = document.getElementById('newSeqStep1').value.trim();
    const s2 = document.getElementById('newSeqStep2').value.trim();
    const s3 = document.getElementById('newSeqStep3').value.trim();
    const s4 = document.getElementById('newSeqStep4').value.trim();
    if (!title || !s1 || !s2 || !s3) { showToast('❌ أدخل العنوان و3 خطوات على الأقل', 'error'); return; }
    const steps = [s1, s2, s3]; if (s4) steps.push(s4);
    data.sequences.push({ id: Date.now(), title, steps }); saveData(); renderAdminLists();
    document.getElementById('newSeqTitle').value = ''; document.getElementById('newSeqStep1').value = ''; document.getElementById('newSeqStep2').value = ''; document.getElementById('newSeqStep3').value = ''; document.getElementById('newSeqStep4').value = '';
    showToast('✅ تمت الإضافة', 'success');
}
function deleteSequence(index) { data.sequences.splice(index, 1); saveData(); renderAdminLists(); }
function addCategory() {
    const name = document.getElementById('newCatName').value.trim();
    const items = document.getElementById('newCatItems').value.trim().split(',').filter(x=>x);
    const distractors = document.getElementById('newCatDistractors').value.trim().split(',').filter(x=>x);
    if (!name || items.length < 2) { showToast('❌ أدخل اسم التصنيف وعنصرين على الأقل', 'error'); return; }
    data.categories.push({ id: Date.now(), name, items, distractors }); saveData(); renderAdminLists();
    document.getElementById('newCatName').value = ''; document.getElementById('newCatItems').value = ''; document.getElementById('newCatDistractors').value = '';
    showToast('✅ تمت الإضافة', 'success');
}
function deleteCategory(index) { data.categories.splice(index, 1); saveData(); renderAdminLists(); }
function addStory() {
    const title = document.getElementById('newStoryTitle').value.trim();
    const text = document.getElementById('newStoryText').value.trim();
    const image = document.getElementById('newStoryImage').value.trim();
    if (!title || !text) { showToast('❌ أدخل العنوان والنص', 'error'); return; }
    data.stories.push({ id: Date.now(), title, text, image }); saveData(); renderAdminLists();
    document.getElementById('newStoryTitle').value = ''; document.getElementById('newStoryText').value = ''; document.getElementById('newStoryImage').value = '';
    showToast('✅ تمت الإضافة', 'success');
}
function deleteStory(index) { data.stories.splice(index, 1); saveData(); renderAdminLists(); }
function saveSettings() {
    data.settings.duration = parseInt(document.getElementById('settingDuration').value) || 10;
    data.settings.reward1 = parseInt(document.getElementById('settingReward1').value) || 5;
    data.settings.reward2 = parseInt(document.getElementById('settingReward2').value) || 20;
    data.settings.reward3 = parseInt(document.getElementById('settingReward3').value) || 50;
    saveData(); showToast('✅ تم حفظ الإعدادات', 'success');
}

// ==================== RENDER ADMIN LISTS ====================
function renderAdminLists() {
    document.getElementById('wordsCount').textContent = data.words.length;
    document.getElementById('adminWordsList').innerHTML = data.words.map(w => `
        <div class="item-row">
            <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-size:1.5rem;">${w.emoji}</span>
                <span style="font-weight:700;">${w.word}</span>
                <span class="badge badge-${w.difficulty}">${w.difficulty === 'easy' ? 'سهل' : w.difficulty === 'medium' ? 'متوسط' : 'صعب'}</span>
            </div>
            <button class="btn btn-sm btn-danger" onclick="deleteWord(${w.id})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
    document.getElementById('adminEmotionsList').innerHTML = data.emotions.map((e,i) => `
        <div class="item-row"><div style="display:flex;align-items:center;gap:10px;"><span style="font-size:1.5rem;">${e.emoji}</span><span style="font-weight:700;">${e.text}</span></div><button class="btn btn-sm btn-danger" onclick="deleteEmotion(${i})"><i class="fas fa-trash"></i></button></div>
    `).join('');
    document.getElementById('adminInstructionsList').innerHTML = data.instructions.map((inst,i) => `
        <div class="item-row"><div style="display:flex;align-items:center;gap:10px;"><span style="font-size:1.5rem;">${inst.icon}</span><span style="font-weight:700;">${inst.text}</span></div><button class="btn btn-sm btn-danger" onclick="deleteInstruction(${i})"><i class="fas fa-trash"></i></button></div>
    `).join('');
    document.getElementById('adminIntraverbalsList').innerHTML = data.intraverbals.map((intra,i) => `
        <div class="item-row"><div style="text-align:right;"><div style="font-weight:700;">${intra.question}</div><div style="font-size:13px;color:#ffffffaa;">الإجابة: ${intra.answer}</div></div><button class="btn btn-sm btn-danger" onclick="deleteIntraverbal(${i})"><i class="fas fa-trash"></i></button></div>
    `).join('');
    document.getElementById('adminSequencesList').innerHTML = data.sequences.map((seq,i) => `
        <div class="item-row"><div style="text-align:right;"><div style="font-weight:700;">${seq.title}</div><div style="font-size:13px;color:#ffffffaa;">${seq.steps.length} خطوات</div></div><button class="btn btn-sm btn-danger" onclick="deleteSequence(${i})"><i class="fas fa-trash"></i></button></div>
    `).join('');
    document.getElementById('adminCategoriesList').innerHTML = data.categories.map((cat,i) => `
        <div class="item-row"><div style="text-align:right;"><div style="font-weight:700;">${cat.name}</div><div style="font-size:13px;color:#ffffffaa;">${cat.items.length} عناصر، ${cat.distractors.length} مشتتات</div></div><button class="btn btn-sm btn-danger" onclick="deleteCategory(${i})"><i class="fas fa-trash"></i></button></div>
    `).join('');
    document.getElementById('adminStoriesList').innerHTML = data.stories.map((story,i) => `
        <div class="item-row"><div style="text-align:right;"><div style="font-weight:700;">${story.title}</div><div style="font-size:13px;color:#ffffffaa;">${story.text.substring(0,50)}...</div></div><button class="btn btn-sm btn-danger" onclick="deleteStory(${i})"><i class="fas fa-trash"></i></button></div>
    `).join('');
}

// ==================== THEME ====================
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

// ==================== START SCREEN ====================
function setDuration(min, btn) {
    state.duration = min;
    document.querySelectorAll('#appScreen .mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function startSession() {
    const name = document.getElementById('childName').value.trim();
    if (!name) { showToast('الرجاء إدخال اسم الطفل', 'warning'); return; }
    state.childName = name; state.startTime = new Date(); state.attempts = []; state.intraAttempts = []; state.seqAttempts = []; state.catAttempts = []; state.sessionStars = 0;
    document.getElementById('displayChildName').textContent = name;
    document.getElementById('appScreen').classList.add('hidden');
    document.getElementById('mainScreen').classList.remove('hidden');
    renderWords(); renderEmotions(); renderSchedule(); startTimer();
    pickRandomEmotion(); renderInstruction(); renderIntraverbal(); renderSequence(); renderCategory(); renderStories();
    updateStarsDisplay();
}

function startTimer() {
    let seconds = state.duration * 60;
    updateTimerDisplay(seconds);
    state.timerInterval = setInterval(() => { seconds--; updateTimerDisplay(seconds); if (seconds <= 0) endSession(); }, 1000);
}
function updateTimerDisplay(seconds) { const m = Math.floor(seconds/60), s = seconds%60; document.getElementById('sessionTimer').textContent = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`; }
function endSession() {
    clearInterval(state.timerInterval);
    const session = { id: Date.now(), childName: state.childName, date: new Date().toLocaleString('ar-SA'), duration: state.duration, stars: state.sessionStars, attempts: state.attempts, intraAttempts: state.intraAttempts, seqAttempts: state.seqAttempts, catAttempts: state.catAttempts, wordsCount: state.attempts.length };
    data.sessions.push(session); saveData();
    document.getElementById('sessionStars').textContent = Math.floor(state.sessionStars);
    document.getElementById('sessionEndModal').classList.remove('hidden');
    createConfetti();
}

// ==================== NAVIGATION ====================
function switchTab(tab, btn) {
    state.currentTab = tab;
    document.querySelectorAll('[id^="panel-"]').forEach(el => el.classList.add('hidden'));
    document.getElementById('panel-' + tab).classList.remove('hidden');
    document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    if (tab === 'rewards') updateRewardsPanel();
    if (tab === 'sequences') renderSequence();
    if (tab === 'categories') renderCategory();
    if (tab === 'stories') renderStories();
    if (tab === 'schedule') renderSchedule();
}

// ==================== WORDS ====================
function setWordMode(mode, btn) {
    state.wordMode = mode;
    document.querySelectorAll('#panel-words .mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}
function renderWords() {
    const grid = document.getElementById('wordsGrid');
    grid.innerHTML = data.words.map(w => `
        <div onclick="selectWord(${w.id})" class="word-card" id="word-card-${w.id}">
            <span class="emoji">${w.emoji}</span><span class="word-text">${w.word}</span>
        </div>
    `).join('');
}
function selectWord(id) {
    const word = data.words.find(w => w.id === id); state.selectedWord = word;
    document.getElementById('targetWordEmoji').textContent = word.emoji;
    document.getElementById('targetWordText').textContent = word.word;
    document.getElementById('promptText').textContent = state.wordMode === 'tact' ? `قل: "${word.word}"` : `قل: "أريد ${word.word}"`;
    document.getElementById('recordingArea').classList.remove('hidden');
    document.getElementById('evaluationArea').classList.add('hidden');
    document.getElementById('recordingIndicator').classList.add('hidden');
    setTimeout(() => speakPrompt(), 300);
    document.getElementById('recordingArea').scrollIntoView({ behavior: 'smooth' });
}
function speakPrompt() {
    const text = state.wordMode === 'tact' ? `ما هذا؟ ${state.selectedWord.word}` : `أريد ${state.selectedWord.word}`;
    const utterance = new SpeechSynthesisUtterance(text); utterance.lang = 'ar-SA'; utterance.rate = 0.8; utterance.pitch = 1.1; speechSynthesis.speak(utterance);
}
async function toggleRecording() {
    if (!state.isRecording) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            state.mediaRecorder = new MediaRecorder(stream); state.recordedChunks = [];
            state.mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) state.recordedChunks.push(e.data); };
            state.mediaRecorder.onstop = () => {
                const blob = new Blob(state.recordedChunks, { type: 'audio/webm' });
                console.log('Recorded:', blob.size, 'bytes');
                if (state.currentTab === 'words') document.getElementById('evaluationArea').classList.remove('hidden');
                if (state.currentTab === 'intraverbals') document.getElementById('intraEvaluation').classList.remove('hidden');
            };
            state.mediaRecorder.start(); state.isRecording = true;
            document.getElementById('recordBtn').classList.add('recording');
            document.getElementById('recordingIndicator').classList.remove('hidden');
            if (state.currentTab === 'words') document.getElementById('evaluationArea').classList.add('hidden');
            if (state.currentTab === 'intraverbals') document.getElementById('intraEvaluation').classList.add('hidden');
            setTimeout(() => { if (state.isRecording) toggleRecording(); }, 5000);
        } catch (err) { showToast('لا يمكن الوصول للميكروفون', 'error'); }
    } else {
        state.mediaRecorder.stop(); state.mediaRecorder.stream.getTracks().forEach(t => t.stop());
        state.isRecording = false; document.getElementById('recordBtn').classList.remove('recording');
        document.getElementById('recordingIndicator').classList.add('hidden');
    }
}
function evaluateAttempt(result) {
    const word = state.selectedWord; const card = document.getElementById(`word-card-${word.id}`);
    card.classList.remove('success', 'partial', 'fail');
    if (result === 'success') { card.classList.add('success'); addStars(1); showToast('✅ أحسنت!', 'success'); }
    else if (result === 'partial') { card.classList.add('partial'); addStars(0.5); showToast('🤔 جيد، حاول مرة أخرى!', 'partial'); }
    else { card.classList.add('fail'); showToast('❌ لا بأس، سنحاول لاحقاً', 'fail'); }
    state.attempts.push({ wordId: word.id, word: word.word, result, timestamp: new Date().toISOString(), mode: state.wordMode });
    document.getElementById('evaluationArea').classList.add('hidden');
    const feedback = result === 'success' ? 'رائع!' : result === 'partial' ? 'جيد جداً' : 'حاول مرة أخرى';
    const utterance = new SpeechSynthesisUtterance(feedback); utterance.lang = 'ar-SA'; speechSynthesis.speak(utterance);
}

// ==================== EMOTIONS ====================
function renderEmotions() {
    const grid = document.getElementById('emotionGrid');
    grid.innerHTML = data.emotions.map(e => `<button class="emoji-btn" onclick="checkEmotion('${e.name}')">${e.emoji}</button>`).join('');
}
function pickRandomEmotion() { state.currentEmotion = data.emotions[Math.floor(Math.random() * data.emotions.length)]; document.getElementById('emotionImage').textContent = state.currentEmotion.emoji; document.getElementById('emotionFeedback').classList.add('hidden'); }
function checkEmotion(guess) {
    const feedback = document.getElementById('emotionFeedback');
    if (guess === state.currentEmotion.name) { feedback.textContent = '✅ صحيح! هذا طفل ' + state.currentEmotion.text; feedback.style.color = '#34d399'; addStars(1); createConfetti(); }
    else { feedback.textContent = '❌ حاول مرة أخرى، هذا طفل ' + state.currentEmotion.text; feedback.style.color = '#ff4757'; }
    feedback.classList.remove('hidden'); setTimeout(() => pickRandomEmotion(), 2500);
}
function logSelfEmotion(emotion) { const map = { happy: 'سعيد', sad: 'حزين', angry: 'غاضب', calm: 'هادئ' }; showToast(`أنت تشعر بال${map[emotion]} 👍`, 'success'); addStars(0.5); }

// ==================== INSTRUCTIONS ====================
function renderInstruction() { const inst = data.instructions[state.currentInstructionIndex]; document.getElementById('instructionIcon').textContent = inst.icon; document.getElementById('instructionText').textContent = inst.text; }
function nextInstruction() { state.currentInstructionIndex = (state.currentInstructionIndex + 1) % data.instructions.length; renderInstruction(); }
function markInstructionDone() { showToast('✅ أحسنت!', 'success'); addStars(1); nextInstruction(); }

// ==================== INTRAVERBALS ====================
function renderIntraverbal() {
    const intra = data.intraverbals[state.currentIntraverbalIndex];
    document.getElementById('intraQuestion').textContent = intra.question;
    document.getElementById('intraHint').textContent = intra.hint || intra.question;
    document.getElementById('intraExpected').textContent = intra.answer;
    document.getElementById('intraEvaluation').classList.add('hidden');
}
function speakIntraverbal() {
    const intra = data.intraverbals[state.currentIntraverbalIndex];
    const utterance = new SpeechSynthesisUtterance(intra.question); utterance.lang = 'ar-SA'; utterance.rate = 0.8; speechSynthesis.speak(utterance);
}
function nextIntraverbal() { state.currentIntraverbalIndex = (state.currentIntraverbalIndex + 1) % data.intraverbals.length; renderIntraverbal(); }
function evaluateIntraverbal(result) {
    const intra = data.intraverbals[state.currentIntraverbalIndex];
    if (result === 'success') { addStars(1); showToast('✅ إجابة رائعة!', 'success'); }
    else if (result === 'partial') { addStars(0.5); showToast('🤔 قريب!', 'partial'); }
    else { showToast('❌ حاول مرة أخرى', 'fail'); }
    state.intraAttempts.push({ id: intra.id, question: intra.question, result, timestamp: new Date().toISOString() });
    document.getElementById('intraEvaluation').classList.add('hidden');
    setTimeout(() => nextIntraverbal(), 1500);
}

// ==================== SEQUENCES ====================
function renderSequence() {
    if (data.sequences.length === 0) return;
    const seq = data.sequences[Math.floor(Math.random() * data.sequences.length)];
    state.currentSequence = { ...seq, userOrder: [] };
    document.getElementById('sequenceTitle').textContent = 'رتب خطوات: ' + seq.title;
    const shuffled = [...seq.steps].sort(() => Math.random() - 0.5);
    document.getElementById('sequenceSlots').innerHTML = seq.steps.map((_, i) => `
        <div class="sequence-slot" id="seq-slot-${i}" onclick="checkSequenceSlot(${i})">
            <span style="color:#ffffff66;font-size:1.5rem;">${i+1}</span>
        </div>
    `).join('');
    document.getElementById('sequenceOptions').innerHTML = shuffled.map((step, i) => `
        <button class="word-card" onclick="selectSequenceStep('${step.replace(/'/g, "\'")}')" style="min-width:120px;" id="seq-opt-${i}">
            <span style="font-size:2rem;display:block;margin-bottom:5px;">${step.split(' ')[0]}</span>
            <span style="font-size:0.9rem;">${step.split(' ').slice(1).join(' ')}</span>
        </button>
    `).join('');
    document.getElementById('sequenceFeedback').classList.add('hidden');
}
function selectSequenceStep(step) {
    if (!state.currentSequence) return;
    const nextIndex = state.currentSequence.userOrder.length;
    if (state.currentSequence.steps[nextIndex] === step) {
        state.currentSequence.userOrder.push(step);
        const slot = document.getElementById(`seq-slot-${nextIndex}`);
        slot.innerHTML = `<span style="font-size:2rem;">${step.split(' ')[0]}</span>`;
        slot.classList.add('filled');
        const opts = document.querySelectorAll('#sequenceOptions .word-card');
        opts.forEach(opt => { if (opt.textContent.includes(step.split(' ').slice(1).join(' '))) opt.style.visibility = 'hidden'; });
        if (state.currentSequence.userOrder.length === state.currentSequence.steps.length) {
            document.getElementById('sequenceFeedback').textContent = '✅ رائع! رتبت الخطوات بشكل صحيح!';
            document.getElementById('sequenceFeedback').style.color = '#34d399';
            document.getElementById('sequenceFeedback').classList.remove('hidden');
            addStars(2); createConfetti();
            state.seqAttempts.push({ id: state.currentSequence.id, title: state.currentSequence.title, result: 'success', timestamp: new Date().toISOString() });
            setTimeout(() => renderSequence(), 2500);
        }
    } else {
        document.getElementById('sequenceFeedback').textContent = '❌ هذه الخطوة ليست بالترتيب الصحيح، حاول مرة أخرى';
        document.getElementById('sequenceFeedback').style.color = '#ff4757';
        document.getElementById('sequenceFeedback').classList.remove('hidden');
    }
}
function checkSequenceSlot(index) {}

// ==================== CATEGORIES ====================
function renderCategory() {
    if (data.categories.length === 0) return;
    const cat = data.categories[Math.floor(Math.random() * data.categories.length)];
    state.currentCategory = cat;
    document.getElementById('categoryTitle').textContent = 'أي من هذه ' + cat.name + '؟';
    const allItems = [...cat.items, ...cat.distractors].sort(() => Math.random() - 0.5);
    document.getElementById('categoryItems').innerHTML = allItems.map(item => `
        <button class="emoji-btn" onclick="checkCategoryItem('${item}')" style="font-size:3rem;padding:20px;">${item}</button>
    `).join('');
    document.getElementById('categoryFeedback').classList.add('hidden');
}
function checkCategoryItem(item) {
    if (!state.currentCategory) return;
    const isCorrect = state.currentCategory.items.includes(item);
    const feedback = document.getElementById('categoryFeedback');
    if (isCorrect) {
        feedback.textContent = '✅ صحيح! هذا من ' + state.currentCategory.name;
        feedback.style.color = '#34d399'; addStars(1); createConfetti();
        state.catAttempts.push({ id: state.currentCategory.id, name: state.currentCategory.name, item, result: 'success', timestamp: new Date().toISOString() });
    } else {
        feedback.textContent = '❌ حاول مرة أخرى، هذا ليس من ' + state.currentCategory.name;
        feedback.style.color = '#ff4757';
        state.catAttempts.push({ id: state.currentCategory.id, name: state.currentCategory.name, item, result: 'fail', timestamp: new Date().toISOString() });
    }
    feedback.classList.remove('hidden');
    setTimeout(() => renderCategory(), 2500);
}

// ==================== STORIES ====================
function renderStories() {
    if (data.stories.length === 0) return;
    const story = data.stories[Math.floor(Math.random() * data.stories.length)];
    document.getElementById('storiesContainer').innerHTML = `
        <div class="story-card">
            <h3 style="font-size:1.5rem;font-weight:800;color:var(--accent);margin-bottom:15px;font-family:'Tajawal',sans-serif;">${story.title}</h3>
            ${story.image ? `<img src="${story.image}" alt="${story.title}">` : ''}
            <p>${story.text}</p>
            <button class="btn btn-play btn-sm" onclick="readStory()" style="margin-top:15px;"><i class="fas fa-volume-up"></i> اقرأ لي القصة</button>
        </div>
    `;
}
function readStory() {
    const story = data.stories[Math.floor(Math.random() * data.stories.length)];
    const utterance = new SpeechSynthesisUtterance(story.text); utterance.lang = 'ar-SA'; utterance.rate = 0.75; speechSynthesis.speak(utterance);
    addStars(1);
}

// ==================== SCHEDULE ====================
function renderSchedule() {
    const container = document.getElementById('scheduleContainer');
    container.innerHTML = data.schedule.map((item, i) => `
        <div class="schedule-item ${item.done ? 'done' : ''}" id="schedule-item-${i}">
            <div class="schedule-icon">${item.icon}</div>
            <div class="schedule-text">${item.text}</div>
            <div class="schedule-check ${item.done ? 'checked' : ''}" onclick="toggleScheduleItem(${i})">
                ${item.done ? '<i class="fas fa-check"></i>' : ''}
            </div>
        </div>
    `).join('');
    const allDone = data.schedule.every(item => item.done);
    document.getElementById('scheduleComplete').classList.toggle('hidden', !allDone);
    if (allDone) { addStars(3); createConfetti(); }
}
function toggleScheduleItem(index) {
    data.schedule[index].done = !data.schedule[index].done;
    saveData(); renderSchedule();
    if (data.schedule[index].done) { showToast('✅ ' + data.schedule[index].text + ' تم!', 'success'); addStars(0.5); }
}

// ==================== STARS & REWARDS ====================
function addStars(count) {
    state.stars += count; state.sessionStars += count; updateStarsDisplay();
    const star = document.createElement('div'); star.className = 'floating-star'; star.style.left = Math.random() * 80 + 10 + '%'; star.style.top = '50%'; star.textContent = '⭐'; document.body.appendChild(star); setTimeout(() => star.remove(), 1500);
    const s = Math.floor(state.sessionStars);
    if (s === data.settings.reward1) showToast('🎯 رائع! ' + data.settings.reward1 + ' نجوم', 'success');
    if (s === data.settings.reward2) { showToast('🏆 بطل اليوم!', 'success'); createConfetti(); }
    if (s === data.settings.reward3) { showToast('🎁 مفاجأة كبيرة!', 'success'); createConfetti(); }
}
function updateStarsDisplay() { document.getElementById('starCount').textContent = Math.floor(state.sessionStars); document.getElementById('totalStars').textContent = Math.floor(state.stars); }
function updateRewardsPanel() {
    const s = Math.floor(state.sessionStars);
    document.getElementById('progress5').style.width = Math.min(s / data.settings.reward1 * 100, 100) + '%';
    document.getElementById('progress20').style.width = Math.min(s / data.settings.reward2 * 100, 100) + '%';
    document.getElementById('progress50').style.width = Math.min(s / data.settings.reward3 * 100, 100) + '%';
}
function createConfetti() {
    const colors = ['#f87171', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6'];
    for (let i = 0; i < 30; i++) { const conf = document.createElement('div'); conf.className = 'confetti'; conf.style.left = Math.random() * 100 + '%'; conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; conf.style.animationDelay = Math.random() * 2 + 's'; conf.style.borderRadius = Math.random() > 0.5 ? '50%' : '0'; document.body.appendChild(conf); setTimeout(() => conf.remove(), 3000); }
}
function showToast(text, type) {
    const existing = document.querySelector('.feedback-toast'); if (existing) existing.remove();
    const div = document.createElement('div'); div.className = 'feedback-toast'; div.textContent = text;
    if (type === 'success') div.style.borderBottom = '4px solid #10b981'; if (type === 'partial') div.style.borderBottom = '4px solid #f59e0b'; if (type === 'fail') div.style.borderBottom = '4px solid #ef4444'; if (type === 'error') div.style.borderBottom = '4px solid #ef4444'; if (type === 'warning') div.style.borderBottom = '4px solid #f59e0b';
    document.body.appendChild(div); setTimeout(() => div.remove(), 2000);
}

// ==================== PARENT DASHBOARD ====================
function showParentDashboard() {
    document.getElementById('appScreen').classList.add('hidden');
    document.getElementById('mainScreen').classList.add('hidden');
    document.getElementById('parentDashboard').classList.remove('hidden');
    document.getElementById('sessionEndModal').classList.add('hidden');
    renderParentData();
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

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('sessionEndModal').classList.add('hidden');
    }
});

// Console log for debugging
console.log('Autism AI App loaded successfully');
console.log('Admin tabs:', document.querySelectorAll('.admin-tab').length);
console.log('Admin nav buttons:', document.querySelectorAll('.admin-nav-btn').length);
