/**
 * VVK Foundation — Lightbox Module
 * Full-screen image viewer with keyboard navigation,
 * touch/swipe support, and counter display.
 */

let lightboxEl = null;
let images = [];
let currentIndex = 0;

/**
 * Initialize the lightbox DOM structure.
 * Called once on app boot.
 */
export function initLightbox() {
    if (document.getElementById('lightbox')) return;

    const html = `
        <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
            <button class="lightbox__close" aria-label="Close image viewer"><i class="fas fa-times"></i></button>
            <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous image"><i class="fas fa-chevron-left"></i></button>
            <button class="lightbox__nav lightbox__nav--next" aria-label="Next image"><i class="fas fa-chevron-right"></i></button>
            <img class="lightbox__img" src="" alt="" loading="lazy">
            <div class="lightbox__counter"></div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', html);
    lightboxEl = document.getElementById('lightbox');

    // Event listeners
    lightboxEl.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
    lightboxEl.querySelector('.lightbox__nav--prev').addEventListener('click', showPrev);
    lightboxEl.querySelector('.lightbox__nav--next').addEventListener('click', showNext);

    // Close on backdrop click
    lightboxEl.addEventListener('click', (e) => {
        if (e.target === lightboxEl) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeydown);

    // Touch/swipe support
    let touchStartX = 0;
    lightboxEl.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxEl.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 60) {
            if (diff > 0) showNext();
            else showPrev();
        }
    }, { passive: true });
}

/**
 * Bind lightbox to all gallery items currently in the DOM.
 * Called after each page render.
 */
export function bindGalleryItems() {
    document.querySelectorAll('[data-lightbox]').forEach(item => {
        if (item.dataset.lightboxBound) return;
        item.dataset.lightboxBound = 'true';

        item.addEventListener('click', () => {
            const group = item.dataset.lightboxGroup || 'default';
            const groupItems = document.querySelectorAll(`[data-lightbox][data-lightbox-group="${group}"]`);

            images = Array.from(groupItems).map(el => ({
                src: el.dataset.lightbox,
                alt: el.dataset.lightboxAlt || el.querySelector('img')?.alt || ''
            }));

            currentIndex = Array.from(groupItems).indexOf(item);
            openLightbox();
        });
    });
}

function openLightbox() {
    if (!lightboxEl || images.length === 0) return;
    updateImage();
    lightboxEl.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap
    lightboxEl.querySelector('.lightbox__close').focus();
}

function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.classList.remove('active');
    document.body.style.overflow = '';
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function updateImage() {
    if (!lightboxEl || images.length === 0) return;
    const img = lightboxEl.querySelector('.lightbox__img');
    const counter = lightboxEl.querySelector('.lightbox__counter');

    img.src = images[currentIndex].src;
    img.alt = images[currentIndex].alt;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;

    // Show/hide nav buttons for single images
    const prevBtn = lightboxEl.querySelector('.lightbox__nav--prev');
    const nextBtn = lightboxEl.querySelector('.lightbox__nav--next');
    const show = images.length > 1;
    prevBtn.style.display = show ? '' : 'none';
    nextBtn.style.display = show ? '' : 'none';
    counter.style.display = show ? '' : 'none';
}

function handleKeydown(e) {
    if (!lightboxEl || !lightboxEl.classList.contains('active')) return;

    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            showPrev();
            break;
        case 'ArrowRight':
            showNext();
            break;
    }
}
