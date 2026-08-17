/**
 * VVK Foundation — Animations Engine
 * Scroll reveals via IntersectionObserver, magnetic buttons,
 * navbar scroll effect, animated counters, and scroll progress.
 */

/**
 * Initialize all animations on page load.
 */
export function initAnimations() {
    setupNavbarScroll();
    setupScrollProgress();
    setupBackToTop();
    reinitAnimations();
}

/**
 * Re-initialize animations after a route change.
 * Deferred slightly to allow DOM to settle.
 */
export function reinitAnimations() {
    requestAnimationFrame(() => {
        setupIntersectionObserver();
        setupMagneticButtons();
        setupCounters();
    });
}

/* ── Intersection Observer for Scroll Reveals ────────────── */
function setupIntersectionObserver() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length === 0) return;

    // Immediately reveal elements near or in the viewport
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 150) {
            el.classList.add('active');
        }
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px 50px 0px'
        });

        reveals.forEach(el => {
            if (!el.classList.contains('active')) {
                observer.observe(el);
            }
        });
    } else {
        // Fallback: show everything immediately
        reveals.forEach(el => el.classList.add('active'));
    }

    // Safety fallback: reveal all elements after 250ms
    setTimeout(() => {
        document.querySelectorAll('.reveal:not(.active)').forEach(el => el.classList.add('active'));
    }, 250);
}

/* ── Magnetic Button Hover Effect ────────────────────────── */
function setupMagneticButtons() {
    const magnets = document.querySelectorAll('.magnetic');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    magnets.forEach(btn => {
        // Avoid duplicate listeners
        if (btn.dataset.magneticInit) return;
        btn.dataset.magneticInit = 'true';

        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

/* ── Navbar Scroll State ─────────────────────────────────── */
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let ticking = false;

    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 60) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Set initial state
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    }
}

/* ── Scroll Progress Bar ─────────────────────────────────── */
function setupScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                progressBar.style.width = `${progress}%`;
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ── Back to Top Button ──────────────────────────────────── */
function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 500) {
                    btn.classList.add('visible');
                } else {
                    btn.classList.remove('visible');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ── Animated Counters ───────────────────────────────────── */
function setupCounters() {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        counters.forEach(counter => {
            counter.textContent = '0';
            observer.observe(counter);
        });
    } else {
        counters.forEach(counter => {
            counter.textContent = counter.dataset.target || '0';
        });
    }
}

/**
 * Animate a single counter from 0 to its target value.
 */
function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out curve for natural deceleration
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(eased * target);

        el.textContent = currentValue.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target.toLocaleString();
        }
    }

    requestAnimationFrame(update);
}
