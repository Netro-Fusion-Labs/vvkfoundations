/**
 * VVK Foundation — Gallery Page
 * Category-filtered photo gallery with lightbox integration.
 */

export function renderGallery() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs"><a href="/" data-route>Home</a> <span class="separator"><i class="fas fa-chevron-right"></i></span> <span class="current" data-i18n="nav.gallery">Gallery</span></div>
                <h1 data-i18n="gallery.title">Gallery</h1>
                <p data-i18n="gallery.desc">A visual record of the foundation's community work, celebrations, and public service initiatives.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="filter-tabs reveal reveal--up" id="gallery-filters" role="tablist">
                    <button class="filter-tab active" data-filter="all" role="tab" aria-selected="true" data-i18n="gallery.filter_all">All</button>
                    <button class="filter-tab" data-filter="women" role="tab" aria-selected="false" data-i18n="gallery.cat_women">Nari Shakti</button>
                    <button class="filter-tab" data-filter="cultural" role="tab" aria-selected="false" data-i18n="gallery.cat_cultural">Banashankari Jatra</button>
                    <button class="filter-tab" data-filter="health" role="tab" aria-selected="false" data-i18n="gallery.cat_health">Health Camps</button>
                    <button class="filter-tab" data-filter="workshop" role="tab" aria-selected="false" data-i18n="gallery.cat_workshop">Workshops</button>
                </div>

                <div class="gallery-grid" id="gallery-grid">
                    ${galleryItem('/assets/images/extracted/international_womensday_01.jpg', 'International Women\'s Day celebration', 'women')}
                    ${galleryItem('/assets/images/extracted/international_womensday_02.jpg', 'Nari Shakti Conference', 'women')}
                    ${galleryItem('/assets/images/extracted/international_womensday_03.jpg', 'Women achievers honored', 'women')}
                    ${galleryItem('/assets/images/extracted/banshankari_jathara_01.jpg', 'Banashankari Jatra celebration', 'cultural')}
                    ${galleryItem('/assets/images/extracted/banshankari_jathara_02.jpg', 'Traditional Udi ceremony', 'cultural')}
                    ${galleryItem('/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg', 'Mega cardiac health camp', 'health')}
                    ${galleryItem('/assets/images/extracted/mega_cardiac_medical_health_camp_02.jpg', 'Health check-up in progress', 'health')}
                    ${galleryItem('/assets/images/extracted/mega_cardiac_medical_health_camp_03.jpg', 'Community health screening', 'health')}
                    ${galleryItem('/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg', 'KAS PSI Academy launch', 'workshop')}
                    ${galleryItem('/assets/images/extracted/workshop_01.jpg', 'Community workshop session', 'workshop')}
                    ${galleryItem('/assets/images/extracted/workshop_02.jpg', 'Training and skill development', 'workshop')}
                    ${galleryItem('/assets/images/extracted/workshop_03.jpg', 'Interactive workshop', 'workshop')}
                    ${galleryItem('/assets/images/extracted/workshop_04.jpg', 'Community engagement', 'workshop')}
                    ${galleryItem('/assets/images/extracted/workshop_05.jpg', 'Field outreach program', 'workshop')}
                </div>
            </div>
        </section>
    `;
}

function galleryItem(src, alt, category) {
    return `
        <div class="gallery-item reveal reveal--scale" data-category="${category}"
             data-lightbox="${src}" data-lightbox-group="gallery" data-lightbox-alt="${alt}">
            <img src="${src}" alt="${alt}" loading="lazy">
            <span class="gallery-item__caption">${alt}</span>
        </div>
    `;
}

/**
 * Initialize gallery filter functionality.
 * Called after page render.
 */
export function initGalleryFilters() {
    const filtersContainer = document.getElementById('gallery-filters');
    const grid = document.getElementById('gallery-grid');
    if (!filtersContainer || !grid) return;

    filtersContainer.addEventListener('click', (e) => {
        const tab = e.target.closest('.filter-tab');
        if (!tab) return;

        // Update active tab
        filtersContainer.querySelectorAll('.filter-tab').forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const filter = tab.dataset.filter;

        // Filter gallery items
        grid.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = '';
                // Re-trigger reveal animation
                item.classList.remove('active');
                requestAnimationFrame(() => item.classList.add('active'));
            } else {
                item.style.display = 'none';
            }
        });
    });
}
