/**
 * VVK Foundation — News & Public Service Events Page
 * Documented community initiatives, conferences, healthcare camps,
 * and coaching academies based on official foundation records.
 */

export function renderNews() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs">
                    <a href="/" data-route>Home</a>
                    <span class="separator"><i class="fas fa-chevron-right"></i></span>
                    <span class="current" data-i18n="nav.news">News & Events</span>
                </div>
                <h1 data-i18n="news.title">News & Public Service Events</h1>
                <p data-i18n="news.desc">Stay updated with verified reports, public service milestones, health camps, and empowerment initiatives by VVK Foundation.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <!-- Section Header -->
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-newspaper"></i> <span data-i18n="news.recent_label">GROUND UPDATES</span></span>
                    <h2 data-i18n="news.recent_title">Documented Initiatives & News</h2>
                </div>

                <!-- Category Filter Tabs -->
                <div class="filter-tabs reveal reveal--up" id="news-filters" role="tablist">
                    <button class="filter-tab active" data-filter="all" role="tab" aria-selected="true" data-i18n="news.filter_all">All Updates</button>
                    <button class="filter-tab" data-filter="health" role="tab" aria-selected="false" data-i18n="news.cat_health">Healthcare</button>
                    <button class="filter-tab" data-filter="women" role="tab" aria-selected="false" data-i18n="news.cat_women">Women Empowerment</button>
                    <button class="filter-tab" data-filter="education" role="tab" aria-selected="false" data-i18n="news.cat_education">Youth Education</button>
                    <button class="filter-tab" data-filter="cultural" role="tab" aria-selected="false" data-i18n="news.cat_cultural">Cultural & Community</button>
                </div>

                <!-- Flagship Highlight Card (3rd Anniversary & Best Farmer Awards) -->
                <div class="mb-2xl reveal reveal--up news-card" data-category="all" style="border: 2px solid #2b9348;">
                    <div style="display: grid; grid-template-columns: minmax(300px, 420px) 1fr; align-items: stretch;" class="anniv-feature-grid">
                        <div class="news-card__media" style="height: 100%; min-height: 260px;" data-lightbox="/assets/images/events-2025/2025-anniversary-farmer-awards-01.jpg" data-lightbox-group="news" data-lightbox-alt="3rd Anniversary & Best Farmer Awards 2025">
                            <img src="/assets/images/events-2025/2025-anniversary-farmer-awards-01.jpg" alt="3rd Anniversary Celebration & Best Farmer Awards 2025" loading="lazy">
                        </div>
                        <div class="news-card__body" style="padding: var(--space-xl);">
                            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 8px;">
                                <span class="badge" style="background: #2b9348; color: #fff; font-weight: 700;" data-i18n="news.anniv_badge">Flagship Event Concluded</span>
                                <span class="badge badge--green"><i class="fas fa-check-circle"></i> Milestone</span>
                            </div>
                            <h3 style="font-size: 1.35rem; color: var(--clr-text-primary); margin-bottom: 8px;" data-i18n="news.anniv_title">3rd Anniversary Celebration & Best Farmer Awards 2025 Concluded with Resounding Success</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <strong data-i18n="news.anniv_date">August 2026</strong></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.anniv_venue">Ambedkar Bhavan, Bagalkot</span></span>
                            </div>
                            <p class="text-sm text-muted" style="line-height: 1.6;" data-i18n="news.anniv_desc">A grand district-level milestone celebration marking three years of grassroots impact. The gathering brought together thousands of farmers, agricultural scientists, and community leaders, featuring insightful technical workshops, innovative product demonstrations, and the conferment of Best Farmer & Best Woman Farmer Awards across all 9 taluks of Bagalkot.</p>
                            <div class="mt-md">
                                <a href="/initiatives" data-route class="btn btn--sm btn--primary">
                                    <i class="fas fa-arrow-right"></i> Explore Our Ongoing Initiatives
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- News Grid with Documented Initiatives -->
                <div class="news-grid" id="news-grid">

                    <!-- 2025-A. Pink Walk & Stree Sambhrama 2025 -->
                    <article class="news-card reveal reveal--up stagger-1" data-category="women">
                        <div class="news-card__media" data-lightbox="/assets/images/events-2025/2025-pink-walk-stree-sambhrama-15.jpg" data-lightbox-group="news" data-lightbox-alt="Stree Sambhrama & Pink Walk 2025">
                            <img src="/assets/images/events-2025/2025-pink-walk-stree-sambhrama-15.jpg" alt="Stree Sambhrama Pink Walk 2025" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge" style="background: #9d174d; color: #fff; font-weight: 700; margin-bottom: var(--space-xs); display: inline-block;">Women's Health Awareness</span>
                            <h3 data-i18n="activities.act_9_title">International Women's Day "Stree Sambhrama" &amp; Bagalkote Pink Walk 2025</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="activities.act_9_date">March 2025</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span>Bagalkot City &amp; Kalabhavan</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Leadership &amp; Honors:</strong>
                                <span>Ilkal Gurumahant Swamiji · DC Sangappa · CEO Shashidhar Kurer · Ashwini Gowda · Smt. Veena Kashappanavar (Founder)</span>
                            </div>
                            <p class="text-sm" data-i18n="activities.act_9_desc">Over 1,000 women marched through Bagalkot in the Women's Cancer Awareness Pink Walk on International Women's Day 2025. The grand "Stree Sambhrama" celebration featured felicitation of women police officers, rural achievers, and a 7-day free cancer screening drive organized by VVK Foundation under the leadership of Smt. Veena Kashappanavar.</p>
                        </div>
                    </article>

                    <!-- 2025-B. Free Mega Cardiac Health Camp 2025 -->
                    <article class="news-card reveal reveal--up stagger-2" data-category="health">
                        <div class="news-card__media" data-lightbox="/assets/images/events-2025/2025-cardiac-health-camp-02.jpg" data-lightbox-group="news" data-lightbox-alt="Free Mega Cardiac Health Camp 2025">
                            <img src="/assets/images/events-2025/2025-cardiac-health-camp-02.jpg" alt="Free Mega Cardiac Health Camp 2025" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge" style="background: #dc2626; color: #fff; font-weight: 700; margin-bottom: var(--space-xs); display: inline-block;">Healthcare Mission</span>
                            <h3 data-i18n="activities.act_7_title">Free Mega Cardiac Health Camp &amp; Social Welfare Drive on Founder's Birthday 2025</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="activities.act_7_date">August 2025</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span>District Hospital, Bagalkot</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Revered Seers &amp; Chief Guests:</strong>
                                <span>Peetha Swamijis (Bhovi, Valmiki &amp; Siddanakolla) · DC Sangappa · CEO Shashidhar Kurer · Dr. Ashok Kone · Dr. Ajay (SDM Narayana)</span>
                            </div>
                            <p class="text-sm" data-i18n="activities.act_7_desc">On Founder Smt. Veena Kashappanavar's birthday, VVK Foundation and SDM Narayana Hrudayalaya jointly organized a Free Mega Cardiac Health Camp at Bagalkot District Hospital. Over 1,500 patients received free ECG, 2D Echo, BP and blood sugar screenings. Umbrellas were also distributed to 100+ street vendors and fruits donated to orphanages as part of a comprehensive social welfare drive.</p>
                        </div>
                    </article>

                    <!-- 2025-C. Free KAS & PSI Academy Batch 2 Launch -->
                    <article class="news-card reveal reveal--up stagger-3" data-category="education">
                        <div class="news-card__media" data-lightbox="/assets/images/events-2025/2025-kas-psi-academy-batch-2-press-01.jpg" data-lightbox-group="news" data-lightbox-alt="Free KAS & PSI Competitive Academy Batch 2 Launch 2025">
                            <img src="/assets/images/events-2025/2025-kas-psi-academy-batch-2-press-01.jpg" alt="KAS & PSI Academy Batch 2 Launch 2025" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge badge--green mb-xs">Competitive Education</span>
                            <h3 data-i18n="activities.act_8_title">Free KAS &amp; PSI Competitive Academy Batch 2 Launched for Underprivileged Youth 2025</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="activities.act_8_date">September–October 2025</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span>Bagalkot &amp; Nargund</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Program Leadership:</strong>
                                <span>Smt. Veena Kashappanavar (Founder) · District Education Officers · Competitive Exam Expert Faculty</span>
                            </div>
                            <p class="text-sm" data-i18n="activities.act_8_desc">VVK Foundation launched Batch 2 of its flagship Free Competitive Exam Coaching Academy for KAS and PSI aspirants from underprivileged backgrounds across Bagalkot and Nargund. Building on the success of Batch 1 (launched December 2023), this edition expanded seats and introduced structured study material, mentorship, and mock test programs to maximize selection outcomes.</p>
                        </div>
                    </article>

                    <!-- 1. Free Cardiac Health Check-up Camp -->
                    <article class="news-card reveal reveal--up stagger-1" data-category="health">
                        <div class="news-card__media" data-lightbox="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" data-lightbox-group="news" data-lightbox-alt="Free Cardiac Health Check-up Camp">
                            <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" alt="Free Cardiac Health Check-up Camp" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge badge--green mb-xs" data-i18n="news.cardiac_badge">Healthcare Camp</span>
                            <h3 data-i18n="news.cardiac_title">Free Cardiac Health Check-up Camp Organized on Founder's Birthday</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="news.cardiac_date">August 2024</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.cardiac_venue">District Hospital & SDM Narayana Hrudayalaya, Bagalkot</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Revered Seers & Chief Guests:</strong>
                                <span data-i18n="news.cardiac_dignitaries">His Holiness Swamijis of Bhovi, Valmiki, Bhagiratha & Siddanakolla Peethas · DC Sangappa · CEO Shashidhar Kurer</span>
                            </div>
                            <p class="text-sm" data-i18n="news.cardiac_desc">On the occasion of the Founder's birthday, under the leadership of Smt. Veena Kashappanavar, the VVK Foundation, in collaboration with SDM Narayana Hrudayalaya and the District Hospital, organized a Free Cardiac Health Check-up Camp. The program was held in the divine presence of revered Swamijis including His Holiness Immadi Siddharameshwara Swamiji (Bhovi Peetha), His Holiness Dr. Sri Valmiki Prasannananda Mahaswamiji (Valmiki Peetha), His Holiness Purushottamananda Puri Swamiji (Bhagiratha Peetha), and His Holiness Dr. Shivakumar Swamiji (Siddanakolla). Chief guests DC Shri Sangappa, CEO Shri Shashidhar Kurer, District Congress President S.G. Nanjayyanamath, and District Hospital Chief Officer Shri Mahesh Koni contributed to the success of this life-saving initiative.</p>
                        </div>
                    </article>

                    <!-- 2. Nari Shakti Ilkal -->
                    <article class="news-card reveal reveal--up stagger-2" data-category="women">
                        <div class="news-card__media" data-lightbox="/assets/images/extracted/international_womensday_01.jpg" data-lightbox-group="news" data-lightbox-alt="Nari Shakti Conference Ilkal">
                            <img src="/assets/images/extracted/international_womensday_01.jpg" alt="Nari Shakti Conference Ilkal" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge badge--blue mb-xs" data-i18n="news.nari_ilkal_badge">Women's Day Conference</span>
                            <h3 data-i18n="news.nari_ilkal_title">Nari Shakti Conference & Felicitation Ceremony at Ilkal on International Women's Day</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="news.nari_ilkal_date">March 2024 (10:00 AM)</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.nari_ilkal_venue">Shri Vijayamahantesh Math Premises, Dasoha Bhavan, Ilkal</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Leadership & Honors:</strong>
                                <span data-i18n="news.nari_ilkal_dignitaries">Organized under the leadership of Smt. Veena Kashappanavar with prominent women leaders & achievers</span>
                            </div>
                            <p class="text-sm" data-i18n="news.nari_ilkal_desc">On behalf of International Women's Day, VVK Foundation organized the #Nari_Shakti Conference and Felicitation Ceremony at Shri Vijayamahantesh Math premises, Dasoha Bhavan, Ilkal. The grand convention honored rural women achievers from diverse backgrounds for their resilience, self-reliance, and outstanding community leadership.</p>
                        </div>
                    </article>

                    <!-- 3. Nari Shakti Banahatti -->
                    <article class="news-card reveal reveal--up stagger-3" data-category="women">
                        <div class="news-card__media" data-lightbox="/assets/images/extracted/international_womensday_02.jpg" data-lightbox-group="news" data-lightbox-alt="Nari Shakti Convention Banahatti">
                            <img src="/assets/images/extracted/international_womensday_02.jpg" alt="Nari Shakti Convention Banahatti" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge badge--blue mb-xs" data-i18n="news.nari_banahatti_badge">Women's Day Felicitation</span>
                            <h3 data-i18n="news.nari_banahatti_title">Nari Shakti Convention & Felicitation for Achievers at Rabakavi Banahatti</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="news.nari_banahatti_date">March 2024</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.nari_banahatti_venue">Ishwarlinga Ground, Rabakavi Banahatti, Bagalkot</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Leadership & Honors:</strong>
                                <span data-i18n="news.nari_banahatti_dignitaries">Smt. Veena Kashappanavar and community leaders across Rabakavi Banahatti Taluk</span>
                            </div>
                            <p class="text-sm" data-i18n="news.nari_banahatti_desc">On the occasion of International Women's Day, VVK Foundation organized the #Nari_Shakti Convention and a prestigious Felicitation Ceremony for Achievers in Rabakavi Banahatti taluk at the historic Ishwarlinga Ground, bringing together thousands of women to celebrate women empowerment and grassroots leadership.</p>
                        </div>
                    </article>

                    <!-- 4. Udi Tumbuva 2000 Mothers -->
                    <article class="news-card reveal reveal--up stagger-1" data-category="cultural">
                        <div class="news-card__media" data-lightbox="/assets/images/extracted/banshankari_jathara_02.jpg" data-lightbox-group="news" data-lightbox-alt="Udi Tumbuva at Badami">
                            <img src="/assets/images/extracted/banshankari_jathara_02.jpg" alt="Udi Tumbuva at Badami" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge badge--gold mb-xs" data-i18n="news.udi_badge">Lok Kalyana Ritual</span>
                            <h3 data-i18n="news.udi_title">Udi-Tumbuva Traditional Ritual Offering to 2,000 Mothers & Women at Badami</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="news.udi_date">January 2024</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.udi_venue">Shri Banashankari Devi Temple, Badami</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Program Leadership:</strong>
                                <span data-i18n="news.udi_dignitaries">Conducted by Smt. Veena Kashappanavar in the presence of 2,000 rural mothers</span>
                            </div>
                            <p class="text-sm" data-i18n="news.udi_desc">Under the leadership of Smt. Veena Kashappanavar, the VVK Foundation, Bagalkot, organized a sacred Udi-Tumbuva offering to Shri Banashankari Devi at Badami as part of Lok Kalyana (public welfare). During the auspicious gathering, traditional Udi was offered to 2,000 mothers and women, honoring their maternal dedication and seeking divine blessings for community prosperity.</p>
                        </div>
                    </article>

                    <!-- 5. Haldi Kumkum Program -->
                    <article class="news-card reveal reveal--up stagger-2" data-category="cultural">
                        <div class="news-card__media" data-lightbox="/assets/images/extracted/banshankari_jathara_01.jpg" data-lightbox-group="news" data-lightbox-alt="Haldi Kumkum at Banashankari Fair">
                            <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Haldi Kumkum at Banashankari Fair" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge badge--gold mb-xs" data-i18n="news.haldi_badge">Traditional Cultural Program</span>
                            <h3 data-i18n="news.haldi_title">Turmeric–Kumkum (Haldi-Kumkum) Program for Women at Banashankari Fair 2024</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="news.haldi_date">24 January 2024 (6:00 PM)</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.haldi_venue">Historic Banashankari Temple, Badami</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Event Presence:</strong>
                                <span data-i18n="news.haldi_dignitaries">Led by Smt. Veena Kashappanavar with thousands of women devotees</span>
                            </div>
                            <p class="text-sm" data-i18n="news.haldi_desc">On the occasion of the renowned annual Banashankari Jatra, a special Haldi-Kumkum program was organized at the Banashankari Temple under the leadership of Smt. Veena Kashappanavar by the VVK Foundation. Women from across rural Bagalkot gathered in great numbers to celebrate tradition, solidarity, and auspicious cultural values.</p>
                        </div>
                    </article>

                    <!-- 6. Free KAS & PSI Coaching Academy Launch -->
                    <article class="news-card reveal reveal--up stagger-3" data-category="education">
                        <div class="news-card__media" data-lightbox="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" data-lightbox-group="news" data-lightbox-alt="KAS & PSI Coaching Academy Launch">
                            <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="KAS & PSI Coaching Academy Launch" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge badge--green mb-xs" data-i18n="news.academy_badge">Youth Education Launch</span>
                            <h3 data-i18n="news.academy_title">Inauguration of Free KAS & PSI Coaching Center & Academy for 200 Students</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="news.academy_date">December 2023</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.academy_venue">VVK Academy, Bagalkot</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Inauguration Ceremony:</strong>
                                <span data-i18n="news.academy_dignitaries">Inaugurated with sacred prayers to Goddess Saraswati alongside distinguished educators & mentors</span>
                            </div>
                            <p class="text-sm" data-i18n="news.academy_desc">Under the auspices of VVK Foundation, the Free KAS and PSI Coaching Center and Academy was established for 200 deserving rural students preparing for competitive civil service examinations. The program was formally inaugurated by offering sacred prayers to the portrait of Goddess Saraswati, opening new career pathways for youths from economically weaker families.</p>
                        </div>
                    </article>

                    <!-- 7. KAS & PSI Entrance Examination Batches -->
                    <article class="news-card reveal reveal--up stagger-1" data-category="education">
                        <div class="news-card__media" data-lightbox="/assets/images/extracted/workshop_02.jpg" data-lightbox-group="news" data-lightbox-alt="KAS PSI Entrance Examination">
                            <img src="/assets/images/extracted/workshop_02.jpg" alt="KAS PSI Entrance Examination" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge badge--green mb-xs" data-i18n="news.exam2_badge">Entrance Examination Batches</span>
                            <h3 data-i18n="news.exam2_title">Second Batch Entrance Examination for Free KAS & PSI Coaching</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="news.exam2_date">22 December 2023 (3:00 PM)</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.exam2_venue">Government First Grade College, Navanagar, Bagalkot</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Founder's Message to Students:</strong>
                                <span data-i18n="news.exam2_dignitaries">Special address by Smt. Veena Kashappanavar to Bagalkot district youth</span>
                            </div>
                            <p class="text-sm" data-i18n="news.exam2_desc">Following overwhelming interest, Smt. Veena Kashappanavar announced and conducted the entrance examination for the second batch of free KAS and PSI coaching on 22/12/2023 at Government First Grade College, Navanagar, Bagalkot. The test welcomed registered candidates, new applicants, and those seeking another opportunity, ensuring no deserving candidate was left behind.</p>
                        </div>
                    </article>

                    <!-- 8. KAS & PSI Ilkal Workshop Camp -->
                    <article class="news-card reveal reveal--up stagger-2" data-category="education">
                        <div class="news-card__media" data-lightbox="/assets/images/extracted/workshop_03.jpg" data-lightbox-group="news" data-lightbox-alt="KAS PSI Workshop at Ilkal">
                            <img src="/assets/images/extracted/workshop_03.jpg" alt="KAS PSI Workshop at Ilkal" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge badge--green mb-xs" data-i18n="news.ilkal_ws_badge">Career Workshop</span>
                            <h3 data-i18n="news.ilkal_ws_title">One-Day Intensive Workshop Camp for Free KAS & PSI Coaching at Ilkal</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="news.ilkal_ws_date">December 2023</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.ilkal_ws_venue">Hosamani Kalyana Mantapa, Ilkal Town, Bagalkot</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Dignitaries & Scholars:</strong>
                                <span data-i18n="news.ilkal_ws_dignitaries">Poojya Shri Gurumahant Swamiji · Hazrat Syed Shah Faisal Pasha · MLA Vijayanand S. Kashappanavar · SDO Shwetha Bidikar · CPI Sunil Savadi · Sharanayya Bandarimath</span>
                            </div>
                            <p class="text-sm" data-i18n="news.ilkal_ws_desc">A comprehensive one-day workshop camp for free KAS and PSI coaching, organized under the leadership of Smt. Veena Kashappanavar at Hosamani Kalyana Mantapa, Ilkal town, was graced by Poojya Shri M.Ni.Pr. Gurumahant Swamiji, Hazrat Syed Shah Faisal Pasha Murtuza Qadri, Hunagund MLA Shri Vijayanand S. Kashappanavar, Sub-Divisional Officer Ms. Shwetha Mohan Bidikar, CPI Sunil Savadi, and SB Wisdom Academy Founder Sharanayya Bandarimath, addressing hundreds of passionate civil service aspirants.</p>
                        </div>
                    </article>

                    <!-- 9. KAS & PSI Mudhol Workshop Camp -->
                    <article class="news-card reveal reveal--up stagger-3" data-category="education">
                        <div class="news-card__media" data-lightbox="/assets/images/extracted/workshop_04.jpg" data-lightbox-group="news" data-lightbox-alt="KAS PSI Workshop at Mudhol">
                            <img src="/assets/images/extracted/workshop_04.jpg" alt="KAS PSI Workshop at Mudhol" loading="lazy">
                        </div>
                        <div class="news-card__body">
                            <span class="badge badge--green mb-xs" data-i18n="news.mudhol_ws_badge">Career Workshop</span>
                            <h3 data-i18n="news.mudhol_ws_title">One-Day Intensive Workshop Camp for Free KAS & PSI Training at Mudhol</h3>
                            <div class="news-meta-row">
                                <span class="news-meta-item"><i class="far fa-calendar-alt"></i> <span data-i18n="news.mudhol_ws_date">December 2023</span></span>
                                <span class="news-meta-item"><i class="fas fa-map-marker-alt"></i> <span data-i18n="news.mudhol_ws_venue">Mudhol Town, Bagalkot District</span></span>
                            </div>
                            <div class="news-dignitaries-box">
                                <strong data-i18n="news.card_dignitaries_label">Inauguration & Guidance:</strong>
                                <span data-i18n="news.mudhol_ws_dignitaries">Inaugurated by Smt. Veena Kashappanavar · Vinay Timmappur · Govindappa Gujjannavar · Kavita Timmappur · Sharanayya Bandarimath · CPI M. N. Shirahatti</span>
                            </div>
                            <p class="text-sm" data-i18n="news.mudhol_ws_desc">In Mudhol town of Bagalkot district, Smt. Veena Kashappanavar inaugurated and addressed a high-impact one-day workshop camp for free KAS and PSI training. Dignitaries including Vinay Timmappur, Govindappa Gujjannavar, Kavita Timmappur, SB Wisdom Academy Founder Sharanayya Bandarimath, and CPI M.N. Shirahatti addressed the students on strategic exam preparation and career success.</p>
                        </div>
                    </article>

                </div>

                <div class="text-center mt-3xl reveal reveal--up">
                    <p class="text-muted" data-i18n="news.coming_soon">Stay tuned as we continue to document our ongoing grassroots community initiatives.</p>
                </div>
            </div>
        </section>
    `;
}

/**
 * Initialize category filter tabs on the News page.
 */
export function initNewsFilters() {
    const filtersContainer = document.getElementById('news-filters');
    const grid = document.getElementById('news-grid');
    if (!filtersContainer || !grid) return;

    filtersContainer.addEventListener('click', (e) => {
        const tab = e.target.closest('.filter-tab');
        if (!tab) return;

        filtersContainer.querySelectorAll('.filter-tab').forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const filter = tab.dataset.filter;

        grid.querySelectorAll('.news-card').forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = '';
                item.classList.remove('active');
                requestAnimationFrame(() => item.classList.add('active'));
            } else {
                item.style.display = 'none';
            }
        });
    });
}
