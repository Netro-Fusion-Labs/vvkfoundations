/**
 * VVK Foundation — Bagalkot District-Level Farmer & Woman Farmer Award Page
 * Concluded event presentation without application forms or CTAs.
 */

export function renderFarmerAward() {
    return `
        <section class="py-lg bg-slate-50" style="min-height: 80vh; display: flex; align-items: center;">
            <div class="container">
                <div class="container--narrow mx-auto">
                    
                    <!-- Header Banner Card (Event Concluded) -->
                    <div class="contact-form-card text-center p-md sm:p-xl" style="border-top: 6px solid #2b9348; background: #ffffff; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
                        <div class="d-inline-flex align-center gap-xs mb-xs" style="background: rgba(43,147,72,0.1); color: #2b9348; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 0.85rem;">
                            <i class="fas fa-check-circle"></i> <span>ಐತಿಹಾಸಿಕ ಮೈಲಿಗಲ್ಲು ಸಂಪನ್ನ | Milestone Event Concluded</span>
                        </div>
                        <h1 style="font-size: 1.6rem; color: #1b4332; line-height: 1.3;" class="mt-xs font-bold">
                            ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲಾ ಮಟ್ಟದ ಅತ್ಯುತ್ತಮ ರೈತ ಮತ್ತು ರೈತ ಮಹಿಳೆಯ ಪ್ರಶಸ್ತಿ 2026
                        </h1>
                        <p class="text-muted text-sm mt-xs">
                            Bagalkot District-Level Best Farmer & Woman Farmer Awards 2026
                        </p>
                        <div class="d-inline-flex align-center gap-xs mt-sm" style="background: #f0fdf4; color: #166534; padding: 6px 18px; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">
                            <i class="fas fa-calendar-check"></i> ಶುಕ್ರವಾರ, 21 ಆಗಸ್ಟ್ 2026 ರಂದು ಯಶಸ್ವಿಯಾಗಿ ಸಂಪನ್ನಗೊಂಡಿದೆ (Successfully Concluded on 21 August 2026)
                        </div>
                        
                        <div class="mt-lg p-md" style="background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; max-width: 680px; margin-left: auto; margin-right: auto; text-align: left;">
                            <h3 style="font-size: 1.05rem; color: #1b4332; margin-bottom: 8px;"><i class="fas fa-award" style="color: #2b9348;"></i> ಪ್ರಶಸ್ತಿ ಪ್ರದಾನ ಹಾಗೂ ಅಭಿನಂದನೆಗಳು</h3>
                            <p style="font-size: 0.88rem; color: #4b5563; line-height: 1.6; margin-bottom: 8px;">
                                ವಿವಿಕೆ ಫೌಂಡೇಶನ್ನಿನ 3ನೇ ವರ್ಷಾಚರಣೆಯ ಪ್ರಯುಕ್ತ ಬಾಗಲಕೋಟೆಯ ಡಾ. ಬಿ.ಆರ್. ಅಂಬೇಡ್ಕರ್ ಭವನದಲ್ಲಿ ಆಯೋಜಿಸಲಾಗಿದ್ದ ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲಾ ಮಟ್ಟದ ಅತ್ಯುತ್ತಮ ರೈತ ಹಾಗೂ ರೈತ ಮಹಿಳೆಯ ಪ್ರಶಸ್ತಿ ಪ್ರದಾನ ಸಮಾರಂಭವು ಅತ್ಯಂತ ಯಶಸ್ವಿಯಾಗಿ ಸಂಪನ್ನಗೊಂಡಿದೆ.
                            </p>
                            <p style="font-size: 0.88rem; color: #4b5563; line-height: 1.6; margin: 0;">
                                The nominations and conferment for the 2026 Farmer Awards are now successfully concluded. We extend our heartfelt congratulations to all the honored progressive farmers and express deep gratitude to the farming communities, agricultural scientists, women self-help groups, and community partners across all 9 taluks of Bagalkot district for making this milestone a resounding success.
                            </p>
                        </div>

                        <div class="mt-xl d-flex gap-sm justify-center flex-wrap">
                            <a href="/" data-route class="btn btn--primary">
                                <i class="fas fa-home"></i> Return to Home
                            </a>
                            <a href="/initiatives" data-route class="btn btn--outline">
                                <i class="fas fa-arrow-right"></i> Explore Our Ongoing Initiatives
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `;
}

export function initFarmerAwardForm() {
    // Form submission disabled - event successfully concluded
}
