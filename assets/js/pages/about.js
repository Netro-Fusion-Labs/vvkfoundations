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
                <div class="grid-2" style="align-items: flex-start; margin-bottom: var(--space-2xl);">
                    <div class="reveal reveal--left">
                        <span class="section-label"><i class="fas fa-bullseye"></i> MISSION</span>
                        <h2 data-i18n="about.mission_title">Our Mission</h2>
                        <p class="lead mt-md" data-i18n="about.mission_desc">To empower marginalized communities in Karnataka—specifically farmers, women, and youth—by equipping them with resources, sustainable agricultural technologies, enterprise skills, healthcare, and education to lead self-reliant, prosperous lives.</p>
                    </div>
                    <div class="reveal reveal--right">
                        <span class="section-label"><i class="fas fa-eye"></i> VISION</span>
                        <h2 data-i18n="about.vision_title">Our Vision</h2>
                        <p class="lead mt-md" data-i18n="about.vision_desc">We envision a self-reliant and equitable rural society where farmers operate as resilient entrepreneurs, women hold leadership seats across enterprise and governance, and youth find dignity and high-value careers within their home districts.</p>
                    </div>
                </div>

                <!-- Trust Registration & Charter Banner -->
                <div class="reveal reveal--up" style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 16px; padding: 20px 24px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;">
                    <div>
                        <div style="font-weight: 700; color: #166534; font-size: 1.05rem;" data-i18n="about.trust_reg">
                            <i class="fas fa-certificate" style="color: #2b9348; margin-right: 8px;"></i> VVK Foundation Charitable Trust (Reg. No. BGK-4-00062-2023-24, Ilkal, Bagalkot)
                        </div>
                        <p style="color: #15803d; font-size: 0.9rem; margin-top: 4px;" data-i18n="about.motto">
                            With Farmers. For Farmers. For a Better Tomorrow.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Three Years, Three Commitments (Brochure Roadmap) -->
        <section class="bg-secondary">
            <div class="container">
                <div class="section-header text-center reveal reveal--up">
                    <span class="section-label"><i class="fas fa-compass"></i> <span>2026 ONWARDS</span></span>
                    <h2>Three Years, Three Commitments</h2>
                    <p class="section-desc">The Foundation began with farmers, women and youth in Bagalkot district. Three years on, the work is widening — from cultivation to enterprise, from relief to skills, from a district to a community that holds its own in a digital and climate-pressed economy.</p>
                </div>

                <div class="commitments-grid">
                    <!-- Pillar 1: Farmers -->
                    <div class="commitment-card commitment-card--farmers reveal reveal--up stagger-1">
                        <div class="commitment-card__header">
                            <span class="commitment-card__icon-box"><i class="fas fa-seedling"></i></span>
                            <h3 class="commitment-card__title">Empower Farmers</h3>
                        </div>
                        <div class="commitment-card__tagline">
                            From cultivation &rarr; to enterprise, climate resilience & data
                        </div>
                        <ul class="commitment-card__list">
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Climate-smart cultivation:</strong> Soil health, water budgeting, micro-irrigation, drought-tolerant planning.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Emerging crops:</strong> Millets, horticulture, medicinal/aromatic plants, apiculture.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Collectives that hold:</strong> FPOs and producer companies for aggregation, grading & bargaining power.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Value addition close to farm:</strong> Primary processing, cold chains, packaging & Bagalkot brand identity.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Digital & AI advisory:</strong> AgriStack-linked entitlements, drone services, farm records.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Clean energy:</strong> Solar pumping, biomass reuse, and carbon literacy.</div>
                            </li>
                        </ul>
                    </div>

                    <!-- Pillar 2: Women -->
                    <div class="commitment-card commitment-card--women reveal reveal--up stagger-2">
                        <div class="commitment-card__header">
                            <span class="commitment-card__icon-box"><i class="fas fa-female"></i></span>
                            <h3 class="commitment-card__title">Enable Women</h3>
                        </div>
                        <div class="commitment-card__tagline">
                            From the field &rarr; to enterprise, leadership & health security
                        </div>
                        <ul class="commitment-card__list">
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Women-led enterprise:</strong> SHGs growing into producer companies and registered micro-enterprises.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Beyond the farm:</strong> Food processing, garments, Ilkal handloom, retail & care services.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Digital & financial literacy:</strong> Smart banking, UPI payments, bookkeeping & credit access.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Leadership seats:</strong> Panchayat, cooperative society, and FPO board representation.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Health security:</strong> Breast cancer awareness, screening camps, and nutrition.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Equal recognition:</strong> Woman farmer category judged in its own right.</div>
                            </li>
                        </ul>
                    </div>

                    <!-- Pillar 3: Youth -->
                    <div class="commitment-card commitment-card--youth reveal reveal--up stagger-3">
                        <div class="commitment-card__header">
                            <span class="commitment-card__icon-box"><i class="fas fa-graduation-cap"></i></span>
                            <h3 class="commitment-card__title">Employ Youth</h3>
                        </div>
                        <div class="commitment-card__tagline">
                            From jobs &rarr; to skills, enterprise & staying home by choice
                        </div>
                        <ul class="commitment-card__list">
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>New-economy skills:</strong> Agri-tech, drone piloting, cold chain logistics, food processing machinery.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Digital & AI literacy:</strong> Tech tools, data workflows, English & professional communication.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Rural entrepreneurship:</strong> Startup incubation, mentorship, and funding tie-ups.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Public service careers:</strong> Continuing free KAS and PSI civil services coaching academy.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Second-generation farming:</strong> Returning to the land as a viable, technology-driven choice.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Green sectors:</strong> Renewable energy, watershed management, and heritage crafts.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Core Historical Interventions -->
        <section>
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

        <!-- Community Engagements Section -->
        <section>
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-camera"></i> <span data-i18n="founder.engagements_title">Community Engagements</span></span>
                    <h2 data-i18n="founder.engagements_title">Community Engagements</h2>
                    <p class="section-desc">Snapshots of our leadership, volunteers, and grassroots programs touching lives across Karnataka.</p>
                </div>

                <div class="founder-photos">
                    <img src="/assets/images/extracted/international_womensday_01.jpg" alt="Community members at Women's Day" loading="lazy" class="reveal reveal--up stagger-1" data-lightbox="/assets/images/extracted/international_womensday_01.jpg" data-lightbox-group="community" data-lightbox-alt="International Women's Day">
                    <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Cultural gathering at Banashankari" loading="lazy" class="reveal reveal--up stagger-2" data-lightbox="/assets/images/extracted/banshankari_jathara_01.jpg" data-lightbox-group="community" data-lightbox-alt="Banashankari Jatra Gathering">
                    <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="Coaching academy launch ceremony" loading="lazy" class="reveal reveal--up stagger-3" data-lightbox="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" data-lightbox-group="community" data-lightbox-alt="KAS PSI Academy Launch">
                </div>
            </div>
        </section>

        <section class="cta-section">
            <div class="container reveal reveal--up">
                <h2 data-i18n="home.cta_title">Be Part of the Change</h2>
                <p data-i18n="home.cta_desc">Join thousands of supporters making a difference across Karnataka.</p>
                <div class="cta-actions">
                    <a href="/contact" data-route class="btn--cta-gold magnetic">
                        <i class="fas fa-envelope"></i> <span data-i18n="home.cta_contact">Contact Us</span>
                    </a>
                </div>
            </div>
        </section>
    `;
}
