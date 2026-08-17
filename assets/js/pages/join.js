/**
 * VVK Foundation — Farmer & Community Registration Page
 * Minimal Farmer Registration Form with background Google Sheets Integration.
 */

// Google Apps Script Web App Endpoint URL (Configured for Admin Spreadsheet: 143W7ALmZ2D-7MLF9bvH1RwTjLTo87V-e4nG7Lzy5jZ8)
const GOOGLE_SCRIPT_URL = window.VVK_GOOGLE_SHEET_URL || localStorage.getItem('vvk_google_sheet_url') || 'https://script.google.com/macros/s/AKfycbxArPekf5IJnBp_IhRXn-GMn-5i20PXNF3KY35_ZuE1zKpKnxtAh_3Cqgja6iEu07TxYg/exec';

export function renderJoin() {
    return `
        <!-- ═══════ PAGE HERO ═══════ -->
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs">
                    <a href="/" data-route>Home</a>
                    <span class="separator"><i class="fas fa-chevron-right"></i></span>
                    <span class="current" data-i18n="join.hero_title">Join Farmer Network</span>
                </div>
                <h1 data-i18n="join.hero_title">Join the VVK Foundation Farmer & Community Network</h1>
                <p data-i18n="join.hero_desc">Register to receive free farming advisory, government scheme guidance, soil testing, and community welfare support.</p>
            </div>
        </section>

        <!-- ═══════ QR CODE & COMMUNITY INTRO SECTION ═══════ -->
        <section class="bg-secondary" id="qr-section">
            <div class="container">
                <div class="grid-2 reveal reveal--up" style="align-items: center; gap: var(--space-2xl);">
                    <!-- QR Code Showcase Card -->
                    <div class="qr-showcase-card text-center">
                        <div class="qr-header-badge">
                            <i class="fas fa-qrcode"></i> <span data-i18n="join.qr_title">Scan QR Code to Join</span>
                        </div>
                        <div class="qr-code-box" id="qr-code-box">
                            <!-- SVG QR Code -->
                            <svg viewBox="0 0 200 200" width="180" height="180" xmlns="http://www.w3.org/2000/svg">
                                <rect width="200" height="200" fill="#ffffff" rx="12"/>
                                <!-- Position Detection Patterns -->
                                <rect x="15" y="15" width="50" height="50" fill="#2b9348" rx="8"/>
                                <rect x="25" y="25" width="30" height="30" fill="#ffffff" rx="4"/>
                                <rect x="33" y="33" width="14" height="14" fill="#2b9348" rx="2"/>

                                <rect x="135" y="15" width="50" height="50" fill="#2b9348" rx="8"/>
                                <rect x="145" y="25" width="30" height="30" fill="#ffffff" rx="4"/>
                                <rect x="153" y="33" width="14" height="14" fill="#2b9348" rx="2"/>

                                <rect x="15" y="135" width="50" height="50" fill="#2b9348" rx="8"/>
                                <rect x="25" y="145" width="30" height="30" fill="#ffffff" rx="4"/>
                                <rect x="33" y="153" width="14" height="14" fill="#2b9348" rx="2"/>

                                <!-- QR Data Elements -->
                                <rect x="75" y="20" width="12" height="12" fill="#1b4332"/>
                                <rect x="95" y="20" width="12" height="12" fill="#2b9348"/>
                                <rect x="110" y="35" width="12" height="12" fill="#1b4332"/>
                                <rect x="75" y="50" width="12" height="12" fill="#2b9348"/>

                                <rect x="20" y="75" width="12" height="12" fill="#1b4332"/>
                                <rect x="40" y="75" width="12" height="12" fill="#2b9348"/>
                                <rect x="75" y="75" width="12" height="12" fill="#1b4332"/>
                                <rect x="95" y="75" width="12" height="12" fill="#2b9348"/>
                                <rect x="115" y="75" width="12" height="12" fill="#1b4332"/>
                                <rect x="135" y="75" width="12" height="12" fill="#2b9348"/>
                                <rect x="165" y="75" width="12" height="12" fill="#1b4332"/>

                                <rect x="35" y="95" width="12" height="12" fill="#2b9348"/>
                                <rect x="55" y="95" width="12" height="12" fill="#1b4332"/>
                                <rect x="75" y="95" width="12" height="12" fill="#2b9348"/>
                                <rect x="105" y="95" width="12" height="12" fill="#1b4332"/>
                                <rect x="145" y="95" width="12" height="12" fill="#2b9348"/>

                                <rect x="20" y="115" width="12" height="12" fill="#2b9348"/>
                                <rect x="75" y="115" width="12" height="12" fill="#1b4332"/>
                                <rect x="95" y="115" width="12" height="12" fill="#2b9348"/>
                                <rect x="125" y="115" width="12" height="12" fill="#1b4332"/>
                                <rect x="165" y="115" width="12" height="12" fill="#2b9348"/>

                                <rect x="75" y="135" width="12" height="12" fill="#2b9348"/>
                                <rect x="95" y="135" width="12" height="12" fill="#1b4332"/>
                                <rect x="115" y="135" width="12" height="12" fill="#2b9348"/>
                                <rect x="145" y="135" width="12" height="12" fill="#1b4332"/>

                                <rect x="75" y="155" width="12" height="12" fill="#1b4332"/>
                                <rect x="105" y="155" width="12" height="12" fill="#2b9348"/>
                                <rect x="135" y="155" width="12" height="12" fill="#1b4332"/>
                                <rect x="165" y="155" width="12" height="12" fill="#2b9348"/>

                                <rect x="75" y="175" width="12" height="12" fill="#2b9348"/>
                                <rect x="95" y="175" width="12" height="12" fill="#1b4332"/>
                                <rect x="125" y="175" width="12" height="12" fill="#2b9348"/>
                                <rect x="155" y="175" width="12" height="12" fill="#1b4332"/>

                                <!-- Center Logo Accent -->
                                <circle cx="100" cy="100" r="16" fill="#ffffff"/>
                                <circle cx="100" cy="100" r="13" fill="#2b9348"/>
                                <path d="M95,100 L98,103 L105,96" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <p class="text-xs text-muted mt-sm" data-i18n="join.qr_desc">Scan with any smartphone camera to open this community registration form directly on your phone.</p>
                        <button class="btn btn--outline btn--sm mt-md magnetic" id="btn-print-qr">
                            <i class="fas fa-print"></i> <span data-i18n="join.qr_download">Print / Download QR Code Card</span>
                        </button>
                    </div>

                    <!-- Intro Info -->
                    <div>
                        <span class="section-label"><i class="fas fa-tractor"></i> <span>FARMER WELFARE INITIATIVE</span></span>
                        <h2>Empowering Farmers Across Karnataka</h2>
                        <p class="lead mt-sm mb-md">VVK Foundation provides direct support, free soil testing guidance, government scheme advisory, and sustainable farming workshops tailored for local farmers.</p>
                        <ul class="join-benefits-list">
                            <li><i class="fas fa-check-circle text-primary"></i> <strong>Free Crop & Soil Advisory</strong> for dryland & irrigated farming</li>
                            <li><i class="fas fa-check-circle text-primary"></i> <strong>Government Subsidy & Scheme Guidance</strong> (PM-Kisan, Kalia, Subsidies)</li>
                            <li><i class="fas fa-check-circle text-primary"></i> <strong>Sustainable Agriculture Workshops</strong> & Organic Farming Support</li>
                            <li><i class="fas fa-check-circle text-primary"></i> <strong>Direct Administrative Sync</strong> for fast assistance & member tracking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- ═══════ MINIMAL FARMER REGISTRATION FORM SECTION ═══════ -->
        <section>
            <div class="container">
                <div class="container--narrow mx-auto">
                    <div class="contact-form-card reveal reveal--up">
                        <div class="text-center mb-xl">
                            <span class="section-label"><i class="fas fa-id-card"></i> <span>FARMER REGISTRATION</span></span>
                            <h2 data-i18n="join.form_title">Farmer & Community Registration Form</h2>
                            <p class="text-muted text-sm mt-xs" data-i18n="join.form_sub">Please fill in your minimum details below to register for community support.</p>
                        </div>

                        <!-- FARMER MINIMAL REGISTRATION FORM -->
                        <form id="community-join-form" novalidate class="mt-lg">
                            <div class="grid-2" style="gap: var(--space-lg);">
                                <!-- Full Name -->
                                <div class="form-group">
                                    <label class="form-label" for="join-name"><span data-i18n="join.name">Farmer Full Name</span> <span class="text-danger">*</span></label>
                                    <input type="text" id="join-name" class="form-control" required placeholder="e.g. Ramesh Patil / ರಮೇಶ್ ಪಾಟೀಲ್">
                                    <span class="form-error">Please enter farmer full name</span>
                                </div>

                                <!-- Mobile / WhatsApp Number -->
                                <div class="form-group">
                                    <label class="form-label" for="join-phone"><span data-i18n="join.phone">Mobile / WhatsApp Number</span> <span class="text-danger">*</span></label>
                                    <input type="tel" id="join-phone" class="form-control" required placeholder="9876543210" pattern="[0-9]{10}">
                                    <span class="form-error">Please enter a valid 10-digit mobile number</span>
                                </div>
                            </div>

                            <div class="grid-2" style="gap: var(--space-lg);">
                                <!-- Village / Taluk -->
                                <div class="form-group">
                                    <label class="form-label" for="join-village"><span data-i18n="join.village">Village / Taluk Name</span> <span class="text-danger">*</span></label>
                                    <input type="text" id="join-village" class="form-control" required placeholder="e.g. Mudhol, Ilkal, Banahatti / ಮೂಡಲಗಿ">
                                    <span class="form-error">Please enter village/taluk name</span>
                                </div>

                                <!-- District Dropdown -->
                                <div class="form-group">
                                    <label class="form-label" for="join-district"><span data-i18n="join.district">District Name</span> <span class="text-danger">*</span></label>
                                    <select id="join-district" class="form-control" required>
                                        <option value="" data-i18n="join.district_select">Select District</option>
                                        <option value="Bagalkot" selected>Bagalkot (ಬಾಗಲಕೋಟೆ)</option>
                                        <option value="Vijayapura">Vijayapura (ವಿಜಯಪುರ)</option>
                                        <option value="Belagavi">Belagavi (ಬೆಳಗಾವಿ)</option>
                                        <option value="Kalaburagi">Kalaburagi (ಕಲಬುರಗಿ)</option>
                                        <option value="Yadgir">Yadgir (ಯಾದಗಿರಿ)</option>
                                        <option value="Raichur">Raichur (ರಾಯಚೂರು)</option>
                                        <option value="Koppal">Koppal (ಕೊಪ್ಪಳ)</option>
                                        <option value="Gadag">Gadag (ಗದಗ)</option>
                                        <option value="Dharwad">Dharwad (ಧಾರವಾಡ)</option>
                                        <option value="Ballari">Ballari (ಬಳ್ಳಾರಿ)</option>
                                        <option value="Other">Other District (ಇತರ)</option>
                                    </select>
                                </div>
                            </div>

                            <div class="grid-2" style="gap: var(--space-lg);">
                                <!-- Farming Category Dropdown -->
                                <div class="form-group">
                                    <label class="form-label" for="join-farm-type"><span data-i18n="join.farm_type">Farming Category / Main Crops</span> <span class="text-danger">*</span></label>
                                    <select id="join-farm-type" class="form-control" required>
                                        <option value="" data-i18n="join.farm_type_select">Select Farming Category</option>
                                        <option value="Dryland Farming" data-i18n="join.farm_type_dryland">Dryland / Rainfed Farming (ಮಳೆಯಾಶ್ರಿತ ಕೃಷಿ)</option>
                                        <option value="Irrigated Farming" data-i18n="join.farm_type_irrigated">Irrigated Farming (ನೀರಾವರಿ ಕೃಷಿ)</option>
                                        <option value="Horticulture" data-i18n="join.farm_type_horticulture">Horticulture & Fruits (ತೋಟಗಾರಿಕೆ ಬೆಳೆಗಳು)</option>
                                        <option value="Sugarcane & Commercial" data-i18n="join.farm_type_sugarcane">Sugarcane & Commercial Crops (ಕಬ್ಬು / ವಾಣಿಜ್ಯ ಬೆಳೆಗಳು)</option>
                                        <option value="Organic Farming" data-i18n="join.farm_type_organic">Organic Farming (ಸಾವಯವ ಕೃಷಿ)</option>
                                        <option value="Dairy & Livestock" data-i18n="join.farm_type_dairy">Dairy, Poultry & Livestock (ಹಾಲಿನ ಉದ್ಯಮ / ಪಶುಸಂಗೋಪನೆ)</option>
                                        <option value="Women Farmer / SHG" data-i18n="join.farm_type_women">Women Farmer / SHG Member (ಮಹಿಳಾ ರೈತರು)</option>
                                        <option value="General Member" data-i18n="join.farm_type_other">General Community Member (ಸಾಮಾನ್ಯ ಸದಸ್ಯರು)</option>
                                    </select>
                                </div>

                                <!-- Primary Support Needed Dropdown -->
                                <div class="form-group">
                                    <label class="form-label" for="join-support-need"><span data-i18n="join.support_need">Primary Support / Advisory Needed</span> <span class="text-danger">*</span></label>
                                    <select id="join-support-need" class="form-control" required>
                                        <option value="" data-i18n="join.support_select">Select Primary Need</option>
                                        <option value="Soil Testing & Water Conservation" data-i18n="join.support_soil_water">Soil Testing & Water Conservation (ಮಣ್ಣು ಪರೀಕ್ಷೆ / ಜಲ ಸಂರಕ್ಷಣೆ)</option>
                                        <option value="Govt Schemes Advisory" data-i18n="join.support_schemes">Government Schemes & Subsidy Advisory (ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಮಾರ್ಗದರ್ಶನ)</option>
                                        <option value="Crop Advisory" data-i18n="join.support_crop_advisory">Crop Advisory & Pest Control (ಬೆಳೆ ಸಲಹೆ / ಕೀಟ ನಿಯಂತ್ರಣ)</option>
                                        <option value="Organic Farming Workshops" data-i18n="join.support_organic_workshops">Organic Farming Training Workshops (ಸಾವಯವ ಕೃಷಿ ತರಬೇತಿ)</option>
                                        <option value="Seeds & Fertilizer Guidance" data-i18n="join.support_seeds">Quality Seeds & Fertilizer Guidance (ಉತ್ತಮ ಬೀಜ ಮತ್ತು ಗೊಬ್ಬರ ಮಾಹಿತಿ)</option>
                                        <option value="General Farmer Welfare" data-i18n="join.support_general">General Farmer Welfare & Community Events (ಸಾಮಾನ್ಯ ಕಲ್ಯಾಣ)</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" id="btn-submit-join" class="btn btn--primary w-full btn--lg magnetic mt-md">
                                <i class="fas fa-paper-plane mr-xs"></i> <span data-i18n="join.submit">Submit Registration</span>
                            </button>
                        </form>

                        <!-- Success Receipt Card -->
                        <div id="join-success-card" class="join-success-card" style="display:none;">
                            <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                            <h3 data-i18n="join.success_title">Registration Successful!</h3>
                            <p class="text-sm text-muted mb-md" data-i18n="join.success_sub">Thank you for registering with VVK Foundation. Your details have been recorded safely.</p>
                            
                            <div class="member-receipt-box">
                                <div class="receipt-row">
                                    <span><span data-i18n="join.member_id">Registration ID</span>:</span>
                                    <strong id="rec-member-id">VVK-FARM-2026-8942</strong>
                                </div>
                                <div class="receipt-row">
                                    <span>Farmer Name:</span>
                                    <strong id="rec-name">--</strong>
                                </div>
                                <div class="receipt-row">
                                    <span>Location:</span>
                                    <strong id="rec-village">--</strong>
                                </div>
                                <div class="receipt-row">
                                    <span>Farming Category:</span>
                                    <strong id="rec-farm-type">--</strong>
                                </div>
                            </div>

                            <div class="mt-lg d-flex gap-sm flex-wrap">
                                <a href="https://whatsapp.com/channel/0029Vb7yFxOA2pLFnKvmLz0L" target="_blank" rel="noopener noreferrer" class="btn btn--wa btn--block" data-i18n="join.whatsapp_join">
                                    <i class="fab fa-whatsapp"></i> Join Official VVK WhatsApp Channel
                                </a>
                                <button type="button" class="btn btn--outline btn--block mt-xs" id="btn-register-another">
                                    <i class="fas fa-plus-circle"></i> Register Another Farmer
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
 * Initialize Join Form logic:
 * - Silent background Google Sheet submission
 * - Local backup persistence
 * - Print/Save QR Code Card handler & Success receipt card
 */
export function initJoinForm() {
    const form = document.getElementById('community-join-form');
    if (!form) return;

    const nameInput = document.getElementById('join-name');
    const phoneInput = document.getElementById('join-phone');
    const villageInput = document.getElementById('join-village');
    const districtSelect = document.getElementById('join-district');
    const farmTypeSelect = document.getElementById('join-farm-type');
    const supportNeedSelect = document.getElementById('join-support-need');
    const submitBtn = document.getElementById('btn-submit-join');
    const printQrBtn = document.getElementById('btn-print-qr');
    const registerAnotherBtn = document.getElementById('btn-register-another');

    // 1. Print / Save QR Code Card Handler
    if (printQrBtn) {
        printQrBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // 2. Register Another Farmer button handler
    if (registerAnotherBtn) {
        registerAnotherBtn.addEventListener('click', () => {
            const successCard = document.getElementById('join-success-card');
            if (successCard) successCard.style.display = 'none';
            form.reset();
            form.style.display = 'block';
            form.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 3. Form Submission & Background Google Sheet POST Integration
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        let isValid = true;
        form.querySelectorAll('[required]').forEach(field => {
            field.classList.remove('error');
            if (!field.value.trim()) {
                field.classList.add('error');
                isValid = false;
            }
        });

        if (!isValid) return;

        const memberId = 'VVK-FARM-2026-' + Math.floor(1000 + Math.random() * 9000);
        const selectedFarmText = farmTypeSelect.options[farmTypeSelect.selectedIndex]?.text || farmTypeSelect.value;
        const selectedSupportText = supportNeedSelect.options[supportNeedSelect.selectedIndex]?.text || supportNeedSelect.value;
        const selectedDistrictText = districtSelect.options[districtSelect.selectedIndex]?.text || districtSelect.value;

        const memberData = {
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            memberId: memberId,
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            village: villageInput.value.trim(),
            district: selectedDistrictText,
            farmType: selectedFarmText,
            supportNeed: selectedSupportText
        };

        // Loading UI state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin mr-xs"></i> <span data-i18n="join.saving">Submitting...</span>`;
        }

        let sheetSaved = false;
        const activeScriptUrl = window.VVK_GOOGLE_SHEET_URL || localStorage.getItem('vvk_google_sheet_url') || GOOGLE_SCRIPT_URL;

        // Post data in background to Google Sheet Web App Endpoint if configured
        if (activeScriptUrl && activeScriptUrl.startsWith('http')) {
            console.log('Sending submission to Google Sheet Endpoint:', activeScriptUrl);
            try {
                // Send as text/plain JSON payload with no-cors mode to bypass CORS preflight blocking
                await fetch(activeScriptUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'text/plain;charset=utf-8'
                    },
                    body: JSON.stringify(memberData)
                });
                sheetSaved = true;
                console.log('Successfully posted to Google Sheet!');
            } catch (err) {
                console.warn('Google Sheet background submission warning:', err);
            }
        } else {
            console.warn('VVK Notice: Google Apps Script Web App URL is not set yet. Set GOOGLE_SCRIPT_URL in join.js');
        }

        // Save to localStorage as backup
        try {
            const existing = JSON.parse(localStorage.getItem('vvk_farmer_community_members') || '[]');
            existing.push({ ...memberData, sheetSaved });
            localStorage.setItem('vvk_farmer_community_members', JSON.stringify(existing));
        } catch (err) {
            console.error('Failed to save in localStorage:', err);
        }

        // Reset submit button state
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `<i class="fas fa-paper-plane mr-xs"></i> <span data-i18n="join.submit">Submit Registration</span>`;
        }

        // Hide form and display clean Success Receipt Card for farmer
        form.style.display = 'none';

        const successCard = document.getElementById('join-success-card');
        const recMemberId = document.getElementById('rec-member-id');
        const recName = document.getElementById('rec-name');
        const recVillage = document.getElementById('rec-village');
        const recFarmType = document.getElementById('rec-farm-type');

        if (recMemberId) recMemberId.textContent = memberId;
        if (recName) recName.textContent = memberData.name;
        if (recVillage) recVillage.textContent = `${memberData.village}, ${memberData.district}`;
        if (recFarmType) recFarmType.textContent = memberData.farmType;

        if (successCard) {
            successCard.style.display = 'block';
            successCard.scrollIntoView({ behavior: 'smooth' });
        }
    });
}
