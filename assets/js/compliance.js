/**
 * VVK Foundation — Statutory registration details
 * Single source of truth for PAN / Income-tax provisional orders (Form 106)
 * and NGO DARPAN ID. Labels are translated via the "compliance" i18n block.
 */

export const COMPLIANCE = {
    pan: 'AAETV1389F',
    registration: { urn: 'AAETV1389FE20261', din: 'AAETV1389FE2026101' },
    approval: { urn: 'AAETV1389FF20261', din: 'AAETV1389FF2026102' },
    darpan: 'KA/2026/1137243'
};

/**
 * Detailed list of registrations (About banner, Donation section).
 * @param {string} [extraClass] - optional modifier class
 */
export function renderComplianceDetails(extraClass = '') {
    const c = COMPLIANCE;
    return `
        <dl class="compliance-list ${extraClass}">
            <div><dt data-i18n="compliance.pan">PAN</dt><dd>${c.pan}</dd></div>
            <div>
                <dt data-i18n="compliance.registration">Registration u/s 332 (Provisional)</dt>
                <dd><span data-i18n="compliance.urn">URN</span> ${c.registration.urn} · <span data-i18n="compliance.din">DIN</span> ${c.registration.din}</dd>
            </div>
            <div>
                <dt data-i18n="compliance.approval">Approval u/s 354 (Provisional)</dt>
                <dd><span data-i18n="compliance.urn">URN</span> ${c.approval.urn} · <span data-i18n="compliance.din">DIN</span> ${c.approval.din}</dd>
            </div>
            <div><dt data-i18n="compliance.darpan">NGO DARPAN ID</dt><dd>${c.darpan}</dd></div>
        </dl>
        <p class="compliance-note" data-i18n="compliance.validity">Both orders valid for TY 2026-27 to TY 2028-29.</p>
    `;
}
