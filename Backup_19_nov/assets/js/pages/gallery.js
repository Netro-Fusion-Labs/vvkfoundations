/**
 * VVK Foundation — Gallery Page
 * Category-filtered photo gallery with lightbox integration.
 * Includes official field outreach, community welfare, and social media media records.
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
                    <button class="filter-tab" data-filter="social" role="tab" aria-selected="false" data-i18n="gallery.cat_social">Field & Social Outreach</button>
                    <button class="filter-tab" data-filter="women" role="tab" aria-selected="false" data-i18n="gallery.cat_women">Nari Shakti</button>
                    <button class="filter-tab" data-filter="cultural" role="tab" aria-selected="false" data-i18n="gallery.cat_cultural">Cultural Heritage</button>
                    <button class="filter-tab" data-filter="health" role="tab" aria-selected="false" data-i18n="gallery.cat_health">Health Camps</button>
                    <button class="filter-tab" data-filter="workshop" role="tab" aria-selected="false" data-i18n="gallery.cat_workshop">Workshops</button>
                </div>

                <div class="gallery-grid" id="gallery-grid">
                    ${galleryItem('/assets/images/social/veena_kashappanavar_field_visit.jpg', 'Smt. Veena Kashappanavar during Grassroots Village Outreach & Civic Dialogue', 'social', '<i class="fas fa-users"></i> Field Outreach', true)}
                    ${galleryItem('/assets/images/social/women_empowerment_field_felicitation.jpg', 'Women Leadership & SHG Empowerment Felicitation by Smt. Veena Kashappanavar', 'women', '<i class="fas fa-female"></i> Nari Shakti', true)}
                    ${galleryItem('/assets/images/social/grassroots_public_outreach_bagalkot.jpg', 'Public Grievance Redressal & Community Dialogue across Rural Bagalkot', 'social', '<i class="fas fa-bullhorn"></i> Field Outreach', true)}
                    ${galleryItem('/assets/images/social/child_welfare_community_interaction.jpg', 'Child Welfare & Rural Nutrition Care Interaction by Foundation Team', 'social', '<i class="fas fa-child"></i> Community Care', true)}
                    ${galleryItem('/assets/images/social/veena_kashappanavar_public_address.jpg', 'Smt. Veena Kashappanavar Addressing Village Assembly on Rural Development', 'social', '<i class="fas fa-microphone"></i> Field Outreach', true)}
                    ${galleryItem('/assets/images/social/vvk_foundation_banner_event.jpg', 'VVK Foundation Community Empowerment Initiative & Public Service Forum', 'social', '<i class="fas fa-flag"></i> Foundation Forum', true)}
                    ${galleryItem('/assets/images/social/heritage_temple_cultural_outreach.jpg', 'Historic Temple Heritage & Folk Cultural Outreach Gathering', 'cultural', '<i class="fas fa-gopuram"></i> Heritage', true)}
                    ${galleryItem('/assets/images/social/kannada_rajyotsava_youth_celebration.jpg', 'Kannada Rajyotsava Celebration & Heritage Recognition by VVK Youth Forum', 'cultural', '<i class="fas fa-landmark"></i> Cultural', true)}
                    ${galleryItem('/assets/images/social/deepavali_cultural_celebration.jpg', 'Deepavali Community Harmony & Cultural Illumination Gathering', 'cultural', '<i class="fas fa-sun"></i> Celebration', true)}
                    ${galleryItem('/assets/images/social/community_support_and_welfare_assembly.jpg', 'VVK Foundation Citizen Welfare Assembly & Community Support', 'social', '<i class="fas fa-hands-helping"></i> Welfare Meet', true)}
                    ${galleryItem('/assets/images/social/rural_community_connect_initiative.jpg', 'Door-to-Door Grassroots Rural Connect & Farmers Welfare Outreach', 'social', '<i class="fas fa-seedling"></i> Rural Connect', true)}
                    ${galleryItem('/assets/images/social/youth_awareness_and_social_initiative.jpg', 'Youth Social Empowerment & Community Leadership Gathering', 'social', '<i class="fas fa-user-graduate"></i> Youth Forum', true)}
                    ${galleryItem('/assets/images/social/community_welfare_awareness_drive.jpg', 'Public Health & Government Scheme Awareness Drive across Taluks', 'social', '<i class="fas fa-clipboard-check"></i> Awareness', true)}
                    ${galleryItem('/assets/images/social/foundation_celebration_tribute.jpg', 'Foundation Commemorative Gathering & Social Service Felicitation', 'social', '<i class="fas fa-award"></i> Foundation', true)}

                    ${galleryItem('/assets/images/extracted/international_womensday_01.jpg', 'Nari Shakti Conference & Women Achievers Felicitation - Ilkal', 'women', '<i class="fas fa-female"></i> Nari Shakti')}
                    ${galleryItem('/assets/images/extracted/international_womensday_02.jpg', 'Smt. Veena Kashappanavar addressing Nari Shakti Convention - Rabakavi Banahatti', 'women', '<i class="fas fa-female"></i> Nari Shakti')}
                    ${galleryItem('/assets/images/extracted/international_womensday_03.jpg', 'Honoring inspiring women leaders at Dasoha Bhavan, Shri Vijayamahantesh Math', 'women', '<i class="fas fa-female"></i> Nari Shakti')}
                    ${galleryItem('/assets/images/extracted/banshankari_jathara_01.jpg', 'Banashankari Fair 2024: Grand Haldi-Kumkum Gathering', 'cultural', '<i class="fas fa-gopuram"></i> Cultural')}
                    ${galleryItem('/assets/images/extracted/banshankari_jathara_02.jpg', 'Traditional Udi-Tumbuva Ritual honoring 2,000 mothers for Lok Kalyana', 'cultural', '<i class="fas fa-gopuram"></i> Cultural')}
                    ${galleryItem('/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg', 'Free Mega Cardiac Health Camp with SDM Narayana Hrudayalaya & District Hospital', 'health', '<i class="fas fa-heartbeat"></i> Health Camp')}
                    ${galleryItem('/assets/images/extracted/mega_cardiac_medical_health_camp_02.jpg', 'Specialist cardiac consultations, ECG screenings, and free medication', 'health', '<i class="fas fa-heartbeat"></i> Health Camp')}
                    ${galleryItem('/assets/images/extracted/mega_cardiac_medical_health_camp_03.jpg', 'Revered Peetha Seers & District Leadership gracing the Founder\'s Birthday Health Camp', 'health', '<i class="fas fa-heartbeat"></i> Health Camp')}
                    ${galleryItem('/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg', 'Saraswati Pooja & Inauguration of Free KAS & PSI Coaching Academy for 200 Students', 'workshop', '<i class="fas fa-graduation-cap"></i> Workshop')}
                    ${galleryItem('/assets/images/extracted/workshop_01.jpg', 'KAS & PSI Coaching Entrance Examination at Govt First Grade College, Navanagar', 'workshop', '<i class="fas fa-graduation-cap"></i> Workshop')}
                    ${galleryItem('/assets/images/extracted/workshop_02.jpg', 'One-Day KAS & PSI Career Guidance Workshop at Hosamani Kalyana Mantapa, Ilkal', 'workshop', '<i class="fas fa-graduation-cap"></i> Workshop')}
                    ${galleryItem('/assets/images/extracted/workshop_03.jpg', 'Competitive Exam Youth Training & Guidance Camp at Mudhol Town', 'workshop', '<i class="fas fa-graduation-cap"></i> Workshop')}
                    ${galleryItem('/assets/images/extracted/workshop_04.jpg', 'Interactive civil services coaching session with expert faculty and mentors', 'workshop', '<i class="fas fa-graduation-cap"></i> Workshop')}
                    ${galleryItem('/assets/images/extracted/workshop_05.jpg', 'Civil service aspirants receiving comprehensive exam preparation roadmaps', 'workshop', '<i class="fas fa-graduation-cap"></i> Workshop')}
                </div>
            </div>
        </section>
    `;
}

function galleryItem(src, alt, category, badge = '', isSocial = false) {
    const badgeClass = isSocial ? 'gallery-item__badge gallery-item__badge--social' : 'gallery-item__badge';
    return `
        <div class="gallery-item reveal reveal--scale" data-category="${category}"
             data-lightbox="${src}" data-lightbox-group="gallery" data-lightbox-alt="${alt}">
            <img src="${src}" alt="${alt}" loading="lazy">
            ${badge ? `<span class="${badgeClass}">${badge}</span>` : ''}
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
