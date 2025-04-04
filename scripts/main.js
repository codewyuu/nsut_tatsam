// Language translations
const translations = {
    en: {
        welcome: 'Welcome to Tatsam',
        description: 'A community dedicated to promoting and preserving Hindi literature',
        upcomingEvents: 'Upcoming Events',
        kavyaSandhya: 'Kavya Sandhya',
        kavyaDescription: 'An evening of poetry and musical performances',
        learnMore: 'Learn More'
    },
    hi: {
        welcome: 'तत्सम में आपका स्वागत है',
        description: 'हिंदी साहित्य को बढ़ावा देने और संरक्षित करने के लिए समर्पित एक समुदाय',
        upcomingEvents: 'आगामी कार्यक्रम',
        kavyaSandhya: 'काव्य संध्या',
        kavyaDescription: 'कविता और संगीत प्रस्तुतियों की एक शाम',
        learnMore: 'और जानें'
    }
};

// Current language
let currentLang = 'en';

// Function to toggle language
function toggleLanguage(lang) {
    if (lang === currentLang) return;
    
    currentLang = lang;
    updateContent();
    updateButtons();
}

// Update content based on selected language
function updateContent() {
    // Update hero section
    document.querySelector('.hero h1').textContent = translations[currentLang].welcome;
    document.querySelector('.hero p').textContent = translations[currentLang].description;
    
    // Update events section
    document.querySelector('.featured-events h2').textContent = translations[currentLang].upcomingEvents;
    document.querySelector('.event-card h3').textContent = translations[currentLang].kavyaSandhya;
    document.querySelector('.event-card p').textContent = translations[currentLang].kavyaDescription;
    document.querySelector('.event-card .btn').textContent = translations[currentLang].learnMore;
}

// Update language toggle buttons
function updateButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.onclick.toString().includes(currentLang));
    });
}