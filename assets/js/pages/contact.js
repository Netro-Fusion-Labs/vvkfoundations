/**
 * VVK Foundation — Contact Page
 */

export function renderContact() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs"><a href="/" data-route>Home</a> <span class="separator"><i class="fas fa-chevron-right"></i></span> <span class="current" data-i18n="nav.contact">Contact</span></div>
                <h1 data-i18n="contact.title">Get Involved</h1>
                <p data-i18n="contact.subtitle">We'd love to hear from you. Reach out to learn more about our initiatives or to offer your support.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="contact-layout">
                    <div class="contact-info-card reveal reveal--left">
                        <h2 data-i18n="contact.info_title">Contact Information</h2>
                        <div class="contact-info-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h4 data-i18n="contact.address_label">Head Office</h4>
                                <p data-i18n="contact.address">Bagalkot District, Karnataka, India</p>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h4 data-i18n="contact.email_label">Email</h4>
                                <a href="mailto:info@vvkfoundation.org" data-i18n="contact.email">info@vvkfoundation.org</a>
                            </div>
                        </div>
                        <div class="contact-info-item">
                            <i class="fas fa-phone-alt"></i>
                            <div>
                                <h4 data-i18n="contact.phone_label">Phone</h4>
                                <a href="tel:+910000000000" data-i18n="contact.phone">+91 XXXXX XXXXX</a>
                            </div>
                        </div>
                        <div class="footer-social mt-xl">
                            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div class="contact-form-card reveal reveal--right">
                        <h3 data-i18n="contact.form_title">Send us a Message</h3>
                        <form id="contact-form" novalidate>
                            <div class="form-group">
                                <label class="form-label" for="contact-name" data-i18n="contact.form_name_label">Full Name</label>
                                <input type="text" id="contact-name" class="form-control" data-i18n-placeholder="contact.form_name" required minlength="2" autocomplete="name">
                                <span class="form-error" data-i18n="contact.error_name">Please enter your name</span>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="contact-email" data-i18n="contact.form_email_label">Email Address</label>
                                <input type="email" id="contact-email" class="form-control" data-i18n-placeholder="contact.form_email" required autocomplete="email">
                                <span class="form-error" data-i18n="contact.error_email">Please enter a valid email</span>
                            </div>
                            <div class="form-group">
                                <label class="form-label" for="contact-message" data-i18n="contact.form_message_label">Message</label>
                                <textarea id="contact-message" class="form-control" rows="5" data-i18n-placeholder="contact.form_message" required minlength="10"></textarea>
                                <span class="form-error" data-i18n="contact.error_message">Please enter your message (min 10 characters)</span>
                            </div>
                            <button type="submit" class="btn btn--primary w-full magnetic" data-i18n="contact.form_submit">Send Message</button>
                        </form>
                        <div id="contact-success" class="form-success mt-lg" style="display:none;">
                            <i class="fas fa-check-circle"></i>
                            <p data-i18n="contact.success_message">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                        </div>
                    </div>
                </div>

                <div class="map-container mt-3xl reveal reveal--up">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122000!2d75.65!3d16.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6e3fc1dfb12a7%3A0x145a84c1f2d3be08!2sBagalkot%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="VVK Foundation Location - Bagalkot, Karnataka"></iframe>
                </div>
            </div>
        </section>
    `;
}

/**
 * Initialize contact form validation.
 */
export function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const fields = form.querySelectorAll('.form-control');

        fields.forEach(field => {
            field.classList.remove('error');
            if (!field.checkValidity()) {
                field.classList.add('error');
                isValid = false;
            }
        });

        if (isValid) {
            form.style.display = 'none';
            document.getElementById('contact-success').style.display = 'block';
        }
    });

    // Clear error on input
    form.querySelectorAll('.form-control').forEach(field => {
        field.addEventListener('input', () => {
            field.classList.remove('error');
        });
    });
}
