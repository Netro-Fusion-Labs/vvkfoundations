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

        <section class="about-section about-section--mv">
            <div class="container">
                <div class="about-mv-grid">
                    <div class="about-mv-card about-mv-card--mission reveal reveal--left">
                        <span class="section-label"><i class="fas fa-bullseye"></i> MISSION</span>
                        <h2 data-i18n="about.mission_title">Our Mission</h2>
                        <p class="lead mt-md" data-i18n="about.mission_desc">To empower marginalized communities in Karnataka—specifically farmers, women, and youth—by equipping them with resources, sustainable agricultural technologies, enterprise skills, healthcare, and education to lead self-reliant, prosperous lives.</p>
                    </div>
                    <div class="about-mv-card about-mv-card--vision reveal reveal--right">
                        <span class="section-label"><i class="fas fa-eye"></i> VISION</span>
                        <h2 data-i18n="about.vision_title">Our Vision</h2>
                        <p class="lead mt-md" data-i18n="about.vision_desc">We envision a self-reliant and equitable rural society where farmers operate as resilient entrepreneurs, women hold leadership seats across enterprise and governance, and youth find dignity and high-value careers within their home districts.</p>
                    </div>
                </div>

                <!-- Trust Registration & Charter Banner -->
                <div class="about-trust reveal reveal--up">
                    <span class="about-trust__icon"><i class="fas fa-certificate"></i></span>
                    <div>
                        <div class="about-trust__reg" data-i18n="about.trust_reg">VVK Foundation Charitable Trust (Reg. No. BGK-4-00062-2023-24, Ilkal, Bagalkot)</div>
                        <p class="about-trust__motto" data-i18n="about.motto">With Farmers. For Farmers. For a Better Tomorrow.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Three Commitments (Brochure Roadmap) -->
        <section class="bg-secondary about-section about-section--commitments">
            <div class="container">
                <div class="section-header text-center reveal reveal--up">
                    <span class="section-label"><i class="fas fa-compass"></i> <span>2026 ONWARDS</span></span>
                    <h2>Three Commitments</h2>
                    <p class="section-desc">The Foundation began with farmers, women and youth in Bagalkot district. Three years on, the work is widening — from cultivation to enterprise, from relief to skills, from a district to a community that holds its own in a digital and climate-pressed economy.</p>
                </div>

                <div class="commitments-grid">
                    <!-- Pillar 1: Farmers -->
                    <div class="commitment-card commitment-card--farmers reveal reveal--up stagger-1">
                        <div class="commitment-card__intro">
                            <div class="commitment-card__header">
                                <span class="commitment-card__icon-box"><i class="fas fa-seedling"></i></span>
                                <h3 class="commitment-card__title">Empower Farmers</h3>
                            </div>
                            <div class="commitment-card__tagline">
                                From cultivation &rarr; to enterprise, climate resilience &amp; data
                            </div>
                            <p class="commitment-card__lead">Recognition and knowledge are the starting point. The longer aim is a farmer in Bagalkot who reads a weather advisory, prices his own produce, holds a share in a producer company, and treats the farm as a business that can survive a bad season.</p>
                        </div>
                        <ul class="commitment-card__list">
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Climate-smart cultivation:</strong> Soil health, water budgeting, micro-irrigation and drought-tolerant planning.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Emerging crops:</strong> Millets, horticulture, medicinal and aromatic plants, apiculture and allied enterprise.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Collectives that hold:</strong> FPOs and producer companies for aggregation, grading and bargaining power.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Value addition close to the farm:</strong> Primary processing, cold chain, packaging and brand identity for Bagalkot produce.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Market reach:</strong> Digital marketplaces, direct-to-consumer sales, institutional buyers and export readiness.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Digital and AI advisory:</strong> Farm records, drone and sensor services, AgriStack-linked entitlements.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Finance that reaches:</strong> Credit literacy, crop insurance uptake and scheme access.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Energy and circularity:</strong> Solar pumping, biomass and farm-waste reuse, carbon literacy.</div>
                            </li>
                        </ul>
                    </div>

                    <!-- Pillar 2: Women -->
                    <div class="commitment-card commitment-card--women reveal reveal--up stagger-2">
                        <div class="commitment-card__intro">
                            <div class="commitment-card__header">
                                <span class="commitment-card__icon-box"><i class="fas fa-female"></i></span>
                                <h3 class="commitment-card__title">Enable Women</h3>
                            </div>
                            <div class="commitment-card__tagline">
                                From the field &rarr; to enterprise, leadership &amp; health security
                            </div>
                            <p class="commitment-card__lead">Women already carry much of the farm. The work ahead is to make that visible and bankable — as owners, board members and entrepreneurs, and in sectors well beyond agriculture.</p>
                        </div>
                        <ul class="commitment-card__list">
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Women-led enterprise:</strong> Self-help groups growing into producer companies and registered businesses.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Beyond the farm:</strong> Food processing, garments and Ilkal handloom, retail, care and service micro-enterprise.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Digital and financial literacy:</strong> Smartphones, online payments, bookkeeping, banking and credit.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Leadership seats:</strong> Panchayat, cooperative, FPO and society boards.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Health security:</strong> Continuing cancer awareness, screening camps and nutrition.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Girls' education:</strong> Guidance, scholarship support and pathways into higher study.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Safety and mobility:</strong> Transport, workplace safety and legal awareness.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Recognition:</strong> A woman farmer category judged in its own right, not as a sub-category.</div>
                            </li>
                        </ul>
                    </div>

                    <!-- Pillar 3: Youth -->
                    <div class="commitment-card commitment-card--youth reveal reveal--up stagger-3">
                        <div class="commitment-card__intro">
                            <div class="commitment-card__header">
                                <span class="commitment-card__icon-box"><i class="fas fa-graduation-cap"></i></span>
                                <h3 class="commitment-card__title">Employ Youth</h3>
                            </div>
                            <div class="commitment-card__tagline">
                                From jobs &rarr; to skills, enterprise &amp; staying home by choice
                            </div>
                            <p class="commitment-card__lead">Bagalkot's young people should not have to leave the district to find work worth doing. The aim is a pipeline that runs from school guidance to skilling to enterprise, in agriculture and in everything growing around it.</p>
                        </div>
                        <ul class="commitment-card__list">
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>New-economy skills:</strong> Agri-tech, drone operation, cold chain, logistics, food processing and machinery.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Digital and AI literacy:</strong> The tools employers now assume, plus English and communication.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Entrepreneurship:</strong> Incubation, mentoring and links to funding for rural startups.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Careers in public service:</strong> Continuing free KAS and PSI coaching, and district-level guidance workshops.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Industry linkage:</strong> Job fairs, apprenticeships and placement tie-ups with companies.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Second-generation farming:</strong> Making a return to the land a considered choice, not a fallback.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Green and allied sectors:</strong> Renewable energy, water management, tourism and heritage crafts.</div>
                            </li>
                            <li class="commitment-item">
                                <span class="commitment-item__dot"></span>
                                <div><strong>Sport, culture and civic life:</strong> Leadership built outside the classroom.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Core Historical Interventions -->
        <section class="about-section about-section--interventions">
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-tasks"></i> <span data-i18n="about.obj_label">CORE INTERVENTIONS</span></span>
                    <h2 data-i18n="about.objectives_title">Core Interventions</h2>
                </div>

                <div class="about-core-grid">
                    <div class="card reveal reveal--up stagger-1">
                        <div class="card__body">
                            <div class="feature-icon"><i class="fas fa-graduation-cap"></i></div>
                            <div>
                                <h4 data-i18n="about.obj_1_title">Quality Education</h4>
                                <p class="text-sm mt-xs" data-i18n="about.obj_1">Bridging the gap for rural youth through intensive coaching and mentorship for KAS & PSI exams.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-2">
                        <div class="card__body">
                            <div class="feature-icon"><i class="fas fa-female"></i></div>
                            <div>
                                <h4 data-i18n="about.obj_2_title">Women's Empowerment</h4>
                                <p class="text-sm mt-xs" data-i18n="about.obj_2">Fostering economic independence and cultural reverence through Nari Shakti programs.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-3">
                        <div class="card__body">
                            <div class="feature-icon"><i class="fas fa-heartbeat"></i></div>
                            <div>
                                <h4 data-i18n="about.obj_3_title">Rural Healthcare</h4>
                                <p class="text-sm mt-xs" data-i18n="about.obj_3">Bringing specialized medical camps to underserved communities in partnership with top hospitals.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-4">
                        <div class="card__body">
                            <div class="feature-icon"><i class="fas fa-leaf"></i></div>
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
        <section class="bg-secondary about-section about-section--gallery">
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-camera"></i> <span data-i18n="founder.engagements_title">Community Engagements</span></span>
                    <h2 data-i18n="founder.engagements_title">Community Engagements</h2>
                    <p class="section-desc">Snapshots of our leadership, volunteers, and grassroots programs touching lives across Karnataka.</p>
                </div>

                <div class="about-gallery">
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
