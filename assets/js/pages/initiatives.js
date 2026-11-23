/**
 * VVK Foundation — Initiatives & Impact Page
 * Institutional editorial layout aligned with Who We Are (Page 2) & Leadership (Page 3).
 *
 * Components:
 * 1. Impact Hero & Official Trust Registration Strip (Page-hero + 4 Metrics)
 * 2. Strategic Domains of Grassroots Service (4 interactive domain overview cards)
 * 3. Flagship Case Studies with unified Domain/Year Filter Bar & Detail Modal
 * 4. Chronicle of Grassroots Impact (Deduplicated secondary milestones & press)
 * 5. Pre-Footer Call to Action Banner (Dark-green gradient)
 */

import { PROGRAMS, CHRONICLE } from '../data/initiatives.js?v=2.0.1';
import { renderImpactHero } from '../components/initiatives/ImpactHeroMetrics.js?v=2.0.3';
import { renderStrategicPillars, renderFlagshipFilterBar } from '../components/initiatives/StrategicPillarsFilter.js?v=2.0.1';
import { renderFlagshipCaseStudyCard } from '../components/initiatives/FlagshipCaseStudyCard.js?v=2.0.1';
import { renderChronicleTimeline } from '../components/initiatives/ChronicleTimeline.js?v=2.0.1';
import { renderPartnerCtaBanner } from '../components/initiatives/PartnerCtaBanner.js?v=2.0.1';
import { renderProgramModalContent, renderMilestoneModalContent } from '../components/initiatives/ProgramDetailModal.js?v=2.0.1';
import { i18n, setI18n, translate } from '../components/initiatives/shared.js?v=2.0.1';
import { openLightboxGroup } from '../lightbox.js?v=2.0.1';

export function renderInitiatives() {
    return `
        <div class="initiatives-page">
            <!-- 1. Hero & Metrics Strip -->
            ${renderImpactHero()}

            <!-- 2. Strategic Focus Areas -->
            ${renderStrategicPillars()}

            <!-- 3. Flagship Case Studies (Executive Density) -->
            <section class="flagship-section" id="flagship-case-studies" aria-labelledby="flagship-section-title" style="padding: var(--space-4xl) 0;">
                <div class="container">
                    <div class="section-header text-center reveal reveal--up">
                        <span class="section-label"><i class="fas fa-star"></i> <span data-i18n="initiatives.flagship_eyebrow">FLAGSHIP CASE STUDIES</span></span>
                        ${i18n('initiatives.showcase_title', 'h2', 'id="flagship-section-title"')}
                        ${i18n('initiatives.showcase_desc', 'p', 'class="section-desc"')}
                    </div>
                </div>

                <!-- Unified Sticky / Clean Filter Bar -->
                ${renderFlagshipFilterBar(PROGRAMS.length)}

                <div class="container">
                    <div class="flagship-cards-grid">
                        ${PROGRAMS.map(renderFlagshipCaseStudyCard).join('')}
                    </div>

                    <div class="flagship-empty-state" data-ie-empty hidden>
                        <i class="fas fa-filter-circle-xmark" style="font-size: 2.5rem; color: var(--clr-text-muted); margin-bottom: 1rem;"></i>
                        ${i18n('initiatives.empty_state', 'p')}
                        <button type="button" class="btn btn--outline btn--sm mt-md" data-action="reset-filters">
                            <i class="fas fa-rotate-left"></i>
                            ${i18n('initiatives.reset_filter')}
                        </button>
                    </div>
                </div>
            </section>

            <!-- 4. Chronicle of Grassroots Impact (Deduplicated Secondary Milestones) -->
            ${renderChronicleTimeline()}

            <!-- 5. Pre-footer Call to Action -->
            ${renderPartnerCtaBanner()}
        </div>
    `;
}

/**
 * Wire up filtering, disclosures, modals, and lightbox.
 * Safe to call once per render: listeners are bound cleanly on the root container.
 */
export function initInitiativesPage() {
    const root = document.querySelector('.initiatives-page');
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const state = { domain: 'all', year: 'all', chronicleYear: 'all' };

    const programsById = new Map(PROGRAMS.map(p => [p.id, p]));
    const milestonesById = new Map(CHRONICLE.map(c => [c.id, c]));
    const cards = [...root.querySelectorAll('[data-program-card]')];
    const countEl = root.querySelector('[data-ie-count]');
    const emptyEl = root.querySelector('[data-ie-empty]');
    const resetBtn = root.querySelector('[data-action="reset-filters"]');

    // Ensure modal container is mounted directly to document.body for correct viewport centering
    let modalContainer = document.getElementById('program-modal-container');
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'program-modal-container';
        modalContainer.className = 'program-modal-overlay';
        modalContainer.hidden = true;
        modalContainer.setAttribute('aria-hidden', 'true');
        document.body.appendChild(modalContainer);
    } else if (modalContainer.parentElement !== document.body) {
        document.body.appendChild(modalContainer);
    }
    let lastModalTrigger = null;

    /* ── Flagship filtering ─────────────────────────────── */
    function applyFilters() {
        let visible = 0;
        cards.forEach(card => {
            const match = (state.domain === 'all' || card.dataset.domain === state.domain)
                && (state.year === 'all' || card.dataset.year === state.year);
            card.hidden = !match;
            if (match) visible++;
        });

        root.querySelectorAll('[data-action="filter-domain"]').forEach(btn => setPill(btn, btn.dataset.value === state.domain));
        root.querySelectorAll('[data-action="filter-year"]').forEach(btn => setPill(btn, btn.dataset.value === state.year));
        root.querySelectorAll('[data-action="pick-domain"]').forEach(btn => {
            const on = btn.dataset.value === state.domain;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-pressed', String(on));
        });

        if (countEl) countEl.textContent = String(visible);
        if (emptyEl) emptyEl.hidden = visible > 0;
        if (resetBtn) resetBtn.disabled = state.domain === 'all' && state.year === 'all';
    }

    function setPill(btn, on) {
        btn.classList.toggle('is-active', on);
        btn.setAttribute('aria-pressed', String(on));
    }

    function applyChronicleFilter() {
        root.querySelectorAll('[data-year-group]').forEach(group => {
            group.hidden = state.chronicleYear !== 'all' && group.dataset.yearGroup !== state.chronicleYear;
        });
        root.querySelectorAll('[data-action="chronicle-year"]').forEach(btn => setPill(btn, btn.dataset.value === state.chronicleYear));
    }

    /* ── Scrolling helper ──────────────────────────────── */
    function scrollToId(id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    }

    /* ── Modal Manager ─────────────────────────────────── */
    function openModal(programId, trigger) {
        const program = programsById.get(programId);
        if (!program || !modalContainer) return;
        lastModalTrigger = trigger;

        modalContainer.innerHTML = renderProgramModalContent(program);
        modalContainer.hidden = false;
        modalContainer.setAttribute('aria-hidden', 'false');
        modalContainer.classList.add('is-open');
        document.body.style.overflow = 'hidden';

        const closeBtn = modalContainer.querySelector('[data-action="close-modal"]');
        if (closeBtn) closeBtn.focus({ preventScroll: true });
    }

    function openMilestoneModal(milestoneId, trigger) {
        const milestone = milestonesById.get(milestoneId);
        if (!milestone || !modalContainer) return;
        lastModalTrigger = trigger;

        modalContainer.innerHTML = renderMilestoneModalContent(milestone);
        modalContainer.hidden = false;
        modalContainer.setAttribute('aria-hidden', 'false');
        modalContainer.classList.add('is-open');
        document.body.style.overflow = 'hidden';

        const closeBtn = modalContainer.querySelector('[data-action="close-modal"]');
        if (closeBtn) closeBtn.focus({ preventScroll: true });
    }

    function closeModal() {
        if (!modalContainer || modalContainer.hidden) return;
        modalContainer.classList.remove('is-open');
        modalContainer.hidden = true;
        modalContainer.setAttribute('aria-hidden', 'true');
        modalContainer.innerHTML = '';
        document.body.style.overflow = '';
        if (lastModalTrigger && document.contains(lastModalTrigger)) {
            lastModalTrigger.focus({ preventScroll: true });
        }
        lastModalTrigger = null;
    }

    /* ── Lightbox Manager ───────────────────────────────── */
    function openProgramGallery(programId, index, trigger) {
        const program = programsById.get(programId);
        if (!program) return;
        openLightboxGroup(program.gallery.map(g => ({ src: g.src, caption: g.caption || g.label || '' })), index, trigger);
    }

    function openMilestoneGallery(milestoneId, index, trigger) {
        const milestone = milestonesById.get(milestoneId);
        if (!milestone) return;
        const gallery = (milestone.gallery && milestone.gallery.length) ? milestone.gallery : [
            { src: milestone.media.src, caption: milestone.media.alt }
        ];
        openLightboxGroup(gallery.map(g => ({ src: g.src, caption: g.caption || g.label || '' })), index, trigger);
    }

    /* ── Delegated Click Handling ───────────────────────── */
    // Root page actions
    root.addEventListener('click', event => {
        const target = event.target.closest('[data-action]');
        if (!target || !root.contains(target)) return;
        const { action, value } = target.dataset;

        switch (action) {
            case 'pick-domain':
                state.domain = state.domain === value ? 'all' : value;
                applyFilters();
                scrollToId('flagship-case-studies');
                break;
            case 'filter-domain':
                state.domain = value;
                applyFilters();
                break;
            case 'filter-year':
                state.year = value;
                applyFilters();
                break;
            case 'reset-filters':
                state.domain = 'all';
                state.year = 'all';
                applyFilters();
                break;
            case 'chronicle-year':
                state.chronicleYear = value;
                applyChronicleFilter();
                break;
            case 'open-modal':
                openModal(target.dataset.program, target);
                break;
            case 'open-milestone-modal':
            case 'chronicle-media':
                openMilestoneModal(target.dataset.id, target);
                break;
        }
    });

    // Modal internal interactions (backdrop, close, gallery items, zoom)
    modalContainer.addEventListener('click', event => {
        if (event.target === modalContainer) {
            closeModal();
            return;
        }
        const target = event.target.closest('[data-action]');
        if (!target) return;
        const { action } = target.dataset;

        switch (action) {
            case 'close-modal':
                closeModal();
                break;
            case 'select-gallery-item': {
                const galleryEl = target.closest('[data-adaptive-gallery]');
                if (!galleryEl) break;

                const mainImg = galleryEl.querySelector('[data-gallery-main-img]');
                const captionEl = galleryEl.querySelector('[data-gallery-caption]');
                const counterEl = galleryEl.querySelector('[data-gallery-counter]');
                const zoomBtn = galleryEl.querySelector('[data-gallery-zoom-btn]');
                const pressPill = galleryEl.querySelector('[data-gallery-press-pill]');
                const mediaWrap = galleryEl.querySelector('[data-gallery-viewer-media]');

                const { index, src, caption, isPress } = target.dataset;

                if (mainImg && src) {
                    mainImg.src = src;
                    mainImg.alt = caption || '';
                }
                if (captionEl) {
                    captionEl.textContent = caption || '';
                }
                if (counterEl) {
                    const total = galleryEl.querySelectorAll('.adaptive-gallery__thumb-card').length;
                    counterEl.textContent = `${Number(index) + 1} / ${total}`;
                }
                if (zoomBtn) {
                    zoomBtn.dataset.index = index;
                }
                if (pressPill) {
                    pressPill.hidden = isPress !== 'true';
                }
                if (mediaWrap) {
                    mediaWrap.classList.toggle('adaptive-gallery__viewer-media--press', isPress === 'true');
                }

                galleryEl.querySelectorAll('.adaptive-gallery__thumb-card').forEach(card => {
                    const isActive = card === target;
                    card.classList.toggle('is-active', isActive);
                    card.setAttribute('aria-selected', isActive ? 'true' : 'false');
                });
                break;
            }
            case 'gallery':
                openProgramGallery(target.dataset.program, Number(target.dataset.index) || 0, target);
                break;
            case 'milestone-gallery':
                openMilestoneGallery(target.dataset.milestone, Number(target.dataset.index) || 0, target);
                break;
            case 'lightbox-single':
                openLightboxGroup([{ src: target.dataset.src, caption: target.dataset.caption || '' }], 0, target);
                break;
        }
    });

    /* ── Escape key closes modal ────────────────────────── */
    function handleKeydown(e) {
        if (e.key === 'Escape' && modalContainer && !modalContainer.hidden) {
            closeModal();
        }
    }
    document.addEventListener('keydown', handleKeydown);

    applyFilters();
    applyChronicleFilter();
}
