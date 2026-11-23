/**
 * VVK Foundation — Founder Page
 */

export function renderFounder() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs"><a href="/" data-route>Home</a> <span class="separator"><i class="fas fa-chevron-right"></i></span> <span class="current" data-i18n="nav.founder">Founder</span></div>
                <h1 data-i18n="founder.title">Our Founder</h1>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="founder-layout">
                    <div class="founder-photo reveal reveal--left">
                        <img src="/assets/images/founder.png" alt="Mrs. Veena Vijayanand Kashappanavar" loading="lazy">
                    </div>
                    <div class="reveal reveal--right">
                        <span class="team-role-tag" data-i18n="team.founder_tag">FOUNDER & CHAIRPERSON</span>
                        <h2 class="founder-name" data-i18n="founder.name">Smt. Veena Vijayanand Kashappanavar</h2>
                        <p class="founder-role" data-i18n="founder.role">Founder, VVK Foundation Charitable Trust</p>
                        <p class="founder-subtitles" style="font-size: 0.88rem; color: var(--clr-text-secondary); margin-top: 4px; margin-bottom: 12px; font-weight: 500;" data-i18n="founder.subtitles">National President, Women's Wing — All India Veerashaiva Lingayat Mahasabha | Former President, Zilla Panchayat, Bagalkot</p>
                        
                        <div class="founder-social" style="align-items: center;">
                            <span style="font-weight: 600; font-size: var(--fs-body-sm); color: var(--clr-text-secondary); text-transform: uppercase; letter-spacing: var(--ls-wide); margin-right: 4px;">Follow:</span>
                            <a href="https://www.instagram.com/veena_vijayanand_kashappanavar?igsh=MXR0YmJ6OHJ2MWF1Yg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-ig">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/veena.vijayanandkashappanavar" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-fb">
                                <i class="fab fa-facebook-f"></i>
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

                <div class="mt-3xl">
                    <h3 class="text-center mb-xl text-secondary reveal reveal--up" data-i18n="founder.engagements_title">Community Engagements</h3>
                    <div class="founder-photos">
                        <img src="/assets/images/extracted/international_womensday_01.jpg" alt="Founder with community members" loading="lazy" class="reveal reveal--up stagger-1" data-lightbox="/assets/images/extracted/international_womensday_01.jpg" data-lightbox-group="founder" data-lightbox-alt="Founder at Women's Day">
                        <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Founder at cultural gathering" loading="lazy" class="reveal reveal--up stagger-2" data-lightbox="/assets/images/extracted/banshankari_jathara_01.jpg" data-lightbox-group="founder" data-lightbox-alt="Banashankari Jatra">
                        <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="Founder at coaching academy launch" loading="lazy" class="reveal reveal--up stagger-3" data-lightbox="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" data-lightbox-group="founder" data-lightbox-alt="KAS PSI Academy Launch">
                    </div>
                </div>
            </div>
        </section>
    `;
}
