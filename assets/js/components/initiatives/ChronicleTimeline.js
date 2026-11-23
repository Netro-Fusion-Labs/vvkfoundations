/**
 * VVK Foundation — Chronicle of Grassroots Impact
 * Complete chronological timeline archive with interactive milestone modal briefs.
 */

import { CHRONICLE, CATEGORY_LABEL_KEYS, YEARS } from '../../data/initiatives.js?v=2.0.1';
import { esc, i18n } from './shared.js?v=2.0.1';

function renderChronicleRow(entry) {
    const { id, year, media } = entry;
    const isPress = media.kind === 'press';
    const position = media.position ? ` style="object-position:${esc(media.position)}"` : '';
    const catKey = CATEGORY_LABEL_KEYS[entry.category] || 'initiatives.dom_advocacy';

    return `
        <li class="chronicle-row" data-chronicle-row data-id="${esc(id)}" data-year="${year}">
            <div class="chronicle-row__when">
                ${i18n(entry.dateKey, 'p', 'class="chronicle-row__date"')}
                <span class="chronicle-row__tag">${i18n(catKey)}</span>
            </div>
            <div class="chronicle-row__content">
                ${i18n(entry.titleKey, 'h4', 'class="chronicle-row__title"')}
                ${i18n(entry.descKey, 'p', 'class="chronicle-row__desc"')}
                <button type="button" class="chronicle-row__read-btn" data-action="open-milestone-modal" data-id="${esc(id)}">
                    <span data-i18n="initiatives.read_more">Read full brief</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
            <div class="chronicle-row__media-wrap">
                <button type="button" class="chronicle-row__media" data-action="open-milestone-modal" data-id="${esc(id)}" aria-label="${esc(media.alt)}">
                    <div class="chronicle-row__frame${isPress ? ' chronicle-row__frame--press' : ''}">
                        <img src="${esc(media.src)}" alt="${esc(media.alt)}" loading="lazy" decoding="async"${position}>
                        <span class="chronicle-row__zoom" aria-hidden="true"><i class="fas fa-search-plus"></i></span>
                    </div>
                    ${isPress ? i18n('initiatives.press_label', 'span', 'class="chronicle-row__press-badge"') : ''}
                </button>
            </div>
        </li>`;
}

export function renderChronicleTimeline() {
    const availableYears = YEARS.filter(y => CHRONICLE.some(c => c.year === y));

    return `
        <section class="bg-secondary chronicle-section" id="chronicle-timeline" style="padding: var(--space-4xl) 0;">
            <div class="container">
                <div class="section-header text-center reveal reveal--up">
                    <span class="section-label"><i class="fas fa-newspaper"></i> <span data-i18n="activities.label">CHRONICLE OF MILESTONES</span></span>
                    <h2 data-i18n="activities.title">Chronicle of Grassroots Impact</h2>
                    <p class="section-desc" data-i18n="initiatives.chronicle_desc">A chronological record of state advocacy events, medical missions, civil service academies, and archival press coverage.</p>
                </div>

                <div class="chronicle-filter-wrap reveal reveal--up">
                    <div class="filter-pills" role="group" aria-label="Filter timeline by Year">
                        <button type="button" class="filter-pill is-active" data-action="chronicle-year" data-value="all" aria-pressed="true">${i18n('initiatives.filter_all')}</button>
                        ${availableYears.map(y => `
                            <button type="button" class="filter-pill" data-action="chronicle-year" data-value="${y}" aria-pressed="false">${y}</button>`).join('')}
                    </div>
                </div>

                <div class="chronicle-ledger reveal reveal--up">
                    ${availableYears.map(y => `
                        <div class="chronicle-year-group" data-year-group="${y}" aria-labelledby="chronicle-year-${y}">
                            <div class="chronicle-year-group__badge" id="chronicle-year-${y}">
                                <span>${y}</span>
                            </div>
                            <ol class="chronicle-year-group__rows">
                                ${CHRONICLE.filter(c => c.year === y).map(renderChronicleRow).join('')}
                            </ol>
                        </div>`).join('')}
                </div>
            </div>
        </section>
    `;
}
