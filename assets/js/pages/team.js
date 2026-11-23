/**
 * VVK Foundation — Leadership & Team Page
 * Simultaneous Executive Grid Layout:
 * Features Founder & Chairperson and all 6 Board of Advisors simultaneously
 * in responsive executive profile cards with domain badges, credentials, full bios, and social links.
 */

export function renderTeam() {
    return `
        <!-- Page Hero -->
        <section class="page-hero">
            <div class="container container-wide reveal reveal--up">
                <div class="breadcrumbs">
                    <a href="/" data-route>Home</a>
                    <span class="separator"><i class="fas fa-chevron-right"></i></span>
                    <span class="current" data-i18n="nav.team">Leadership & Team</span>
                </div>
                <h1 data-i18n="team.title">Our Leadership & Team</h1>
                <p data-i18n="team.subtitle">Empowering Karnataka's farmers, women, and youth through visionary guidance, strategic mentorship, and dedicated grassroots action.</p>
            </div>
        </section>

        <!-- Founder & Chairperson Section -->
        <section id="founder">
            <div class="container container-wide">
                <div class="founder-layout">
                    <div class="founder-photo reveal reveal--left">
                        <img src="/assets/images/founder.png" alt="Mrs. Veena Vijayanand Kashappanavar" loading="lazy">
                    </div>
                    <div class="reveal reveal--right">
                        <span class="team-role-tag" data-i18n="team.founder_tag">FOUNDER & CHAIRPERSON</span>
                        <h2 class="founder-name" data-i18n="founder.name">Smt. Veena Vijayanand Kashappanavar</h2>
                        <p class="founder-role" data-i18n="founder.role">Founder, VVK Foundation Charitable Trust</p>
                        <p class="founder-subtitles" style="font-size: 0.92rem; color: var(--clr-text-secondary); margin-top: 4px; margin-bottom: 12px; font-weight: 500;" data-i18n="founder.subtitles">National President, Women's Wing — All India Veerashaiva Lingayat Mahasabha | Former President, Zilla Panchayat, Bagalkot</p>
                        
                        <!-- Verified Community Social Reach Badges -->
                        <div class="founder-social-stats">
                            <a href="https://www.facebook.com/veena.vijayanandkashappanavar" target="_blank" rel="noopener noreferrer" class="founder-stat-badge fb" title="View Facebook Profile">
                                <i class="fab fa-facebook-f" style="color: #1877f2;"></i>
                                <span><strong>94K+</strong> Followers on Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/veena_vijayanand_kashappanavar?igsh=MXR0YmJ6OHJ2MWF1Yg==" target="_blank" rel="noopener noreferrer" class="founder-stat-badge ig" title="View Instagram Profile">
                                <i class="fab fa-instagram" style="color: #dc2743;"></i>
                                <span><strong>41.3K+</strong> Followers on Instagram</span>
                            </a>
                        </div>

                        <p class="founder-bio" data-i18n="founder.bio">A commerce graduate from Ilkal, Smt. Veena Kashappanavar has spent more than a decade in public and grassroots community service across Bagalkot district — in women's health, sanitation, youth guidance, agricultural empowerment, and disaster relief. Three years ago she brought this work together under VVK Foundation Charitable Trust (Reg. No. BGK-4-00062-2023-24), with a clear mission: Empower Farmers, Enable Women, Employ Youth. Dedicated to celebrating the Foundation's 3rd anniversary alongside her birthday, she chose to mark it in the company of the district's farmers rather than apart from them.</p>

                        <div class="founder-highlights">
                            <h3 data-i18n="founder.highlights_title">Proven Milestones & Track Record</h3>
                            <ul>
                                <li data-i18n="founder.highlight_1">Bagalkot Made Open Defecation Free (ODF): Steered the district's toilet coverage from 35% to 100% full ODF status, serving as the sole woman delegate from Karnataka at the Swachh Bharat Mission (Gramin) programme in Andhra Pradesh.</li>
                                <li data-i18n="founder.highlight_2">Women's Health at Scale: District-wide campaign on women's health, breast cancer awareness, and nutrition at Kalamandira, Bagalkot with the Pink Walk roadshow; and free mega cardiac screening camps with SDM Narayana Hrudayalaya & District Hospital.</li>
                                <li data-i18n="founder.highlight_3">Two Hundred Youth Coached Free: Founded free KAS & PSI competitive coaching academy for rural aspirants, alongside district-level career guidance workshops.</li>
                                <li data-i18n="founder.highlight_4">A District Brought Together: Nari Shakti conventions, Bagalkot Habba, Siridhanya millet fair, job fairs, sports festivals; distributed ration kits, clothing, and medicines during pandemic and flood crises.</li>
                            </ul>
                        </div>

                        <!-- Honours and Recognitions from Brochure -->
                        <div class="founder-honours mt-lg">
                            <h4 style="font-size: 1rem; color: var(--clr-primary-dark); font-weight: 700; margin-bottom: 8px;" data-i18n="founder.honours_title"><i class="fas fa-medal" style="color: #d97706; margin-right: 6px;"></i> Honours Received</h4>
                            <div class="d-flex flex-wrap gap-xs">
                                <span class="tag-chip" style="background: rgba(217, 119, 6, 0.1); color: #92400e; border: 1px solid rgba(217, 119, 6, 0.25);"><i class="fas fa-award"></i> <span data-i18n="founder.honour_1">Krishi Vikram 2026 — Women Rural Empowerment Excellence Award (ICC)</span></span>
                                <span class="tag-chip"><i class="fas fa-award"></i> <span data-i18n="founder.honour_2">Rani Chennamma Award</span></span>
                                <span class="tag-chip"><i class="fas fa-award"></i> <span data-i18n="founder.honour_3">Onake Obavva Award</span></span>
                                <span class="tag-chip"><i class="fas fa-award"></i> <span data-i18n="founder.honour_4">Nari Shakti Award, Solapur</span></span>
                                <span class="tag-chip"><i class="fas fa-award"></i> <span data-i18n="founder.honour_5">Vistara News Emerging Leader Award</span></span>
                                <span class="tag-chip"><i class="fas fa-award"></i> <span data-i18n="founder.honour_6">Parimala Award, Mantralayam</span></span>
                                <span class="tag-chip"><i class="fas fa-award"></i> <span data-i18n="founder.honour_7">Sadbhavana Award</span></span>
                            </div>
                        </div>

                        <div class="founder-quote">
                            <p data-i18n="founder.message">"True empowerment begins when we enable others to discover their own strength. At VVK Foundation, our goal is not just to provide aid, but to create sustainable pathways for our youth, our women, and our farmers to thrive independently."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ BOARD OF ADVISORS (SIMULTANEOUS EXECUTIVE GRID) ═══════ -->
        <section class="bg-secondary" id="advisors" style="padding: var(--space-4xl) 0;">
            <div class="container container-wide">
                <div class="section-header text-center reveal reveal--up">
                    <span class="section-label"><i class="fas fa-landmark"></i> <span data-i18n="team.advisory_badge">STRATEGIC GUIDANCE</span></span>
                    <h2 data-i18n="team.advisory_title">Board of Advisors</h2>
                    <p class="section-desc" data-i18n="team.advisory_desc">Renowned scientists, banking pioneers, civil rights champions, and technology leaders steering our strategic growth.</p>
                </div>

                <div class="advisors-executive-grid">

                    <!-- ── 1. PROF. ASHOK SANGAPPA ALUR ── -->
                    <div class="advisor-exec-card reveal reveal--up stagger-1">
                        <div class="advisor-exec-card__top">
                            <img src="/assets/images/team/prof-ashok-alur.jpg?v=2" alt="Prof. Ashok Sangappa Alur" class="advisor-exec-card__avatar" loading="lazy">
                            <div class="advisor-exec-card__meta">
                                <span class="advisor-exec-card__cat"><i class="fas fa-graduation-cap"></i> <span data-i18n="team.adv_alur_cat">Education, Rural Livelihoods & Farming</span></span>
                                <h3 class="advisor-exec-card__name" data-i18n="team.adv_alur_name">Prof. Ashok Sangappa Alur</h3>
                                <div class="advisor-exec-card__role" data-i18n="team.adv_alur_role">Senior Strategic Advisor</div>
                                <div class="advisor-exec-card__org" data-i18n="team.adv_alur_org">First Vice Chancellor, Kodagu University, Karnataka</div>
                            </div>
                        </div>
                        <div class="advisor-exec-card__bio" data-i18n="team.adv_alur_desc">
                            Distinguished Agricultural Scientist, Policy Expert, and Institution Builder with over 25 years of leadership across agriculture, horticulture, higher education, natural resource management, and food security. Currently serving as the First Vice Chancellor of Kodagu University, he previously served as the First Vice Chancellor of BEST University (Anantapur), Special Officer establishing UHS Bagalkot, and First Director of Karnataka's Centre of Excellence for FPOs—where he spearheaded the capacity building of 1,250+ FPOs and helped formulate the Karnataka State FPO Policy-2018 benefiting over one million farming families. He has led international programs with ICRISAT, FAO, CFC, SDC, and the World Bank across Asia and Africa, authored 50+ books and 230 resource atlases, and leads the Mission Million Millet Farmers campaign.
                        </div>
                        <div class="advisor-exec-card__tags">
                            <span class="tag-chip"><i class="fas fa-graduation-cap"></i> Higher Education & Policy</span>
                            <span class="tag-chip"><i class="fas fa-users"></i> FPO Ecosystem (1,250+ FPOs)</span>
                            <span class="tag-chip"><i class="fas fa-seedling"></i> Millets & Climate Resilience</span>
                        </div>
                        <div class="advisor-exec-card__bottom">
                            <a href="https://kodaguuniversity.ac.in/" target="_blank" rel="noopener noreferrer" class="advisor-action-btn website">
                                <i class="fas fa-external-link-alt"></i> <span>Kodagu University</span>
                            </a>
                        </div>
                    </div>

                    <!-- ── 2. PROF. DR. CHANDRASHEKHAR M. BIRADAR ── -->
                    <div class="advisor-exec-card reveal reveal--up stagger-2">
                        <div class="advisor-exec-card__top">
                            <img src="/assets/images/team/dr-cm-biradar.png" alt="Prof. Dr. Chandrashekhar M. Biradar" class="advisor-exec-card__avatar" loading="lazy">
                            <div class="advisor-exec-card__meta">
                                <span class="advisor-exec-card__cat"><i class="fas fa-seedling"></i> <span data-i18n="team.adv_biradar_cat">Regenerative Systems & Climate</span></span>
                                <h3 class="advisor-exec-card__name" data-i18n="team.adv_biradar_name">Prof. Dr. Chandrashekhar M. Biradar</h3>
                                <div class="advisor-exec-card__role" data-i18n="team.adv_biradar_role">Strategic Advisor</div>
                                <div class="advisor-exec-card__org" data-i18n="team.adv_biradar_org">Founder & CMD, Global Green Growth (GGGC)</div>
                            </div>
                        </div>
                        <div class="advisor-exec-card__bio" data-i18n="team.adv_biradar_desc">
                            Accomplished Earth System Scientist and Green Growth Architect with over three decades of pioneering research across 50+ countries. He has held senior scientific leadership roles at CGIAR centers (ICARDA, IWMI, ICRISAT, CIFOR, ICRAF), UN-FAO, and the World Bank. Dr. Biradar is the architect behind transformative frameworks including Nandi Krishi, Green Grama Swarajya, circular village bio-economies, and agro-pastoral ecosystem restoration. At VVK Foundation, he steers strategic roadmaps for sustainable agriculture, watershed revitalization, climate-resilient livelihoods, and ecological stewardship.
                        </div>
                        <div class="advisor-exec-card__tags">
                            <span class="tag-chip"><i class="fas fa-seedling"></i> Regenerative Agriculture</span>
                            <span class="tag-chip"><i class="fas fa-globe-asia"></i> Green Economy</span>
                            <span class="tag-chip"><i class="fas fa-tint"></i> Watershed & Ecology</span>
                        </div>
                        <div class="advisor-exec-card__bottom">
                            <a href="https://gggc.co/" target="_blank" rel="noopener noreferrer" class="advisor-action-btn website">
                                <i class="fas fa-external-link-alt"></i> <span>Global Green Growth</span>
                            </a>
                            <div class="advisor-spotlight-socials">
                                <a href="https://www.linkedin.com/in/chandrashekhar-biradar-b6a38217/" target="_blank" rel="noopener noreferrer" class="advisor-social-round linkedin" aria-label="LinkedIn" title="Connect on LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- ── 3. DR. AKKAI PADMASHALI ── -->
                    <div class="advisor-exec-card reveal reveal--up stagger-3">
                        <div class="advisor-exec-card__top">
                            <img src="/assets/images/team/dr-akkai-padmashali.jpg?v=2" alt="Dr. Akkai Padmashali" class="advisor-exec-card__avatar" loading="lazy">
                            <div class="advisor-exec-card__meta">
                                <span class="advisor-exec-card__cat"><i class="fas fa-balance-scale"></i> <span data-i18n="team.adv_akkai_cat">Social Justice & Inclusion</span></span>
                                <h3 class="advisor-exec-card__name" data-i18n="team.adv_akkai_name">Dr. Akkai Padmashali</h3>
                                <div class="advisor-exec-card__role" data-i18n="team.adv_akkai_role">Strategic Advisor</div>
                                <div class="advisor-exec-card__org" data-i18n="team.adv_akkai_org">A Socialist, Liberal Feminist for Social Justice</div>
                            </div>
                        </div>
                        <div class="advisor-exec-card__bio" data-i18n="team.adv_akkai_desc">
                            Internationally acclaimed social reformer, motivational speaker, and founder of 'Ondede' (Convergence), pioneering advocacy for sexual minorities, women, and children. She is a recipient of the prestigious Karnataka Rajyotsava Award (second highest civilian honor by GoK) and the Ashoka Global Fellowship supported by Tata Trusts. Conferred an Honorary Doctorate and serving on the Karnataka State Education Policy Commission and Supreme Court-appointed committees, she guides VVK Foundation on gender equality, community dignity, legal literacy, and holistic empowerment of marginalized communities.
                        </div>
                        <div class="advisor-exec-card__tags">
                            <span class="tag-chip"><i class="fas fa-balance-scale"></i> Human Rights Advocacy</span>
                            <span class="tag-chip"><i class="fas fa-female"></i> Gender Justice & Inclusion</span>
                            <span class="tag-chip"><i class="fas fa-award"></i> Rajyotsava Awardee</span>
                        </div>
                        <div class="advisor-exec-card__bottom">
                            <a href="https://en.wikipedia.org/wiki/Akkai_Padmashali" target="_blank" rel="noopener noreferrer" class="advisor-action-btn website">
                                <i class="fab fa-wikipedia-w"></i> <span>Wikipedia Profile</span>
                            </a>
                            <div class="advisor-spotlight-socials">
                                <a href="https://twitter.com/PadmashaliAkkai" target="_blank" rel="noopener noreferrer" class="advisor-social-round twitter" aria-label="Twitter / X" title="Follow on Twitter / X">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="display:inline-block; vertical-align:middle;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 23.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                </a>
                                <a href="https://www.facebook.com/AkkaiPadmashali/" target="_blank" rel="noopener noreferrer" class="advisor-social-round facebook" aria-label="Facebook" title="Follow on Facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.instagram.com/padmashaliakkai/" target="_blank" rel="noopener noreferrer" class="advisor-social-round instagram" aria-label="Instagram" title="Follow on Instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- ── 4. TIMMANA GOUDA D ── -->
                    <div class="advisor-exec-card reveal reveal--up stagger-4">
                        <div class="advisor-exec-card__top">
                            <img src="/assets/images/team/timmana-gouda.jpg" alt="Timmana Gouda D" class="advisor-exec-card__avatar" loading="lazy">
                            <div class="advisor-exec-card__meta">
                                <span class="advisor-exec-card__cat"><i class="fas fa-university"></i> <span data-i18n="team.adv_gouda_cat">Banking & Agri-Fintech</span></span>
                                <h3 class="advisor-exec-card__name" data-i18n="team.adv_gouda_name">Timmana Gouda D</h3>
                                <div class="advisor-exec-card__role" data-i18n="team.adv_gouda_role">Strategic Advisor</div>
                                <div class="advisor-exec-card__org" data-i18n="team.adv_gouda_org">Founder, MD & CEO, WhatsLoan • Ex-Axis Bank Head</div>
                            </div>
                        </div>
                        <div class="advisor-exec-card__bio" data-i18n="team.adv_gouda_desc">
                            Veteran banking, consumer credit, and fintech innovator with over 30 years of retail lending and priority-sector financial inclusion leadership. Formerly National Head and Chief Risk Officer at Axis Bank (managing a ~USD 2 Billion credit portfolio), he serves on the Fintech Task Group (Govt. of Karnataka) and the Fintech Committee at IIM Bangalore. At VVK Foundation, he shapes digital financial literacy, Kisan Credit Card (KCC) enablement, dairy joint-liability credit models, and last-mile digital identity solutions for rural families.
                        </div>
                        <div class="advisor-exec-card__tags">
                            <span class="tag-chip"><i class="fas fa-university"></i> Priority-Sector Credit</span>
                            <span class="tag-chip"><i class="fas fa-id-card"></i> Digital Financial Identity</span>
                            <span class="tag-chip"><i class="fas fa-users"></i> FPO Group Lending</span>
                        </div>
                        <div class="advisor-exec-card__bottom">
                            <a href="https://whatsloan.com/" target="_blank" rel="noopener noreferrer" class="advisor-action-btn website">
                                <i class="fas fa-external-link-alt"></i> <span>WhatsLoan</span>
                            </a>
                            <div class="advisor-spotlight-socials">
                                <a href="https://www.linkedin.com/in/indianagouda/" target="_blank" rel="noopener noreferrer" class="advisor-social-round linkedin" aria-label="LinkedIn" title="Connect on LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- ── 5. RAVI SAJJANAR ── -->
                    <div class="advisor-exec-card reveal reveal--up stagger-5">
                        <div class="advisor-exec-card__top">
                            <img src="/assets/images/team/ravi-sajjanar.jpg?v=2" alt="Ravi Sajjanar" class="advisor-exec-card__avatar" loading="lazy">
                            <div class="advisor-exec-card__meta">
                                <span class="advisor-exec-card__cat"><i class="fas fa-tractor"></i> <span data-i18n="team.adv_sajjanar_cat">Farmer Collectives</span></span>
                                <h3 class="advisor-exec-card__name" data-i18n="team.adv_sajjanar_name">Ravi Sajjanar</h3>
                                <div class="advisor-exec-card__role" data-i18n="team.adv_sajjanar_role">Advisor</div>
                                <div class="advisor-exec-card__org" data-i18n="team.adv_sajjanar_org">Founder & Director, Hungunda Horticulture FPO</div>
                            </div>
                        </div>
                        <div class="advisor-exec-card__bio" data-i18n="team.adv_sajjanar_desc">
                            Committed agricultural entrepreneur and visionary grassroots leader who spearheaded the establishment of Hungunda Horticulture Farmers Producer Company (FPO) in July 2018. He champions collective farming, horticultural value addition, crop aggregation, and market linkages across 50 Farmer Interest Groups in North Karnataka. His leadership connects rural growers with modern agricultural technologies, institutional financing, and direct export linkages, transforming traditional farmers into confident, market-oriented agribusiness entrepreneurs.
                        </div>
                        <div class="advisor-exec-card__tags">
                            <span class="tag-chip"><i class="fas fa-tractor"></i> Collective Farming</span>
                            <span class="tag-chip"><i class="fas fa-apple-alt"></i> Horticulture & Aggregation</span>
                            <span class="tag-chip"><i class="fas fa-chart-line"></i> Market & Export Linkages</span>
                        </div>
                        <div class="advisor-exec-card__bottom">
                            <a href="https://hunagundfpo.com/" target="_blank" rel="noopener noreferrer" class="advisor-action-btn website">
                                <i class="fas fa-external-link-alt"></i> <span>Hunagund FPO</span>
                            </a>
                            <div class="advisor-spotlight-socials">
                                <a href="https://www.linkedin.com/in/ravi-sajjanar-5a815a58/" target="_blank" rel="noopener noreferrer" class="advisor-social-round linkedin" aria-label="LinkedIn" title="Connect on LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.facebook.com/ravi.sajjanar.14" target="_blank" rel="noopener noreferrer" class="advisor-social-round facebook" aria-label="Facebook" title="Follow on Facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- ── 6. SHAFEEULLA K A ── -->
                    <div class="advisor-exec-card reveal reveal--up stagger-6">
                        <div class="advisor-exec-card__top">
                            <img src="/assets/images/team/shafeeulla-k-a.jpg" alt="Shafeeulla K A" class="advisor-exec-card__avatar" loading="lazy">
                            <div class="advisor-exec-card__meta">
                                <span class="advisor-exec-card__cat"><i class="fas fa-laptop-code"></i> <span data-i18n="team.adv_shafeeulla_cat">Technology & Digital Strategy</span></span>
                                <h3 class="advisor-exec-card__name" data-i18n="team.adv_shafeeulla_name">Shafeeulla K A</h3>
                                <div class="advisor-exec-card__role" data-i18n="team.adv_shafeeulla_role">Advisor</div>
                                <div class="advisor-exec-card__org" data-i18n="team.adv_shafeeulla_org">Technology Leader • 20+ Years in Software & Digital Transformation</div>
                            </div>
                        </div>
                        <div class="advisor-exec-card__bio" data-i18n="team.adv_shafeeulla_desc">
                            Shafeeulla K A brings over 20 years of experience in the software and technology industry, with expertise in technology management, digital transformation and project leadership. At VVK Foundation, he will focus on leveraging technology to strengthen the foundation's operational capabilities, streamline processes and enable impactful initiatives. His role will include guiding digital strategy, identifying technology-driven solutions, supporting the development of digital platforms, strengthening data management and enabling effective monitoring of social development programs. He aims to bridge technology and social impact by introducing practical, scalable and sustainable solutions that enhance the foundation's reach, efficiency and long-term impact.
                        </div>
                        <div class="advisor-exec-card__tags">
                            <span class="tag-chip"><i class="fas fa-laptop-code"></i> Digital Strategy</span>
                            <span class="tag-chip"><i class="fas fa-database"></i> Digital Platforms & Data</span>
                            <span class="tag-chip"><i class="fas fa-chart-line"></i> Program Monitoring</span>
                        </div>
                        <div class="advisor-exec-card__bottom">
                            <a href="https://www.linkedin.com/in/kashafee/" target="_blank" rel="noopener noreferrer" class="advisor-action-btn website">
                                <i class="fab fa-linkedin-in"></i> <span>LinkedIn Profile</span>
                            </a>
                            <div class="advisor-spotlight-socials">
                                <a href="https://www.linkedin.com/in/kashafee/" target="_blank" rel="noopener noreferrer" class="advisor-social-round linkedin" aria-label="LinkedIn" title="Connect on LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.facebook.com/ka.shafee" target="_blank" rel="noopener noreferrer" class="advisor-social-round facebook" aria-label="Facebook" title="Follow on Facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- Join Our Team / Volunteer CTA -->
        <section class="cta-section">
            <div class="container reveal reveal--up">
                <span class="cta-badge"><i class="fas fa-hand-holding-heart"></i> <span data-i18n="team.cta_badge">GET INVOLVED</span></span>
                <h2 data-i18n="team.cta_title">Want to Join Our Mission?</h2>
                <p data-i18n="team.cta_desc">Whether you are an educator, doctor, student, or community volunteer, there is always a place for your passion in VVK Foundation.</p>
                <div class="cta-actions">
                    <a href="/volunteer" data-route class="btn--cta-gold magnetic">
                        <i class="fas fa-hands-helping"></i> <span data-i18n="team.cta_volunteer_btn">Volunteer With Us</span>
                    </a>
                    <a href="/contact" data-route class="btn--cta-outline magnetic">
                        <i class="fas fa-envelope"></i> <span data-i18n="team.cta_contact_btn">Contact Our Office</span>
                    </a>
                </div>
            </div>
        </section>
    `;
}

/**
 * Maintained for router compatibility.
 */
export function initAdvisorSpotlight() {
    // All advisors are now presented simultaneously in an executive grid
}
