/**
 * VVK Foundation — Initiatives Page
 */

export function renderInitiatives() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs"><a href="/" data-route>Home</a> <span class="separator"><i class="fas fa-chevron-right"></i></span> <span class="current" data-i18n="nav.initiatives">Our Impact</span></div>
                <h1 data-i18n="initiatives.title">Our Impact & Initiatives</h1>
                <p data-i18n="initiatives.subtitle">Documented programs and events that are transforming communities across Karnataka.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-calendar-alt"></i> <span data-i18n="activities.label">TIMELINE</span></span>
                    <h2 data-i18n="activities.title">Action on the Ground</h2>
                </div>

                <div class="container--narrow mx-auto">
                    <div class="timeline">
                        <div class="timeline-item active reveal reveal--left">
                            <div class="timeline-date" data-i18n="activities.act_4_date">August 21, 2024</div>
                            <div class="timeline-card">
                                <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" alt="Mega Cardiac Health Camp" loading="lazy" data-lightbox="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" data-lightbox-group="activities" data-lightbox-alt="Health Camp">
                                <h3 data-i18n="activities.act_4_title">Mega Cardiac Health Check-up Camp</h3>
                                <p data-i18n="activities.act_4_desc">Marking the founder's birthday, this life-saving camp was executed with SDM Narayana Hrudayalaya in the presence of revered spiritual leaders.</p>
                            </div>
                        </div>

                        <div class="timeline-item reveal reveal--left">
                            <div class="timeline-date" data-i18n="activities.act_3_date">March 9, 2024</div>
                            <div class="timeline-card">
                                <img src="/assets/images/extracted/international_womensday_02.jpg" alt="International Women's Day" loading="lazy" data-lightbox="/assets/images/extracted/international_womensday_02.jpg" data-lightbox-group="activities" data-lightbox-alt="Women's Day Conference">
                                <h3 data-i18n="activities.act_3_title">International Women's Day Conference</h3>
                                <p data-i18n="activities.act_3_desc">Held at Ilkal and Banahatti under the theme 'Nari Shakti Deshada Shakti', honoring women achievers for their resilience and success.</p>
                            </div>
                        </div>

                        <div class="timeline-item reveal reveal--left">
                            <div class="timeline-date" data-i18n="activities.act_2_date">January 24, 2024</div>
                            <div class="timeline-card">
                                <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Banashankari Jatra" loading="lazy" data-lightbox="/assets/images/extracted/banshankari_jathara_01.jpg" data-lightbox-group="activities" data-lightbox-alt="Banashankari Jatra">
                                <h3 data-i18n="activities.act_2_title">Banashankari Jatra & Udi-Tumbuva</h3>
                                <p data-i18n="activities.act_2_desc">Over 2,000 mothers and women were honored with the traditional offering (Udi) for Lok Kalyana during a grand cultural gathering.</p>
                            </div>
                        </div>

                        <div class="timeline-item reveal reveal--left">
                            <div class="timeline-date" data-i18n="activities.act_1_date">December 2023</div>
                            <div class="timeline-card">
                                <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="Coaching Academy" loading="lazy" data-lightbox="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" data-lightbox-group="activities" data-lightbox-alt="KAS PSI Academy">
                                <h3 data-i18n="activities.act_1_title">Launch of Free KAS & PSI Coaching Academy</h3>
                                <p data-i18n="activities.act_1_desc">Inaugurated to serve 200 deserving students with entrance exams in Navanagar. Supported by dignitaries and designed to create the next generation of civil servants.</p>
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
                <a href="/volunteer" data-route class="btn btn--outline-light magnetic" data-i18n="home.cta_volunteer">Become a Volunteer</a>
            </div>
        </section>
    `;
}
