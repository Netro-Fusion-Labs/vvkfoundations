/**
 * VVK Foundation — Bagalkot District-Level Farmer & Woman Farmer Award Application Form
 * (ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲಾ ಮಟ್ಟದ ಅತ್ಯುತ್ತಮ ರೈತ ಮತ್ತು ರೈತ ಮಹಿಳೆಯ ಪ್ರಶಸ್ತಿ - ಅರ್ಜಿ ನಮೂನೆ)
 */

const GOOGLE_SCRIPT_URL = window.VVK_GOOGLE_SHEET_URL || localStorage.getItem('vvk_google_sheet_url') || 'https://script.google.com/macros/s/AKfycbxFA4PYRP14CMFPPof-4R7w_FMtGnYQdzBfWxrR6aR7l4rAblOILd6CCP5qmRf_2kj9RQ/exec';

export function renderYouthFarmerAward() {
    return `
        <!-- ═══════ PAGE HERO ═══════ -->
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs">
                    <a href="/" data-route>Home</a>
                    <span class="separator"><i class="fas fa-chevron-right"></i></span>
                    <span class="current">Farmer Award Application</span>
                </div>
                <h1>ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲಾ ಮಟ್ಟದ ಅತ್ಯುತ್ತಮ ರೈತ ಮತ್ತು ರೈತ ಮಹಿಳೆಯ ಪ್ರಶಸ್ತಿ</h1>
                <p class="lead">Bagalkot District-Level Best Farmer & Woman Farmer Award — Official Application Form</p>
            </div>
        </section>

        <!-- ═══════ APPLICATION FORM SECTION ═══════ -->
        <section class="py-xl">
            <div class="container">
                <div class="container--narrow mx-auto">
                    <div class="contact-form-card reveal reveal--up" style="border-top: 5px solid #2b9348;">
                        <!-- Header Banner -->
                        <div class="text-center mb-xl pb-md border-bottom" style="border-color: var(--clr-border-light, #e5e7eb);">
                            <div class="d-inline-flex align-center gap-xs mb-xs" style="background: rgba(43,147,72,0.1); color: #2b9348; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem;">
                                <i class="fas fa-award"></i> <span>ವಿವಿಕೆ ಫೌಂಡೇಶನ್ ಕೃಷಿ ಕಲ್ಯಾಣ ಉಪಕ್ರಮ | VVK Foundation Agriculture Initiative</span>
                            </div>
                            <h2 style="font-size: 1.6rem; color: #1b4332; line-height: 1.3;" class="mt-xs">
                                ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲಾ ಮಟ್ಟದ ಅತ್ಯುತ್ತಮ ರೈತ ಮತ್ತು ರೈತ ಮಹಿಳೆಯ ಪ್ರಶಸ್ತಿ
                            </h2>
                            <p class="text-muted text-sm mt-xs">
                                Bagalkot District-Level Best Farmer & Woman Farmer Award Application Form
                            </p>
                        </div>

                        <!-- MAIN FORM -->
                        <form id="youth-farmer-award-form" novalidate class="mt-md">
                            
                            <!-- ══════ SECTION 1: GENERAL INFORMATION ══════ -->
                            <div class="form-section-block mb-xl">
                                <div class="d-flex align-center gap-xs mb-md pb-xs border-bottom" style="border-color: #e5e7eb;">
                                    <span class="badge badge--primary" style="background: #2b9348; color:#fff; border-radius:50%; width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; font-weight:bold;">1</span>
                                    <h3 style="font-size: 1.15rem; color: #1b4332; margin:0;">
                                        ಸಾಮಾನ್ಯ ಮಾಹಿತಿ <span class="text-muted font-normal" style="font-size: 0.9rem;">(General Information)</span>
                                    </h3>
                                </div>

                                <div class="grid-2" style="gap: var(--space-lg);">
                                    <!-- Name of Farmer -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-farmer-name">
                                            <span>ರೈತರ ಹೆಸರು (Name of the Farmer)</span> <span class="text-danger">*</span>
                                        </label>
                                        <input type="text" id="award-farmer-name" class="form-control" required placeholder="ಉದಾ: ರಮೇಶ್ ಬಸಪ್ಪ ಪಾಟೀಲ್ / Ramesh Patil">
                                        <span class="form-error">ರೈತರ ಹೆಸರನ್ನು ನಮೂದಿಸಿ (Please enter farmer's name)</span>
                                    </div>

                                    <!-- Father's / Husband's Name -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-parent-name">
                                            <span>ತಂದೆ / ಗಂಡನ ಹೆಸರು (Father's / Husband's Name)</span> <span class="text-danger">*</span>
                                        </label>
                                        <input type="text" id="award-parent-name" class="form-control" required placeholder="ಉದಾ: ಬಸಪ್ಪ ಪಾಟೀಲ್ / Basappa Patil">
                                        <span class="form-error">ತಂದೆ/ಗಂಡನ ಹೆಸರನ್ನು ನಮೂದಿಸಿ (Please enter father's/husband's name)</span>
                                    </div>
                                </div>

                                <div class="grid-2" style="gap: var(--space-lg);">
                                    <!-- Taluk Dropdown (Mandatory with expanded list) -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-taluk">
                                            <span>ತಾಲೂಕು (Taluk - Bagalkot District)</span> <span class="text-danger">*</span>
                                        </label>
                                        <select id="award-taluk" class="form-control" required style="border-left: 4px solid #2b9348;">
                                            <option value="">-- ತಾಲೂಕು ಆಯ್ಕೆಮಾಡಿ (Select Taluk) --</option>
                                            <option value="Bagalkot">ಬಾಗಲಕೋಟೆ (Bagalkot)</option>
                                            <option value="Badami">ಬಾದಾಮಿ (Badami)</option>
                                            <option value="Bilagi">ಬೀಳಗಿ (Bilagi)</option>
                                            <option value="Guledgudda">ಗುಳೇದಗುಡ್ಡ (Guledgudda)</option>
                                            <option value="Hungund">ಹುನಗುಂದ (Hungund)</option>
                                            <option value="Ilkal">ಇಲಕಲ್ಲ (Ilkal)</option>
                                            <option value="Jamkhandi">ಜಮಖಂಡಿ (Jamkhandi)</option>
                                            <option value="Mudhol">ಮುಧೋಳ (Mudhol)</option>
                                            <option value="Terdal">ತರದಾಳ (Terdal)</option>
                                        </select>
                                        <span class="form-error">ದಯವಿಟ್ಟು ತಾಲೂಕನ್ನು ಆಯ್ಕೆಮಾಡಿ (Taluk is mandatory)</span>
                                    </div>

                                    <!-- Educational Qualification -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-education">
                                            <span>ಶೈಕ್ಷಣಿಕ ಅರ್ಹತೆ (Educational Qualification)</span>
                                        </label>
                                        <input type="text" id="award-education" class="form-control" placeholder="ಉದಾ: SSLC, PUC, ITI, Diploma, Degree, ಇತರ">
                                    </div>
                                </div>

                                <div class="grid-2" style="gap: var(--space-lg);">
                                    <!-- Mobile Number -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-mobile">
                                            <span>ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (Mobile Number)</span> <span class="text-danger">*</span>
                                        </label>
                                        <input type="tel" id="award-mobile" class="form-control" required placeholder="10-ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (9876543210)" pattern="[0-9]{10}">
                                        <span class="form-error">ಮಾನ್ಯವಾದ 10-ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ</span>
                                    </div>

                                    <!-- Postal Address -->
                                    <div class="form-group" style="grid-column: span 1;">
                                        <label class="form-label" for="award-address">
                                            <span>ಅಂಚೆ ವಿಳಾಸ (Postal Address)</span> <span class="text-danger">*</span>
                                        </label>
                                        <textarea id="award-address" class="form-control" rows="2" required placeholder="ಗ್ರಾಮ, ಹೋಬಳಿ, ತಾಲೂಕು, ಪಿನ್ ಕೋಡ್ (Village, Hobli, PIN)"></textarea>
                                        <span class="form-error">ಅಂಚೆ ವಿಳಾಸವನ್ನು ಭರ್ತಿ ಮಾಡಿ (Please enter postal address)</span>
                                    </div>
                                </div>
                            </div>

                            <!-- ══════ SECTION 2: LAND HOLDING DETAILS ══════ -->
                            <div class="form-section-block mb-xl p-md bg-secondary radius-md">
                                <div class="d-flex align-center gap-xs mb-md pb-xs border-bottom" style="border-color: #d1d5db;">
                                    <span class="badge badge--primary" style="background: #2b9348; color:#fff; border-radius:50%; width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; font-weight:bold;">2</span>
                                    <h3 style="font-size: 1.15rem; color: #1b4332; margin:0;">
                                        ಭೂ ಹಿಡುವಳಿಯ ವಿವರ <span class="text-muted font-normal" style="font-size: 0.9rem;">(Land Holding Details in Acres)</span>
                                    </h3>
                                </div>

                                <div class="grid-2" style="gap: var(--space-lg);">
                                    <!-- Dry Land / Rainfed -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-dry-land">
                                            <span>ಒಣ ಭೂಮಿ / ಖುಷಿ (Dry Land / Rainfed in Acres)</span>
                                        </label>
                                        <input type="number" id="award-dry-land" class="form-control" min="0" step="0.1" placeholder="0.0">
                                    </div>

                                    <!-- Irrigated Land -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-irrigated-land">
                                            <span>ನೀರಾವರಿ ಭೂಮಿ (Irrigated Land in Acres)</span>
                                        </label>
                                        <input type="number" id="award-irrigated-land" class="form-control" min="0" step="0.1" placeholder="0.0">
                                    </div>
                                </div>

                                <!-- Conditional Irrigation Source Checkboxes -->
                                <div id="irrigation-source-wrapper" class="mt-md pt-xs border-top" style="border-color: #e5e7eb; display: none;">
                                    <label class="form-label mb-xs font-semibold" style="color: #1b4332;">
                                        <span>ನೀರಾವರಿ ಮೂಲ (Irrigation Source)</span>
                                    </label>
                                    <div class="d-flex flex-wrap gap-md mt-xs">
                                        <label class="checkbox-label d-inline-flex align-center gap-xs cursor-pointer">
                                            <input type="checkbox" name="irrigation-source" value="Borewell">
                                            <span>ಕೊಳವೆ ಬಾವಿ (Borewell)</span>
                                        </label>
                                        <label class="checkbox-label d-inline-flex align-center gap-xs cursor-pointer">
                                            <input type="checkbox" name="irrigation-source" value="Canal">
                                            <span>ಕಾಲುವೆ (Canal)</span>
                                        </label>
                                        <label class="checkbox-label d-inline-flex align-center gap-xs cursor-pointer">
                                            <input type="checkbox" name="irrigation-source" value="River">
                                            <span>ನದಿ (River)</span>
                                        </label>
                                        <label class="checkbox-label d-inline-flex align-center gap-xs cursor-pointer">
                                            <input type="checkbox" name="irrigation-source" value="Other">
                                            <span>ಇತರೆ (Other)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!-- ══════ SECTION 3: ADOPTED AGRICULTURAL ACTIVITIES ══════ -->
                            <div class="form-section-block mb-xl">
                                <div class="d-flex align-center gap-xs mb-md pb-xs border-bottom" style="border-color: #e5e7eb;">
                                    <span class="badge badge--primary" style="background: #2b9348; color:#fff; border-radius:50%; width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; font-weight:bold;">3</span>
                                    <h3 style="font-size: 1.15rem; color: #1b4332; margin:0;">
                                        ಅಳವಡಿಸಿಕೊಂಡಿರುವ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳು <span class="text-muted font-normal" style="font-size: 0.9rem;">(Adopted Agricultural Activities)</span>
                                    </h3>
                                </div>
                                <p class="text-xs text-muted mb-sm">ದಯವಿಟ್ಟು ನೀವು ಕೈಗೊಂಡಿರುವ ಎಲ್ಲಾ ಚಟುವಟಿಕೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ (Select all applicable activities):</p>

                                <div class="grid-2" style="gap: var(--space-sm);">
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="agri-activity" value="Agriculture">
                                        <span>🌾 ಕೃಷಿ (Agriculture)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="agri-activity" value="Horticulture">
                                        <span>🍎 ತೋಟಗಾರಿಕೆ (Horticulture)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="agri-activity" value="Sericulture">
                                        <span>🐛 ರೇಷ್ಮೆ ಕೃಷಿ (Sericulture)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="agri-activity" value="Forestry">
                                        <span>🌲 ಅರಣ್ಯ ಕೃಷಿ (Forestry)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="agri-activity" value="Fodder & Silage">
                                        <span>🌱 ಮೇವಿನ ಬೆಳೆಗಳು & ಸೈಲೇಜ್ (Fodder & Silage)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="agri-activity" value="Dairying">
                                        <span>🥛 ಹೈನುಗಾರಿಕೆ (Dairying)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="agri-activity" value="Sheep/Goat Rearing">
                                        <span>🐐 ಕುರಿ/ಮೇಕೆ ಸಾಕಣೆ (Sheep/Goat Rearing)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="agri-activity" value="Poultry">
                                        <span>🐔 ಕೋಳಿ ಸಾಕಣೆ (Poultry)</span>
                                    </label>
                                </div>

                                <!-- Other Activity Text Input -->
                                <div class="mt-md">
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary mb-xs">
                                        <input type="checkbox" id="chk-agri-other" name="agri-activity" value="Other">
                                        <span>🔹 ಇತರೆ ಚಟುವಟಿಕೆಗಳು (Other Activities)</span>
                                    </label>
                                    <input type="text" id="award-activity-other-text" class="form-control mt-xs" style="display: none;" placeholder="ಇತರೆ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳ ವಿವರ ನಮೂದಿಸಿ (Specify other activities)">
                                </div>
                            </div>

                            <!-- ══════ SECTION 4: DECLARATION & SUBMISSION ══════ -->
                            <div class="form-section-block mb-lg p-md bg-secondary radius-md">
                                <div class="d-flex align-center gap-xs mb-sm">
                                    <span class="badge badge--primary" style="background: #2b9348; color:#fff; border-radius:50%; width:28px; height:28px; display:inline-flex; align-items:center; justify-content:center; font-weight:bold;">4</span>
                                    <h3 style="font-size: 1.15rem; color: #1b4332; margin:0;">
                                        ಘೋಷಣೆ & ಸಲ್ಲಿಕೆ <span class="text-muted font-normal" style="font-size: 0.9rem;">(Declaration & Submission)</span>
                                    </h3>
                                </div>

                                <div class="form-group mt-sm">
                                    <label class="checkbox-label d-flex align-start gap-xs cursor-pointer">
                                        <input type="checkbox" id="award-declaration" required style="margin-top: 4px;">
                                        <span class="text-xs text-muted" style="line-height: 1.5;">
                                            <strong>ಘೋಷಣೆ (Declaration):</strong> ಮೇಲೆ ನೀಡಿರುವ ಎಲ್ಲಾ ಮಾಹಿತಿಗಳು ನನ್ನ ಜ್ಞಾನಕ್ಕೆ ತಿಳಿದಂತೆ ಸತ್ಯ ಮತ್ತು ಸರಿಯಾಗಿದೆ ಎಂದು ಈ ಮೂಲಕ ಘೋಷಿಸುತ್ತೇನೆ. (I hereby declare that the information provided above is true and correct to the best of my knowledge.) <span class="text-danger">*</span>
                                        </span>
                                    </label>
                                    <span class="form-error">ದಯವಿಟ್ಟು ಘೋಷಣೆಯನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಿ (Please accept the declaration)</span>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <div class="d-flex gap-md flex-wrap mt-lg">
                                <button type="submit" id="btn-submit-award" class="btn btn--primary btn--lg w-full magnetic" style="background: #2b9348;">
                                    <i class="fas fa-paper-plane mr-xs"></i> <span>ಅರ್ಜಿ ಸಲ್ಲಿಸಿ (Submit Application)</span>
                                </button>
                            </div>
                        </form>

                        <!-- Success Receipt Card -->
                        <div id="award-success-card" class="join-success-card" style="display:none; text-align: center; padding: var(--space-xl) var(--space-md);">
                            <div class="success-icon" style="font-size: 3.5rem; color: #2b9348; margin-bottom: var(--space-sm);"><i class="fas fa-trophy"></i></div>
                            <h3 style="color: #1b4332; font-size: 1.5rem;">ಅರ್ಜಿ ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಕೆಯಾಗಿದೆ!</h3>
                            <p class="text-muted text-sm mb-md">Best Farmer Award Application Submitted Successfully!</p>

                            <div class="member-receipt-box text-left" style="background: #f8fafc; padding: var(--space-md); border-radius: 12px; border: 1px solid #e2e8f0; margin-bottom: var(--space-lg);">
                                <div class="receipt-row d-flex justify-between py-xs border-bottom">
                                    <span>ಅರ್ಜಿ ಸಂಖ್ಯೆ (Application No):</span>
                                    <strong id="rec-award-id" style="color: #2b9348;">BGL-FA-2026-0000</strong>
                                </div>
                                <div class="receipt-row d-flex justify-between py-xs border-bottom">
                                    <span>ರೈತರ ಹೆಸರು (Farmer Name):</span>
                                    <strong id="rec-award-name">--</strong>
                                </div>
                                <div class="receipt-row d-flex justify-between py-xs border-bottom">
                                    <span>ತಾಲೂಕು (Taluk):</span>
                                    <strong id="rec-award-taluk">--</strong>
                                </div>
                                <div class="receipt-row d-flex justify-between py-xs">
                                    <span>ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (Mobile):</span>
                                    <strong id="rec-award-mobile">--</strong>
                                </div>
                            </div>

                            <button type="button" class="btn btn--outline btn--block" id="btn-award-another">
                                <i class="fas fa-plus-circle mr-xs"></i> ಮತ್ತೊಂದು ಅರ್ಜಿ ಸಲ್ಲಿಸಿ (Submit Another Application)
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    `;
}

/**
 * Initialize Award Form Logic
 */
export function initYouthFarmerAwardForm() {
    const form = document.getElementById('youth-farmer-award-form');
    if (!form) return;

    const irrigatedLandInput = document.getElementById('award-irrigated-land');
    const irrigationWrapper = document.getElementById('irrigation-source-wrapper');
    const chkOtherActivity = document.getElementById('chk-agri-other');
    const txtOtherActivity = document.getElementById('award-activity-other-text');
    const submitBtn = document.getElementById('btn-submit-award');
    const anotherBtn = document.getElementById('btn-award-another');

    // 1. Conditional Irrigation Source display
    if (irrigatedLandInput && irrigationWrapper) {
        const toggleIrrigation = () => {
            const acres = parseFloat(irrigatedLandInput.value) || 0;
            if (acres > 0) {
                irrigationWrapper.style.display = 'block';
            } else {
                irrigationWrapper.style.display = 'none';
            }
        };
        irrigatedLandInput.addEventListener('input', toggleIrrigation);
        irrigatedLandInput.addEventListener('change', toggleIrrigation);
    }

    // 2. Conditional Other Activity text field toggle
    if (chkOtherActivity && txtOtherActivity) {
        chkOtherActivity.addEventListener('change', () => {
            if (chkOtherActivity.checked) {
                txtOtherActivity.style.display = 'block';
                txtOtherActivity.focus();
            } else {
                txtOtherActivity.style.display = 'none';
                txtOtherActivity.value = '';
            }
        });
    }

    // 3. Reset form handler
    if (anotherBtn) {
        anotherBtn.addEventListener('click', () => {
            const successCard = document.getElementById('award-success-card');
            if (successCard) successCard.style.display = 'none';
            form.reset();
            if (irrigationWrapper) irrigationWrapper.style.display = 'none';
            if (txtOtherActivity) txtOtherActivity.style.display = 'none';
            form.style.display = 'block';
            form.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 4. Form Submit Handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let isValid = true;
        form.querySelectorAll('[required]').forEach(field => {
            field.classList.remove('error');
            if (field.type === 'checkbox' && !field.checked) {
                field.classList.add('error');
                isValid = false;
            } else if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            }
        });

        if (!isValid) return;

        // Collect irrigation sources
        const selectedIrrigation = [];
        document.querySelectorAll('input[name="irrigation-source"]:checked').forEach(cb => {
            selectedIrrigation.push(cb.value);
        });

        // Collect agricultural activities
        const selectedActivities = [];
        document.querySelectorAll('input[name="agri-activity"]:checked').forEach(cb => {
            if (cb.value === 'Other' && txtOtherActivity?.value.trim()) {
                selectedActivities.push(`Other: ${txtOtherActivity.value.trim()}`);
            } else {
                selectedActivities.push(cb.value);
            }
        });

        const appId = 'BGL-FA-2026-' + Math.floor(1000 + Math.random() * 9000);
        const farmerName = document.getElementById('award-farmer-name')?.value.trim();
        const parentName = document.getElementById('award-parent-name')?.value.trim();
        const taluk = document.getElementById('award-taluk')?.value;
        const education = document.getElementById('award-education')?.value.trim();
        const mobile = document.getElementById('award-mobile')?.value.trim();
        const address = document.getElementById('award-address')?.value.trim();
        const dryLand = document.getElementById('award-dry-land')?.value || '0';
        const irrigatedLand = document.getElementById('award-irrigated-land')?.value || '0';

        const awardData = {
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            memberId: appId,
            name: `${farmerName} (Father/Husband: ${parentName})`,
            phone: mobile,
            village: address,
            district: `Bagalkot (${taluk} Taluk)`,
            farmType: `Dry: ${dryLand} Acres, Irrigated: ${irrigatedLand} Acres (${selectedIrrigation.join(', ') || 'N/A'})`,
            supportNeed: `Award Application — Activities: ${selectedActivities.join(', ') || 'Agriculture'} | Edu: ${education || 'N/A'}`
        };

        // Loading state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-xs"></i> <span>ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ (Submitting...)...</span>`;
        }

        let sheetSaved = false;
        const activeScriptUrl = window.VVK_GOOGLE_SHEET_URL || localStorage.getItem('vvk_google_sheet_url') || GOOGLE_SCRIPT_URL;

        if (activeScriptUrl && activeScriptUrl.startsWith('http')) {
            try {
                await fetch(activeScriptUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                    body: JSON.stringify(awardData)
                });
                sheetSaved = true;
            } catch (err) {
                console.warn('Google Sheet submission warning:', err);
            }
        }

        // Local storage backup
        try {
            const existing = JSON.parse(localStorage.getItem('vvk_farmer_award_applications') || '[]');
            existing.push({ ...awardData, sheetSaved });
            localStorage.setItem('vvk_farmer_award_applications', JSON.stringify(existing));
        } catch (err) {
            console.error('Failed to save application in localStorage:', err);
        }

        // Reset submit button state
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i class="fas fa-paper-plane mr-xs"></i> <span>ಅರ್ಜಿ ಸಲ್ಲಿಸಿ (Submit Application)</span>`;
        }

        // Hide form and display Success Receipt Card
        form.style.display = 'none';

        const successCard = document.getElementById('award-success-card');
        const recAppId = document.getElementById('rec-award-id');
        const recName = document.getElementById('rec-award-name');
        const recTaluk = document.getElementById('rec-award-taluk');
        const recMobile = document.getElementById('rec-award-mobile');

        if (recAppId) recAppId.textContent = appId;
        if (recName) recName.textContent = farmerName;
        if (recTaluk) recTaluk.textContent = taluk;
        if (recMobile) recMobile.textContent = mobile;

        if (successCard) {
            successCard.style.display = 'block';
            successCard.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
