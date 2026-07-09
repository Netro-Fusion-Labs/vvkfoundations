/**
 * VVK Foundation — i18n Engine
 * Loads JSON translation files, applies translations to DOM,
 * translates placeholders, aria-labels, and SEO metadata.
 */

let translations = {};
let currentLang = 'en';

/**
 * Initialize the i18n engine.
 * Reads saved language from localStorage and loads translations.
 */
export async function initI18n() {
    const savedLang = localStorage.getItem('vvk_lang');
    if (savedLang && ['en', 'kn', 'hi'].includes(savedLang)) {
        currentLang = savedLang;
    }
    await loadTranslations(currentLang);
}

/**
 * Switch to a new language.
 * @param {string} lang - Language code ('en', 'kn', 'hi')
 */
export async function setLanguage(lang) {
    if (!['en', 'kn', 'hi'].includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('vvk_lang', lang);
    await loadTranslations(lang);
    applyTranslations();

    // Update the document lang attribute
    document.documentElement.lang = lang === 'kn' ? 'kn' : lang === 'hi' ? 'hi' : 'en';
}

/**
 * Get current language code.
 * @returns {string}
 */
export function getCurrentLang() {
    return currentLang;
}

/**
 * Load translations from JSON file.
 * Falls back to English if the requested language fails.
 */
async function loadTranslations(lang) {
    try {
        const response = await fetch(`/assets/lang/${lang}.json?v=1.2.1`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        translations = await response.json();
    } catch (error) {
        console.error(`Failed to load translations for "${lang}":`, error);
        if (lang !== 'en') {
            await loadTranslations('en');
        }
    }
}

/**
 * Translate a dot-notation key.
 * Returns the key itself if no translation is found.
 * @param {string} key - Dot-notation key (e.g. 'nav.home')
 * @returns {string}
 */
export function translate(key) {
    if (!key) return '';
    const keys = key.split('.');
    let result = translations;
    for (const k of keys) {
        if (result === undefined || result === null || result[k] === undefined) {
            return key;
        }
        result = result[k];
    }
    return typeof result === 'string' ? result : key;
}

/**
 * Apply translations to all elements with data-i18n attributes.
 * Supports: textContent, placeholder, aria-label, title.
 */
export function applyTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = translate(key);
        if (value !== key) {
            el.textContent = value;
        }
    });

    // HTML content (for keys containing HTML markup)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const value = translate(key);
        if (value !== key) {
            el.innerHTML = value;
        }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = translate(key);
        if (value !== key) {
            el.setAttribute('placeholder', value);
        }
    });

    // ARIA labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        const value = translate(key);
        if (value !== key) {
            el.setAttribute('aria-label', value);
        }
    });

    // Title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        const value = translate(key);
        if (value !== key) {
            el.setAttribute('title', value);
        }
    });
}
