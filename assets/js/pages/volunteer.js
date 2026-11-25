/**
 * VVK Foundation — Volunteer Page
 */

export function renderVolunteer() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs"><a href="/" data-route>Home</a> <span class="separator"><i class="fas fa-chevron-right"></i></span> <span class="current" data-i18n="nav.volunteer">Volunteer</span></div>
                <h1 data-i18n="volunteer.title">Become a Volunteer</h1>
                <p data-i18n="volunteer.desc">Your time and skills can create lasting change. Join our community of changemakers.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="section-header reveal reveal--up">
                    <span class="section-label"><i class="fas fa-hand-holding-heart"></i> <span data-i18n="volunteer.areas_label">VOLUNTEER AREAS</span></span>
                    <h2 data-i18n="volunteer.areas_title">How You Can Help</h2>
                </div>

                <div class="volunteer-areas">
                    <div class="volunteer-card reveal reveal--up stagger-1">
                        <div class="volunteer-card__icon"><i class="fas fa-chalkboard-teacher"></i></div>
                        <h4 data-i18n="volunteer.area_1_title">Teaching & Mentoring</h4>
                        <p class="text-sm text-muted mt-sm" data-i18n="volunteer.area_1_desc">Help students prepare for competitive exams through coaching and guidance.</p>
                    </div>
                    <div class="volunteer-card reveal reveal--up stagger-2">
                        <div class="volunteer-card__icon"><i class="fas fa-stethoscope"></i></div>
                        <h4 data-i18n="volunteer.area_2_title">Health, Wellness & Hygiene</h4>
                        <p class="text-sm text-muted mt-sm" data-i18n="volunteer.area_2_desc">Assist in organizing and managing community health check-up camps.</p>
                    </div>
                    <div class="volunteer-card reveal reveal--up stagger-3">
                        <div class="volunteer-card__icon"><i class="fas fa-bullhorn"></i></div>
                        <h4 data-i18n="volunteer.area_3_title">Awareness & Outreach</h4>
                        <p class="text-sm text-muted mt-sm" data-i18n="volunteer.area_3_desc">Spread the word about our programs and help reach underserved communities.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-secondary">
            <div class="container">
                <div class="container--narrow mx-auto">
                    <div class="contact-form-card reveal reveal--up">
                        <h3 class="text-center mb-xl" data-i18n="volunteer.form_title">Express Your Interest</h3>
                        ${renderVolunteerFormMarkup('vol')}
                    </div>
                </div>
            </div>
        </section>
    `;
}

/**
 * Reusable volunteer form markup.
 * @param {string} prefix - Unique ID prefix to avoid duplicate IDs when rendered in modal.
 */
export function renderVolunteerFormMarkup(prefix = 'vol') {
    return `
        <form id="${prefix}-form" novalidate>
            <div class="grid-2" style="gap: var(--space-lg);">
                <div class="form-group">
                    <label class="form-label" for="${prefix}-name" data-i18n="contact.form_name_label">Full Name</label>
                    <input type="text" id="${prefix}-name" class="form-control" required autocomplete="name" data-i18n-placeholder="contact.form_name">
                    <span class="form-error" data-i18n="contact.error_name">Please enter your name</span>
                </div>
                <div class="form-group">
                    <label class="form-label" for="${prefix}-email" data-i18n="contact.form_email_label">Email Address</label>
                    <input type="email" id="${prefix}-email" class="form-control" required autocomplete="email" data-i18n-placeholder="contact.form_email">
                    <span class="form-error" data-i18n="contact.error_email">Please enter a valid email</span>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label" for="${prefix}-area" data-i18n="volunteer.area_label">Area of Interest</label>
                <select id="${prefix}-area" class="form-control" required>
                    <option value="" data-i18n="volunteer.select_area">Select an area</option>
                    <option value="teaching" data-i18n="volunteer.area_1_title">Teaching & Mentoring</option>
                    <option value="health" data-i18n="volunteer.area_2_title">Health, Wellness & Hygiene</option>
                    <option value="outreach" data-i18n="volunteer.area_3_title">Awareness & Outreach</option>
                    <option value="other" data-i18n="volunteer.area_other">Other</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label" for="${prefix}-message" data-i18n="volunteer.message_label">Tell us about yourself</label>
                <textarea id="${prefix}-message" class="form-control" rows="4" data-i18n-placeholder="volunteer.message_placeholder"></textarea>
            </div>
            <button type="submit" class="btn btn--primary w-full magnetic" data-i18n="volunteer.submit">Submit Interest</button>
        </form>
        <div id="${prefix}-success" class="form-success mt-lg" style="display:none;">
            <p data-i18n="volunteer.success">Thank you for your interest! We'll be in touch soon.</p>
        </div>
    `;
}

export function initVolunteerForm() {
    bindVolunteerForm('vol');
}

/**
 * Bind validation and submission behavior to a volunteer form instance.
 * @param {string} prefix - Matching ID prefix passed to renderVolunteerFormMarkup.
 */
export function bindVolunteerForm(prefix = 'vol') {
    const form = document.getElementById(`${prefix}-form`);
    const successEl = document.getElementById(`${prefix}-success`);
    if (!form || !successEl) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        form.querySelectorAll('[required]').forEach(field => {
            field.classList.remove('error');
            if (!field.checkValidity()) {
                field.classList.add('error');
                isValid = false;
            }
        });
        if (isValid) {
            form.style.display = 'none';
            successEl.style.display = 'block';
        }
    });

    form.querySelectorAll('.form-control').forEach(field => {
        field.addEventListener('input', () => field.classList.remove('error'));
    });
}
