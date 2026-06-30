import { applyTranslations } from './i18n.js';
import { reinitAnimations } from './animations.js';

const routes = {
    '/': renderHome,
    '/about': renderAbout,
    '/founder': renderFounder,
    '/initiatives': renderInitiatives,
    '/gallery': renderGallery,
    '/contact': renderContact
};

export async function renderPage(path) {
    const contentDiv = document.getElementById('app-content');
    const navbar = document.getElementById('navbar');
    
    // Fade out
    contentDiv.classList.add('fade-out');
    
    // Wait for fade out
    await new Promise(r => setTimeout(r, 300));
    
    // Route matching
    const renderFn = routes[path] || render404;
    contentDiv.innerHTML = renderFn();
    
    // Apply translations to new content
    applyTranslations();
    
    // Fade in
    contentDiv.classList.remove('fade-out');
    
    
    // Reinitialize animations (scroll reveals etc)
    reinitAnimations();
    
    // Update Meta Title & Advanced SEO Tags
    const pageName = path === '/' ? 'home' : path.substring(1);
    const titleKey = `nav.${pageName}`;
    const translatedTitle = document.querySelector(`[data-i18n="${titleKey}"]`)?.textContent || 'VVK Foundation';
    const fullTitle = `${translatedTitle} - VVK Foundation`;
    
    document.title = fullTitle;
    
    // Dynamic Meta Descriptions
    let descriptionText = "VVK Foundation is dedicated to empowering marginalized sections of society, focusing on farmers, women, and youth in Karnataka.";
    if (path === '/about') descriptionText = "Learn about the mission and vision of VVK Foundation to empower the marginalized sections of society.";
    else if (path === '/founder') descriptionText = "Mrs. Veena Vijayanand Kashappanavar is a visionary leader dedicated to social upliftment and the founder of VVK Foundation.";
    else if (path === '/initiatives') descriptionText = "Explore the impact and initiatives of VVK Foundation across youth education, women empowerment, and healthcare.";
    else if (path === '/gallery') descriptionText = "A visual record of VVK Foundation's community work, celebrations, and public service initiatives.";
    else if (path === '/contact') descriptionText = "Get in touch with VVK Foundation. We are located in Bagalkot, Karnataka.";
    
    // Update Meta Tags
    const updateMeta = (selector, content) => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute('content', content);
    };
    
    updateMeta('meta[name="description"]', descriptionText);
    
    // Open Graph
    updateMeta('meta[property="og:title"]', fullTitle);
    updateMeta('meta[property="og:description"]', descriptionText);
    updateMeta('meta[property="og:url"]', window.location.href);
    
    // Twitter
    updateMeta('meta[name="twitter:title"]', fullTitle);
    updateMeta('meta[name="twitter:description"]', descriptionText);
    
    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', window.location.href);
}

function renderHome() {
    return `
        <section class="hero-section">
            <div class="hero-content container reveal slide-up">
                <div class="hero-pill-badge"><i class="fas fa-hand-holding-seedling"></i> VVK FOUNDATION INITIATIVES</div>
                <h1 data-i18n="hero.title" class="title">Empower. Enable. <span class="text-highlight">Employ.</span></h1>
                <p data-i18n="hero.description" class="desc">VVK Foundation is a catalyst for change, driving grassroots transformation in Karnataka through targeted initiatives for Farmers, Women, and Youth.</p>
                <div class="hero-btns">
                    <a href="/initiatives" data-route class="btn btn-primary magnetic" data-i18n="hero.cta_primary">See Our Impact</a>
                    <a href="/founder" data-route class="btn btn-outline-light magnetic" data-i18n="hero.cta_secondary">Join the Movement</a>
                </div>
            </div>
            
            <div class="hero-stats-row reveal fade">
                <div class="container">
                    <div class="hero-stats-grid">
                        <div class="hero-stat-item">
                            <h3><span class="counter" data-target="5000">0</span>+</h3>
                            <p data-i18n="stats.youth">Youth Empowered</p>
                        </div>
                        <div class="hero-stat-item">
                            <h3><span class="counter" data-target="2000">0</span>+</h3>
                            <p data-i18n="stats.women">Women Supported</p>
                        </div>
                        <div class="hero-stat-item">
                            <h3><span class="counter" data-target="1000">0</span>+</h3>
                            <p data-i18n="stats.farmers">Farmers Trained</p>
                        </div>
                        <div class="hero-stat-item">
                            <h3><span class="counter" data-target="50">0</span>+</h3>
                            <p data-i18n="stats.villages">Villages Reached</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="scroll-indicator" onclick="document.querySelector('.who-we-are-section').scrollIntoView({behavior: 'smooth'})">
                <span>SCROLL DOWN</span>
                <i class="fas fa-chevron-down"></i>
            </div>
        </section>
        
        <!-- WHO WE ARE SECTION -->
        <section class="who-we-are-section bg-tint">
            <div class="container">
                <div class="section-header text-center reveal slide-up">
                    <span class="section-label">WHO WE ARE</span>
                    <h2>India's Leading Grassroots Transformation Partner</h2>
                    <p class="section-subtitle">We combine deep community knowledge with structured execution to deliver seamless empowerment outcomes.</p>
                </div>
                
                <div class="grid-4-col features-grid mt-lg">
                    <div class="feature-card reveal slide-up stagger-1">
                        <div class="feature-icon"><i class="fas fa-users"></i></div>
                        <h4>Community First</h4>
                        <p>Driven by the needs of the grassroots, ensuring every initiative creates direct, tangible impact.</p>
                    </div>
                    <div class="feature-card reveal slide-up stagger-2">
                        <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
                        <h4>100% Impact Driven</h4>
                        <p>Consistently high success rates driven by meticulous planning and strategic structuring.</p>
                    </div>
                    <div class="feature-card reveal slide-up stagger-3">
                        <div class="feature-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <h4>Kalyana Karnataka</h4>
                        <p>Serving communities deeply across the Kalyana Karnataka region and beyond.</p>
                    </div>
                    <div class="feature-card reveal slide-up stagger-4">
                        <div class="feature-icon"><i class="fas fa-hands-helping"></i></div>
                        <h4>End-to-End Support</h4>
                        <p>From initial assessment to post-implementation compliance — a complete lifecycle partner.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-card">
            <div class="container grid-2-col align-center">
                <div class="founder-snippet-img reveal slide-left" style="text-align: center;">
                    <img src="/assets/images/founder.png" alt="Founder" class="radius-lg shadow-md" style="width: 100%; max-width: 280px; border-radius: var(--radius-lg); margin: 0 auto;">
                </div>
                <div class="founder-snippet-text reveal slide-right">
                    <h2 data-i18n="home.founder_title">From the Founder's Desk</h2>
                    <p data-i18n="home.founder_desc" class="lead-text text-muted mb-md">"True empowerment begins when we enable others to discover their own strength. At VVK Foundation, our goal is to create sustainable pathways for our youth, women, and farmers to thrive independently."</p>
                    <a href="/founder" class="btn btn-primary" data-route data-i18n="home.founder_btn">Read More</a>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <h2 class="text-center mb-lg" data-i18n="initiatives.title">Our Impact & Initiatives</h2>
                <div class="grid-3-col">
                    <div class="img-card reveal slide-up stagger-1">
                        <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="Youth Empowerment">
                        <div class="img-card-content">
                            <h3 data-i18n="initiatives.youth_title">Youth Education & Coaching</h3>
                            <p data-i18n="initiatives.youth_desc">Our free coaching academies for competitive exams (KAS & PSI) have opened doors for hundreds of rural students in Bagalkot district.</p>
                        </div>
                    </div>
                    <div class="img-card reveal slide-up stagger-2">
                        <img src="/assets/images/extracted/international_womensday_02.jpg" alt="Women Empowerment">
                        <div class="img-card-content">
                            <h3 data-i18n="initiatives.women_title">Women Empowerment (Nari Shakti)</h3>
                            <p data-i18n="initiatives.women_desc">Through large-scale 'Nari Shakti' conferences and cultural events like Banashankari Jatra, we honor and uplift thousands of women.</p>
                        </div>
                    </div>
                    <div class="img-card reveal slide-up stagger-3">
                        <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" alt="Community Health">
                        <div class="img-card-content">
                            <h3 data-i18n="initiatives.health_title">Community Healthcare</h3>
                            <p data-i18n="initiatives.health_desc">In collaboration with top institutions like SDM Narayana Hrudayalaya, we conduct mega cardiac and general health check-up camps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-bg-main">
            <div class="container text-center reveal slide-up">
                <h2 data-i18n="home.reach_title">Our Geographical Reach</h2>
                <p data-i18n="home.reach_desc" class="lead-text text-muted mb-lg max-w-md mx-auto" style="max-width: 600px; margin: 0 auto 3rem auto;">Creating deep-rooted impact across key regions in Karnataka, focusing on rural and semi-urban communities.</p>
                <div class="grid-3-col">
                    <div class="card p-md shadow-sm">
                        <h3 class="text-primary" data-i18n="home.reach_1_title">Bagalkot</h3>
                        <p class="text-muted text-sm mt-sm" data-i18n="home.reach_1_desc">District Headquarters & Core Operations</p>
                    </div>
                    <div class="card p-md shadow-sm">
                        <h3 class="text-primary" data-i18n="home.reach_2_title">Ilkal</h3>
                        <p class="text-muted text-sm mt-sm" data-i18n="home.reach_2_desc">Women Empowerment Conferences</p>
                    </div>
                    <div class="card p-md shadow-sm">
                        <h3 class="text-primary" data-i18n="home.reach_3_title">Banahatti</h3>
                        <p class="text-muted text-sm mt-sm" data-i18n="home.reach_3_desc">Cultural & Healthcare Initiatives</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderAbout() {
    return `
        <section class="page-header">
            <div class="container reveal">
                <h1 data-i18n="about.title">About VVK Foundation</h1>
            </div>
        </section>
        <section class="about-content container">
            <div class="grid-2-col">
                <div class="reveal slide-left">
                    <h2 data-i18n="about.mission_title">Our Mission</h2>
                    <p data-i18n="about.mission_desc">To empower the marginalized sections of society...</p>
                </div>
                <div class="reveal slide-right">
                    <h2 data-i18n="about.vision_title">Our Vision</h2>
                    <p data-i18n="about.vision_desc">A self-reliant and equitable society...</p>
                </div>
            </div>
            <div class="objectives reveal mt-lg">
                <h2 data-i18n="about.objectives_title">Core Objectives</h2>
                <ul>
                    <li data-i18n="about.obj_1">Provide quality education and coaching for youth.</li>
                    <li data-i18n="about.obj_2">Empower women through health, culture, and economic independence.</li>
                    <li data-i18n="about.obj_3">Support farmers with sustainable agricultural initiatives.</li>
                    <li data-i18n="about.obj_4">Ensure accessible healthcare for all communities.</li>
                </ul>
            </div>
        </section>
    `;
}

function renderFounder() {
    return `
        <section class="page-header">
            <div class="container reveal">
                <h1 data-i18n="founder.title">Our Founder</h1>
            </div>
        </section>
        <section class="founder-content section bg-white">
            <div class="container founder-grid align-center">
                <div class="founder-img reveal slide-left">
                    <img src="/assets/images/founder.png" alt="Mrs. Veena Vijayanand Kashappanavar" class="founder-main-photo radius-lg shadow-md" style="width:100%; border-radius: var(--radius-lg);">
                </div>
                <div class="founder-text reveal slide-right">
                    <h2 data-i18n="founder.name" class="text-primary mb-xs">Mrs. Veena Vijayanand Kashappanavar</h2>
                    <h4 data-i18n="founder.role" class="text-muted mb-md text-sm uppercase tracking-wide">Founder & Chairperson</h4>
                    <p data-i18n="founder.bio" class="text-main mb-md line-height-lg">A visionary leader dedicated to social upliftment. Mrs. Veena Kashappanavar has spent years working at the grassroots level. She established the VVK Foundation to institutionalize her efforts in empowering the youth, women, and farmers of the region. Her leadership is marked by compassion, strategic action, and a deep commitment to cultural traditions.</p>
                    
                    <div class="founder-highlights bg-bg-main p-md radius-md shadow-sm mb-lg border-l-green">
                        <h3 data-i18n="founder.highlights_title" class="text-primary mb-sm font-semibold">Leadership in action</h3>
                        <ul class="founder-highlights-list text-main ml-md" style="list-style-type: disc; padding-left: 20px;">
                            <li data-i18n="founder.highlight_1" class="mb-xs">Leading women-centered public events that celebrate dignity, culture, and community participation.</li>
                            <li data-i18n="founder.highlight_2" class="mb-xs">Supporting students through free coaching access and motivational outreach.</li>
                            <li data-i18n="founder.highlight_3" class="mb-xs">Anchoring health and welfare drives in partnership with trusted institutions.</li>
                        </ul>
                    </div>
                    
                    <blockquote class="founder-quote text-italic text-muted border-l-gold pl-md">
                        <p data-i18n="founder.message">"True empowerment begins when we enable others to discover their own strength. At VVK Foundation, our goal is not just to provide aid, but to create sustainable pathways for our youth, our women, and our farmers to thrive independently."</p>
                    </blockquote>
                </div>
            </div>
            
            <div class="container mt-xl">
                <h3 class="text-center text-primary mb-lg">Community Engagements</h3>
                <div class="grid-3-col">
                    <img src="/assets/images/extracted/international_womensday_01.jpg" alt="Founder with community members" class="reveal slide-up stagger-1 radius-md shadow-sm" style="width:100%; height:250px; object-fit:cover;">
                    <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Founder at a public gathering" class="reveal slide-up stagger-2 radius-md shadow-sm" style="width:100%; height:250px; object-fit:cover;">
                    <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="Founder during an outreach event" class="reveal slide-up stagger-3 radius-md shadow-sm" style="width:100%; height:250px; object-fit:cover;">
                </div>
            </div>
        </section>
    `;
}

function renderInitiatives() {
    return `
        <section class="page-header">
            <div class="container reveal">
                <h1 data-i18n="initiatives.title">Our Impact</h1>
            </div>
        </section>
        <section class="activities-timeline section bg-bg-main">
            <div class="container max-w-lg mx-auto">
                <div class="impact-card card mb-lg reveal slide-up shadow-sm bg-white" style="border-left: 4px solid var(--clr-primary-green);">
                    <div style="display: flex; gap: 20px; padding: 20px; align-items: center;" class="impact-card-inner">
                        <div style="flex: 1;" class="impact-img">
                            <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="Coaching Academy" style="width:100%; border-radius: var(--radius-md); object-fit: cover; height: 200px;">
                        </div>
                        <div style="flex: 2;" class="impact-text">
                            <h3 data-i18n="activities.act_1_title" class="text-primary mb-xs">Launch of Free KAS & PSI Coaching Academy</h3>
                            <span class="date text-accent-gold font-semibold text-sm mb-sm block" data-i18n="activities.act_1_date">December 2023</span>
                            <p data-i18n="activities.act_1_desc" class="text-muted text-sm mt-sm">Inaugurated to serve deserving students with entrance exams in Navanagar. Supported by dignitaries and designed to create the next generation of civil servants.</p>
                        </div>
                    </div>
                </div>

                <div class="impact-card card mb-lg reveal slide-up shadow-sm bg-white" style="border-left: 4px solid var(--clr-primary-green);">
                    <div style="display: flex; gap: 20px; padding: 20px; align-items: center;" class="impact-card-inner">
                        <div style="flex: 1;" class="impact-img">
                            <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Banashankari Jatra" style="width:100%; border-radius: var(--radius-md); object-fit: cover; height: 200px;">
                        </div>
                        <div style="flex: 2;" class="impact-text">
                            <h3 data-i18n="activities.act_2_title" class="text-primary mb-xs">Banashankari Jatra & Udi-Tumbuva</h3>
                            <span class="date text-accent-gold font-semibold text-sm mb-sm block" data-i18n="activities.act_2_date">January 24, 2024</span>
                            <p data-i18n="activities.act_2_desc" class="text-muted text-sm mt-sm">Over 2,000 mothers and women were honored with the traditional offering (Udi) for Lok Kalyana during a grand cultural gathering.</p>
                        </div>
                    </div>
                </div>

                <div class="impact-card card mb-lg reveal slide-up shadow-sm bg-white" style="border-left: 4px solid var(--clr-primary-green);">
                    <div style="display: flex; gap: 20px; padding: 20px; align-items: center;" class="impact-card-inner">
                        <div style="flex: 1;" class="impact-img">
                            <img src="/assets/images/extracted/international_womensday_02.jpg" alt="Women's Day" style="width:100%; border-radius: var(--radius-md); object-fit: cover; height: 200px;">
                        </div>
                        <div style="flex: 2;" class="impact-text">
                            <h3 data-i18n="activities.act_3_title" class="text-primary mb-xs">International Women's Day Conference</h3>
                            <span class="date text-accent-gold font-semibold text-sm mb-sm block" data-i18n="activities.act_3_date">March 9, 2024</span>
                            <p data-i18n="activities.act_3_desc" class="text-muted text-sm mt-sm">Held at Ilkal and Banahatti under the theme 'Nari Shakti Deshada Shakti', honoring women achievers for their resilience and success.</p>
                        </div>
                    </div>
                </div>

                <div class="impact-card card mb-lg reveal slide-up shadow-sm bg-white" style="border-left: 4px solid var(--clr-primary-green);">
                    <div style="display: flex; gap: 20px; padding: 20px; align-items: center;" class="impact-card-inner">
                        <div style="flex: 1;" class="impact-img">
                            <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" alt="Health Camp" style="width:100%; border-radius: var(--radius-md); object-fit: cover; height: 200px;">
                        </div>
                        <div style="flex: 2;" class="impact-text">
                            <h3 data-i18n="activities.act_4_title" class="text-primary mb-xs">Mega Cardiac Health Check-up Camp</h3>
                            <span class="date text-accent-gold font-semibold text-sm mb-sm block" data-i18n="activities.act_4_date">August 21, 2024</span>
                            <p data-i18n="activities.act_4_desc" class="text-muted text-sm mt-sm">Marking the founder's birthday, this life-saving camp was executed with SDM Narayana Hrudayalaya in the presence of revered spiritual leaders.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderGallery() {
    return `
        <section class="page-header" style="padding-bottom: 30px;">
            <div class="container reveal">
                <h1 data-i18n="gallery.title">Gallery</h1>
                <p data-i18n="gallery.desc" class="mt-sm">A visual record of the foundation's community work, celebrations, and public service initiatives.</p>
            </div>
        </section>
        
        <section class="gallery-content bg-white" style="padding-top: 30px; padding-bottom: 60px;">
            <div class="container">
                <!-- Category: Women Empowerment -->
                <h3 class="mb-md text-primary font-bold" data-i18n="gallery.cat_women">International Women's Day (Nari Shakti)</h3>
                <div class="custom-gallery-grid">
                    <img src="/assets/images/extracted/international_womensday_01.jpg" alt="International Women's Day" class="reveal slide-up stagger-1">
                    <img src="/assets/images/extracted/international_womensday_02.jpg" alt="International Women's Day" class="reveal slide-up stagger-2">
                    <img src="/assets/images/extracted/international_womensday_03.jpg" alt="International Women's Day" class="reveal slide-up stagger-3">
                </div>

                <!-- Category: Cultural Festivals -->
                <h3 class="mt-md mb-md text-primary font-bold" data-i18n="gallery.cat_cultural">Banashankari Jatra Celebration</h3>
                <div class="custom-gallery-grid">
                    <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Banashankari Jatra" class="reveal slide-up stagger-1">
                    <img src="/assets/images/extracted/banshankari_jathara_02.jpg" alt="Banashankari Jatra" class="reveal slide-up stagger-2">
                </div>

                <!-- Category: Health Camps -->
                <h3 class="mt-md mb-md text-primary font-bold" data-i18n="gallery.cat_health">Mega Cardiac & Health Camps</h3>
                <div class="custom-gallery-grid">
                    <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" alt="Health Camp" class="reveal slide-up stagger-1">
                    <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_02.jpg" alt="Health Camp" class="reveal slide-up stagger-2">
                    <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_03.jpg" alt="Health Camp" class="reveal slide-up stagger-3">
                </div>

                <!-- Category: Workshops -->
                <h3 class="mt-md mb-md text-primary font-bold" data-i18n="gallery.cat_workshop">Community Workshops</h3>
                <div class="custom-gallery-grid">
                    <img src="/assets/images/extracted/workshop_01.jpg" alt="Workshop" class="reveal slide-up stagger-1">
                    <img src="/assets/images/extracted/workshop_02.jpg" alt="Workshop" class="reveal slide-up stagger-2">
                    <img src="/assets/images/extracted/workshop_04.jpg" alt="Workshop" class="reveal slide-up stagger-3">
                    <img src="/assets/images/extracted/workshop_05.jpg" alt="Workshop" class="reveal slide-up stagger-1">
                </div>
            </div>
        </section>
    `;
}

function renderContact() {
    return `
        <section class="page-header">
            <div class="container reveal">
                <h1 data-i18n="contact.title">Contact Us</h1>
            </div>
        </section>
        <section class="contact-content container">
            <div class="grid-2-col">
                <div class="contact-info reveal slide-left">
                    <h3 data-i18n="contact.address_label">Address</h3>
                    <p data-i18n="contact.address">Bagalkot District, Karnataka, India</p>
                    
                    <h3 data-i18n="contact.email_label" class="mt-md">Email</h3>
                    <p data-i18n="contact.email">info@vvkfoundation.org</p>
                    
                    <h3 data-i18n="contact.phone_label" class="mt-md">Phone</h3>
                    <p data-i18n="contact.phone">+91 XXXXX XXXXX</p>
                </div>
                <div class="contact-form-container reveal slide-right card">
                    <form id="contact-form">
                        <div class="form-group">
                            <input type="text" class="form-control" data-i18n-placeholder="contact.form_name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" data-i18n-placeholder="contact.form_email" required>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" data-i18n-placeholder="contact.form_message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary magnetic" data-i18n="contact.form_submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    `;
}

function render404() {
    return `
        <section class="not-found container text-center pt-xl pb-xl">
            <h1 data-i18n="404.title">404 - Page Not Found</h1>
            <p data-i18n="404.desc" class="mb-lg">The page you are looking for might have been removed or is temporarily unavailable.</p>
            <a href="/" data-route class="btn btn-primary" data-i18n="404.home_btn">Return to Home</a>
        </section>
    `;
}
