/**
 * VVK Foundation — Home Page
 * Premium landing page with hero, features, focus areas,
 * impact stats, founder preview, initiatives, reach, and CTA.
 */

import { translate } from '../i18n.js?v=1.3.0';

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
                            <h3 data-i18n="home.focus_farmers_title">Empower Farmers</h3>
                            <p data-i18n="home.focus_farmers_desc">From cultivation to enterprise, climate resilience & data — climate-smart farming, emerging crops (millets & horticulture), FPOs, value addition, direct market linkages, and digital advisory.</p>
                        </div>
                    </div>
                    <div class="focus-card reveal reveal--up stagger-2">
                        <img src="/assets/images/extracted/international_womensday_01.jpg" alt="Women empowerment" loading="lazy">
                        <div class="focus-card__content">
                            <h3 data-i18n="home.focus_women_title">Enable Women</h3>
                            <p data-i18n="home.focus_women_desc">From the field to enterprise, leadership & health security — SHG producer companies, Ilkal handloom & food processing, digital/financial literacy, leadership seats, and cancer screening.</p>
                        </div>
                    </div>
                    <div class="focus-card reveal reveal--up stagger-3">
                        <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="Youth empowerment" loading="lazy">
                        <div class="focus-card__content">
                            <h3 data-i18n="home.focus_youth_title">Employ Youth</h3>
                            <p data-i18n="home.focus_youth_desc">From jobs to skills, enterprise & staying home by choice — new-economy skills (drones, agri-tech, cold chains), AI literacy, startup incubation, and free KAS/PSI coaching.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ 3RD ANNIVERSARY CELEBRATION & FARMER AWARDS 2026 ═══════ -->
        <section class="anniversary-feature-section" style="background: linear-gradient(135deg, #1b4332 0%, #0d2818 100%); color: #ffffff; padding: var(--space-3xl) 0; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -100px; right: -100px; width: 350px; height: 350px; background: radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
            <div style="position: absolute; bottom: -100px; left: -100px; width: 350px; height: 350px; background: radial-gradient(circle, rgba(43,147,72,0.2) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>

            <div class="container" style="position: relative; z-index: 2;">
                <div class="text-center reveal reveal--up">
                    <div class="d-inline-flex align-center gap-xs mb-sm" style="background: rgba(255,255,255,0.12); backdrop-filter: blur(8px); padding: 6px 18px; border-radius: 30px; border: 1px solid rgba(255,255,255,0.2);">
                        <i class="fas fa-award" style="color: #fbbf24;"></i>
                        <span style="font-size: 0.85rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #fbbf24;" data-i18n="home.anniversary_badge">3rd Anniversary Celebration · 2026</span>
                    </div>
                    <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.75rem); color: #ffffff; font-family: var(--font-heading); margin-top: var(--space-xs); line-height: 1.25;" data-i18n="home.anniversary_title">
                        A celebration of service. A celebration of farmers. A celebration of life.
                    </h2>
                    <p style="font-size: 1.05rem; color: rgba(255,255,255,0.88); max-width: 840px; margin: var(--space-md) auto 0; line-height: 1.6;" data-i18n="home.anniversary_desc">
                        With joy and gratitude, VVK Foundation invites you to our third anniversary celebration held under the leadership of Smt. Veena Kashappanavar and alongside her birthday celebration. Dedicated to the farmers who nurture our soil, feed our communities, and shape the future of agriculture in Bagalkot.
                    </p>

                    <!-- Key Event Date & Location Tags -->
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin: var(--space-xl) 0;">
                        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); border-radius: 12px; padding: 10px 18px; display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-calendar-check" style="color: #fbbf24; font-size: 1.15rem;"></i>
                            <span style="font-weight: 600; font-size: 0.95rem;">Held on Friday, 21 August 2026</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); border-radius: 12px; padding: 10px 18px; display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-map-marker-alt" style="color: #4ade80; font-size: 1.15rem;"></i>
                            <span style="font-weight: 600; font-size: 0.95rem;">Ambedkar Bhavan, Bagalkot</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.18); border-radius: 12px; padding: 10px 18px; display: flex; align-items: center; gap: 10px;">
                            <i class="fas fa-check-circle" style="color: #4ade80; font-size: 1.15rem;"></i>
                            <span style="font-weight: 600; font-size: 0.95rem;">Concluded with Resounding Success</span>
                        </div>
                    </div>

                    <!-- 5 Highlights of the Event -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 14px; max-width: 1080px; margin: 0 auto var(--space-xl); text-align: left;">
                        <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px;">
                            <div style="color: #fbbf24; font-weight: 800; font-size: 1.1rem; margin-bottom: 4px;">01</div>
                            <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem; margin-bottom: 4px;">Talks by Noted Figures</div>
                            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.75); line-height: 1.4;">Sustainable agriculture & future shaping of Bagalkot farming.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px;">
                            <div style="color: #fbbf24; font-weight: 800; font-size: 1.1rem; margin-bottom: 4px;">02</div>
                            <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem; margin-bottom: 4px;">Workshops & Tech Sharing</div>
                            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.75); line-height: 1.4;">Emerging crops, innovative farming practices & market growth.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px;">
                            <div style="color: #fbbf24; font-weight: 800; font-size: 1.1rem; margin-bottom: 4px;">03</div>
                            <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem; margin-bottom: 4px;">District Farmer Awards 2026</div>
                            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.75); line-height: 1.4;">Conferred honors to progressive farmers across all 9 taluks.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px;">
                            <div style="color: #fbbf24; font-weight: 800; font-size: 1.1rem; margin-bottom: 4px;">04</div>
                            <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem; margin-bottom: 4px;">Exhibition & Demonstrations</div>
                            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.75); line-height: 1.4;">Live technology and product demonstrations for cultivators.</div>
                        </div>
                        <div style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 16px;">
                            <div style="color: #fbbf24; font-weight: 800; font-size: 1.1rem; margin-bottom: 4px;">05</div>
                            <div style="font-weight: 700; color: #ffffff; font-size: 0.95rem; margin-bottom: 4px;">Farmer & Expert Interaction</div>
                            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.75); line-height: 1.4;">Knowledge exchange between farmers, experts & entrepreneurs.</div>
                        </div>
                    </div>

                    <!-- Action Links (Clean Navigation - No Application CTA) -->
                    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: var(--space-md);">
                        <a href="/initiatives" data-route class="btn magnetic" style="background: #2b9348; color: #ffffff; padding: 12px 28px; font-weight: 700; border-radius: 8px; box-shadow: 0 4px 15px rgba(43,147,72,0.4);" data-i18n="home.anniversary_btn_view">
                            <i class="fas fa-arrow-right"></i> Explore Our Ongoing Initiatives
                        </a>
                        <a href="/team" data-route class="btn btn--outline-light magnetic" style="padding: 12px 28px; font-weight: 700; border-radius: 8px;">
                            <i class="fas fa-users"></i> Meet Our Leadership & Advisors
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ FOUNDER PREVIEW ═══════ -->
        <section class="bg-secondary">
            <div class="container">
                <div class="grid-2 reveal reveal--up" style="align-items: center;">
                    <div style="text-align: center;">
                        <img src="/assets/images/founder.png" alt="Smt. Veena Vijayanand Kashappanavar" loading="lazy" style="max-width: 320px; border-radius: var(--radius-xl); box-shadow: var(--shadow-xl); margin: 0 auto;">
                    </div>
                    <div>
                        <span class="section-label"><i class="fas fa-quote-left"></i> <span data-i18n="home.founder_label">FOUNDER'S DESK</span></span>
                        <h2 data-i18n="home.founder_title">From the Founder's Desk</h2>
                        <p class="lead mt-md mb-xl" data-i18n="home.founder_desc">"True empowerment begins when we enable others to discover their own strength. At VVK Foundation, our goal is to create sustainable pathways for our youth, women, and farmers to thrive independently."</p>
                        <a href="/team" class="btn btn--primary" data-route data-i18n="home.founder_btn">Read More</a>
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

                <div class="reach-grid">
                    <div class="card reveal reveal--up stagger-1">
                        <div class="card__body text-center">
                            <h3 class="text-primary" data-i18n="home.reach_1_title">Bagalkot</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="home.reach_1_desc">District Headquarters, 3rd Anniversary Celebrations, KAS/PSI Academy & SDM Narayana Cardiac Camp</p>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-2">
                        <div class="card__body text-center">
                            <h3 class="text-primary" data-i18n="home.reach_2_title">Ilkal</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="home.reach_2_desc">Nari Shakti Women Empowerment Conference at Dasoha Bhavan & KAS/PSI Guidance Camp at Hosamani Kalyana Mantapa</p>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-3">
                        <div class="card__body text-center">
                            <h3 class="text-primary" data-i18n="home.reach_3_title">Rabakavi Banahatti</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="home.reach_3_desc">Grand Nari Shakti Convention at Ishwarlinga Ground & Handloom Community Empowerment</p>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-4">
                        <div class="card__body text-center">
                            <h3 class="text-primary" data-i18n="home.reach_4_title">Badami</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="home.reach_4_desc">Banashankari Devi Fair, Traditional Udi-Tumbuva Ritual for 2,000 Mothers & Haldi-Kumkum Gathering</p>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-5">
                        <div class="card__body text-center">
                            <h3 class="text-primary" data-i18n="home.reach_5_title">Mudhol</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="home.reach_5_desc">Free KAS & PSI Competitive Exam Youth Training Camp & Civil Service Mentorship</p>
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
                <div class="cta-actions">
                    <a href="/volunteer" data-route class="btn--cta-gold magnetic">
                        <i class="fas fa-hand-holding-heart"></i> <span data-i18n="home.cta_volunteer">Become a Volunteer</span>
                    </a>
                    <a href="/contact" data-route class="btn--cta-outline magnetic">
                        <i class="fas fa-envelope"></i> <span data-i18n="home.cta_contact">Contact Us</span>
                    </a>
                </div>
            </div>
        </section>
    `;
}
