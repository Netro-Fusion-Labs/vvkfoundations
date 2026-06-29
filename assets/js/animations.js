export function initAnimations() {
    setupIntersectionObserver();
    setupMagneticButtons();
    setupNavbarScroll();
}

export function reinitAnimations() {
    // Called after a route change and page render
    setTimeout(() => {
        setupIntersectionObserver();
        setupMagneticButtons();
    }, 100);
}

function setupIntersectionObserver() {
    const reveals = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Run once
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        
        reveals.forEach(el => observer.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('active'));
    }
}

function setupMagneticButtons() {
    const magnets = document.querySelectorAll('.magnetic');
    
    magnets.forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const h = rect.width / 2;
            const v = rect.height / 2;
            const x = e.clientX - rect.left - h;
            const y = e.clientY - rect.top - v;
            
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
        });
    });
}

function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0';
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        } else {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.boxShadow = 'none';
        }
    });
}
