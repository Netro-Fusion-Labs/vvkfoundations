/**
 * VVK Foundation — Mobile Menu Module
 * Accessible slide-out navigation drawer with overlay,
 * focus trap, and body scroll lock.
 */

let isOpen = false;

/**
 * Initialize the mobile menu.
 * Sets up hamburger toggle, overlay dismiss, and link clicks.
 */
export function initMobileMenu() {
    const hamburger = document.querySelector('.mobile-menu-btn');
    const drawer = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');

    if (!hamburger || !drawer || !overlay) return;

    // Toggle on hamburger click
    hamburger.addEventListener('click', () => {
        isOpen ? close(hamburger, drawer, overlay) : open(hamburger, drawer, overlay);
    });

    // Close on overlay click
    overlay.addEventListener('click', () => {
        close(hamburger, drawer, overlay);
    });

    // Close on nav link click
    drawer.querySelectorAll('a[data-route]').forEach(link => {
        link.addEventListener('click', () => {
            close(hamburger, drawer, overlay);
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
            close(hamburger, drawer, overlay);
        }
    });

    // Close on resize if desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024 && isOpen) {
            close(hamburger, drawer, overlay);
        }
    });
}

/**
 * Update the active state of mobile nav links.
 * @param {string} path - Current route path
 */
export function updateMobileNavActive(path) {
    const drawer = document.querySelector('.mobile-nav');
    if (!drawer) return;

    drawer.querySelectorAll('a[data-route]').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function open(hamburger, drawer, overlay) {
    isOpen = true;
    hamburger.classList.add('active');
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    hamburger.setAttribute('aria-expanded', 'true');

    // Focus the first link in the drawer
    const firstLink = drawer.querySelector('a');
    if (firstLink) firstLink.focus();
}

function close(hamburger, drawer, overlay) {
    isOpen = false;
    hamburger.classList.remove('active');
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    hamburger.setAttribute('aria-expanded', 'false');
}
