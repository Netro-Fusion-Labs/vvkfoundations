/**
 * VVK Foundation — Home Page
 * Premium landing page with hero, features, focus areas,
 * impact stats, founder preview, initiatives, reach, and CTA.
 */

import { translate } from '../i18n.js?v=1.2.1';

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
                        <h4 data-i18n="home.feat_3_title">Mumbai Karnataka</h4>
                        <p data-i18n="home.feat_3_desc">Serving communities deeply across the Mumbai Karnataka region and beyond.</p>
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

        <!-- ═══════ SOCIAL & COMMUNITY HUBS (INSTAGRAM, FACEBOOK, YOUTUBE) ═══════ -->
        <section class="social-hub-section" id="social-hub">
            <div class="container">
                <div class="section-header reveal reveal--up text-center">
                    <span class="section-label section-label--social"><i class="fas fa-share-alt"></i> <span data-i18n="home.social_label">SOCIAL & COMMUNITY HUBS</span></span>
                    <h2 data-i18n="home.social_title">Stay Connected with VVK Foundation</h2>
                    <p data-i18n="home.social_desc">Follow our real-time updates, community stories, and video highlights on Instagram, Facebook, and YouTube.</p>
                </div>

                <!-- Social Hub Grid (3 Columns for Instagram, Facebook, YouTube) -->
                <div class="social-hub-grid">

                    <!-- ── 1. INSTAGRAM FEED HUB ── -->
                    <div class="social-hub-card insta-hub-card reveal reveal--up stagger-1">
                        <div class="social-hub-header insta-header">
                            <div class="social-platform-badge">
                                <i class="fab fa-instagram"></i> Instagram
                            </div>
                            <div class="social-profile-info">
                                <img src="/assets/images/logo.png" alt="VVK Foundation Instagram" class="social-avatar">
                                <div>
                                    <h4>vvkfoundation.in <i class="fas fa-check-circle verified-icon"></i></h4>
                                    <span class="social-stats-badge">10K+ Followers • 150+ Posts</span>
                                </div>
                            </div>
                        </div>
                        <div class="social-hub-body">
                            <div class="social-mini-grid">
                                <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="social-mini-item">
                                    <img src="/assets/images/extracted/international_womensday_01.jpg" alt="Nari Shakti Conference" loading="lazy">
                                    <div class="social-overlay"><span><i class="fas fa-heart"></i> 1.4k</span></div>
                                </a>
                                <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="social-mini-item">
                                    <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="KAS & PSI Academy" loading="lazy">
                                    <div class="social-overlay"><span><i class="fas fa-heart"></i> 2.1k</span></div>
                                </a>
                                <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="social-mini-item">
                                    <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" alt="Mega Health Camp" loading="lazy">
                                    <div class="social-overlay"><span><i class="fas fa-heart"></i> 1.8k</span></div>
                                </a>
                                <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="social-mini-item">
                                    <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Banashankari Jatra" loading="lazy">
                                    <div class="social-overlay"><span><i class="fas fa-heart"></i> 3.2k</span></div>
                                </a>
                            </div>
                            <p class="social-caption-preview">🌾 Real-time updates, event highlights, and community stories on Instagram.</p>
                        </div>
                        <div class="social-hub-footer">
                            <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="btn btn--insta btn--block magnetic" data-i18n="home.insta_follow">
                                <i class="fab fa-instagram"></i> Follow on Instagram
                            </a>
                        </div>
                    </div>

                    <!-- ── 2. FACEBOOK FEED HUB ── -->
                    <div class="social-hub-card fb-hub-card reveal reveal--up stagger-2">
                        <div class="social-hub-header fb-header">
                            <div class="social-platform-badge">
                                <i class="fab fa-facebook-f"></i> Facebook
                            </div>
                            <div class="social-profile-info">
                                <img src="/assets/images/logo.png" alt="VVK Foundation Facebook" class="social-avatar">
                                <div>
                                    <h4>VVK Foundation <i class="fas fa-check-circle verified-icon"></i></h4>
                                    <span class="social-stats-badge">Official Facebook Page</span>
                                </div>
                            </div>
                        </div>
                        <div class="social-hub-body">
                            <a href="https://www.facebook.com/VVKFoundation.in/" target="_blank" rel="noopener noreferrer" class="fb-post-preview" aria-label="Visit VVK Foundation Facebook Page">
                                <div class="fb-post-preview-header">
                                    <img src="/assets/images/logo.png" alt="VVK Foundation" class="fb-post-avatar">
                                    <div class="fb-post-meta">
                                        <strong>VVK Foundation <i class="fas fa-check-circle verified-icon"></i></strong>
                                        <small>Official Page · <i class="fas fa-globe-americas"></i></small>
                                    </div>
                                    <i class="fab fa-facebook-f fb-post-icon"></i>
                                </div>
                                <div class="fb-post-media">
                                    <img src="/assets/images/extracted/workshop_01.jpg" alt="VVK Foundation Community Event" loading="lazy">
                                    <span class="fb-post-badge"><i class="fab fa-facebook-f"></i> View Page</span>
                                </div>
                                <div class="fb-post-stats">
                                    <div class="fb-post-reactions">
                                        <span class="fb-reaction-icon fb-reaction-like"><i class="fas fa-thumbs-up"></i></span>
                                        <span class="fb-reaction-icon fb-reaction-love"><i class="fas fa-heart"></i></span>
                                        <span class="fb-reaction-count">2.4k</span>
                                    </div>
                                    <span class="fb-stats-text">185 comments · 92 shares</span>
                                </div>
                            </a>
                            <p class="social-caption-preview">📢 Official updates, news announcements, and live event broadcasts on Facebook.</p>
                        </div>
                        <div class="social-hub-footer">
                            <a href="https://www.facebook.com/VVKFoundation.in/" target="_blank" rel="noopener noreferrer" class="btn btn--fb btn--block magnetic" data-i18n="home.fb_follow">
                                <i class="fab fa-facebook-f"></i> Follow on Facebook
                            </a>
                        </div>
                    </div>

                    <!-- ── 3. YOUTUBE VIDEO HIGHLIGHTS HUB ── -->
                    <div class="social-hub-card yt-hub-card reveal reveal--up stagger-3">
                        <div class="social-hub-header yt-header">
                            <div class="social-platform-badge">
                                <i class="fab fa-youtube"></i> YouTube
                            </div>
                            <div class="social-profile-info">
                                <img src="/assets/images/logo.png" alt="VVK Foundation YouTube" class="social-avatar">
                                <div>
                                    <h4>@VVKFoundation_in <i class="fas fa-check-circle verified-icon"></i></h4>
                                    <span class="social-stats-badge">Official YouTube Channel</span>
                                </div>
                            </div>
                        </div>
                        <div class="social-hub-body">
                            <div class="yt-embed-box" id="yt-player-container">
                                <div class="yt-video-thumbnail-box">
                                    <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="VVK Foundation YouTube Video" loading="lazy">
                                    <button type="button" class="yt-play-button" id="yt-play-btn" aria-label="Play YouTube Video" onclick="this.parentElement.innerHTML='<iframe src=\'https://www.youtube-nocookie.com/embed/5qap5aO4i9A?autoplay=1\' class=\'yt-iframe\' width=\'100%\' height=\'240\' frameborder=\'0\' allow=\'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\' allowfullscreen title=\'VVK Foundation YouTube Video\'></iframe>';">
                                        <i class="fas fa-play"></i>
                                    </button>
                                    <span class="yt-duration">PLAY VIDEO</span>
                                </div>
                            </div>
                            <p class="social-caption-preview">▶️ Play community transformation videos & event highlights on YouTube.</p>
                        </div>
                        <div class="social-hub-footer">
                            <a href="https://www.youtube.com/@VVKFoundation_in" target="_blank" rel="noopener noreferrer" class="btn btn--yt btn--block magnetic" data-i18n="home.yt_subscribe">
                                <i class="fab fa-youtube"></i> Subscribe on YouTube
                            </a>
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
