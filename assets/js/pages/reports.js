/**
 * VVK Foundation — Reports Page
 */

export function renderReports() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs"><a href="/" data-route>Home</a> <span class="separator"><i class="fas fa-chevron-right"></i></span> <span class="current" data-i18n="nav.reports">Reports</span></div>
                <h1 data-i18n="reports.title">Transparency & Reports</h1>
                <p data-i18n="reports.desc">Transparency is core to our mission. Review our detailed annual activity reports.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-file-alt"></i> <span data-i18n="reports.section_label">ANNUAL REPORTS</span></span>
                    <h2 data-i18n="reports.download_title">Download Our Reports</h2>
                </div>

                <div class="grid-2" style="gap: var(--space-2xl);">
                    <div class="report-card reveal reveal--up stagger-1">
                        <div class="report-card__preview">
                            <i class="fas fa-file-pdf" style="color: var(--clr-error);"></i>
                        </div>
                        <div>
                            <span class="badge badge--blue mb-sm">English</span>
                            <h3 class="mb-xs">Annual Report 2023–24</h3>
                            <p class="text-sm text-muted mb-lg" data-i18n="reports.card_en_desc">Read the complete English annual report with activity details, photographs, and program summaries.</p>
                            <a href="/VVK Foundation Report (1).pdf" download class="btn btn--primary btn--sm" data-i18n="reports.download_en">
                                <i class="fas fa-download"></i> Download Report (English)
                            </a>
                        </div>
                    </div>

                    <div class="report-card reveal reveal--up stagger-2">
                        <div class="report-card__preview">
                            <i class="fas fa-file-pdf" style="color: var(--clr-error);"></i>
                        </div>
                        <div>
                            <span class="badge badge--green mb-sm">ಕನ್ನಡ</span>
                            <h3 class="mb-xs">ವಾರ್ಷಿಕ ವರದಿ 2023–24</h3>
                            <p class="text-sm text-muted mb-lg" data-i18n="reports.card_kn_desc">Access the Kannada version of the report for local-language storytelling and community documentation.</p>
                            <a href="/VVK Foundation Report Kannada.pdf" download class="btn btn--primary btn--sm" data-i18n="reports.download_kn">
                                <i class="fas fa-download"></i> Download Report (Kannada)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-secondary">
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-chart-bar"></i> <span data-i18n="reports.highlights_label">HIGHLIGHTS</span></span>
                    <h2 data-i18n="reports.summary_title">Highlights from the Report</h2>
                </div>

                <div class="grid-3">
                    <div class="card reveal reveal--up stagger-1">
                        <div class="card__body">
                            <div class="feature-icon mb-md"><i class="fas fa-graduation-cap"></i></div>
                            <h4 data-i18n="reports.point_1_title">Education Outreach</h4>
                            <p class="text-sm mt-sm" data-i18n="reports.point_1_desc">The report documents free coaching support for KAS and PSI aspirants, with a focus on rural youth.</p>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-2">
                        <div class="card__body">
                            <div class="feature-icon mb-md"><i class="fas fa-venus"></i></div>
                            <h4 data-i18n="reports.point_2_title">Women-centered Programs</h4>
                            <p class="text-sm mt-sm" data-i18n="reports.point_2_desc">Large-scale women's gatherings, cultural celebrations, and recognition events that reinforce dignity.</p>
                        </div>
                    </div>
                    <div class="card reveal reveal--up stagger-3">
                        <div class="card__body">
                            <div class="feature-icon mb-md"><i class="fas fa-heartbeat"></i></div>
                            <h4 data-i18n="reports.point_3_title">Healthcare and Service</h4>
                            <p class="text-sm mt-sm" data-i18n="reports.point_3_desc">Medical camps and collaborative welfare drives delivered with institutional partners.</p>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-2xl reveal reveal--up">
                    <a href="/gallery" data-route class="btn btn--outline magnetic" data-i18n="reports.gallery_cta_button"><i class="fas fa-images"></i> Open Gallery</a>
                </div>
            </div>
        </section>
    `;
}
