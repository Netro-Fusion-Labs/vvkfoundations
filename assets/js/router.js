import { renderPage } from './pages.js';

export function initRouter() {
    // Intercept clicks on links
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-route]')) {
            e.preventDefault();
            navigateTo(e.target.getAttribute('href'));
        } else if (e.target.closest('[data-route]')) {
            e.preventDefault();
            navigateTo(e.target.closest('[data-route]').getAttribute('href'));
        }
    });

    // Handle back/forward buttons
    window.addEventListener('popstate', () => {
        renderPage(window.location.pathname);
        updateNavLinks(window.location.pathname);
    });
}

export const navigateTo = url => {
    if(window.location.pathname === url) return;
    
    // Smooth scroll to top before transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    history.pushState(null, null, url);
    renderPage(url);
    updateNavLinks(url);
};

export const updateNavLinks = (path) => {
    document.querySelectorAll('.nav-links a').forEach(link => {
        if(link.getAttribute('href') === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};
