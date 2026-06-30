/**
 * VVK Foundation — About Page
 */

export function renderAbout() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs"><a href="/" data-route>Home</a> <span class="separator"><i class="fas fa-chevron-right"></i></span> <span class="current" data-i18n="nav.about">Who We Are</span></div>
                <h1 data-i18n="about.title">Who We Are</h1>
                <p data-i18n="about.subtitle">Empowering communities through education, healthcare, and sustainable development.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="grid-2" style="align-items: flex-start;">
                    <div class="reveal reveal--left">
                        <span class="section-label"><i class="fas fa-bullseye"></i> MISSION</span>
                        <h2 data-i18n="about.mission_title">Our Mission</h2>
                        <p class="lead mt-md" data-i18n="about.mission_desc">To empower the marginalized sections of society—specifically farmers, women, and youth—by equipping them with the resources, education, and healthcare needed to lead dignified, independent lives.</p>
                    </div>
                    <div class="reveal reveal--right">
                        <span class="section-label"><i class="fas fa-eye"></i> VISION</span>
                        <h2 data-i18n="about.vision_title">Our Vision</h2>
                        <p class="lead mt-md" data-i18n="about.vision_desc">We envision a self-reliant and equitable society where every individual, regardless of their background, has access to opportunities that foster growth, prosperity, and holistic well-being.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-secondary">
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-tasks"></i> <span data-i18n="about.obj_label">CORE INTERVENTIONS</span></span>
                    <h2 data-i18n="about.objectives_title">Core Interventions</h2>
                </div>

                <div class="grid-2" style="align-items: flex-start; gap: var(--space-xl);">
                    <div class="card reveal reveal--up stagger-1">
                        <div class="card__body d-flex gap-lg items-start">
                            <div class="feature-icon" style="flex-shrink:0;"><i class="fas fa-graduation-cap"></i></div>
                            <div>
                                <h4 data-i18n="about.obj_1_title">Quality Education</h4>
                                <p class="text-sm mt-xs" data-i18n="about.obj_1">Bridging the gap for rural youth through intensive coaching and mentorship for KAS & PSI exams.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-2">
                        <div class="card__body d-flex gap-lg items-start">
                            <div class="feature-icon" style="flex-shrink:0;"><i class="fas fa-female"></i></div>
                            <div>
                                <h4 data-i18n="about.obj_2_title">Women's Empowerment</h4>
                                <p class="text-sm mt-xs" data-i18n="about.obj_2">Fostering economic independence and cultural reverence through Nari Shakti programs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-3">
                        <div class="card__body d-flex gap-lg items-start">
                            <div class="feature-icon" style="flex-shrink:0;"><i class="fas fa-heartbeat"></i></div>
                            <div>
                                <h4 data-i18n="about.obj_3_title">Rural Healthcare</h4>
                                <p class="text-sm mt-xs" data-i18n="about.obj_3">Bringing specialized medical camps to underserved communities in partnership with top hospitals.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-4">
                        <div class="card__body d-flex gap-lg items-start">
                            <div class="feature-icon" style="flex-shrink:0;"><i class="fas fa-leaf"></i></div>
                            <div>
                                <h4 data-i18n="about.obj_4_title">Agricultural Support</h4>
                                <p class="text-sm mt-xs" data-i18n="about.obj_4">Promoting sustainable farming practices and farmer welfare programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container reveal reveal--up">
                <h2 data-i18n="home.cta_title">Be Part of the Change</h2>
                <p data-i18n="home.cta_desc">Join thousands of supporters making a difference across Karnataka.</p>
                <a href="/contact" data-route class="btn btn--outline-light magnetic" data-i18n="home.cta_contact">Contact Us</a>
            </div>
        </section>
    `;
}
