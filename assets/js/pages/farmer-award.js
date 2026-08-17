/**
 * VVK Foundation — Bagalkot District-Level Farmer & Woman Farmer Award Application Form
 * Clean, mobile-friendly standalone layout without mega-menu or footer clutter.
 */

export function renderFarmerAward() {
    return `
        <!-- ═══════ STANDALONE CLEAN CONTAINER (NO MEGA MENU / NO FOOTER CLUTTER) ═══════ -->
        <section class="py-lg bg-slate-50" style="min-h-screen: 100vh;">
            <div class="container">
                <div class="container--narrow mx-auto">
                    
                    <!-- Header Banner Card -->
                    <div class="contact-form-card mb-lg text-center p-md" style="border-top: 6px solid #2b9348; background: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                        <div class="d-inline-flex align-center gap-xs mb-xs" style="background: rgba(43,147,72,0.1); color: #2b9348; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem;">
                            <i class="fas fa-award"></i> <span>ವಿವಿಕೆ ಫೌಂಡೇಶನ್ ಕೃಷಿ ಕಲ್ಯಾಣ ಉಪಕ್ರಮ | VVK Foundation Agriculture Initiative</span>
                        </div>
                        <h1 style="font-size: 1.5rem; color: #1b4332; line-height: 1.3;" class="mt-xs font-bold">
                            ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲಾ ಮಟ್ಟದ ಅತ್ಯುತ್ತಮ ರೈತ ಮತ್ತು ರೈತ ಮಹಿಳೆಯ ಪ್ರಶಸ್ತಿ
                        </h1>
                        <p class="text-muted text-sm mt-xs">
                            Bagalkot District-Level Best Farmer & Woman Farmer Award Application Form
                        </p>
                        <p class="text-xs text-muted mt-2">
                            * ಕಡ್ಡಾಯವಾಗಿ ನಮೂದಿಸಬೇಕಾದ ಕ್ಷೇತ್ರಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ (Please fill in all mandatory fields marked with *)
                        </p>
                    </div>

                    <!-- Hidden iframe for direct HTML form submission -->
                    <iframe name="hidden_iframe_spa" id="hidden_iframe_spa" style="display:none;" onload="if(window.spaSubmitted){ window.showSpaSuccessCard && window.showSpaSuccessCard(); }"></iframe>

                    <!-- Form Card -->
                    <div class="contact-form-card p-md sm:p-lg" style="background: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                        <form id="farmer-award-form" 
                              action="https://script.google.com/macros/s/AKfycbxArPekf5IJnBp_IhRXn-GMn-5i20PXNF3KY35_ZuE1zKpKnxtAh_3Cqgja6iEu07TxYg/exec" 
                              method="POST" 
                              target="hidden_iframe_spa" 
                              novalidate>
                            
                            <input type="hidden" name="formType" value="Farmer Award Application">
                            <input type="hidden" name="appId" id="spaMetaAppId" value="">
                            <input type="hidden" name="timestamp" id="spaMetaTimestamp" value="">
                            <input type="hidden" name="irrigationSource" id="spaMetaIrrigationSource" value="N/A">
                            <input type="hidden" name="activities" id="spaMetaActivities" value="Agriculture">

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
                                        <input type="text" id="award-farmer-name" name="farmerName" class="form-control" required placeholder="ಉದಾ: ರಮೇಶ್ ಬಸಪ್ಪ ಪಾಟೀಲ್ / Ramesh Patil">
                                        <span class="form-error">ರೈತರ ಹೆಸರನ್ನು ನಮೂದಿಸಿ (Please enter farmer's name)</span>
                                    </div>

                                    <!-- Father's / Husband's Name -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-parent-name">
                                            <span>ತಂದೆ / ಗಂಡನ ಹೆಸರು (Father's / Husband's Name)</span> <span class="text-danger">*</span>
                                        </label>
                                        <input type="text" id="award-parent-name" name="parentName" class="form-control" required placeholder="ಉದಾ: ಬಸಪ್ಪ ಪಾಟೀಲ್ / Basappa Patil">
                                        <span class="form-error">ತಂದೆ/ಗಂಡನ ಹೆಸರನ್ನು ನಮೂದಿಸಿ (Please enter father's/husband's name)</span>
                                    </div>
                                </div>

                                <div class="grid-2" style="gap: var(--space-lg);">
                                    <!-- Taluk Dropdown (Mandatory: 9 Taluks) -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-taluk">
                                            <span>ತಾಲೂಕು (Taluk - Bagalkot District)</span> <span class="text-danger">*</span>
                                        </label>
                                        <select id="award-taluk" name="taluk" class="form-control" required style="border-left: 4px solid #2b9348;">
                                            <option value="">-- ತಾಲೂಕು ಆಯ್ಕೆಮಾಡಿ (Select Taluk) --</option>
                                            <option value="ಬಾಗಲಕೋಟೆ (Bagalkot)">ಬಾಗಲಕೋಟೆ (Bagalkot)</option>
                                            <option value="ಬಾದಾಮಿ (Badami)">ಬಾದಾಮಿ (Badami)</option>
                                            <option value="ಬೀಳಗಿ (Bilagi)">ಬೀಳಗಿ (Bilagi)</option>
                                            <option value="ಗುಳೇದಗುಡ್ಡ (Guledgudda)">ಗುಳೇದಗುಡ್ಡ (Guledgudda)</option>
                                            <option value="ಹುನಗುಂದ (Hungund)">ಹುನಗುಂದ (Hungund)</option>
                                            <option value="ಇಲಕಲ್ಲ (Ilkal)">ಇಲಕಲ್ಲ (Ilkal)</option>
                                            <option value="ಜಮಖಂಡಿ (Jamkhandi)">ಜಮಖಂಡಿ (Jamkhandi)</option>
                                            <option value="ಮುಧೋಳ (Mudhol)">ಮುಧೋಳ (Mudhol)</option>
                                            <option value="ತರದಾಳ (Terdal)">ತರದಾಳ (Terdal)</option>
                                        </select>
                                        <span class="form-error">ದಯವಿಟ್ಟು ತಾಲೂಕನ್ನು ಆಯ್ಕೆಮಾಡಿ (Taluk is mandatory)</span>
                                    </div>

                                    <!-- Educational Qualification -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-education">
                                            <span>ಶೈಕ್ಷಣಿಕ ಅರ್ಹತೆ (Educational Qualification)</span>
                                        </label>
                                        <input type="text" id="award-education" name="education" class="form-control" placeholder="ಉದಾ: SSLC, PUC, ITI, Diploma, Degree, ಇತರ">
                                    </div>
                                </div>

                                <div class="grid-2" style="gap: var(--space-lg);">
                                    <!-- Mobile Number -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-mobile">
                                            <span>ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (Mobile Number)</span> <span class="text-danger">*</span>
                                        </label>
                                        <input type="tel" id="award-mobile" name="mobile" class="form-control" required placeholder="10-ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (9876543210)" pattern="[0-9]{10}">
                                        <span class="form-error">ಮಾನ್ಯವಾದ 10-ಅಂಕಿಗಳ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ</span>
                                    </div>

                                    <!-- Postal Address -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-address">
                                            <span>ಅಂಚೆ ವಿಳಾಸ (Postal Address)</span> <span class="text-danger">*</span>
                                        </label>
                                        <textarea id="award-address" name="address" class="form-control" rows="2" required placeholder="ಗ್ರಾಮ, ಹೋಬಳಿ, ತಾಲೂಕು, ಪಿನ್ ಕೋಡ್ (Village, Hobli, PIN)"></textarea>
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
                                        <input type="number" id="award-dry-land" name="dryLand" class="form-control" min="0" step="0.1" placeholder="0.0">
                                    </div>

                                    <!-- Irrigated Land -->
                                    <div class="form-group">
                                        <label class="form-label" for="award-irrigated-land">
                                            <span>ನೀರಾವರಿ ಭೂಮಿ (Irrigated Land in Acres)</span>
                                        </label>
                                        <input type="number" id="award-irrigated-land" name="irrigatedLand" class="form-control" min="0" step="0.1" placeholder="0.0">
                                    </div>
                                </div>

                                <!-- Irrigation Source Checkboxes (Always Visible) -->
                                <div id="irrigation-source-wrapper" class="mt-md pt-xs border-top" style="border-color: #e5e7eb; display: block;">
                                    <label class="form-label mb-xs font-semibold" style="color: #1b4332;">
                                        <span>ನೀರಾವರಿ ಮೂಲ (Irrigation Source)</span>
                                    </label>
                                    <div class="d-flex flex-wrap gap-md mt-xs">
                                        <label class="checkbox-label d-inline-flex align-center gap-xs cursor-pointer">
                                            <input type="checkbox" name="chk-irrigation-source" value="ಕೊಳವೆ ಬಾವಿ (Borewell)">
                                            <span>ಕೊಳವೆ ಬಾವಿ (Borewell)</span>
                                        </label>
                                        <label class="checkbox-label d-inline-flex align-center gap-xs cursor-pointer">
                                            <input type="checkbox" name="chk-irrigation-source" value="ಕಾಲುವೆ (Canal)">
                                            <span>ಕಾಲುವೆ (Canal)</span>
                                        </label>
                                        <label class="checkbox-label d-inline-flex align-center gap-xs cursor-pointer">
                                            <input type="checkbox" name="chk-irrigation-source" value="ನದಿ (River)">
                                            <span>ನದಿ (River)</span>
                                        </label>
                                        <label class="checkbox-label d-inline-flex align-center gap-xs cursor-pointer">
                                            <input type="checkbox" name="chk-irrigation-source" value="ಇತರೆ (Other)">
                                            <span>ಇತರೆ (Other)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <!-- ══════ SECTION 3: ADOPTED AGRICULTURAL ACTIVITIES (EVEN 8 ITEMS) ══════ -->
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
                                        <input type="checkbox" name="chk-agri-activity" value="🌾 ಕೃಷಿ (Agriculture)">
                                        <span>🌾 ಕೃಷಿ (Agriculture)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="chk-agri-activity" value="🍎 ತೋಟಗಾರಿಕೆ (Horticulture)">
                                        <span>🍎 ತೋಟಗಾರಿಕೆ (Horticulture)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="chk-agri-activity" value="🐛 ರೇಷ್ಮೆ ಕೃಷಿ (Sericulture)">
                                        <span>🐛 ರೇಷ್ಮೆ ಕೃಷಿ (Sericulture)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="chk-agri-activity" value="🌲 ಅರಣ್ಯ ಕೃಷಿ (Forestry)">
                                        <span>🌲 ಅರಣ್ಯ ಕೃಷಿ (Forestry)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="chk-agri-activity" value="🥛 ಹೈನುಗಾರಿಕೆ (Dairying)">
                                        <span>🥛 ಹೈನುಗಾರಿಕೆ (Dairying)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="chk-agri-activity" value="🐐 ಕುರಿ/ಮೇಕೆ ಸಾಕಣೆ (Sheep/Goat Rearing)">
                                        <span>🐐 ಕುರಿ/ಮೇಕೆ ಸಾಕಣೆ (Sheep/Goat Rearing)</span>
                                    </label>
                                    <label class="checkbox-card p-sm radius-md border d-flex align-center gap-xs cursor-pointer hover-bg-secondary">
                                        <input type="checkbox" name="chk-agri-activity" value="🐔 ಕೋಳಿ ಸಾಕಣೆ (Poultry)">
                                        <span>🐔 ಕೋಳಿ ಸಾಕಣೆ (Poultry)</span>
                                    </label>
                                    <div class="checkbox-card p-sm radius-md border cursor-pointer hover-bg-secondary">
                                        <label class="d-flex align-center gap-xs cursor-pointer">
                                            <input type="checkbox" id="chk-agri-other" name="chk-agri-activity" value="ಇತರೆ (Other Activities)">
                                            <span>🔹 ಇತರೆ (Other Activities)</span>
                                        </label>
                                        <input type="text" id="award-activity-other-text" class="form-control mt-xs" style="display: none;" placeholder="ಇತರೆ ವಿವರ ನಮೂದಿಸಿ">
                                    </div>
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

                            <!-- Confirmation CTAs matching user design -->
                            <div class="d-flex flex-column gap-sm mb-lg">
                                <!-- 1. Join Official VVK WhatsApp Channel -->
                                <a href="https://www.whatsapp.com/channel/0029Vb7yFxOA2pLFnKvmLz0L" target="_blank" rel="noopener noreferrer" 
                                   class="btn w-full font-bold shadow-md magnetic" style="background: #25D366; color: #ffffff; border-radius: 9999px; padding: 14px 24px; font-size: 1rem; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fab fa-whatsapp" style="font-size: 1.25rem;"></i>
                                    <span>Join WhatsApp Channel</span>
                                </a>

                                <!-- 2. Register Another Farmer -->
                                <button type="button" class="btn w-full font-bold magnetic" id="btn-award-another" 
                                        style="background: #ffffff; color: #003366; border: 2px solid #003366; border-radius: 9999px; padding: 14px 24px; font-size: 1rem; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
                                    <i class="fas fa-plus-circle"></i>
                                    <span>Register Another Farmer</span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `;
}

/**
 * Initialize Farmer Award Form Logic
 */
export function initFarmerAwardForm() {
    window.spaSubmitted = false;
    const form = document.getElementById('farmer-award-form');
    if (!form) return;

    const irrigatedLandInput = document.getElementById('award-irrigated-land');
    const irrigationWrapper = document.getElementById('irrigation-source-wrapper');
    const chkOtherActivity = document.getElementById('chk-agri-other');
    const txtOtherActivity = document.getElementById('award-activity-other-text');
    const submitBtn = document.getElementById('btn-submit-award');
    const anotherBtn = document.getElementById('btn-award-another');

    // Conditional Irrigation Source Display (Shown ONLY when Irrigated Land > 0)
    if (irrigatedLandInput && irrigationWrapper) {
        const toggleIrrigation = () => {
            const acres = parseFloat(irrigatedLandInput.value) || 0;
            if (acres > 0) {
                irrigationWrapper.style.display = 'block';
            } else {
                irrigationWrapper.style.display = 'none';
                document.querySelectorAll('input[name="chk-irrigation-source"]').forEach(cb => cb.checked = false);
            }
        };
        irrigatedLandInput.addEventListener('input', toggleIrrigation);
        irrigatedLandInput.addEventListener('change', toggleIrrigation);
    }

    // Conditional Other Activity text field toggle
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

    // 3. Show Success Card Callback
    window.showSpaSuccessCard = () => {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i class="fas fa-paper-plane mr-xs"></i> <span>ಅರ್ಜಿ ಸಲ್ಲಿಸಿ (Submit Application)</span>`;
        }

        form.style.display = 'none';
        const successCard = document.getElementById('award-success-card');
        if (successCard) {
            successCard.style.display = 'block';
            successCard.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // 4. Reset form handler
    if (anotherBtn) {
        anotherBtn.addEventListener('click', () => {
            window.spaSubmitted = false;
            const successCard = document.getElementById('award-success-card');
            if (successCard) successCard.style.display = 'none';
            form.reset();
            if (irrigationWrapper) irrigationWrapper.style.display = 'none';
            if (txtOtherActivity) txtOtherActivity.style.display = 'none';
            form.style.display = 'block';
            form.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 5. Form Submit Handler
    form.addEventListener('submit', (e) => {
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

        // MANDATORY CHECK 1: Land Holding Details
        const dryLandVal = parseFloat(document.getElementById('award-dry-land')?.value) || 0;
        const irrLandVal = parseFloat(document.getElementById('award-irrigated-land')?.value) || 0;
        if (dryLandVal <= 0 && irrLandVal <= 0) {
            document.getElementById('award-dry-land')?.classList.add('error');
            document.getElementById('award-irrigated-land')?.classList.add('error');
            isValid = false;
        }

        // MANDATORY CHECK 2: Adopted Agricultural Activities
        const selectedActivities = [];
        document.querySelectorAll('input[name="chk-agri-activity"]:checked').forEach(cb => {
            if (cb.value === 'Other' && txtOtherActivity?.value.trim()) {
                selectedActivities.push(`Other: ${txtOtherActivity.value.trim()}`);
            } else {
                selectedActivities.push(cb.value);
            }
        });

        if (selectedActivities.length === 0) {
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
            return;
        }

        // Collect irrigation sources
        const selectedIrrigation = [];
        document.querySelectorAll('input[name="chk-irrigation-source"]:checked').forEach(cb => {
            selectedIrrigation.push(cb.value);
        });

        const appId = 'BGL-FA-2026-' + Math.floor(1000 + Math.random() * 9000);
        const farmerName = document.getElementById('award-farmer-name')?.value.trim();
        const parentName = document.getElementById('award-parent-name')?.value.trim();
        const taluk = document.getElementById('award-taluk')?.value;
        const mobile = document.getElementById('award-mobile')?.value.trim();

        document.getElementById('spaMetaAppId').value = appId;
        document.getElementById('spaMetaTimestamp').value = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        document.getElementById('spaMetaIrrigationSource').value = selectedIrrigation.join(', ') || 'N/A';
        document.getElementById('spaMetaActivities').value = selectedActivities.join(', ') || 'Agriculture';

        // Update receipt elements
        const recAppId = document.getElementById('rec-award-id');
        const recName = document.getElementById('rec-award-name');
        const recTaluk = document.getElementById('rec-award-taluk');
        const recMobile = document.getElementById('rec-award-mobile');

        if (recAppId) recAppId.textContent = appId;
        if (recName) recName.textContent = farmerName;
        if (recTaluk) recTaluk.textContent = taluk;
        if (recMobile) recMobile.textContent = mobile;

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-xs"></i> <span>ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ (Submitting...)...</span>`;
        }

        window.spaSubmitted = true;
    });
}
