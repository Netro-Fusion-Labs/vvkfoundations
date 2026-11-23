/**
 * VVK Foundation — Program & Milestone Detail Modals
 * Clean, accessible modal dialogs displaying full program case studies
 * and detailed milestone briefings with an adaptive image gallery component.
 */

import { CATEGORY_LABEL_KEYS } from '../../data/initiatives.js?v=2.0.1';
import { esc, i18n } from './shared.js?v=2.0.1';

/**
 * Render Adaptive Gallery Component
 * - Single Image: Full-width large preview card
 * - Multiple Images: 2-column split (Left: Active Large Viewer, Right: Y-axis scrollable thumbnail list)
 * @param {{ id: string, contextType: 'program'|'milestone', gallery: Array<{src:string, label?:string, caption?:string, isPress?:boolean}> }} config
 * @returns {string}
 */
export function renderAdaptiveGallery({ id, contextType, gallery }) {
    if (!gallery || gallery.length === 0) return '';
    const isSingle = gallery.length === 1;
    const actionName = contextType === 'program' ? 'gallery' : 'milestone-gallery';
    const firstItem = gallery[0];

    if (isSingle) {
        return `
            <div class="adaptive-gallery adaptive-gallery--single" data-adaptive-gallery data-id="${esc(id)}" data-type="${esc(contextType)}">
                <div class="adaptive-gallery__viewer-card">
                    <div class="adaptive-gallery__viewer-media${firstItem.isPress ? ' adaptive-gallery__viewer-media--press' : ''}">
                        <img class="adaptive-gallery__main-img" src="${esc(firstItem.src)}" alt="${esc(firstItem.caption || firstItem.label || '')}" loading="eager" decoding="async">
                        <button type="button" class="adaptive-gallery__zoom-btn" data-action="${actionName}" data-${contextType}="${esc(id)}" data-index="0" aria-label="Zoom image fullscreen">
                            <i class="fas fa-search-plus"></i>
                            <span data-i18n="initiatives.zoom_photo">Zoom Fullscreen</span>
                        </button>
                        ${firstItem.isPress ? '<span class="adaptive-gallery__press-pill">Press Archive</span>' : ''}
                    </div>
                    ${firstItem.caption || firstItem.label ? `
                        <div class="adaptive-gallery__caption-bar">
                            <span class="adaptive-gallery__caption-text">${esc(firstItem.caption || firstItem.label || '')}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    return `
        <div class="adaptive-gallery adaptive-gallery--split" data-adaptive-gallery data-id="${esc(id)}" data-type="${esc(contextType)}">
            <!-- Left Side: Large Main Viewer -->
            <div class="adaptive-gallery__viewer-col">
                <div class="adaptive-gallery__viewer-card">
                    <div class="adaptive-gallery__viewer-media${firstItem.isPress ? ' adaptive-gallery__viewer-media--press' : ''}" data-gallery-viewer-media>
                        <img class="adaptive-gallery__main-img" data-gallery-main-img src="${esc(firstItem.src)}" alt="${esc(firstItem.caption || firstItem.label || '')}" loading="eager" decoding="async">
                        <button type="button" class="adaptive-gallery__zoom-btn" data-gallery-zoom-btn data-action="${actionName}" data-${contextType}="${esc(id)}" data-index="0" aria-label="Zoom image fullscreen">
                            <i class="fas fa-search-plus"></i>
                            <span data-i18n="initiatives.zoom_photo">Zoom Fullscreen</span>
                        </button>
                        <span class="adaptive-gallery__press-pill" data-gallery-press-pill${firstItem.isPress ? '' : ' hidden'}>Press Archive</span>
                    </div>
                    <div class="adaptive-gallery__caption-bar">
                        <span class="adaptive-gallery__caption-text" data-gallery-caption>${esc(firstItem.caption || firstItem.label || '')}</span>
                        <span class="adaptive-gallery__index-pill" data-gallery-counter>1 / ${gallery.length}</span>
                    </div>
                </div>
            </div>

            <!-- Right Side: Y-Axis Vertically Scrollable Thumbnail List -->
            <div class="adaptive-gallery__thumbs-col">
                <div class="adaptive-gallery__thumbs-header">
                    <span class="adaptive-gallery__thumbs-title">
                        <i class="fas fa-images" style="color: var(--clr-primary);"></i>
                        <span>Event Gallery</span>
                    </span>
                    <span class="adaptive-gallery__thumbs-count">${gallery.length} Photos</span>
                </div>
                <div class="adaptive-gallery__thumbs-scroll" role="tablist" aria-label="Event photos">
                    ${gallery.map((g, idx) => `
                        <button type="button"
                                class="adaptive-gallery__thumb-card${idx === 0 ? ' is-active' : ''}"
                                data-action="select-gallery-item"
                                data-type="${esc(contextType)}"
                                data-id="${esc(id)}"
                                data-index="${idx}"
                                data-src="${esc(g.src)}"
                                data-caption="${esc(g.caption || g.label || '')}"
                                data-is-press="${g.isPress ? 'true' : 'false'}"
                                role="tab"
                                aria-selected="${idx === 0 ? 'true' : 'false'}"
                                aria-label="${esc(g.label || g.caption || `Photo ${idx + 1}`)}">
                            <div class="adaptive-gallery__thumb-img-box${g.isPress ? ' adaptive-gallery__thumb-img-box--press' : ''}">
                                <img src="${esc(g.src)}" alt="${esc(g.caption || g.label || '')}" loading="eager" decoding="async">
                                <span class="adaptive-gallery__thumb-seq">#${idx + 1}</span>
                            </div>
                            <div class="adaptive-gallery__thumb-meta">
                                <span class="adaptive-gallery__thumb-caption">${esc(g.label || g.caption || `Photo ${idx + 1}`)}</span>
                                ${g.isPress ? '<span class="adaptive-gallery__thumb-tag">Press</span>' : ''}
                            </div>
                        </button>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

/**
 * Render Flagship Case Study Brief Modal
 * @param {import('../../data/initiatives.js').Program} program
 * @returns {string}
 */
export function renderProgramModalContent(program) {
    if (!program) return '';
    const { id, domain, gallery, outcomeKeys } = program;
    const catKey = CATEGORY_LABEL_KEYS[domain] || 'initiatives.dom_agriculture';

    return `
        <div class="program-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title-${esc(id)}">
            <header class="program-modal__header">
                <div class="program-modal__meta">
                    <span class="program-modal__cat">
                        ${i18n(catKey)}
                    </span>
                    <span class="program-modal__date">
                        <i class="fas fa-calendar-alt"></i> ${i18n(program.dateKey)}
                    </span>
                    <span class="program-modal__venue">
                        <i class="fas fa-map-marker-alt"></i> ${i18n(program.venueKey)}
                    </span>
                </div>
                ${i18n(program.titleKey, 'h2', `id="modal-title-${esc(id)}" class="program-modal__title"`)}
                <button type="button" class="program-modal__close" data-action="close-modal" aria-label="Close modal">
                    <i class="fas fa-times"></i>
                </button>
            </header>

            <div class="program-modal__body">
                <!-- 1. Program Overview / Full Summary -->
                <div class="program-modal__section">
                    <h3 class="program-modal__section-title">
                        <i class="fas fa-align-left" style="color: var(--clr-primary);"></i>
                        <span data-i18n="initiatives.read_more">Program Brief</span>
                    </h3>
                    ${i18n(program.summaryKey, 'p', 'class="program-modal__desc"')}
                </div>

                <!-- 2. Adaptive Event Media Gallery (1-Image vs 2-Column Multi-Image) -->
                <div class="program-modal__section">
                    <h3 class="program-modal__section-title">
                        <i class="fas fa-images" style="color: var(--clr-primary);"></i>
                        <span data-i18n="initiatives.photo_gallery_title">Event Media & Photo Archive</span>
                        <span class="program-modal__gallery-count">(${gallery.length} Photos)</span>
                    </h3>
                    ${renderAdaptiveGallery({ id, contextType: 'program', gallery })}
                </div>

                <!-- 3. All Verified Outcomes -->
                <div class="program-modal__section">
                    <h3 class="program-modal__section-title">
                        <i class="fas fa-check-circle" style="color: #2b9348;"></i>
                        <span data-i18n="initiatives.all_outcomes">All Verified Outcomes</span>
                    </h3>
                    <ul class="program-modal__outcomes-list">
                        ${outcomeKeys.map(k => `
                            <li>
                                <i class="fas fa-check-circle" style="color: #2b9348;"></i>
                                <span>${i18n(k)}</span>
                            </li>`).join('')}
                    </ul>
                </div>

                <!-- 4. Revered Seers, Dignitaries & Key Guests -->
                <div class="program-modal__section">
                    <h3 class="program-modal__section-title">
                        <i class="fas fa-users" style="color: var(--clr-primary);"></i>
                        <span data-i18n="initiatives.dignitaries_title">Revered Seers, Dignitaries & Guests</span>
                    </h3>
                    <div class="program-modal__dignitaries-box">
                        <i class="fas fa-award" style="color: #d97706; font-size: 1.1rem; flex-shrink: 0; margin-top: 2px;"></i>
                        <p class="program-modal__dignitaries-text">${i18n(program.dignitariesKey)}</p>
                    </div>
                </div>
            </div>

            <footer class="program-modal__footer">
                <button type="button" class="btn btn--outline btn--sm" data-action="close-modal">
                    <i class="fas fa-times"></i> <span data-i18n="initiatives.modal_close">Close Brief</span>
                </button>
            </footer>
        </div>
    `;
}

/**
 * Render Chronicle Milestone Detail Modal (Centered Responsive View + Content)
 * @param {import('../../data/initiatives.js').ChronicleEntry} milestone
 * @returns {string}
 */
export function renderMilestoneModalContent(milestone) {
    if (!milestone) return '';
    const { id, year, category, media } = milestone;
    const catKey = CATEGORY_LABEL_KEYS[category] || 'initiatives.dom_advocacy';
    const gallery = (milestone.gallery && milestone.gallery.length) ? milestone.gallery : [
        { src: media.src, label: media.alt, caption: media.alt, isPress: media.kind === 'press' }
    ];

    return `
        <div class="program-modal__dialog milestone-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="milestone-title-${esc(id)}">
            <header class="program-modal__header">
                <div class="program-modal__meta">
                    <span class="program-modal__cat">
                        ${i18n(catKey)}
                    </span>
                    <span class="program-modal__date">
                        <i class="fas fa-calendar-alt"></i> ${i18n(milestone.dateKey)}
                    </span>
                    <span class="milestone-modal__year-tag">
                        <i class="fas fa-history"></i> ${year}
                    </span>
                </div>
                ${i18n(milestone.titleKey, 'h2', `id="milestone-title-${esc(id)}" class="program-modal__title"`)}
                <button type="button" class="program-modal__close" data-action="close-modal" aria-label="Close modal">
                    <i class="fas fa-times"></i>
                </button>
            </header>

            <div class="program-modal__body milestone-modal__body">
                <!-- 1. Milestone Narrative / Context Summary -->
                <div class="milestone-modal__narrative-card">
                    <div class="milestone-modal__narrative-head">
                        <i class="fas fa-align-left" style="color: var(--clr-primary);"></i>
                        <span data-i18n="initiatives.milestone_story_title">Milestone Brief & Narrative</span>
                    </div>
                    ${i18n(milestone.descKey, 'p', 'class="milestone-modal__lead-text"')}
                </div>

                <!-- 2. Adaptive Event Media Gallery (1-Image vs 2-Column Multi-Image) -->
                <div class="milestone-modal__gallery-section">
                    <div class="milestone-modal__section-header">
                        <h3 class="program-modal__section-title">
                            <i class="fas fa-images" style="color: var(--clr-primary);"></i>
                            <span data-i18n="initiatives.photo_gallery_title">Event Media & Archival Photos</span>
                            <span class="program-modal__gallery-count">(${gallery.length} ${gallery.length === 1 ? 'Photo' : 'Photos'})</span>
                        </h3>
                    </div>
                    ${renderAdaptiveGallery({ id, contextType: 'milestone', gallery })}
                </div>

                <!-- 3. Trust Credentials Footnote -->
                <div class="milestone-modal__trust-badge">
                    <i class="fas fa-certificate" style="color: #2b9348;"></i>
                    <span>VVK Foundation Grassroots Archive • Reg. No. BGK-4-00062-2023-24</span>
                </div>
            </div>

            <footer class="program-modal__footer">
                <button type="button" class="btn btn--outline btn--sm" data-action="close-modal">
                    <i class="fas fa-times"></i> <span data-i18n="initiatives.modal_close">Close Brief</span>
                </button>
            </footer>
        </div>
    `;
}
