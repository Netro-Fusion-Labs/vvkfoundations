/**
 * VVK Foundation — 404 Not Found Page
 */

export function renderNotFound() {
    return `
        <section class="not-found">
            <div class="container reveal reveal--up">
                <div class="not-found__code">404</div>
                <h1 data-i18n="404.title">Page Not Found</h1>
                <p data-i18n="404.desc">The page you're looking for doesn't exist or has been moved.</p>
                <div class="d-flex gap-md justify-center flex-wrap">
                    <a href="/" data-route class="btn btn--primary magnetic" data-i18n="404.home_btn">Return to Home</a>
                    <a href="/contact" data-route class="btn btn--outline magnetic" data-i18n="404.contact_btn">Contact Us</a>
                </div>
            </div>
        </section>
    `;
}
