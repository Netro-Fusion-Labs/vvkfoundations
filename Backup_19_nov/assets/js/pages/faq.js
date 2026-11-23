/**
 * VVK Foundation — FAQ Page
 */

export function renderFaq() {
    return `
        <section class="page-hero">
            <div class="container reveal reveal--up">
                <div class="breadcrumbs"><a href="/" data-route>Home</a> <span class="separator"><i class="fas fa-chevron-right"></i></span> <span class="current" data-i18n="nav.faq">FAQ</span></div>
                <h1 data-i18n="faq.title">Frequently Asked Questions</h1>
                <p data-i18n="faq.desc">Find answers to common questions about VVK Foundation, our programs, and how you can get involved.</p>
            </div>
        </section>

        <section>
            <div class="container container--narrow">
                <div class="accordion" id="faq-accordion">
                    ${faqItem('faq.q1', 'faq.a1', true)}
                    ${faqItem('faq.q2', 'faq.a2')}
                    ${faqItem('faq.q3', 'faq.a3')}
                    ${faqItem('faq.q4', 'faq.a4')}
                    ${faqItem('faq.q5', 'faq.a5')}
                    ${faqItem('faq.q6', 'faq.a6')}
                    ${faqItem('faq.q7', 'faq.a7')}
                    ${faqItem('faq.q8', 'faq.a8')}
                </div>

                <div class="text-center mt-3xl reveal reveal--up">
                    <p class="text-muted mb-md" data-i18n="faq.more_questions">Still have questions?</p>
                    <a href="/contact" data-route class="btn btn--primary magnetic" data-i18n="faq.contact_btn">Contact Us</a>
                </div>
            </div>
        </section>
    `;
}

function faqItem(questionKey, answerKey, isOpen = false) {
    return `
        <div class="accordion-item ${isOpen ? 'is-open' : ''} reveal reveal--up">
            <button class="accordion-trigger" aria-expanded="${isOpen}" type="button">
                <span data-i18n="${questionKey}">Loading...</span>
                <i class="fas fa-chevron-down accordion-icon"></i>
            </button>
            <div class="accordion-content" ${isOpen ? 'style="max-height: 300px;"' : ''}>
                <div class="accordion-content__inner">
                    <p data-i18n="${answerKey}">Loading...</p>
                </div>
            </div>
        </div>
    `;
}

/**
 * Initialize FAQ accordion functionality.
 */
export function initFaqAccordion() {
    const accordion = document.getElementById('faq-accordion');
    if (!accordion) return;

    accordion.addEventListener('click', (e) => {
        const trigger = e.target.closest('.accordion-trigger');
        if (!trigger) return;

        const item = trigger.closest('.accordion-item');
        const content = item.querySelector('.accordion-content');
        const isActive = item.classList.contains('is-open');

        // Close all items
        accordion.querySelectorAll('.accordion-item').forEach(i => {
            i.classList.remove('is-open');
            i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
            i.querySelector('.accordion-content').style.maxHeight = '0';
        });

        // Open clicked item (if it was closed)
        if (!isActive) {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}
