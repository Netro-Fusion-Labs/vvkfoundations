/**
 * VVK Foundation — Impact Hero & Trust Metrics
 * Clean editorial hero matching Who We Are (Page 2) & Leadership (Page 3),
 * featuring the official trust registration charter banner and a 4-column
 * verified grassroots impact metric strip. Quick-jump clutter removed.
 */

import { METRICS, INSTITUTION } from '../../data/initiatives.js?v=2.0.1';
import { esc, i18n, translate } from './shared.js?v=2.0.1';

export function renderImpactHero() {
    return `
        <!-- Page Hero (Matches Who We Are & Leadership) -->
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs">
                    <a href="/" data-route data-i18n="nav.home">${esc(translate('nav.home'))}</a>
                    <span class="separator"><i class="fas fa-chevron-right"></i></span>
                    <span class="current" data-i18n="nav.initiatives">${esc(translate('nav.initiatives'))}</span>
                </div>
                <h1 data-i18n="initiatives.title">${esc(translate('initiatives.title'))}</h1>
                <p data-i18n="initiatives.subtitle">${esc(translate('initiatives.subtitle'))}</p>
            </div>
        </section>

        <!-- Trust Charter & Impact Metrics Strip -->
        <section class="impact-ledger-section">
            <div class="container">
                <!-- Trust Registration & Charter Banner (Matching Who We Are Page 2) -->
                <div class="impact-trust-banner reveal reveal--up">
                    <div class="impact-trust-banner__left">
                        <div class="impact-trust-banner__reg" data-i18n="about.trust_reg">
                            <i class="fas fa-certificate" style="color: #2b9348; margin-right: 8px;"></i> VVK Foundation Charitable Trust (Reg. No. ${esc(INSTITUTION.regNo)}, Ilkal, Bagalkot)
                        </div>
                        <p class="impact-trust-banner__motto" data-i18n="about.motto">
                            With Farmers. For Farmers. For a Better Tomorrow.
                        </p>
                    </div>

                </div>

                <!-- 4-Column Verified Grassroots Metrics Strip -->
                <div class="impact-metrics-grid reveal reveal--up">
                    ${METRICS.map((m, idx) => `
                        <div class="impact-metric-card stagger-${idx + 1}">
                            ${i18n(m.numKey, 'div', 'class="impact-metric-card__num"')}
                            ${i18n(m.labelKey, 'h4', 'class="impact-metric-card__label"')}
                            ${i18n(m.subKey, 'p', 'class="impact-metric-card__sub"')}
                        </div>`).join('')}
                </div>
            </div>
        </section>
    `;
}
