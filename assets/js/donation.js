/**
 * VVK Foundation — Donation / Support Us Module
 * Renders the #donate section (for homepage) and a global Donation Modal
 * (accessible from any page), with one-click copy, copy-all, toast feedback,
 * and WhatsApp confirmation.
 */

import { applyTranslations, translate } from './i18n.js?v=2.1.0';

const BANK_DETAILS = {
    accountName: 'VEENA V KASHAPPANAVAR FOUNDATION CHARITABLE TRUST',
    bankName: 'State Bank of India (SBI)',
    accountNumber: '43845217628',
    accountType: 'Current Account',
    ifsc: 'SBIN0040312',
    branch: 'Ilkal, Bagalkot, Karnataka',
    micr: '587002112'
};

const WHATSAPP_NUMBER = '917676740862';
const WHATSAPP_MESSAGE =
    'Hello VVK Foundation, I have made a donation to support your initiatives. Sharing my transaction details for confirmation.';

function getWhatsAppConfirmUrl() {
    return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

function getFormattedBankDetailsText() {
    return [
        'VVK Foundation Charitable Trust — Official Bank Details',
        `Account Name: ${BANK_DETAILS.accountName}`,
        `Bank Name: ${BANK_DETAILS.bankName}`,
        `Account Number: ${BANK_DETAILS.accountNumber}`,
        `Account Type: ${BANK_DETAILS.accountType}`,
        `IFSC Code: ${BANK_DETAILS.ifsc}`,
        `Branch: ${BANK_DETAILS.branch}`,
        `MICR Code: ${BANK_DETAILS.micr}`
    ].join('\n');
}

/**
 * Shared Bank Details Card markup used by both #donate section and Donation Modal.
 */
export function renderBankDetailsCard() {
    return `
        <div class="donate-card">
            <div class="donate-card__header">
                <div class="donate-card__header-left">
                    <span class="donate-card__icon"><i class="fas fa-landmark"></i></span>
                    <div>
                        <h3 class="donate-card__title" data-i18n="donate.card_title">Direct Bank Transfer</h3>
                        <p class="donate-card__subtitle" data-i18n="donate.card_subtitle">NEFT / RTGS / IMPS Accepted</p>
                    </div>
                </div>
                <span class="donate-sbi-badge">
                    <i class="fas fa-shield-alt"></i>
                    <span data-i18n="donate.sbi_badge">SBI · State Bank of India</span>
                </span>
            </div>

            <div class="donate-card__rows">
                <div class="donate-row donate-row--highlight">
                    <div class="donate-row__meta">
                        <span class="donate-row__label" data-i18n="donate.label_account_name">Account Name</span>
                        <span class="donate-row__value donate-row__value--strong">${BANK_DETAILS.accountName}</span>
                    </div>
                    <button type="button" class="donate-copy-btn" data-copy-value="${BANK_DETAILS.accountName}" aria-label="Copy Account Name" title="Copy Account Name">
                        <i class="far fa-copy"></i>
                        <span class="donate-copy-tooltip" data-i18n="donate.copied">Copied!</span>
                    </button>
                </div>

                <div class="donate-row">
                    <div class="donate-row__meta">
                        <span class="donate-row__label" data-i18n="donate.label_bank_name">Bank Name</span>
                        <span class="donate-row__value">${BANK_DETAILS.bankName}</span>
                    </div>
                </div>

                <div class="donate-row donate-row--highlight">
                    <div class="donate-row__meta">
                        <span class="donate-row__label" data-i18n="donate.label_account_number">Account Number</span>
                        <span class="donate-row__value donate-row__value--mono">${BANK_DETAILS.accountNumber}</span>
                    </div>
                    <button type="button" class="donate-copy-btn" data-copy-value="${BANK_DETAILS.accountNumber}" aria-label="Copy Account Number" title="Copy Account Number">
                        <i class="far fa-copy"></i>
                        <span class="donate-copy-tooltip" data-i18n="donate.copied">Copied!</span>
                    </button>
                </div>

                <div class="donate-row-split">
                    <div class="donate-row">
                        <div class="donate-row__meta">
                            <span class="donate-row__label" data-i18n="donate.label_account_type">Account Type</span>
                            <span class="donate-row__value">${BANK_DETAILS.accountType}</span>
                        </div>
                    </div>

                    <div class="donate-row donate-row--highlight">
                        <div class="donate-row__meta">
                            <span class="donate-row__label" data-i18n="donate.label_ifsc">IFSC Code</span>
                            <span class="donate-row__value donate-row__value--mono">${BANK_DETAILS.ifsc}</span>
                        </div>
                        <button type="button" class="donate-copy-btn" data-copy-value="${BANK_DETAILS.ifsc}" aria-label="Copy IFSC Code" title="Copy IFSC Code">
                            <i class="far fa-copy"></i>
                            <span class="donate-copy-tooltip" data-i18n="donate.copied">Copied!</span>
                        </button>
                    </div>
                </div>

                <div class="donate-row-split">
                    <div class="donate-row">
                        <div class="donate-row__meta">
                            <span class="donate-row__label" data-i18n="donate.label_branch">Branch</span>
                            <span class="donate-row__value">${BANK_DETAILS.branch}</span>
                        </div>
                    </div>

                    <div class="donate-row">
                        <div class="donate-row__meta">
                            <span class="donate-row__label" data-i18n="donate.label_micr">MICR Code</span>
                            <span class="donate-row__value donate-row__value--mono">${BANK_DETAILS.micr}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!--
            ═══════ UPI QR CODE SLOT (Ready to enable) ═══════
            To enable UPI QR payments, place your QR image in /assets/images/upi-qr.png
            and remove the HTML comment around this block:
            <div class="donate-qr-slot">
                <div class="donate-qr-slot__frame">
                    <img src="/assets/images/upi-qr.png" alt="VVK Foundation UPI QR Code" loading="lazy">
                </div>
                <div class="donate-qr-slot__info">
                    <strong data-i18n="donate.upi_title">Scan &amp; Pay via UPI</strong>
                    <p data-i18n="donate.upi_desc">Supports Google Pay, PhonePe, Paytm &amp; BHIM UPI</p>
                </div>
            </div>
            -->

            <div class="donate-card__actions">
                <button type="button" class="btn btn--outline donate-copy-all-btn" data-copy-all>
                    <i class="far fa-clipboard"></i>
                    <span data-i18n="donate.copy_all">Copy All Bank Details</span>
                </button>
                <a href="${getWhatsAppConfirmUrl()}" target="_blank" rel="noopener noreferrer" class="btn btn--primary donate-whatsapp-btn">
                    <i class="fab fa-whatsapp"></i>
                    <span data-i18n="donate.whatsapp_cta">Share Payment Confirmation on WhatsApp</span>
                </a>
            </div>
        </div>
    `;
}

/**
 * Render the #donate section for the homepage.
 */
export function renderDonationSection() {
    return `
        <section class="donate-section bg-secondary" id="donate">
            <div class="container">
                <div class="donate-grid">
                    <!-- Left Column: Impact & Trust Context -->
                    <div class="donate-context reveal reveal--up">
                        <span class="section-label">
                            <i class="fas fa-hand-holding-heart"></i>
                            <span data-i18n="donate.eyebrow">SUPPORT OUR MISSION</span>
                        </span>
                        <h2 class="donate-context__title" data-i18n="donate.title">Every Contribution Builds a Stronger Tomorrow</h2>
                        <p class="donate-context__desc" data-i18n="donate.description">
                            Your generosity directly fuels grassroots programs empowering Farmers with climate-smart agriculture, Women with enterprise &amp; healthcare, and Youth with free competitive exam coaching across Karnataka.
                        </p>

                        <ul class="donate-trust-list">
                            <li>
                                <span class="donate-trust-icon"><i class="fas fa-university"></i></span>
                                <div>
                                    <strong data-i18n="donate.trust_1_title">Direct Bank Transfer (NEFT / RTGS / IMPS)</strong>
                                    <p data-i18n="donate.trust_1_desc">100% of your contribution goes directly to the official VVK Foundation Charitable Trust SBI account.</p>
                                </div>
                            </li>
                            <li>
                                <span class="donate-trust-icon"><i class="fas fa-check-double"></i></span>
                                <div>
                                    <strong data-i18n="donate.trust_2_title">100% Transparent Grassroots Impact</strong>
                                    <p data-i18n="donate.trust_2_desc">Registered Charitable Trust (Reg. No. BGK-4-00062-2023-24) with published annual impact reports.</p>
                                </div>
                            </li>
                            <li>
                                <span class="donate-trust-icon"><i class="fab fa-whatsapp"></i></span>
                                <div>
                                    <strong data-i18n="donate.trust_3_title">Instant Receipt Confirmation</strong>
                                    <p data-i18n="donate.trust_3_desc">Share your transaction reference via WhatsApp for quick acknowledgment from our team.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Right Column: Official Bank Details Card -->
                    <div class="donate-card-wrap reveal reveal--up stagger-2">
                        ${renderBankDetailsCard()}
                    </div>
                </div>
            </div>
        </section>
    `;
}

/**
 * Initialize global Donation Modal, Support Us button wiring, and copy handlers.
 */
export function initDonation() {
    ensureToastElement();
    ensureDonationModal();

    // Delegated click handler for Support Us triggers, copy buttons, and modal close
    document.addEventListener('click', handleDocumentClick);

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDonationModal();
        }
    });
}

function handleDocumentClick(e) {
    // 1. Navbar / Mobile "Support Us" trigger
    const supportTrigger = e.target.closest('#nav-support-btn, .js-open-donate');
    if (supportTrigger) {
        e.preventDefault();
        closeMobileDrawerIfOpen();

        const donateSection = document.getElementById('donate');
        const isHome = location.pathname === '/' || location.pathname === '/index.html' || location.pathname === '';
        if (isHome && donateSection) {
            donateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            openDonationModal();
        }
        return;
    }

    // 2. Single-field copy button
    const copyBtn = e.target.closest('.donate-copy-btn');
    if (copyBtn) {
        const value = copyBtn.getAttribute('data-copy-value');
        if (value) {
            copyToClipboard(value).then((ok) => {
                if (ok) {
                    showButtonCopiedState(copyBtn);
                    showToast(translate('donate.toast_copied') !== 'donate.toast_copied' ? translate('donate.toast_copied') : 'Copied to clipboard!');
                }
            });
        }
        return;
    }

    // 3. Copy All Bank Details button
    const copyAllBtn = e.target.closest('[data-copy-all]');
    if (copyAllBtn) {
        copyToClipboard(getFormattedBankDetailsText()).then((ok) => {
            if (ok) {
                showCopyAllFeedback(copyAllBtn);
                showToast(translate('donate.toast_all_copied') !== 'donate.toast_all_copied' ? translate('donate.toast_all_copied') : 'All bank details copied!');
            }
        });
        return;
    }

    // 4. Close modal button or backdrop click
    const modal = document.getElementById('donate-modal');
    if (modal && modal.classList.contains('is-open')) {
        if (e.target.closest('#donate-modal-close') || e.target === modal) {
            closeDonationModal();
        }
    }
}

function closeMobileDrawerIfOpen() {
    const drawer = document.querySelector('.mobile-nav.active');
    const overlay = document.querySelector('.mobile-nav-overlay.active');
    const hamburger = document.querySelector('.mobile-menu-btn.active');
    if (drawer) drawer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    if (hamburger) {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
    if (drawer || overlay) {
        document.body.style.overflow = '';
    }
}

function ensureDonationModal() {
    if (document.getElementById('donate-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'donate-modal';
    modal.className = 'donate-modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'donate-modal-title');
    modal.setAttribute('aria-hidden', 'true');

    modal.innerHTML = `
        <div class="donate-modal__dialog">
            <div class="donate-modal__header">
                <div>
                    <span class="section-label donate-modal__badge">
                        <i class="fas fa-hand-holding-heart"></i>
                        <span data-i18n="donate.eyebrow">SUPPORT OUR MISSION</span>
                    </span>
                    <h2 id="donate-modal-title" class="donate-modal__title" data-i18n="donate.title">Every Contribution Builds a Stronger Tomorrow</h2>
                </div>
                <button type="button" id="donate-modal-close" class="donate-modal__close" aria-label="Close donation dialog">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="donate-modal__body">
                <p class="donate-modal__intro" data-i18n="donate.description">
                    Your generosity directly fuels grassroots programs empowering Farmers with climate-smart agriculture, Women with enterprise &amp; healthcare, and Youth with free competitive exam coaching across Karnataka.
                </p>
                ${renderBankDetailsCard()}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    applyTranslations();
}

export function openDonationModal() {
    ensureDonationModal();
    const modal = document.getElementById('donate-modal');
    if (!modal) return;

    applyTranslations();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = document.getElementById('donate-modal-close');
    if (closeBtn) {
        setTimeout(() => closeBtn.focus(), 50);
    }
}

export function closeDonationModal() {
    const modal = document.getElementById('donate-modal');
    if (!modal || !modal.classList.contains('is-open')) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

async function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch {
            // Fall through to legacy fallback
        }
    }

    try {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textarea);
        return success;
    } catch {
        return false;
    }
}

function showButtonCopiedState(btn) {
    const icon = btn.querySelector('i');
    if (!icon) return;

    btn.classList.add('is-copied');
    icon.className = 'fas fa-check';

    clearTimeout(btn._copyTimer);
    btn._copyTimer = setTimeout(() => {
        btn.classList.remove('is-copied');
        icon.className = 'far fa-copy';
    }, 1800);
}

function showCopyAllFeedback(btn) {
    const icon = btn.querySelector('i');
    const label = btn.querySelector('span');
    if (!icon || !label) return;

    const originalText = label.textContent;
    const copiedLabel = translate('donate.copied') !== 'donate.copied' ? translate('donate.copied') : 'Copied!';

    btn.classList.add('is-copied');
    icon.className = 'fas fa-check';
    label.textContent = copiedLabel;

    clearTimeout(btn._copyAllTimer);
    btn._copyAllTimer = setTimeout(() => {
        btn.classList.remove('is-copied');
        icon.className = 'far fa-clipboard';
        label.textContent = originalText;
    }, 1800);
}

function ensureToastElement() {
    if (document.getElementById('donate-toast')) return;
    const toast = document.createElement('div');
    toast.id = 'donate-toast';
    toast.className = 'donate-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
}

function showToast(message) {
    ensureToastElement();
    const toast = document.getElementById('donate-toast');
    if (!toast) return;

    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    toast.classList.add('is-visible');

    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
        toast.classList.remove('is-visible');
    }, 2200);
}
