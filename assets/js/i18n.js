let translations = {};
let currentLang = 'en';

export async function initI18n() {
    const savedLang = localStorage.getItem('vvk_lang');
    if (savedLang) {
        currentLang = savedLang;
    }
    await loadTranslations(currentLang);
}

export async function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('vvk_lang', lang);
    await loadTranslations(lang);
    applyTranslations();
}

async function loadTranslations(lang) {
    try {
        const response = await fetch(`/assets/lang/${lang}.json`);
        translations = await response.json();
    } catch (error) {
        console.error('Failed to load translations:', error);
        if (lang !== 'en') {
            await loadTranslations('en'); // Fallback
        }
    }
}

export function translate(key) {
    const keys = key.split('.');
    let result = translations;
    for (const k of keys) {
        if (result[k] === undefined) return key; // return key if not found
        result = result[k];
    }
    return result;
}

export function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translate(key);
    });
    
    // Update placeholders if any
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', translate(key));
    });
}
