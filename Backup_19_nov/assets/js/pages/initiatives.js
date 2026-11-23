/**
 * VVK Foundation — Initiatives & Impact Page
 * Comprehensive record of documented community initiatives, multi-image event galleries,
 * spiritual and administrative dignitaries, and verified grassroots outcomes.
 */

export function renderInitiatives() {
    return `
        <!-- ═══════ PAGE HERO ═══════ -->
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs">
                    <a href="/" data-route>Home</a>
                    <span class="separator"><i class="fas fa-chevron-right"></i></span>
                    <span class="current" data-i18n="nav.initiatives">Our Impact</span>
                </div>
                <h1 data-i18n="initiatives.title">Our Impact & Initiatives</h1>
                <p data-i18n="initiatives.subtitle">Documented programs and events that are transforming communities across Karnataka.</p>
            </div>
        </section>

        <!-- ═══════ IMPACT AT A GLANCE (METRICS) ═══════ -->
        <section class="bg-secondary" style="padding: var(--space-2xl) 0;">
            <div class="container">
                <div class="section-header text-center reveal reveal--up" style="margin-bottom: var(--space-lg);">
                    <span class="section-label"><i class="fas fa-chart-line"></i> <span data-i18n="initiatives.metrics_title">GRASSROOTS IMPACT AT A GLANCE</span></span>
                </div>
                <div class="impact-metrics-row">
                    <div class="metric-stat-card reveal reveal--up stagger-1">
                        <div class="metric-stat-num" data-i18n="initiatives.stat_mothers_num">2,000+</div>
                        <div class="metric-stat-label" data-i18n="initiatives.stat_mothers_label">Mothers & Women Honored</div>
                        <div class="metric-stat-sub" data-i18n="initiatives.stat_mothers_sub">Sacred Udi-Tumbuva Rituals at Badami</div>
                    </div>
                    <div class="metric-stat-card reveal reveal--up stagger-2">
                        <div class="metric-stat-num" data-i18n="initiatives.stat_cardiac_num">1,500+</div>
                        <div class="metric-stat-label" data-i18n="initiatives.stat_cardiac_label">Patients Screened & Treated</div>
                        <div class="metric-stat-sub" data-i18n="initiatives.stat_cardiac_sub">Free SDM Narayana Cardiac Camp</div>
                    </div>
                    <div class="metric-stat-card reveal reveal--up stagger-3">
                        <div class="metric-stat-num" data-i18n="initiatives.stat_students_num">200+</div>
                        <div class="metric-stat-label" data-i18n="initiatives.stat_students_label">Aspirants Coached Free</div>
                        <div class="metric-stat-sub" data-i18n="initiatives.stat_students_sub">Comprehensive KAS & PSI Academy</div>
                    </div>
                    <div class="metric-stat-card reveal reveal--up stagger-4">
                        <div class="metric-stat-num" data-i18n="initiatives.stat_taluks_num">9</div>
                        <div class="metric-stat-label" data-i18n="initiatives.stat_taluks_label">Taluks Recognized</div>
                        <div class="metric-stat-sub" data-i18n="initiatives.stat_taluks_sub">District Best Farmer Awards 2026</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ CORE STRATEGIC PILLARS ═══════ -->
        <section>
            <div class="container">
                <div class="section-header text-center reveal reveal--up">
                    <span class="section-label"><i class="fas fa-bullseye"></i> <span data-i18n="home.pillars_label">STRATEGIC FOCUS</span></span>
                    <h2 data-i18n="initiatives.pillars_title">Strategic Domains of Grassroots Service</h2>
                </div>

                <div class="grid-4" style="margin-top: var(--space-xl);">
                    <!-- 1. Health -->
                    <div class="card reveal reveal--up stagger-1">
                        <div class="card__body">
                            <div class="mb-sm" style="color: var(--clr-primary); font-size: 2rem;"><i class="fas fa-heartbeat"></i></div>
                            <h3 style="font-size: 1.15rem; margin-bottom: 8px;" data-i18n="initiatives.health_title">Community Healthcare</h3>
                            <p class="text-sm text-muted" data-i18n="initiatives.health_desc">In collaboration with SDM Narayana Hrudayalaya, we organize mega cardiac health check-up camps providing expert consultations, free ECGs, and medicines to rural families.</p>
                        </div>
                    </div>
                    <!-- 2. Women -->
                    <div class="card reveal reveal--up stagger-2">
                        <div class="card__body">
                            <div class="mb-sm" style="color: #9333ea; font-size: 2rem;"><i class="fas fa-female"></i></div>
                            <h3 style="font-size: 1.15rem; margin-bottom: 8px;" data-i18n="initiatives.women_title">Women Empowerment (Nari Shakti)</h3>
                            <p class="text-sm text-muted" data-i18n="initiatives.women_desc">Through massive 'Nari Shakti' conferences and cultural programs, we honor and uplift thousands of women, supporting self-help groups and weavers.</p>
                        </div>
                    </div>
                    <!-- 3. Education -->
                    <div class="card reveal reveal--up stagger-3">
                        <div class="card__body">
                            <div class="mb-sm" style="color: #2563eb; font-size: 2rem;"><i class="fas fa-user-graduate"></i></div>
                            <h3 style="font-size: 1.15rem; margin-bottom: 8px;" data-i18n="initiatives.youth_title">Youth Education & Coaching</h3>
                            <p class="text-sm text-muted" data-i18n="initiatives.youth_desc">Our free coaching academies for competitive exams (KAS & PSI) have opened doors for hundreds of rural students with guidance from administrators and academy experts.</p>
                        </div>
                    </div>
                    <!-- 4. Agriculture -->
                    <div class="card reveal reveal--up stagger-4">
                        <div class="card__body">
                            <div class="mb-sm" style="color: #d97706; font-size: 2rem;"><i class="fas fa-seedling"></i></div>
                            <h3 style="font-size: 1.15rem; margin-bottom: 8px;" data-i18n="initiatives.farmers_title">Agrarian Innovation & Best Farmer Awards</h3>
                            <p class="text-sm text-muted" data-i18n="initiatives.farmers_desc">Dedicated to empowering Bagalkot's agricultural backbone through expert agronomy seminars, direct display of innovative farm products, and prestigious district-level recognitions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ IN-DEPTH DOCUMENTED EVENT SHOWCASES ═══════ -->
        <section class="bg-secondary">
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-photo-video"></i> <span data-i18n="news.recent_label">GROUND UPDATES</span></span>
                    <h2 data-i18n="initiatives.showcase_title">Documented Flagship Programs & Event Showcases</h2>
                    <p data-i18n="initiatives.showcase_desc">A detailed record of ground-level events, multi-image galleries, reverent leadership, and verified community outcomes.</p>
                </div>

                <!-- ── SHOWCASE 1: FREE MEGA CARDIAC HEALTH CHECK-UP CAMP ── -->
                <div class="initiative-feature-card reveal reveal--up">
                    <div class="initiative-feature-header">
                        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
                            <span class="badge" style="background: #dc2626; color: #fff; font-weight: 700;"><i class="fas fa-heartbeat"></i> Healthcare Mission</span>
                            <span class="badge badge--green">Founder's Birthday</span>
                            <span class="badge badge--outline">SDM Narayana Hrudayalaya Partner</span>
                        </div>
                        <h3 data-i18n="news.cardiac_title">Free Cardiac Health Check-up Camp Organized on Founder's Birthday</h3>
                        <div class="initiative-meta-row">
                            <span class="initiative-meta-item"><i class="far fa-calendar-alt"></i> <strong data-i18n="news.cardiac_date">August 21, 2024</strong></span>
                            <span class="initiative-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.cardiac_venue">District Hospital & SDM Narayana Hrudayalaya Collaboration, Bagalkot</span></span>
                        </div>
                    </div>

                    <p class="text-muted" style="line-height: 1.7;" data-i18n="news.cardiac_desc">On the occasion of the founder's birthday, under the leadership of Smt. Veena Kashappanavar, the foundation organized a comprehensive free cardiac health check-up camp in collaboration with SDM Narayana Hrudayalaya and Bagalkot District Hospital. Leading cardiologists provided free specialist consultations, diagnostic ECG tests, and medical counseling to rural patients from all across the district.</p>

                    <!-- Dignitaries Box -->
                    <div class="initiative-dignitaries-callout">
                        <strong data-i18n="initiatives.dignitaries_label">Key Guests & Spiritual Blessings:</strong>
                        <span data-i18n="news.cardiac_dignitaries">Divine Presence: Bhovi, Valmiki, Bhagiratha & Siddanakolla Peetha Swamijis · DC Sangappa · CEO Shashidhar Kurer · S.G. Nanjayyanamath · Mahesh Koni</span>
                    </div>

                    <!-- 3-Photo Gallery Grid -->
                    <div class="initiative-photo-grid initiative-photo-grid--3">
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Inauguration with Seers and District Leadership">
                                <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" alt="Health Camp Inauguration" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Inauguration with Seers & District Leadership</span>
                        </div>
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/mega_cardiac_medical_health_camp_02.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Specialist Cardiac Consultations and Diagnostic Screenings">
                                <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_02.jpg" alt="Cardiac Diagnostic Screenings" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Specialist Cardiac Diagnostic Screening</span>
                        </div>
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/mega_cardiac_medical_health_camp_03.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Community Consultation and Medication Distribution">
                                <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_03.jpg" alt="Medication Distribution" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Patient Consultation & Free Medication</span>
                        </div>
                    </div>

                    <!-- Outcomes -->
                    <ul class="initiative-outcomes-list">
                        <li><i class="fas fa-check-circle"></i> <span>Screened hundreds of underprivileged rural patients with free ECG and cardiac evaluations</span></li>
                        <li><i class="fas fa-check-circle"></i> <span>Supplied complimentary life-saving prescription medicines to detected cases</span></li>
                        <li><i class="fas fa-check-circle"></i> <span>Direct guidance from SDM Narayana Hrudayalaya expert cardiac specialists</span></li>
                    </ul>
                </div>

                <!-- ── SHOWCASE 2: NARI SHAKTI CONVENTIONS (ILKAL & BANAHATTI) ── -->
                <div class="initiative-feature-card reveal reveal--up">
                    <div class="initiative-feature-header">
                        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
                            <span class="badge" style="background: #9333ea; color: #fff; font-weight: 700;"><i class="fas fa-female"></i> Women Empowerment</span>
                            <span class="badge badge--green">International Women's Day</span>
                            <span class="badge badge--gold">Achievers Felicitation</span>
                        </div>
                        <h3 data-i18n="news.nari_ilkal_title">Nari Shakti Conference & Felicitation Ceremony at Ilkal on International Women's Day</h3>
                        <div class="initiative-meta-row">
                            <span class="initiative-meta-item"><i class="far fa-calendar-alt"></i> <strong data-i18n="news.nari_ilkal_date">March 8, 2024</strong></span>
                            <span class="initiative-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.nari_ilkal_venue">Dasoha Bhavan, Shri Vijayamahantesh Math Premises, Ilkal & Ishwarlinga Ground, Rabakavi Banahatti</span></span>
                        </div>
                    </div>

                    <p class="text-muted" style="line-height: 1.7;" data-i18n="news.nari_ilkal_desc">To mark International Women's Day, VVK Foundation organized grand district-level 'Nari Shakti' conferences at Shri Vijayamahantesh Math Dasoha Bhavan in Ilkal and at Ishwarlinga Ground in Rabakavi Banahatti. Led by Smt. Veena Kashappanavar, the conventions celebrated exemplary women achievers across education, enterprise, handloom weaving, agriculture, and healthcare.</p>

                    <!-- Dignitaries Box -->
                    <div class="initiative-dignitaries-callout">
                        <strong data-i18n="initiatives.dignitaries_label">Key Guests & Spiritual Blessings:</strong>
                        <span data-i18n="news.nari_ilkal_dignitaries">Presided by Smt. Veena Kashappanavar · Senior Leaders, Weavers' Associations & District Women Representatives</span>
                    </div>

                    <!-- 3-Photo Gallery Grid -->
                    <div class="initiative-photo-grid initiative-photo-grid--3">
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/international_womensday_01.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Nari Shakti Conference at Dasoha Bhavan, Ilkal">
                                <img src="/assets/images/extracted/international_womensday_01.jpg" alt="Women's Day Conference Ilkal" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Nari Shakti Conference at Dasoha Bhavan, Ilkal</span>
                        </div>
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/international_womensday_02.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Smt. Veena Kashappanavar Addressing Women Achievers">
                                <img src="/assets/images/extracted/international_womensday_02.jpg" alt="Smt. Veena Kashappanavar Address" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Smt. Veena Kashappanavar Addressing Convention</span>
                        </div>
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/international_womensday_03.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Felicitation Ceremony for Rural Women Achievers">
                                <img src="/assets/images/extracted/international_womensday_03.jpg" alt="Women Achievers Felicitation" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Felicitation Ceremony for Women Achievers</span>
                        </div>
                    </div>

                    <!-- Outcomes -->
                    <ul class="initiative-outcomes-list">
                        <li><i class="fas fa-check-circle"></i> <span>Felicitated over 100 grassroots women leaders and self-help group coordinators</span></li>
                        <li><i class="fas fa-check-circle"></i> <span>Formed localized handloom weaver clusters in Ilkal and Banahatti</span></li>
                        <li><i class="fas fa-check-circle"></i> <span>Advocated for women's leadership representation and economic independence</span></li>
                    </ul>
                </div>

                <!-- ── SHOWCASE 3: BANASHANKARI TEMPLE JATRA & UDI-TUMBUVA ── -->
                <div class="initiative-feature-card reveal reveal--up">
                    <div class="initiative-feature-header">
                        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
                            <span class="badge" style="background: #b45309; color: #fff; font-weight: 700;"><i class="fas fa-praying-hands"></i> Cultural Heritage</span>
                            <span class="badge badge--green">Universal Wellbeing (Lok Kalyana)</span>
                            <span class="badge badge--gold">Badami Banashankari Fair</span>
                        </div>
                        <h3 data-i18n="news.udi_title">Udi-Tumbuva Traditional Ritual Offering to 2,000 Mothers & Women at Badami</h3>
                        <div class="initiative-meta-row">
                            <span class="initiative-meta-item"><i class="far fa-calendar-alt"></i> <strong data-i18n="news.udi_date">January 24, 2024</strong></span>
                            <span class="initiative-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.udi_venue">Shri Banashankari Devi Temple, Badami</span></span>
                        </div>
                    </div>

                    <p class="text-muted" style="line-height: 1.7;" data-i18n="news.udi_desc">Under the leadership of Smt. Veena Kashappanavar, VVK Foundation organized a deeply reverent Udi-Tumbuva traditional ritual offering at the ancient Shri Banashankari Devi Temple in Badami for Lok Kalyana (public welfare and universal peace). Sacred Udi was offered to 2,000 mothers and women, followed by a grand traditional Haldi-Kumkum gathering during the famous Banashankari Fair.</p>

                    <!-- 2-Photo Gallery Grid -->
                    <div class="initiative-photo-grid initiative-photo-grid--2">
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/banshankari_jathara_01.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Banashankari Fair 2024 Haldi-Kumkum Gathering">
                                <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Banashankari Fair Haldi Kumkum" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Banashankari Fair 2024: Haldi-Kumkum Gathering</span>
                        </div>
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/banshankari_jathara_02.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Traditional Sacred Udi-Tumbuva Ritual in Progress">
                                <img src="/assets/images/extracted/banshankari_jathara_02.jpg" alt="Traditional Udi Tumbuva Ritual" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Traditional Sacred Udi-Tumbuva Ritual for 2,000 Mothers</span>
                        </div>
                    </div>

                    <!-- Outcomes -->
                    <ul class="initiative-outcomes-list">
                        <li><i class="fas fa-check-circle"></i> <span>Directly honored and blessed 2,000 rural mothers with sacred offerings</span></li>
                        <li><i class="fas fa-check-circle"></i> <span>Preserved and strengthened historic regional cultural bonds across Badami</span></li>
                        <li><i class="fas fa-check-circle"></i> <span>Fostered sisterhood, shared dining, and social cohesion among rural communities</span></li>
                    </ul>
                </div>

                <!-- ── SHOWCASE 4: FREE KAS & PSI COACHING ACADEMY & REGIONAL WORKSHOPS ── -->
                <div class="initiative-feature-card reveal reveal--up">
                    <div class="initiative-feature-header">
                        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
                            <span class="badge" style="background: #2563eb; color: #fff; font-weight: 700;"><i class="fas fa-graduation-cap"></i> Civil Services Academy</span>
                            <span class="badge badge--green">200 Rural Aspirants</span>
                            <span class="badge badge--outline">Free Training & Mentorship</span>
                        </div>
                        <h3 data-i18n="news.academy_title">Inauguration of Free KAS & PSI Coaching Center & Academy for 200 Students</h3>
                        <div class="initiative-meta-row">
                            <span class="initiative-meta-item"><i class="far fa-calendar-alt"></i> <strong data-i18n="news.academy_date">December 2023</strong></span>
                            <span class="initiative-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.academy_venue">Bagalkot, Ilkal (Hosamani Kalyana Mantapa) & Mudhol Town</span></span>
                        </div>
                    </div>

                    <p class="text-muted" style="line-height: 1.7;" data-i18n="news.academy_desc">Recognizing the lack of institutional civil service training in North Karnataka, VVK Foundation established a dedicated Academy providing completely free KAS and PSI coaching for 200 deserving rural students. Begun with auspicious Saraswati Pooja, two screening batches were conducted at Govt First Grade College Navanagar, followed by intensive career workshops in Ilkal and Mudhol.</p>

                    <!-- Dignitaries Box -->
                    <div class="initiative-dignitaries-callout">
                        <strong data-i18n="initiatives.dignitaries_label">Key Guests & Spiritual Blessings:</strong>
                        <span data-i18n="news.ilkal_ws_dignitaries">Gurumahant Swamiji · Hazrat Syed Shah Faisal Pasha · MLA Vijayanand Kashappanavar · SDO Shwetha Bidikar · CPI Sunil Savadi · SB Wisdom Academy Founder Sharanayya Bandarimath · CPI M.N. Shirahatti</span>
                    </div>

                    <!-- 4-Photo Gallery Grid -->
                    <div class="initiative-photo-grid initiative-photo-grid--4">
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Saraswati Pooja & Formal Academy Launch">
                                <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="Academy Launch Saraswati Pooja" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Saraswati Pooja & Academy Inauguration</span>
                        </div>
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/workshop_01.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Entrance Examination at Govt First Grade College, Navanagar">
                                <img src="/assets/images/extracted/workshop_01.jpg" alt="Entrance Examination Navanagar" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Entrance Exam at Navanagar College</span>
                        </div>
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/workshop_02.jpg" data-lightbox-group="initiatives" data-lightbox-alt="One-Day Guidance Camp at Hosamani Kalyana Mantapa, Ilkal">
                                <img src="/assets/images/extracted/workshop_02.jpg" alt="Ilkal Guidance Workshop" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Career Workshop at Ilkal Mantapa</span>
                        </div>
                        <div class="initiative-photo-item">
                            <div class="initiative-photo-thumb" data-lightbox="/assets/images/extracted/workshop_03.jpg" data-lightbox-group="initiatives" data-lightbox-alt="Youth Competitive Exam Camp at Mudhol Town">
                                <img src="/assets/images/extracted/workshop_03.jpg" alt="Mudhol Guidance Camp" loading="lazy">
                                <div class="photo-overlay"><i class="fas fa-search-plus"></i></div>
                            </div>
                            <span class="initiative-photo-caption">Youth Exam Guidance Camp at Mudhol</span>
                        </div>
                    </div>

                    <!-- Outcomes -->
                    <ul class="initiative-outcomes-list">
                        <li><i class="fas fa-check-circle"></i> <span>Conducted 2 rigorous written entrance screenings in Navanagar for merit-based admissions</span></li>
                        <li><i class="fas fa-check-circle"></i> <span>200 students equipped with comprehensive study materials and daily curriculum</span></li>
                        <li><i class="fas fa-check-circle"></i> <span>Direct mentorship and strategic test sessions led by serving administrative officers</span></li>
                    </ul>
                </div>

                <!-- ── SHOWCASE 5: 3RD ANNIVERSARY & DISTRICT BEST FARMER AWARDS ── -->
                <div class="initiative-feature-card reveal reveal--up" style="border: 2px solid #2b9348;">
                    <div class="initiative-feature-header">
                        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
                            <span class="badge" style="background: #2b9348; color: #fff; font-weight: 700;"><i class="fas fa-award"></i> Flagship Milestone</span>
                            <span class="badge badge--green">3rd Anniversary</span>
                            <span class="badge badge--gold">All 9 Taluks Covered</span>
                        </div>
                        <h3 data-i18n="news.anniv_title">3rd Anniversary Celebration & Best Farmer Awards 2026 Concluded with Resounding Success</h3>
                        <div class="initiative-meta-row">
                            <span class="initiative-meta-item"><i class="far fa-calendar-alt"></i> <strong data-i18n="news.anniv_date">August 21, 2026</strong></span>
                            <span class="initiative-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.anniv_venue">Ambedkar Bhavan, Bagalkot</span></span>
                        </div>
                    </div>

                    <p class="text-muted" style="line-height: 1.7;" data-i18n="news.anniv_desc">A grand district-level milestone celebration marking three years of grassroots impact. The gathering brought together thousands of farmers, agricultural scientists, and community leaders, featuring insightful technical workshops, innovative product demonstrations, and the conferment of Best Farmer & Best Woman Farmer Awards across all 9 taluks of Bagalkot.</p>

                    <!-- Outcomes -->
                    <ul class="initiative-outcomes-list">
                        <li><i class="fas fa-check-circle"></i> <span>Honored progressive farmers and women farmers across all 9 taluks of Bagalkot</span></li>
                        <li><i class="fas fa-check-circle"></i> <span>Organized technical agronomy seminars and sustainable soil health workshops</span></li>
                        <li><i class="fas fa-check-circle"></i> <span>Direct exhibition stalls showcasing innovative regional farmer produce and equipment</span></li>
                    </ul>

                    <div class="mt-lg">
                        <a href="/gallery" data-route class="btn btn--outline btn--sm">
                            <i class="fas fa-images"></i> <span data-i18n="initiatives.view_gallery_btn">View Full Photo Gallery</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>

        <!-- ═══════ CHRONOLOGICAL GROUND TIMELINE ═══════ -->
        <section>
            <div class="container">
                <div class="section-header text-center reveal reveal--up">
                    <span class="section-label"><i class="fas fa-calendar-alt"></i> <span data-i18n="activities.label">GROUND TIMELINE</span></span>
                    <h2 data-i18n="activities.title">Chronicle of Grassroots Impact</h2>
                </div>

                <div class="container--narrow mx-auto">
                    <div class="timeline">
                        <!-- 1. Milestone 2026: 3rd Anniversary -->
                        <div class="timeline-item active reveal reveal--left">
                            <div class="timeline-date" style="background: #2b9348; color: #fff; font-weight: 700; padding: 4px 14px; border-radius: 20px; display: inline-block;" data-i18n="activities.act_6_date">August 21, 2026</div>
                            <div class="timeline-card" style="border-top: 4px solid #2b9348;">
                                <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                                    <span class="badge" style="background: #dcfce7; color: #166534; font-weight: 700; font-size: 0.75rem; padding: 3px 10px; border-radius: 12px;"><i class="fas fa-check-circle"></i> Milestone Concluded</span>
                                </div>
                                <h3 data-i18n="activities.act_6_title">3rd Anniversary Celebration & District Best Farmer Awards 2026</h3>
                                <p data-i18n="activities.act_6_desc">Successfully celebrated at Ambedkar Bhavan, Bagalkot. Marking three years of grassroots service, the milestone honored progressive farmers across Bagalkot's nine taluks with innovative agriculture exhibitions and seminars.</p>
                            </div>
                        </div>

                        <!-- 2. August 2024: Free Cardiac Health Camp -->
                        <div class="timeline-item reveal reveal--left">
                            <div class="timeline-date" data-i18n="activities.act_5_date">August 21, 2024</div>
                            <div class="timeline-card">
                                <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" alt="Mega Cardiac Health Camp" loading="lazy" data-lightbox="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" data-lightbox-group="activities" data-lightbox-alt="Free Mega Cardiac Health Check-up Camp">
                                <h3 data-i18n="activities.act_5_title">Free Mega Cardiac Health Check-up Camp on Founder's Birthday</h3>
                                <p data-i18n="activities.act_5_desc">Executed in collaboration with SDM Narayana Hrudayalaya & District Hospital, blessed by 4 Peetha Swamijis, and joined by DC Sangappa, CEO Shashidhar Kurer, benefiting hundreds of patients.</p>
                            </div>
                        </div>

                        <!-- 3. March 2024: Women's Day & Nari Shakti -->
                        <div class="timeline-item reveal reveal--left">
                            <div class="timeline-date" data-i18n="activities.act_4_date">March 8-9, 2024</div>
                            <div class="timeline-card">
                                <img src="/assets/images/extracted/international_womensday_02.jpg" alt="International Women's Day" loading="lazy" data-lightbox="/assets/images/extracted/international_womensday_02.jpg" data-lightbox-group="activities" data-lightbox-alt="International Women's Day Conferences">
                                <h3 data-i18n="activities.act_4_title">International Women's Day: Nari Shakti Conferences at Ilkal & Banahatti</h3>
                                <p data-i18n="activities.act_4_desc">Grand conventions and felicitation ceremonies held at Shri Vijayamahantesh Math Dasoha Bhavan, Ilkal and Ishwarlinga Ground, Rabakavi Banahatti, celebrating outstanding women achievers.</p>
                            </div>
                        </div>

                        <!-- 4. January 2024: Banashankari Jatra -->
                        <div class="timeline-item reveal reveal--left">
                            <div class="timeline-date" data-i18n="activities.act_3_date">January 24, 2024</div>
                            <div class="timeline-card">
                                <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Banashankari Jatra" loading="lazy" data-lightbox="/assets/images/extracted/banshankari_jathara_01.jpg" data-lightbox-group="activities" data-lightbox-alt="Banashankari Jatra & Udi-Tumbuva">
                                <h3 data-i18n="activities.act_3_title">Banashankari Jatra: Udi-Tumbuva for 2,000 Mothers & Haldi-Kumkum</h3>
                                <p data-i18n="activities.act_3_desc">For Lok Kalyana, offered traditional ritual Udi to 2,000 mothers and women at Badami, followed by a grand Haldi-Kumkum gathering fostering women's solidarity and tradition.</p>
                            </div>
                        </div>

                        <!-- 5. December 2023: Career Workshops -->
                        <div class="timeline-item reveal reveal--left">
                            <div class="timeline-date" data-i18n="activities.act_2_date">December 2023</div>
                            <div class="timeline-card">
                                <img src="/assets/images/extracted/workshop_02.jpg" alt="Regional KAS & PSI Career Workshops" loading="lazy" data-lightbox="/assets/images/extracted/workshop_02.jpg" data-lightbox-group="activities" data-lightbox-alt="Regional KAS & PSI Career Workshops">
                                <h3 data-i18n="activities.act_2_title">Regional KAS & PSI Career Workshops at Ilkal & Mudhol</h3>
                                <p data-i18n="activities.act_2_desc">High-impact workshop camps organized at Hosamani Kalyana Mantapa, Ilkal (graced by Gurumahant Swamiji, MLA Vijayanand Kashappanavar, SDO Shwetha Bidikar) and Mudhol town with district dignitaries.</p>
                            </div>
                        </div>

                        <!-- 6. December 2023: Free KAS & PSI Coaching Academy Launch -->
                        <div class="timeline-item reveal reveal--left">
                            <div class="timeline-date" data-i18n="activities.act_1_date">December 2023</div>
                            <div class="timeline-card">
                                <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="KAS PSI Academy Launch" loading="lazy" data-lightbox="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" data-lightbox-group="activities" data-lightbox-alt="Free KAS & PSI Coaching Academy">
                                <h3 data-i18n="activities.act_1_title">Launch of Free KAS & PSI Coaching Academy for 200 Students</h3>
                                <p data-i18n="activities.act_1_desc">Formally inaugurated with sacred prayers to Goddess Saraswati. The academy established comprehensive training for 200 deserving rural civil service aspirants in Bagalkot.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ CTA SECTION ═══════ -->
        <section class="cta-section">
            <div class="container reveal reveal--up">
                <h2 data-i18n="home.cta_title">Be Part of the Change</h2>
                <p data-i18n="home.cta_desc">Join thousands of supporters making a difference across Karnataka.</p>
                <div class="cta-actions">
                    <a href="/volunteer" data-route class="btn--cta-gold magnetic">
                        <i class="fas fa-hand-holding-heart"></i> <span data-i18n="home.cta_volunteer">Become a Volunteer</span>
                    </a>
                    <a href="/contact" data-route class="btn btn--outline" style="border-color: #ffffff; color: #ffffff;">
                        <i class="fas fa-envelope"></i> <span data-i18n="nav.contact">Contact Us</span>
                    </a>
                </div>
            </div>
        </section>
    `;
}
