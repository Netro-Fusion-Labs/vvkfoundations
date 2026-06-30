/**
 * VVK Foundation — SPA Router
 * History API-based routing with scroll restoration,
 * page transitions, focus management, and ARIA announcements.
 */

import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderFounder } from './pages/founder.js';
import { renderInitiatives } from './pages/initiatives.js';
import { renderGallery, initGalleryFilters } from './pages/gallery.js';
import { renderContact, initContactForm } from './pages/contact.js';
import { renderReports } from './pages/reports.js';
import { renderNews } from './pages/news.js';
import { renderVolunteer, initVolunteerForm } from './pages/volunteer.js';
import { renderFaq, initFaqAccordion } from './pages/faq.js';
import { renderPrivacy } from './pages/privacy.js';
import { renderTerms } from './pages/terms.js';
import { renderNotFound } from './pages/notfound.js';

import { applyTranslations } from './i18n.js';
import { reinitAnimations } from './animations.js';
import { updateSEO } from './seo.js';
import { bindGalleryItems } from './lightbox.js';
import { updateMobileNavActive } from './mobile-menu.js';

/** Route → render function map */
const routes = {
    '/':            renderHome,
    '/about':       renderAbout,
    '/founder':     renderFounder,
    '/initiatives': renderInitiatives,
    '/gallery':     renderGallery,
    '/contact':     renderContact,
    '/reports':     renderReports,
    '/news':        renderNews,
    '/volunteer':   renderVolunteer,
    '/faq':         renderFaq,
    '/privacy':     renderPrivacy,
    '/terms':       renderTerms
};

/** Post-render hooks per route */
const postRenderHooks = {
    '/gallery':   [initGalleryFilters],
    '/contact':   [initContactForm],
    '/volunteer': [initVolunteerForm],
    '/faq':       [initFaqAccordion]
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

    currentPath = path;

    // Determine the render function
    const renderFn = routes[path] || renderNotFound;
    const isNotFound = !routes[path];

    // Page transition: fade out
    mainEl.classList.add('fade-out');

    setTimeout(() => {
        // Inject new content
        mainEl.innerHTML = renderFn();

        // Scroll to top
        window.scrollTo(0, 0);

        // Apply i18n
        applyTranslations();

        // Update SEO
        updateSEO(isNotFound ? '/404' : path);

        // Update nav active states
        updateDesktopNavActive(path);
        updateMobileNavActive(path);

        // Re-initialize animations (reveals, counters, magnetics)
        reinitAnimations();

        // Bind lightbox items
        bindGalleryItems();

        // Run post-render hooks
        if (postRenderHooks[path]) {
            postRenderHooks[path].forEach(hook => hook());
        }

        // Fade in
        mainEl.classList.remove('fade-out');

        // Focus management for accessibility (screen readers)
        mainEl.focus({ preventScroll: true });

        // ARIA live announcement
        announcePageChange(path);

    }, 250);
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
