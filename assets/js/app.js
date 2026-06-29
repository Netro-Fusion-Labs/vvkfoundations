import { initRouter } from './router.js';
import { initI18n, setLanguage } from './i18n.js';
import { initAnimations } from './animations.js';
import { renderPage } from './pages.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialize i18n
    await initI18n();

    // 2. Setup Language Switcher
    const langSwitcher = document.getElementById('lang-switcher');
    const currentLang = localStorage.getItem('vvk_lang') || 'en';
    langSwitcher.value = currentLang;
    langSwitcher.addEventListener('change', async (e) => {
        await setLanguage(e.target.value);
        renderPage(window.location.pathname); // Re-render page content with new language
    });

    // 3. Initialize Router
    initRouter();

    // 4. Initial Render based on current path
    await renderPage(window.location.pathname);

    // 5. Hide Loader
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 500);
});
