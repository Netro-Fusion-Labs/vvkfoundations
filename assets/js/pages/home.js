/**
 * VVK Foundation — Home Page
 * Premium landing page with hero, features, focus areas,
 * impact stats, founder preview, initiatives, reach, and CTA.
 */

import { translate } from '../i18n.js';

export function renderHome() {
    return `
        <!-- ═══════ HERO ═══════ -->
        <section class="hero" id="hero">
            <div class="hero__bg">
                <img src="/assets/images/vvk_hero_ai.png" alt="VVK Foundation community empowerment" loading="eager">
            </div>
            <div class="container">
                <div class="hero__content reveal reveal--up">
                    <div class="hero__badge">
                        <i class="fas fa-seedling"></i>
                        <span data-i18n="hero.badge">VVK Foundation</span>
                    </div>
                    <h1 class="hero__title" data-i18n-html="hero.title_html">Empower. Enable. <span class="highlight">Employ.</span></h1>
                    <p class="hero__desc" data-i18n="hero.description">VVK Foundation is a catalyst for change, driving grassroots transformation in Karnataka through targeted initiatives for Farmers, Women, and Youth.</p>
                    <div class="hero__actions">
                        <a href="/initiatives" data-route class="btn btn--primary magnetic" data-i18n="hero.cta_primary">See Our Impact</a>
                        <a href="/volunteer" data-route class="btn btn--outline-light magnetic" data-i18n="hero.cta_secondary">Join the Movement</a>
                    </div>
                </div>
            </div>

            <div class="container hero__stats reveal reveal--up stagger-2">
                <div class="hero__stats-grid">
                    <div class="hero__stat">
                        <div class="hero__stat-number"><span class="counter" data-target="5000">0</span>+</div>
                        <div class="hero__stat-label" data-i18n="stats.youth">Youth Empowered</div>
                    </div>
                    <div class="hero__stat">
                        <div class="hero__stat-number"><span class="counter" data-target="2000">0</span>+</div>
                        <div class="hero__stat-label" data-i18n="stats.women">Women Honored</div>
                    </div>
                    <div class="hero__stat">
                        <div class="hero__stat-number"><span class="counter" data-target="1000">0</span>+</div>
                        <div class="hero__stat-label" data-i18n="stats.farmers">Farmers Trained</div>
                    </div>
                    <div class="hero__stat">
                        <div class="hero__stat-number"><span class="counter" data-target="50">0</span>+</div>
                        <div class="hero__stat-label" data-i18n="stats.villages">Villages Reached</div>
                    </div>
                </div>
            </div>

            <div class="scroll-indicator hide-mobile" onclick="document.getElementById('who-we-are').scrollIntoView({behavior:'smooth'})">
                <span>SCROLL</span>
                <i class="fas fa-chevron-down bounce-down"></i>
            </div>
        </section>

        <!-- ═══════ WHO WE ARE ═══════ -->
        <section class="bg-secondary" id="who-we-are">
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-info-circle"></i> <span data-i18n="home.who_label">WHO WE ARE</span></span>
                    <h2 data-i18n="home.who_title">India's Leading Grassroots Transformation Partner</h2>
                    <p data-i18n="home.who_desc">We combine deep community knowledge with structured execution to deliver seamless empowerment outcomes.</p>
                </div>

                <div class="grid-4">
                    <div class="feature-card reveal reveal--up stagger-1">
                        <div class="feature-icon"><i class="fas fa-users"></i></div>
                        <h4 data-i18n="home.feat_1_title">Community First</h4>
                        <p data-i18n="home.feat_1_desc">Driven by grassroots needs, ensuring every initiative creates direct, tangible impact.</p>
                    </div>
                    <div class="feature-card reveal reveal--up stagger-2">
                        <div class="feature-icon"><i class="fas fa-chart-line"></i></div>
                        <h4 data-i18n="home.feat_2_title">100% Impact Driven</h4>
                        <p data-i18n="home.feat_2_desc">Consistently high success rates driven by meticulous planning and strategic execution.</p>
                    </div>
                    <div class="feature-card reveal reveal--up stagger-3">
                        <div class="feature-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <h4 data-i18n="home.feat_3_title">Kalyana Karnataka</h4>
                        <p data-i18n="home.feat_3_desc">Serving communities deeply across the Kalyana Karnataka region and beyond.</p>
                    </div>
                    <div class="feature-card reveal reveal--up stagger-4">
                        <div class="feature-icon"><i class="fas fa-hands-helping"></i></div>
                        <h4 data-i18n="home.feat_4_title">End-to-End Support</h4>
                        <p data-i18n="home.feat_4_desc">From initial assessment to post-implementation — a complete lifecycle partner.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ FOCUS AREAS ═══════ -->
        <section>
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-bullseye"></i> <span data-i18n="home.focus_label">FOCUS AREAS</span></span>
                    <h2 data-i18n="home.focus_title">Empowering Three Pillars of Society</h2>
                    <p data-i18n="home.focus_desc">Our targeted programs address the unique challenges faced by farmers, women, and youth across rural Karnataka.</p>
                </div>

                <div class="grid-3">
                    <div class="focus-card reveal reveal--up stagger-1">
                        <img src="/assets/images/extracted/workshop_01.jpg" alt="Farmers empowerment" loading="lazy">
                        <div class="focus-card__content">
                            <h3 data-i18n="home.focus_farmers_title">Farmers</h3>
                            <p data-i18n="home.focus_farmers_desc">Sustainable agriculture practices and welfare programs for rural farming communities.</p>
                        </div>
                    </div>
                    <div class="focus-card reveal reveal--up stagger-2">
                        <img src="/assets/images/extracted/international_womensday_01.jpg" alt="Women empowerment" loading="lazy">
                        <div class="focus-card__content">
                            <h3 data-i18n="home.focus_women_title">Women</h3>
                            <p data-i18n="home.focus_women_desc">Cultural empowerment, economic independence, and dignity through Nari Shakti initiatives.</p>
                        </div>
                    </div>
                    <div class="focus-card reveal reveal--up stagger-3">
                        <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="Youth empowerment" loading="lazy">
                        <div class="focus-card__content">
                            <h3 data-i18n="home.focus_youth_title">Youth</h3>
                            <p data-i18n="home.focus_youth_desc">Free coaching academies for KAS & PSI exams, creating the next generation of leaders.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ FOUNDER PREVIEW ═══════ -->
        <section class="bg-secondary">
            <div class="container">
                <div class="grid-2 reveal reveal--up" style="align-items: center;">
                    <div style="text-align: center;">
                        <img src="/assets/images/founder.png" alt="Mrs. Veena Vijayanand Kashappanavar" loading="lazy" style="max-width: 320px; border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); margin: 0 auto;">
                    </div>
                    <div>
                        <span class="section-label"><i class="fas fa-quote-left"></i> <span data-i18n="home.founder_label">FOUNDER'S DESK</span></span>
                        <h2 data-i18n="home.founder_title">From the Founder's Desk</h2>
                        <p class="lead mt-md mb-xl" data-i18n="home.founder_desc">"True empowerment begins when we enable others to discover their own strength. At VVK Foundation, our goal is to create sustainable pathways for our youth, women, and farmers to thrive independently."</p>
                        <a href="/founder" class="btn btn--primary" data-route data-i18n="home.founder_btn">Read More</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ INITIATIVES PREVIEW ═══════ -->
        <section>
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-bolt"></i> <span data-i18n="home.initiatives_label">OUR INITIATIVES</span></span>
                    <h2 data-i18n="initiatives.title">Our Impact & Initiatives</h2>
                </div>

                <div class="grid-3">
                    <div class="img-card reveal reveal--up stagger-1">
                        <div class="img-zoom"><img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="Youth Coaching" loading="lazy"></div>
                        <div class="img-card__body">
                            <h3 data-i18n="initiatives.youth_title">Youth Education & Coaching</h3>
                            <p class="line-clamp-3" data-i18n="initiatives.youth_desc">Our free coaching academies for competitive exams (KAS & PSI) have opened doors for hundreds of rural students.</p>
                        </div>
                    </div>
                    <div class="img-card reveal reveal--up stagger-2">
                        <div class="img-zoom"><img src="/assets/images/extracted/international_womensday_02.jpg" alt="Nari Shakti" loading="lazy"></div>
                        <div class="img-card__body">
                            <h3 data-i18n="initiatives.women_title">Women Empowerment (Nari Shakti)</h3>
                            <p class="line-clamp-3" data-i18n="initiatives.women_desc">Through massive 'Nari Shakti' conferences and cultural programs, we honor and uplift thousands of women.</p>
                        </div>
                    </div>
                    <div class="img-card reveal reveal--up stagger-3">
                        <div class="img-zoom"><img src="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" alt="Health Camp" loading="lazy"></div>
                        <div class="img-card__body">
                            <h3 data-i18n="initiatives.health_title">Community Healthcare</h3>
                            <p class="line-clamp-3" data-i18n="initiatives.health_desc">In collaboration with SDM Narayana Hrudayalaya, we organize mega cardiac health check-up camps.</p>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-2xl reveal reveal--up">
                    <a href="/initiatives" data-route class="btn btn--outline magnetic" data-i18n="home.view_all_initiatives">View All Initiatives</a>
                </div>
            </div>
        </section>

        <!-- ═══════ GEOGRAPHICAL REACH ═══════ -->
        <section class="bg-secondary">
            <div class="container text-center">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-globe-asia"></i> <span data-i18n="home.reach_label">OUR REACH</span></span>
                    <h2 data-i18n="home.reach_title">Our Geographical Reach</h2>
                    <p data-i18n="home.reach_desc">Creating deep-rooted impact across key regions in Karnataka, focusing on rural and semi-urban communities.</p>
                </div>

                <div class="grid-3">
                    <div class="card reveal reveal--up stagger-1">
                        <div class="card__body text-center">
                            <h3 class="text-primary" data-i18n="home.reach_1_title">Bagalkot</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="home.reach_1_desc">District Headquarters & Core Operations</p>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-2">
                        <div class="card__body text-center">
                            <h3 class="text-primary" data-i18n="home.reach_2_title">Ilkal</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="home.reach_2_desc">Women Empowerment Conferences</p>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-3">
                        <div class="card__body text-center">
                            <h3 class="text-primary" data-i18n="home.reach_3_title">Banahatti</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="home.reach_3_desc">Cultural & Healthcare Initiatives</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ CTA ═══════ -->
        <section class="cta-section">
            <div class="container reveal reveal--up">
                <h2 data-i18n="home.cta_title">Be Part of the Change</h2>
                <p data-i18n="home.cta_desc">Join thousands of volunteers and supporters who are making a difference in the lives of farmers, women, and youth across Karnataka.</p>
                <div class="d-flex gap-md justify-center flex-wrap">
                    <a href="/volunteer" data-route class="btn btn--outline-light magnetic" data-i18n="home.cta_volunteer">Become a Volunteer</a>
                    <a href="/contact" data-route class="btn btn--outline-light magnetic" data-i18n="home.cta_contact">Contact Us</a>
                </div>
            </div>
        </section>
    `;
}
