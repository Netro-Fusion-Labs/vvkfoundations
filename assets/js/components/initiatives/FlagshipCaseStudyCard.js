/**
 * VVK Foundation — Flagship Case Study Card
 * Refactored 2-column horizontal split card with calm executive density
 * matching Board of Advisors on Page 3.
 * Essential info by default + single clean CTA opening full brief modal.
 */

import { CATEGORY_LABEL_KEYS } from '../../data/initiatives.js?v=2.0.1';
import { esc, i18n } from './shared.js?v=2.0.1';

/**
 * @param {import('../../data/initiatives.js').Program} program
 * @returns {string}
 */
export function renderFlagshipCaseStudyCard(program) {
    const { id, domain, year, gallery, outcomeKeys } = program;
    const hero = gallery[0] || { src: '', caption: '' };
    const titleId = `program-${id}-title`;
    const topOutcomes = outcomeKeys.slice(0, 3);
    const catKey = CATEGORY_LABEL_KEYS[domain] || 'initiatives.dom_agriculture';

    return `
        <article class="flagship-card reveal reveal--up" id="program-${esc(id)}" data-program-card data-domain="${esc(domain)}" data-year="${year}" aria-labelledby="${titleId}">
            <!-- Media Column (Single Hero Photo with Object Cover) -->
            <div class="flagship-card__media">
                <button type="button" class="flagship-card__hero" data-action="gallery" data-program="${esc(id)}" data-index="0" aria-label="${esc(hero.caption || 'View photo')}">
                    <img src="${esc(hero.src)}" alt="${esc(hero.caption || '')}" loading="lazy" decoding="async">
                    <span class="flagship-card__zoom" aria-hidden="true"><i class="fas fa-search-plus"></i></span>
                </button>
                <div class="flagship-card__hero-meta">
                    <p class="flagship-card__caption">${esc(hero.label || hero.caption || '')}</p>
                    <span class="flagship-card__count"><i class="fas fa-images"></i> ${gallery.length} Photos</span>
                </div>
            </div>

            <!-- Content Column -->
            <div class="flagship-card__content">
                <div class="flagship-card__meta-bar">
                    <span class="flagship-card__cat">
                        ${i18n(catKey)}
                    </span>
                    <span class="flagship-card__date">
                        <i class="fas fa-calendar-alt"></i> ${i18n(program.dateKey)}
                    </span>
                    <span class="flagship-card__venue">
                        <i class="fas fa-map-marker-alt"></i> ${i18n(program.venueKey)}
                    </span>
                </div>

                ${i18n(program.titleKey, 'h3', `id="${titleId}" class="flagship-card__title"`)}

                ${i18n(program.summaryKey, 'p', 'class="flagship-card__summary"')}

                <!-- Standardized Verified Outcomes (Top 3) -->
                <div class="flagship-card__outcomes">
                    <h4 class="flagship-card__outcomes-title">
                        <i class="fas fa-check-circle" style="color: #2b9348;"></i>
                        <span data-i18n="initiatives.verified_outcomes">VERIFIED OUTCOMES</span>
                    </h4>
                    <ul class="flagship-card__outcomes-list">
                        ${topOutcomes.map(k => `
                            <li>
                                <i class="fas fa-check" aria-hidden="true"></i>
                                <span>${i18n(k)}</span>
                            </li>`).join('')}
                    </ul>
                </div>

                <!-- Single Clean CTA Button opening Modal/Brief -->
                <div class="flagship-card__footer">
                    <button type="button" class="btn btn--outline btn--sm flagship-card__cta" data-action="open-modal" data-program="${esc(id)}">
                        <span data-i18n="initiatives.read_full_brief">Read Full Brief & Gallery</span>
                        <i class="fas fa-arrow-right" style="margin-left: 6px;"></i>
                    </button>
                </div>
            </div>
        </article>
    `;
}
