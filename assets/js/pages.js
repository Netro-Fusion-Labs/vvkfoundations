import { applyTranslations } from './i18n.js';
import { reinitAnimations } from './animations.js';

const routes = {
    '/': renderHome,
    '/about': renderAbout,
    '/founder': renderFounder,
    '/initiatives': renderInitiatives,
    '/gallery': renderGallery,
    '/reports': renderReports,
    '/contact': renderContact
};

export async function renderPage(path) {
    const contentDiv = document.getElementById('app-content');
    
    // Fade out
    contentDiv.classList.add('fade-out');
    
    await new Promise(r => setTimeout(r, 300)); // wait for fade
    
    const renderFn = routes[path] || render404;
    contentDiv.innerHTML = renderFn();
    
    // Apply translations to the new DOM
    applyTranslations();
    
    // Fade in
    contentDiv.classList.remove('fade-out');
    
    // Reinitialize animations (scroll reveals etc)
    reinitAnimations();
    
    // Update Meta Title
    const titleKey = `nav.${path === '/' ? 'home' : path.substring(1)}`;
    const translatedTitle = document.querySelector(`[data-i18n="${titleKey}"]`)?.textContent || 'VVK Foundation';
    document.title = `${translatedTitle} - VVK Foundation`;
}

function renderHome() {
    return `
        <section class="hero-section">
            <div class="hero-content container reveal slide-up">
                <h3 data-i18n="hero.subtitle" class="subtitle">Transforming Lives. Empowering Communities.</h3>
                <h1 data-i18n="hero.title" class="title">Empower. Enable. Employ.</h1>
                <p data-i18n="hero.description" class="desc">VVK Foundation is a catalyst for change, driving grassroots transformation in Karnataka through targeted initiatives for Farmers, Women, and Youth.</p>
                <div class="hero-btns">
                    <a href="/initiatives" data-route class="btn btn-primary magnetic" style="background: var(--clr-accent-gold); box-shadow: 0 4px 15px rgba(244, 127, 32, 0.4);" data-i18n="hero.cta_primary">See Our Impact</a>
                    <a href="/founder" data-route class="btn btn-secondary magnetic" style="color: #fff; border-color: #fff;" data-i18n="hero.cta_secondary">Join the Movement</a>
                </div>
            </div>
        </section>
        
        <section class="impact-stats bg-light pt-xl pb-xl">
            <div class="container grid-3-col text-center">
                <div class="stat-item reveal slide-up stagger-1">
                    <h2 class="text-primary" style="font-size: 3rem;">5000+</h2>
                    <p data-i18n="stats.youth" style="font-weight: 600; text-transform: uppercase;">Youth Empowered</p>
                </div>
                <div class="stat-item reveal slide-up stagger-2">
                    <h2 class="text-primary" style="font-size: 3rem;">2000+</h2>
                    <p data-i18n="stats.women" style="font-weight: 600; text-transform: uppercase;">Women Honored</p>
                </div>
                <div class="stat-item reveal slide-up stagger-3">
                    <h2 class="text-primary" style="font-size: 3rem;">15+</h2>
                    <p data-i18n="stats.health" style="font-weight: 600; text-transform: uppercase;">Health Check-ups</p>
                </div>
            </div>
        </section>

        <section class="initiatives-preview">
            <div class="container">
                <div class="text-center mb-lg reveal">
                    <h2 class="section-title" data-i18n="initiatives.title" style="font-size: 2.5rem;">Our Impact & Initiatives</h2>
                    <div style="width: 60px; height: 4px; background: var(--clr-accent-gold); margin: 15px auto;"></div>
                </div>
                <div class="cards-grid">
                    <div class="img-card reveal stagger-1">
                        <img src="/assets/images/youth_empowerment.png" alt="Youth" class="img-card-img">
                        <div class="img-card-content">
                            <h3 data-i18n="initiatives.youth_title">Youth Education & Coaching</h3>
                            <p data-i18n="initiatives.youth_desc">Our free coaching academies for competitive exams (KAS & PSI)...</p>
                        </div>
                    </div>
                    <div class="img-card reveal stagger-2">
                        <img src="/assets/images/women_empowerment.png" alt="Women" class="img-card-img">
                        <div class="img-card-content">
                            <h3 data-i18n="initiatives.women_title">Women Empowerment (Nari Shakti)</h3>
                            <p data-i18n="initiatives.women_desc">Through massive 'Nari Shakti' conferences and cultural programs...</p>
                        </div>
                    </div>
                    <div class="img-card reveal stagger-3">
                        <div class="img-card-img" style="background: #e6f4ea; display: flex; align-items: center; justify-content: center; font-size: 4rem;">🏥</div>
                        <div class="img-card-content">
                            <h3 data-i18n="initiatives.health_title">Community Healthcare</h3>
                            <p data-i18n="initiatives.health_desc">In collaboration with top institutions like SDM Narayana Hrudayalaya...</p>
                        </div>
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
        <section class="founder-content container">
            <div class="founder-grid">
                <div class="founder-img reveal slide-left">
                    <img src="/assets/images/extracted/img-036.png" alt="Mrs. Veena Vijayanand Kashappanavar" class="founder-main-photo img-hover-zoom">
                </div>
                <div class="founder-text reveal slide-right">
                    <h2 data-i18n="founder.name">Mrs. Veena Vijayanand Kashappanavar</h2>
                    <h4 data-i18n="founder.role" class="text-primary">Founder & Chairperson</h4>
                    <p data-i18n="founder.bio">A visionary leader dedicated to social upliftment...</p>
                    <div class="founder-highlights card mt-md">
                        <h3 data-i18n="founder.highlights_title">Leadership in action</h3>
                        <ul class="founder-highlights-list">
                            <li data-i18n="founder.highlight_1">Leading women-centered public events that celebrate dignity, culture, and community participation.</li>
                            <li data-i18n="founder.highlight_2">Supporting students through free coaching access and motivational outreach.</li>
                            <li data-i18n="founder.highlight_3">Anchoring health and welfare drives in partnership with trusted institutions.</li>
                        </ul>
                    </div>
                    <blockquote class="founder-quote">
                        <p data-i18n="founder.message">"True empowerment begins when we enable others to discover their own strength..."</p>
                    </blockquote>
                </div>
            </div>
            <div class="founder-photo-strip mt-lg">
                <img src="/assets/images/extracted/img-040.png" alt="Founder with community members" class="reveal slide-up stagger-1">
                <img src="/assets/images/extracted/img-044.png" alt="Founder at a public gathering" class="reveal slide-up stagger-2">
                <img src="/assets/images/extracted/img-050.png" alt="Founder during an outreach event" class="reveal slide-up stagger-3">
            </div>
        </section>
    `;
}

function renderInitiatives() {
    return `
        <section class="page-header">
            <div class="container reveal">
                <h1 data-i18n="initiatives.title">Core Initiatives</h1>
            </div>
        </section>
        <section class="activities-timeline container">
            <h2 data-i18n="activities.title" class="reveal text-center mb-lg">Recent Activities</h2>
            
            <div class="timeline-item reveal slide-up">
                <h3 data-i18n="activities.act_1_title">Free KAS & PSI Coaching Academy</h3>
                <span class="date" data-i18n="activities.act_1_date">December 2023</span>
                <p data-i18n="activities.act_1_desc">Launched a comprehensive free coaching initiative...</p>
            </div>
            
            <div class="timeline-item reveal slide-up">
                <h3 data-i18n="activities.act_2_title">Banashankari Jatra Celebrations</h3>
                <span class="date" data-i18n="activities.act_2_date">January 2024</span>
                <p data-i18n="activities.act_2_desc">Organized an extensive Haldi-Kumkum program...</p>
            </div>
            
            <div class="timeline-item reveal slide-up">
                <h3 data-i18n="activities.act_3_title">International Women's Day & Nari Shakti</h3>
                <span class="date" data-i18n="activities.act_3_date">March 2024</span>
                <p data-i18n="activities.act_3_desc">Orchestrated a massive 'Nari Shakti' conference...</p>
            </div>
            
            <div class="timeline-item reveal slide-up">
                <h3 data-i18n="activities.act_4_title">Mega Cardiac Health Check-up Camp</h3>
                <span class="date" data-i18n="activities.act_4_date">August 2024</span>
                <p data-i18n="activities.act_4_desc">Organized in collaboration with SDM Narayana Hrudayalaya...</p>
            </div>
        </section>
    `;
}

function renderGallery() {
    return `
        <section class="page-header">
            <div class="container reveal">
                <h1 data-i18n="gallery.title">Gallery</h1>
                <p data-i18n="gallery.desc">A visual record of the foundation's community work, celebrations, and public service initiatives.</p>
            </div>
        </section>
        <section class="gallery-content container">
            <div class="gallery-intro card reveal slide-up">
                <h2 data-i18n="gallery.section_title">Moments from the annual report</h2>
                <p data-i18n="gallery.section_desc">These photographs are curated from the foundation reports and highlight student outreach, women-led gatherings, health initiatives, and founder-led field engagement.</p>
            </div>
            <div class="gallery-grid mt-lg">
                <div class="gallery-item reveal slide-up stagger-1">
                    <img src="/assets/images/extracted/img-002.png" alt="Student outreach event">
                    <div class="gallery-caption" data-i18n="gallery.img_1">Free Coaching Academy Launch</div>
                </div>
                <div class="gallery-item reveal slide-up stagger-2">
                    <img src="/assets/images/extracted/img-006.png" alt="Community celebration">
                    <div class="gallery-caption" data-i18n="gallery.img_2">Banashankari Jatra Celebration</div>
                </div>
                <div class="gallery-item reveal slide-up stagger-3">
                    <img src="/assets/images/extracted/img-010.png" alt="Women's gathering">
                    <div class="gallery-caption" data-i18n="gallery.img_3">Nari Shakti Women's Conference</div>
                </div>
                <div class="gallery-item reveal slide-up stagger-1">
                    <img src="/assets/images/extracted/img-016.png" alt="Public service activity">
                    <div class="gallery-caption" data-i18n="gallery.img_4">Community Welfare Distribution</div>
                </div>
                <div class="gallery-item reveal slide-up stagger-2">
                    <img src="/assets/images/extracted/img-024.png" alt="Founder with beneficiaries">
                    <div class="gallery-caption" data-i18n="gallery.img_5">Founder Mrs. Veena with Beneficiaries</div>
                </div>
                <div class="gallery-item reveal slide-up stagger-3">
                    <img src="/assets/images/extracted/img-028.png" alt="Health camp activity">
                    <div class="gallery-caption" data-i18n="gallery.img_6">Mega Health Check-up Camp</div>
                </div>
                <div class="gallery-item reveal slide-up stagger-1">
                    <img src="/assets/images/extracted/img-030.png" alt="Recognition moment">
                    <div class="gallery-caption" data-i18n="gallery.img_7">Honoring Student Achievers</div>
                </div>
                <div class="gallery-item reveal slide-up stagger-2">
                    <img src="/assets/images/extracted/img-032.png" alt="Large community event">
                    <div class="gallery-caption" data-i18n="gallery.img_8">Large Scale Public Gathering</div>
                </div>
            </div>
        </section>
    `;
}

function renderReports() {
    return `
        <section class="page-header">
            <div class="container reveal">
                <h1 data-i18n="reports.title">Impact Reports</h1>
                <p data-i18n="reports.desc">Transparency and accountability are the cornerstones of our foundation.</p>
            </div>
        </section>
        <section class="reports-content container">
            <div class="reports-summary card reveal slide-up">
                <h2 data-i18n="reports.summary_title">Highlights from the report</h2>
                <div class="reports-highlight-grid">
                    <div>
                        <strong data-i18n="reports.point_1_title">Education outreach</strong>
                        <p data-i18n="reports.point_1_desc">The report documents free coaching support for KAS and PSI aspirants, with a focus on rural youth who need merit-based opportunities.</p>
                    </div>
                    <div>
                        <strong data-i18n="reports.point_2_title">Women-centered programs</strong>
                        <p data-i18n="reports.point_2_desc">It captures large-scale women's gatherings, cultural celebrations, and recognition events that reinforce dignity and social participation.</p>
                    </div>
                    <div>
                        <strong data-i18n="reports.point_3_title">Healthcare and service</strong>
                        <p data-i18n="reports.point_3_desc">The foundation report also showcases medical camps and collaborative welfare drives delivered with institutional partners.</p>
                    </div>
                </div>
            </div>
            <div class="cards-grid mt-lg reveal slide-up">
                <div class="card text-center">
                    <h3>English Report</h3>
                    <p data-i18n="reports.card_en_desc">Read the complete English annual report with activity details, photographs, and program summaries.</p>
                    <a href="/VVK Foundation Report (1).pdf" target="_blank" class="btn btn-primary mt-sm" data-i18n="reports.download_en">Download English Report</a>
                </div>
                <div class="card text-center">
                    <h3>Kannada Report</h3>
                    <p data-i18n="reports.card_kn_desc">Access the Kannada version of the report for local-language storytelling and community documentation.</p>
                    <a href="/VVK Foundation Report Kannada.pdf" target="_blank" class="btn btn-secondary mt-sm" data-i18n="reports.download_kn">Download Kannada Report</a>
                </div>
            </div>
            <div class="reports-gallery-cta card mt-lg reveal slide-up">
                <h3 data-i18n="reports.gallery_cta_title">Browse the photo gallery</h3>
                <p data-i18n="reports.gallery_cta_desc">We have also prepared a visual gallery from the report photographs so visitors can quickly explore the foundation's work.</p>
                <a href="/gallery" data-route class="btn btn-primary mt-sm" data-i18n="reports.gallery_cta_button">Open Gallery</a>
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
