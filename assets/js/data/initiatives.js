/**
 * VVK Foundation — Initiatives data layer.
 *
 * Single source of truth for the /initiatives page. All visible text is stored
 * as i18n keys (resolved by assets/lang/{en,kn,hi}.json); image paths are real
 * assets. Flagship programs and the chronicle ledger are intentionally separate
 * structures: flagships carry the full case-study brief, the chronicle is a
 * compact historical index (one row per dated milestone).
 */

/**
 * @typedef {'healthcare'|'women'|'education'|'agriculture'} DomainId
 * @typedef {DomainId|'advocacy'} CategoryId
 *
 * @typedef {Object} MediaItem
 * @property {string} src      Absolute asset path.
 * @property {string} caption  Full description (alt text + lightbox caption).
 * @property {string} [label]  Short figure caption shown on the page (falls back to caption).
 *
 * @typedef {Object} Pillar
 * @property {DomainId} id
 * @property {string} icon       Font Awesome class.
 * @property {string} titleKey   i18n key.
 * @property {string} descKey    i18n key.
 *
 * @typedef {Object} Metric
 * @property {string} numKey
 * @property {string} labelKey
 * @property {string} subKey
 *
 * @typedef {Object} Program
 * @property {string} id
 * @property {DomainId} domain
 * @property {number} year
 * @property {string} titleKey
 * @property {string} dateKey
 * @property {string} venueKey
 * @property {string} summaryKey
 * @property {string[]} outcomeKeys
 * @property {string} dignitariesKey   " · "-separated list of guests and spiritual leaders.
 * @property {number} dignitaryCount   Fixed count shown on the accordion (language independent).
 * @property {MediaItem[]} gallery     [0] = hero, [1..3] = thumbnail strip, rest = lightbox only.
 *
 * @typedef {Object} ChronicleEntry
 * @property {string} id
 * @property {number} year
 * @property {string} dateKey
 * @property {CategoryId} category
 * @property {string} titleKey
 * @property {string} descKey
 * @property {{src:string, alt:string, kind:'photo'|'press', position?:string}} media
 * @property {Array<{src:string, label?:string, caption?:string, isPress?:boolean}>} [gallery]
 */

const EVENTS_2025 = '/assets/images/events-2025/';
const EXTRACTED = '/assets/images/extracted/';
const P = 'initiatives.programs.';

/** Hero trust-strip metrics (existing keys, unchanged copy). @type {Metric[]} */
export const METRICS = [
    { numKey: 'initiatives.stat_mothers_num', labelKey: 'initiatives.stat_mothers_label', subKey: 'initiatives.stat_mothers_sub' },
    { numKey: 'initiatives.stat_cardiac_num', labelKey: 'initiatives.stat_cardiac_label', subKey: 'initiatives.stat_cardiac_sub' },
    { numKey: 'initiatives.stat_students_num', labelKey: 'initiatives.stat_students_label', subKey: 'initiatives.stat_students_sub' },
    { numKey: 'initiatives.stat_taluks_num', labelKey: 'initiatives.stat_taluks_label', subKey: 'initiatives.stat_taluks_sub' }
];

/** Strategic focus areas (existing title/description keys). @type {Pillar[]} */
export const PILLARS = [
    { id: 'healthcare', icon: 'fa-heartbeat', titleKey: 'initiatives.health_title', descKey: 'initiatives.health_desc' },
    { id: 'women', icon: 'fa-female', titleKey: 'initiatives.women_title', descKey: 'initiatives.women_desc' },
    { id: 'education', icon: 'fa-user-graduate', titleKey: 'initiatives.youth_title', descKey: 'initiatives.youth_desc' },
    { id: 'agriculture', icon: 'fa-seedling', titleKey: 'initiatives.farmers_title', descKey: 'initiatives.farmers_desc' }
];

/** i18n key for each domain / category label. @type {Record<CategoryId,string>} */
export const CATEGORY_LABEL_KEYS = {
    healthcare: 'initiatives.dom_healthcare',
    women: 'initiatives.dom_women',
    education: 'initiatives.dom_education',
    agriculture: 'initiatives.dom_agriculture',
    advocacy: 'initiatives.dom_advocacy'
};

/** Flagship filter options. */
export const DOMAIN_FILTERS = [
    { id: 'all', labelKey: 'initiatives.filter_all' },
    { id: 'healthcare', labelKey: CATEGORY_LABEL_KEYS.healthcare },
    { id: 'women', labelKey: CATEGORY_LABEL_KEYS.women },
    { id: 'education', labelKey: CATEGORY_LABEL_KEYS.education },
    { id: 'agriculture', labelKey: CATEGORY_LABEL_KEYS.agriculture }
];

/** Years available in the flagship + chronicle filters (newest first). */
export const YEARS = [2026, 2025, 2024, 2023];

/**
 * The 7 unique flagship case studies (newest first). Gallery images are the
 * union of every photo previously shown for the program on the old page.
 * @type {Program[]}
 */
export const PROGRAMS = [
    {
        id: 'anniv26',
        domain: 'agriculture',
        year: 2026,
        titleKey: 'activities.act_6_title',
        dateKey: 'activities.act_6_date',
        venueKey: `${P}anniv26.venue`,
        summaryKey: 'news.anniv_desc',
        outcomeKeys: [1, 2, 3, 4, 5, 6].map(n => `${P}anniv26.o${n}`),
        dignitariesKey: `${P}anniv26.dignitaries`,
        dignitaryCount: 5,
        gallery: [
            { src: `${EVENTS_2025}2025-anniversary-farmer-awards-01.jpg`, label: 'Best Male Farmers Award Ceremony', caption: 'Best Male Farmers Award Ceremony on Stage' },
            { src: `${EVENTS_2025}2025-anniversary-farmer-awards-02.jpg`, label: 'Felicitation of Progressive Women Farmers', caption: 'Felicitation of Progressive Women Farmers' },
            { src: `${EVENTS_2025}2025-anniversary-farmer-awards-03.jpg`, label: 'Agricultural Exhibition Ribbon Cutting', caption: 'Exhibition Ribbon Cutting with MLA Vijayanand Kashappanavar & DC Sangappa' },
            { src: `${EVENTS_2025}2025-anniversary-farmer-awards-06.jpg`, label: 'Founder Addressing the Anniversary Gathering', caption: 'Founder Addressing the 3rd Anniversary Gathering' },
            { src: `${EVENTS_2025}2025-anniversary-farmer-awards-05.jpg`, caption: '3rd Anniversary Photo Frame Booth at Ambedkar Bhavan' }
        ]
    },
    {
        id: 'cardiac25',
        domain: 'healthcare',
        year: 2025,
        titleKey: 'activities.act_7_title',
        dateKey: 'activities.act_7_date',
        venueKey: `${P}cardiac25.venue`,
        summaryKey: 'activities.act_7_desc',
        outcomeKeys: [1, 2, 3, 4].map(n => `${P}cardiac25.o${n}`),
        dignitariesKey: `${P}cardiac25.dignitaries`,
        dignitaryCount: 5,
        gallery: [
            { src: `${EVENTS_2025}2025-cardiac-health-camp-02.jpg`, label: 'Inauguration Dais with District Leadership', caption: 'Inauguration Dais with Seers & District Leadership' },
            { src: `${EVENTS_2025}2025-cardiac-health-camp-01.jpg`, label: 'Founder Arrival with Revered Swamijis', caption: 'Founder Arrival Escorted by Revered Peetha Swamijis' },
            { src: `${EVENTS_2025}2025-cardiac-health-camp-03.jpg`, label: 'DC Sangappa Addressing the Assembly', caption: 'DC Sangappa Addressing Health Camp Assembly' },
            { src: `${EVENTS_2025}2025-cardiac-health-camp-04.jpg`, caption: 'Ceremonial Lamp Lighting with Peetha Swamijis at Cardiac Camp' }
        ]
    },
    {
        id: 'pink25',
        domain: 'women',
        year: 2025,
        titleKey: 'activities.act_9_title',
        dateKey: 'activities.act_9_date',
        venueKey: `${P}pink25.venue`,
        summaryKey: 'activities.act_9_desc',
        outcomeKeys: [1, 2, 3, 4].map(n => `${P}pink25.o${n}`),
        dignitariesKey: `${P}pink25.dignitaries`,
        dignitaryCount: 7,
        gallery: [
            { src: `${EVENTS_2025}2025-pink-walk-stree-sambhrama-01.jpg`, label: 'Pink Walk Photo Frame Booth', caption: 'Pink Walk 2025 Photo Frame Booth at Stree Sambhrama' },
            { src: `${EVENTS_2025}2025-pink-walk-stree-sambhrama-15.jpg`, label: 'Founder Leading the Pink Walk', caption: 'Founder Smt. Veena Kashappanavar Leading the Pink Walk in Open Vehicle' },
            { src: `${EVENTS_2025}2025-pink-walk-stree-sambhrama-36.jpg`, label: 'Women Police Officers Felicitated', caption: 'Women Police Officers & Achievers Felicitation' },
            { src: `${EVENTS_2025}2025-pink-walk-stree-sambhrama-41.jpg`, label: 'Ceremonial Lamp Lighting with Swamijis', caption: 'Ceremonial Lamp Lighting with Revered Swamijis' }
        ]
    },
    {
        id: 'cardiac24',
        domain: 'healthcare',
        year: 2024,
        titleKey: 'news.cardiac_title',
        dateKey: 'news.cardiac_date',
        venueKey: 'news.cardiac_venue',
        summaryKey: 'news.cardiac_desc',
        outcomeKeys: [1, 2, 3].map(n => `${P}cardiac24.o${n}`),
        dignitariesKey: 'news.cardiac_dignitaries',
        dignitaryCount: 5,
        gallery: [
            { src: `${EXTRACTED}mega_cardiac_medical_health_camp_01.jpg`, label: 'Inauguration with Seers & District Leadership', caption: 'Inauguration with Seers & District Leadership' },
            { src: `${EXTRACTED}mega_cardiac_medical_health_camp_02.jpg`, label: 'Specialist Cardiac Diagnostic Screening', caption: 'Specialist Cardiac Consultations and Diagnostic Screenings' },
            { src: `${EXTRACTED}mega_cardiac_medical_health_camp_03.jpg`, label: 'Patient Consultation & Free Medication', caption: 'Community Consultation and Medication Distribution' }
        ]
    },
    {
        id: 'nari24',
        domain: 'women',
        year: 2024,
        titleKey: 'news.nari_ilkal_title',
        dateKey: 'news.nari_ilkal_date',
        venueKey: 'news.nari_ilkal_venue',
        summaryKey: 'news.nari_ilkal_desc',
        outcomeKeys: [1, 2, 3].map(n => `${P}nari24.o${n}`),
        dignitariesKey: 'news.nari_ilkal_dignitaries',
        dignitaryCount: 1,
        gallery: [
            { src: `${EXTRACTED}international_womensday_01.jpg`, label: 'Nari Shakti Conference at Dasoha Bhavan, Ilkal', caption: 'Nari Shakti Conference at Dasoha Bhavan, Ilkal' },
            { src: `${EXTRACTED}international_womensday_02.jpg`, label: 'Smt. Veena Kashappanavar Addressing Convention', caption: 'Smt. Veena Kashappanavar Addressing Women Achievers' },
            { src: `${EXTRACTED}international_womensday_03.jpg`, label: 'Felicitation Ceremony for Women Achievers', caption: 'Felicitation Ceremony for Rural Women Achievers' }
        ]
    },
    {
        id: 'udi24',
        domain: 'women',
        year: 2024,
        titleKey: 'news.udi_title',
        dateKey: 'news.udi_date',
        venueKey: 'news.udi_venue',
        summaryKey: 'news.udi_desc',
        outcomeKeys: [1, 2, 3].map(n => `${P}udi24.o${n}`),
        dignitariesKey: 'news.udi_dignitaries',
        dignitaryCount: 1,
        gallery: [
            { src: `${EXTRACTED}banshankari_jathara_01.jpg`, label: 'Banashankari Fair 2024: Haldi-Kumkum Gathering', caption: 'Banashankari Fair 2024 Haldi-Kumkum Gathering' },
            { src: `${EXTRACTED}banshankari_jathara_02.jpg`, label: 'Traditional Sacred Udi-Tumbuva Ritual for 2,000 Mothers', caption: 'Traditional Sacred Udi-Tumbuva Ritual in Progress' }
        ]
    },
    {
        id: 'academy23',
        domain: 'education',
        year: 2023,
        titleKey: 'news.academy_title',
        dateKey: 'news.academy_date',
        venueKey: 'news.academy_venue',
        summaryKey: 'news.academy_desc',
        outcomeKeys: [1, 2, 3].map(n => `${P}academy23.o${n}`),
        dignitariesKey: `${P}academy23.dignitaries`,
        dignitaryCount: 7,
        gallery: [
            { src: `${EXTRACTED}launch_of_free_kas_psi_coaching_academy_01.jpg`, label: 'Saraswati Pooja & Academy Inauguration', caption: 'Saraswati Pooja & Formal Academy Launch' },
            { src: `${EXTRACTED}workshop_01.jpg`, label: 'Entrance Exam at Navanagar College', caption: 'Entrance Examination at Govt First Grade College, Navanagar' },
            { src: `${EXTRACTED}workshop_02.jpg`, label: 'Career Workshop at Ilkal Mantapa', caption: 'One-Day Guidance Camp at Hosamani Kalyana Mantapa, Ilkal' },
            { src: `${EXTRACTED}workshop_03.jpg`, label: 'Youth Exam Guidance Camp at Mudhol', caption: 'Youth Competitive Exam Camp at Mudhol Town' }
        ]
    }
];

/**
 * Complete chronological ledger — all 11 dated milestones and achievements
 * across all years (2026, 2025, 2024, 2023).
 * @type {ChronicleEntry[]}
 */
export const CHRONICLE = [
    {
        id: 'ledger-2026-anniversary', year: 2026, category: 'agriculture',
        dateKey: 'activities.act_6_date', titleKey: 'activities.act_6_title', descKey: 'activities.act_6_desc',
        media: { src: `${EVENTS_2025}2025-anniversary-farmer-awards-01.jpg`, alt: '3rd Anniversary & District Best Farmer Awards', kind: 'photo' },
        gallery: [
            { src: `${EVENTS_2025}2025-anniversary-farmer-awards-01.jpg`, label: 'Best Male Farmers Award Ceremony', caption: 'Best Male Farmers Award Ceremony on Stage' },
            { src: `${EVENTS_2025}2025-anniversary-farmer-awards-02.jpg`, label: 'Felicitation of Women Farmers', caption: 'Felicitation of Progressive Women Farmers' },
            { src: `${EVENTS_2025}2025-anniversary-farmer-awards-03.jpg`, label: 'Exhibition Ribbon Cutting', caption: 'Agricultural Exhibition Ribbon Cutting with MLA Vijayanand Kashappanavar & DC Sangappa' },
            { src: `${EVENTS_2025}2025-anniversary-farmer-awards-06.jpg`, label: 'Founder Address', caption: 'Founder Smt. Veena Kashappanavar Addressing the 3rd Anniversary Gathering' },
            { src: `${EVENTS_2025}2025-anniversary-farmer-awards-05.jpg`, label: 'Photo Frame Booth', caption: '3rd Anniversary Photo Frame Booth at Ambedkar Bhavan' }
        ]
    },
    {
        id: 'ledger-2025-health-mission', year: 2025, category: 'healthcare',
        dateKey: 'activities.act_7_date', titleKey: 'activities.act_7_title', descKey: 'activities.act_7_desc',
        media: { src: `${EVENTS_2025}2025-cardiac-health-camp-02.jpg`, alt: 'Inaugural Dais with Swamijis and District Dignitaries', kind: 'photo' },
        gallery: [
            { src: `${EVENTS_2025}2025-cardiac-health-camp-02.jpg`, label: 'Inauguration Dais with District Leadership', caption: 'Inauguration Dais with Seers & District Leadership' },
            { src: `${EVENTS_2025}2025-cardiac-health-camp-01.jpg`, label: 'Founder Arrival with Revered Swamijis', caption: 'Founder Arrival Escorted by Revered Peetha Swamijis' },
            { src: `${EVENTS_2025}2025-cardiac-health-camp-03.jpg`, label: 'DC Sangappa Addressing Assembly', caption: 'DC Sangappa Addressing Health Camp Assembly' },
            { src: `${EVENTS_2025}2025-cardiac-health-camp-04.jpg`, label: 'Ceremonial Lamp Lighting', caption: 'Ceremonial Lamp Lighting with Peetha Swamijis at Cardiac Camp' },
            { src: `${EVENTS_2025}2025-cardiac-health-camp-05.jpg`, label: 'Social Welfare Umbrella Distribution', caption: 'Social Welfare Umbrella Distribution to Local Street Vendors' },
            { src: `${EVENTS_2025}2025-cardiac-health-camp-06.jpg`, label: 'Cardiac Screening & ECG Screening', caption: 'ECG Screening and Specialist Cardiac Consultations' },
            { src: `${EVENTS_2025}2025-cardiac-health-camp-press-01.jpg`, label: 'News Coverage & Media Report', caption: 'District News Coverage & Press Release', isPress: true }
        ]
    },
    {
        id: 'ledger-2025-state-advocacy', year: 2025, category: 'advocacy',
        dateKey: 'activities.act_11_date', titleKey: 'activities.act_11_title', descKey: 'activities.act_11_desc',
        media: { src: `${EVENTS_2025}2025-state-leadership-basaveshwara-honor-01.jpg`, alt: 'Felicitation of Chief Minister Siddaramaiah with Lord Basaveshwara Idol by Smt. Veena Kashappanavar & MLA Vijayanand Kashappanavar', kind: 'photo', position: 'center 20%' },
        gallery: [
            { src: `${EVENTS_2025}2025-state-leadership-basaveshwara-honor-01.jpg`, label: 'Lord Basaveshwara Idol Presentation to CM Siddaramaiah', caption: 'Felicitation of Chief Minister Siddaramaiah with Lord Basaveshwara Idol by Smt. Veena Kashappanavar & MLA Vijayanand Kashappanavar' }
        ]
    },
    {
        id: 'ledger-2025-akkamahadevi', year: 2025, category: 'women',
        dateKey: 'activities.act_10_date', titleKey: 'activities.act_10_title', descKey: 'activities.act_10_desc',
        media: { src: `${EVENTS_2025}2025-women-cultural-fest-ksawu-press-01.jpg`, alt: "Women's Cultural Festival & Keynote Address at Karnataka State Akkamahadevi Women's University", kind: 'press' },
        gallery: [
            { src: `${EVENTS_2025}2025-women-cultural-fest-ksawu-press-01.jpg`, label: "Women's Cultural Festival & Keynote Press Report", caption: "Keynote Address and Cultural Convention at Karnataka State Akkamahadevi Women's University", isPress: true }
        ]
    },
    {
        id: 'ledger-2025-stree-sambhrama', year: 2025, category: 'women',
        dateKey: 'activities.act_9_date', titleKey: 'activities.act_9_title', descKey: 'activities.act_9_desc',
        media: { src: `${EVENTS_2025}2025-pink-walk-stree-sambhrama-15.jpg`, alt: 'Bagalkote Pink Walk led by Smt. Veena Kashappanavar', kind: 'photo' },
        gallery: [
            { src: `${EVENTS_2025}2025-pink-walk-stree-sambhrama-15.jpg`, label: 'Founder Leading the Pink Walk', caption: 'Founder Smt. Veena Kashappanavar Leading the Pink Walk in Open Vehicle' },
            { src: `${EVENTS_2025}2025-pink-walk-stree-sambhrama-01.jpg`, label: 'Pink Walk Photo Frame Booth', caption: 'Pink Walk 2025 Photo Frame Booth at Stree Sambhrama' },
            { src: `${EVENTS_2025}2025-pink-walk-stree-sambhrama-36.jpg`, label: 'Women Police Officers Felicitated', caption: 'Women Police Officers & Achievers Felicitation' },
            { src: `${EVENTS_2025}2025-pink-walk-stree-sambhrama-41.jpg`, label: 'Ceremonial Lamp Lighting', caption: 'Ceremonial Lamp Lighting with Revered Swamijis' },
            { src: `${EVENTS_2025}2025-pink-walk-stree-sambhrama-press-01.jpg`, label: 'Press & Media Report', caption: 'Stree Sambhrama Press Coverage', isPress: true }
        ]
    },
    {
        id: 'ledger-2025-academy-batch-2', year: 2025, category: 'education',
        dateKey: 'activities.act_8_date', titleKey: 'activities.act_8_title', descKey: 'activities.act_8_desc',
        media: { src: `${EVENTS_2025}2025-kas-psi-academy-batch-2-press-01.jpg`, alt: 'Free KAS & PSI Coaching Academy Batch 2 Announcement by Smt. Veena Kashappanavar', kind: 'press' },
        gallery: [
            { src: `${EVENTS_2025}2025-kas-psi-academy-batch-2-press-01.jpg`, label: 'Batch 2 Press Announcement', caption: 'Press Conference Announcing Batch 2 for KAS & PSI Aspirants', isPress: true }
        ]
    },
    {
        id: 'ledger-2024-cardiac-camp', year: 2024, category: 'healthcare',
        dateKey: 'activities.act_5_date', titleKey: 'activities.act_5_title', descKey: 'activities.act_5_desc',
        media: { src: `${EXTRACTED}mega_cardiac_medical_health_camp_01.jpg`, alt: 'Free Mega Cardiac Health Check-up Camp', kind: 'photo' },
        gallery: [
            { src: `${EXTRACTED}mega_cardiac_medical_health_camp_01.jpg`, label: 'Inauguration with Seers & Leadership', caption: 'Inauguration with Seers & District Leadership' },
            { src: `${EXTRACTED}mega_cardiac_medical_health_camp_02.jpg`, label: 'Specialist Cardiac Screening', caption: 'Specialist Cardiac Consultations and Diagnostic Screenings' },
            { src: `${EXTRACTED}mega_cardiac_medical_health_camp_03.jpg`, label: 'Patient Medication Distribution', caption: 'Community Consultation and Medication Distribution' }
        ]
    },
    {
        id: 'ledger-2024-nari-shakti', year: 2024, category: 'women',
        dateKey: 'activities.act_4_date', titleKey: 'activities.act_4_title', descKey: 'activities.act_4_desc',
        media: { src: `${EXTRACTED}international_womensday_02.jpg`, alt: "International Women's Day Conferences", kind: 'photo' },
        gallery: [
            { src: `${EXTRACTED}international_womensday_01.jpg`, label: 'Nari Shakti Conference at Dasoha Bhavan', caption: 'Nari Shakti Conference at Dasoha Bhavan, Ilkal' },
            { src: `${EXTRACTED}international_womensday_02.jpg`, label: 'Founder Smt. Veena Kashappanavar Address', caption: 'Smt. Veena Kashappanavar Addressing Women Achievers' },
            { src: `${EXTRACTED}international_womensday_03.jpg`, label: 'Felicitation of Women Achievers', caption: 'Felicitation Ceremony for Rural Women Achievers' }
        ]
    },
    {
        id: 'ledger-2024-banashankari', year: 2024, category: 'women',
        dateKey: 'activities.act_3_date', titleKey: 'activities.act_3_title', descKey: 'activities.act_3_desc',
        media: { src: `${EXTRACTED}banshankari_jathara_01.jpg`, alt: 'Banashankari Jatra & Udi-Tumbuva', kind: 'photo' },
        gallery: [
            { src: `${EXTRACTED}banshankari_jathara_01.jpg`, label: 'Haldi-Kumkum Gathering at Banashankari', caption: 'Banashankari Fair 2024 Haldi-Kumkum Gathering' },
            { src: `${EXTRACTED}banshankari_jathara_02.jpg`, label: 'Sacred Udi-Tumbuva for 2,000 Mothers', caption: 'Traditional Sacred Udi-Tumbuva Ritual in Progress' }
        ]
    },
    {
        id: 'ledger-2023-workshops', year: 2023, category: 'education',
        dateKey: 'activities.act_2_date', titleKey: 'activities.act_2_title', descKey: 'activities.act_2_desc',
        media: { src: `${EXTRACTED}workshop_02.jpg`, alt: 'Regional KAS & PSI Career Workshops', kind: 'photo' },
        gallery: [
            { src: `${EXTRACTED}workshop_01.jpg`, label: 'Navanagar College Entrance Exam', caption: 'Entrance Examination at Govt First Grade College, Navanagar' },
            { src: `${EXTRACTED}workshop_02.jpg`, label: 'Career Guidance Workshop at Ilkal', caption: 'One-Day Guidance Camp at Hosamani Kalyana Mantapa, Ilkal' },
            { src: `${EXTRACTED}workshop_03.jpg`, label: 'Youth Guidance Camp at Mudhol', caption: 'Youth Competitive Exam Camp at Mudhol Town' },
            { src: `${EXTRACTED}workshop_04.jpg`, label: 'Study Kit Distribution', caption: 'Free Comprehensive Study Kit Distribution to Aspirants' }
        ]
    },
    {
        id: 'ledger-2023-academy-launch', year: 2023, category: 'education',
        dateKey: 'activities.act_1_date', titleKey: 'activities.act_1_title', descKey: 'activities.act_1_desc',
        media: { src: `${EXTRACTED}launch_of_free_kas_psi_coaching_academy_01.jpg`, alt: 'Free KAS & PSI Coaching Academy', kind: 'photo' },
        gallery: [
            { src: `${EXTRACTED}launch_of_free_kas_psi_coaching_academy_01.jpg`, label: 'Saraswati Pooja & Academy Launch', caption: 'Saraswati Pooja & Formal Academy Launch by Revered Seers' }
        ]
    }
];

/** Static institutional facts shown in the hero trust panel. */
export const INSTITUTION = {
    regNo: 'BGK-4-00062-2023-24',
    periodLabel: `${Math.min(...PROGRAMS.map(p => p.year), ...CHRONICLE.map(c => c.year))} – ${Math.max(...PROGRAMS.map(p => p.year), ...CHRONICLE.map(c => c.year))}`
};
