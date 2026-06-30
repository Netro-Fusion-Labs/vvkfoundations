/**
 * VVK Foundation — Main Application Entry
 * Bootstraps the application, handles preloader,
 * initializes i18n, router, and core UI modules.
 */

import { initI18n, getCurrentLang, setLanguage } from './i18n.js';
import { initRouter } from './router.js';
import { initAnimations } from './animations.js';
import { initLightbox } from './lightbox.js';
import { initMobileMenu } from './mobile-menu.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialize i18n first so initial render has translations
    await initI18n();

    // 2. Setup language switchers
    setupLanguageSwitchers();

    // 3. Initialize core UI components
    initLightbox();
    initMobileMenu();
    initAnimations();

    // 4. Initialize router (will trigger first render)
    initRouter();

    // 5. Hide preloader after everything is ready
    hidePreloader();
});

function hidePreloader() {
    const loader = document.getElementById('loader');
    if (loader) {
        // Ensure minimum display time for branding
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.style.display = 'none', 800);
        }, 500);
    }
}

function setupLanguageSwitchers() {
    const currentLang = getCurrentLang();
    const switchers = document.querySelectorAll('.lang-switcher');

    switchers.forEach(select => {
        select.value = currentLang;
        select.addEventListener('change', async (e) => {
            const lang = e.target.value;
            await setLanguage(lang);

            // Sync other select elements
            switchers.forEach(s => {
                if (s !== select) s.value = lang;
            });
        });
    });
}
