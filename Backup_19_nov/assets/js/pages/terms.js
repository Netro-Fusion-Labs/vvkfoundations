/**
 * VVK Foundation — Terms of Service Page
 */

export function renderTerms() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs"><a href="/" data-route>Home</a> <span class="separator"><i class="fas fa-chevron-right"></i></span> <span class="current">Terms of Service</span></div>
                <h1 data-i18n="terms.title">Terms of Service</h1>
            </div>
        </section>

        <div class="legal-content reveal reveal--up">
            <p class="text-muted mb-xl"><strong>Last Updated:</strong> January 1, 2024</p>

            <p>Welcome to the VVK Foundation website. By accessing or using our website, you agree to be bound by these Terms of Service.</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By using this website, you agree to these terms and conditions. If you do not agree, please do not use our website.</p>

            <h2>2. Use of Website</h2>
            <p>You may use our website for lawful purposes only. You agree not to:</p>
            <ul>
                <li>Use the website in any way that violates applicable laws</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Use the website to distribute malware or harmful content</li>
                <li>Scrape or collect data from the website without permission</li>
            </ul>

            <h2>3. Intellectual Property</h2>
            <p>All content on this website, including text, images, logos, and design, is the property of VVK Foundation and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without written permission.</p>

            <h2>4. Content Accuracy</h2>
            <p>We strive to ensure that all information on our website is accurate and up-to-date. However, we make no warranties or representations about the accuracy or completeness of the content.</p>

            <h2>5. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of these external sites.</p>

            <h2>6. Limitation of Liability</h2>
            <p>VVK Foundation shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the website.</p>

            <h2>7. Donations</h2>
            <p>Any donations made through our website are voluntary. We will use donations in accordance with our stated mission and applicable laws.</p>

            <h2>8. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Continued use of the website constitutes acceptance of the updated terms.</p>

            <h2>9. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p><strong>VVK Foundation</strong><br>Bagalkot District, Karnataka, India<br>Email: info@vvkfoundation.org</p>
        </div>
    `;
}
