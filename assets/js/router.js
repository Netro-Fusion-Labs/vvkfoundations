/**
 * VVK Foundation — SPA Router
 * History API-based routing with scroll restoration,
 * page transitions, focus management, and ARIA announcements.
 */

import { renderHome } from './pages/home.js?v=1.2.1';
import { renderAbout } from './pages/about.js?v=1.2.1';
import { renderFounder } from './pages/founder.js?v=1.2.1';
import { renderInitiatives } from './pages/initiatives.js?v=1.2.1';
import { renderGallery, initGalleryFilters } from './pages/gallery.js?v=1.2.1';
import { renderContact, initContactForm } from './pages/contact.js?v=1.2.1';
import { renderReports } from './pages/reports.js?v=1.2.1';
import { renderNews } from './pages/news.js?v=1.2.1';
import { renderVolunteer, initVolunteerForm } from './pages/volunteer.js?v=1.2.1';
import { renderFaq, initFaqAccordion } from './pages/faq.js?v=1.2.1';
import { renderPrivacy } from './pages/privacy.js?v=1.2.1';
import { renderTerms } from './pages/terms.js?v=1.2.1';
import { renderJoin, initJoinForm } from './pages/join.js?v=1.2.1';
import { renderFarmerAward, initFarmerAwardForm } from './pages/farmer-award.js?v=1.2.1';
import { renderNotFound } from './pages/notfound.js?v=1.2.1';

import { applyTranslations } from './i18n.js?v=1.2.1';
import { reinitAnimations } from './animations.js?v=1.2.1';
import { updateSEO } from './seo.js?v=1.2.1';
import { bindGalleryItems } from './lightbox.js?v=1.2.1';
import { updateMobileNavActive } from './mobile-menu.js?v=1.2.1';

/** Route → render function map */
const routes = {
    '/': renderHome,
    '/about': renderAbout,
    '/founder': renderFounder,
    '/initiatives': renderInitiatives,
    '/gallery': renderGallery,
    '/contact': renderContact,
    '/reports': renderReports,
    '/news': renderNews,
    '/volunteer': renderVolunteer,
    '/faq': renderFaq,
    '/privacy': renderPrivacy,
    '/terms': renderTerms,
    '/join': renderJoin,
    '/farmer-award': renderFarmerAward
};

/** Post-render hooks per route */
const postRenderHooks = {
    '/gallery': [initGalleryFilters],
    '/contact': [initContactForm],
    '/volunteer': [initVolunteerForm],
    '/faq': [initFaqAccordion],
    '/join': [initJoinForm],
    '/farmer-award': [initFarmerAwardForm]
};

let currentPath = null;

/**
 * Initialize the router.
 * Sets up click delegation, popstate, and renders the initial route.
 */
export function initRouter() {
    // Intercept navigation clicks (delegated)
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[data-route]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;

        e.preventDefault();
        navigateTo(href);
    });

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
        renderPage(location.pathname);
    });

    // Render the initial page
    renderPage(location.pathname);
}

/**
 * Programmatically navigate to a path.
 * @param {string} path
 */
export function navigateTo(path) {
    if (path === currentPath) return;
    history.pushState(null, '', path);
    renderPage(path);
}

/**
 * Render the page for the given path.
 * Handles transitions, scroll, SEO, i18n, animations, and focus.
 * @param {string} path
 */
function renderPage(path) {
    const mainEl = document.getElementById('main-content');
    if (!mainEl) return;

    // Normalize path (strip .html, hash, query params, trailing slashes)
    let normalizedPath = path.split('?')[0].split('#')[0];
    if (normalizedPath.endsWith('.html')) {
        normalizedPath = normalizedPath.replace(/\.html$/, '');
    }
    if (normalizedPath.length > 1 && normalizedPath.endsWith('/')) {
        normalizedPath = normalizedPath.slice(0, -1);
    }
    if (!normalizedPath) normalizedPath = '/';

    currentPath = normalizedPath;

    // Determine the render function
    const renderFn = routes[normalizedPath] || renderNotFound;
    const isNotFound = !routes[normalizedPath];

    // Synchronously render content first
    try {
        mainEl.innerHTML = renderFn();
    } catch (err) {
        console.error('Error rendering route:', err);
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Fade transition cleanup
    mainEl.classList.remove('fade-out');
    mainEl.style.opacity = '1';

    try {
        // Apply i18n
        applyTranslations();
    } catch (e) {}

    try {
        // Update SEO
        updateSEO(isNotFound ? '/404' : path);
    } catch (e) {}

    try {
        // Update nav active states
        updateDesktopNavActive(path);
        updateMobileNavActive(path);
    } catch (e) {}

    try {
        // Re-initialize animations (reveals, counters, magnetics)
        reinitAnimations();
    } catch (e) {}

    try {
        // Bind lightbox items
        bindGalleryItems();
    } catch (e) {}

    try {
        // Run post-render hooks
        if (postRenderHooks[normalizedPath]) {
            postRenderHooks[normalizedPath].forEach(hook => hook());
        }
    } catch (e) {}

    // Focus management for accessibility
    try { mainEl.focus({ preventScroll: true }); } catch (e) {}
    try { announcePageChange(normalizedPath); } catch (e) {}
}

/**
 * Update active state on desktop nav links.
 * @param {string} path
 */
function updateDesktopNavActive(path) {
    document.querySelectorAll('.nav-links a[data-route]').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Announce page change to screen readers via ARIA live region.
 * @param {string} path
 */
function announcePageChange(path) {
    let announcer = document.getElementById('aria-announcer');
    if (!announcer) {
        announcer = document.createElement('div');
        announcer.id = 'aria-announcer';
        announcer.setAttribute('role', 'status');
        announcer.setAttribute('aria-live', 'polite');
        announcer.className = 'sr-only';
        document.body.appendChild(announcer);
    }

    const pageName = path === '/' ? 'Home' : path.substring(1).replace(/-/g, ' ');
    announcer.textContent = `Navigated to ${pageName} page`;
}
