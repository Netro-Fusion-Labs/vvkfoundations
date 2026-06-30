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
                        <h2 class="founder-name" data-i18n="founder.name">Mrs. Veena Vijayanand Kashappanavar</h2>
                        <p class="founder-role" data-i18n="founder.role">Founder & Chairperson</p>
                        
                        <div class="founder-social" style="align-items: center;">
                            <span style="font-weight: 600; font-size: var(--fs-body-sm); color: var(--clr-text-secondary); text-transform: uppercase; letter-spacing: var(--ls-wide); margin-right: 4px;">Follow:</span>
                            <a href="https://www.instagram.com/veena_vijayanand_kashappanavar?igsh=MXR0YmJ6OHJ2MWF1Yg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-ig">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/veena.vijayanandkashappanavar" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-fb">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>

                        <p class="founder-bio" data-i18n="founder.bio">A visionary leader dedicated to social upliftment, Mrs. Veena Kashappanavar has spent years working at the grassroots level. She established the VVK Foundation to institutionalize her efforts in empowering the youth, women, and farmers of the region. Her leadership is marked by compassion, strategic action, and a deep commitment to cultural traditions.</p>

                        <div class="founder-highlights">
                            <h3 data-i18n="founder.highlights_title">Leadership in Action</h3>
                            <ul>
                                <li data-i18n="founder.highlight_1">Leading women-centered public events that celebrate dignity, culture, and community participation.</li>
                                <li data-i18n="founder.highlight_2">Supporting students through free coaching access and motivational outreach.</li>
                                <li data-i18n="founder.highlight_3">Anchoring health and welfare drives in partnership with trusted institutions.</li>
                            </ul>
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
