/**
 * VVK Foundation — Floating "Become a Volunteer" Pill & Modal
 * Renders a persistent floating pill in the bottom-right corner and opens
 * the volunteer registration form in an accessible modal with background scroll lock.
 */

import { applyTranslations } from './i18n.js?v=2.1.1';
import { renderVolunteerFormMarkup, bindVolunteerForm } from './pages/volunteer.js?v=2.1.1';

export function initVolunteerModal() {
    ensureVolunteerPill();
    ensureVolunteerModal();

    document.addEventListener('click', (e) => {
        if (e.target.closest('#floating-volunteer-pill')) {
            e.preventDefault();
            openVolunteerModal();
            return;
        }

        const modal = document.getElementById('volunteer-modal');
        if (modal && modal.classList.contains('is-open')) {
            if (e.target.closest('#volunteer-modal-close') || e.target === modal) {
                closeVolunteerModal();
            }
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVolunteerModal();
        }
    });
}

function ensureVolunteerPill() {
    if (document.getElementById('floating-volunteer-pill')) return;

    const pill = document.createElement('button');
    pill.type = 'button';
    pill.id = 'floating-volunteer-pill';
    pill.className = 'floating-volunteer-pill';
    pill.setAttribute('aria-haspopup', 'dialog');
    pill.setAttribute('aria-controls', 'volunteer-modal');
    pill.innerHTML = `
        <i class="fas fa-hand-holding-heart"></i>
        <span data-i18n="home.cta_volunteer">Become a Volunteer</span>
    `;

    document.body.appendChild(pill);
    applyTranslations();
}

function ensureVolunteerModal() {
    if (document.getElementById('volunteer-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'volunteer-modal';
    modal.className = 'donate-modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'volunteer-modal-title');
    modal.setAttribute('aria-hidden', 'true');

    modal.innerHTML = `
        <div class="donate-modal__dialog volunteer-modal__dialog">
            <div class="donate-modal__header">
                <div>
                    <span class="section-label donate-modal__badge">
                        <i class="fas fa-hand-holding-heart"></i>
                        <span data-i18n="volunteer.areas_label">VOLUNTEER AREAS</span>
                    </span>
                    <h2 id="volunteer-modal-title" class="donate-modal__title" data-i18n="volunteer.title">Become a Volunteer</h2>
                </div>
                <button type="button" id="volunteer-modal-close" class="donate-modal__close" aria-label="Close volunteer dialog">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="donate-modal__body">
                <p class="donate-modal__intro" data-i18n="volunteer.desc">
                    Your time and skills can create lasting change. Join our community of changemakers.
                </p>
                ${renderVolunteerFormMarkup('vol-modal')}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    bindVolunteerForm('vol-modal');
    applyTranslations();
}

export function openVolunteerModal() {
    ensureVolunteerModal();
    const modal = document.getElementById('volunteer-modal');
    if (!modal) return;

    applyTranslations();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const firstInput = document.getElementById('vol-modal-name');
    if (firstInput) {
        setTimeout(() => firstInput.focus(), 80);
    }
}

export function closeVolunteerModal() {
    const modal = document.getElementById('volunteer-modal');
    if (!modal || !modal.classList.contains('is-open')) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}
