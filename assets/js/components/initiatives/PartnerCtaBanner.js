/**
 * VVK Foundation — Institutional Partnership & Call-to-Action Banner
 * Standard pre-footer CTA section matching Pages 1–3.
 */

import { i18n } from './shared.js?v=2.0.1';

export function renderPartnerCtaBanner() {
    return `
        <section class="cta-section">
            <div class="container reveal reveal--up">
                <span class="cta-badge">
                    <i class="fas fa-hands-helping"></i>
                    <span data-i18n="home.cta_label">GET INVOLVED</span>
                </span>
                ${i18n('home.cta_title', 'h2', 'class="cta-title"')}
                ${i18n('home.cta_desc', 'p', 'class="cta-desc"')}
                <div class="cta-actions">
                    <a href="/volunteer" data-route class="btn--cta-gold magnetic">
                        <i class="fas fa-hand-holding-heart"></i>
                        <span data-i18n="home.cta_volunteer">${i18n('home.cta_volunteer')}</span>
                    </a>
                    <a href="/contact" data-route class="btn--cta-outline magnetic">
                        <i class="fas fa-envelope"></i>
                        <span data-i18n="initiatives.cta_partner">${i18n('initiatives.cta_partner')}</span>
                    </a>
                </div>
            </div>
        </section>
    `;
}
