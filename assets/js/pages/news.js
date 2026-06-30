/**
 * VVK Foundation — News & Events Page
 */

export function renderNews() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs"><a href="/" data-route>Home</a> <span class="separator"><i class="fas fa-chevron-right"></i></span> <span class="current" data-i18n="nav.news">News & Events</span></div>
                <h1 data-i18n="news.title">News & Events</h1>
                <p data-i18n="news.desc">Stay updated with the latest news, upcoming events, and stories from the field.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-newspaper"></i> <span data-i18n="news.recent_label">LATEST UPDATES</span></span>
                    <h2 data-i18n="news.recent_title">Recent News</h2>
                </div>

                <div class="grid-3">
                    <div class="img-card reveal reveal--up stagger-1">
                        <div class="img-zoom"><img src="/assets/images/extracted/mega_cardiac_medical_health_camp_02.jpg" alt="Health Camp News" loading="lazy"></div>
                        <div class="img-card__body">
                            <span class="badge badge--green mb-sm" data-i18n="news.cat_health">Healthcare</span>
                            <h3 data-i18n="news.news_1_title">Mega Cardiac Camp Benefits 500+ Residents</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="news.news_1_date">August 2024</p>
                            <p class="text-sm mt-sm line-clamp-2" data-i18n="news.news_1_desc">In partnership with SDM Narayana Hrudayalaya, VVK Foundation organized a free cardiac screening camp.</p>
                        </div>
                    </div>
                    <div class="img-card reveal reveal--up stagger-2">
                        <div class="img-zoom"><img src="/assets/images/extracted/international_womensday_03.jpg" alt="Women's Day News" loading="lazy"></div>
                        <div class="img-card__body">
                            <span class="badge badge--blue mb-sm" data-i18n="news.cat_women">Women Empowerment</span>
                            <h3 data-i18n="news.news_2_title">Nari Shakti Conference Inspires Thousands</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="news.news_2_date">March 2024</p>
                            <p class="text-sm mt-sm line-clamp-2" data-i18n="news.news_2_desc">International Women's Day celebrations at Ilkal and Banahatti honored outstanding women achievers.</p>
                        </div>
                    </div>
                    <div class="img-card reveal reveal--up stagger-3">
                        <div class="img-zoom"><img src="/assets/images/extracted/workshop_02.jpg" alt="Academy News" loading="lazy"></div>
                        <div class="img-card__body">
                            <span class="badge badge--gold mb-sm" data-i18n="news.cat_education">Education</span>
                            <h3 data-i18n="news.news_3_title">Free KAS & PSI Academy Launches</h3>
                            <p class="text-sm text-muted mt-xs" data-i18n="news.news_3_date">December 2023</p>
                            <p class="text-sm mt-sm line-clamp-2" data-i18n="news.news_3_desc">200 students enrolled in the inaugural batch of the free competitive exam coaching program.</p>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-3xl reveal reveal--up">
                    <p class="text-muted" data-i18n="news.coming_soon">More news updates coming soon. Follow us on social media for the latest.</p>
                </div>
            </div>
        </section>
    `;
}
