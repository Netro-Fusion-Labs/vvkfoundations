/**
 * VVK Foundation — Strategic Domains & Unified Case Study Filter Bar
 * 4 Strategic Focus Cards matching Core Interventions on Who We Are (Page 2),
 * with a unified clean filter bar directly above the Flagship Case Studies.
 */

import { PILLARS, DOMAIN_FILTERS, YEARS } from '../../data/initiatives.js?v=2.0.1';
import { esc, i18n } from './shared.js?v=2.0.1';

export function renderStrategicPillars() {
    return `
        <!-- Strategic Domains of Grassroots Service (Matches Who We Are Page 2) -->
        <section class="bg-secondary" id="strategic-domains" style="padding: var(--space-4xl) 0;">
            <div class="container">
                <div class="section-header text-center reveal reveal--up">
                    <span class="section-label"><i class="fas fa-compass"></i> <span data-i18n="initiatives.focus_eyebrow">STRATEGIC FOCUS</span></span>
                    <h2 data-i18n="initiatives.pillars_title">Strategic Domains of Grassroots Service</h2>
                    <p class="section-desc" data-i18n="initiatives.pillars_desc">Select a domain to filter the flagship programs below, or browse all initiatives.</p>
                </div>

                <div class="domains-grid reveal reveal--up">
                    ${PILLARS.map((p, idx) => `
                        <button type="button" class="domain-card card stagger-${idx + 1}" data-action="pick-domain" data-value="${esc(p.id)}" aria-pressed="false">
                            <div class="card__body domain-card__body">
                                <div class="domain-card__icon-box">
                                    <div class="feature-icon" style="margin: 0 0 var(--space-md);"><i class="fas ${esc(p.icon)}"></i></div>
                                </div>
                                ${i18n(p.titleKey, 'h3', 'class="domain-card__title"')}
                                ${i18n(p.descKey, 'p', 'class="domain-card__desc"')}
                                <div class="domain-card__cue">
                                    ${i18n('initiatives.view_programs')}
                                    <i class="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </button>`).join('')}
                </div>
            </div>
        </section>
    `;
}

export function renderFlagshipFilterBar(totalPrograms) {
    return `
        <div class="flagship-filterbar" id="flagship-filterbar">
            <div class="container flagship-filterbar__inner">
                <div class="flagship-filterbar__group">
                    <span class="flagship-filterbar__label">
                        <i class="fas fa-layer-group" style="color: var(--clr-primary); margin-right: 4px;"></i>
                        <span data-i18n="initiatives.filter_domain_label">Domain</span>:
                    </span>
                    <div class="filter-pills" role="group" aria-label="Filter by Domain">
                        ${DOMAIN_FILTERS.map(f => `
                            <button type="button" class="filter-pill${f.id === 'all' ? ' is-active' : ''}" data-action="filter-domain" data-value="${esc(f.id)}" aria-pressed="${f.id === 'all'}">
                                ${i18n(f.labelKey)}
                            </button>`).join('')}
                    </div>
                </div>

                <div class="flagship-filterbar__group">
                    <span class="flagship-filterbar__label">
                        <i class="fas fa-calendar-alt" style="color: var(--clr-primary); margin-right: 4px;"></i>
                        <span data-i18n="initiatives.filter_year_label">Year</span>:
                    </span>
                    <div class="filter-pills" role="group" aria-label="Filter by Year">
                        <button type="button" class="filter-pill is-active" data-action="filter-year" data-value="all" aria-pressed="true">${i18n('initiatives.filter_all')}</button>
                        ${YEARS.map(y => `
                            <button type="button" class="filter-pill" data-action="filter-year" data-value="${y}" aria-pressed="false">${y}</button>`).join('')}
                    </div>
                </div>

                <div class="flagship-filterbar__status">
                    <span class="filter-results-badge" role="status" aria-live="polite">
                        ${i18n('initiatives.results_label')}: <strong data-ie-count>${totalPrograms}</strong> / ${totalPrograms}
                    </span>
                    <button type="button" class="filter-reset-btn" data-action="reset-filters" disabled title="Reset all filters">
                        <i class="fas fa-rotate-left"></i>
                        <span data-i18n="initiatives.reset_filter">${i18n('initiatives.reset_filter')}</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}
