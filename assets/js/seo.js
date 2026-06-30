/**
 * VVK Foundation — SEO Engine
 * Dynamically updates meta tags, JSON-LD structured data,
 * canonical URLs, and Open Graph for each route.
 */

import { translate } from './i18n.js';

/** Per-page SEO configuration */
const pageSeoConfig = {
    '/':            { titleKey: 'seo.home_title',        descKey: 'seo.home_desc',        type: 'website' },
    '/about':       { titleKey: 'seo.about_title',       descKey: 'seo.about_desc',       type: 'article' },
    '/founder':     { titleKey: 'seo.founder_title',     descKey: 'seo.founder_desc',     type: 'profile' },
    '/initiatives': { titleKey: 'seo.initiatives_title', descKey: 'seo.initiatives_desc', type: 'article' },
    '/gallery':     { titleKey: 'seo.gallery_title',     descKey: 'seo.gallery_desc',     type: 'website' },
    '/contact':     { titleKey: 'seo.contact_title',     descKey: 'seo.contact_desc',     type: 'website' },
    '/reports':     { titleKey: 'seo.reports_title',     descKey: 'seo.reports_desc',     type: 'article' },
    '/news':        { titleKey: 'seo.news_title',        descKey: 'seo.news_desc',        type: 'article' },
    '/volunteer':   { titleKey: 'seo.volunteer_title',   descKey: 'seo.volunteer_desc',   type: 'website' },
    '/faq':         { titleKey: 'seo.faq_title',         descKey: 'seo.faq_desc',         type: 'website' },
    '/privacy':     { titleKey: 'seo.privacy_title',     descKey: 'seo.privacy_desc',     type: 'article' },
    '/terms':       { titleKey: 'seo.terms_title',       descKey: 'seo.terms_desc',       type: 'article' }
};

const BASE_URL = 'https://www.vvkfoundation.in';
const DEFAULT_IMAGE = `${BASE_URL}/assets/images/logo.png`;
const SITE_NAME = 'VVK Foundation';

/**
 * Update all SEO metadata for the given path.
 * @param {string} path - The current route path
 */
export function updateSEO(path) {
    const config = pageSeoConfig[path];
    const fallbackTitle = `${SITE_NAME} — Empower. Enable. Employ.`;
    const fallbackDesc = 'VVK Foundation empowers marginalized communities in Karnataka through education, healthcare, women empowerment, and youth development.';

    const title = config ? translate(config.titleKey) : fallbackTitle;
    const description = config ? translate(config.descKey) : fallbackDesc;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
    const canonicalUrl = `${BASE_URL}${path === '/' ? '' : path}`;
    const ogType = config ? config.type : 'website';

    // Document title
    document.title = fullTitle;

    // Meta tags
    setMeta('description', description);
    setMeta('robots', 'index, follow');

    // Canonical
    setLink('canonical', canonicalUrl);

    // Open Graph
    setMetaProperty('og:title', fullTitle);
    setMetaProperty('og:description', description);
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:type', ogType);
    setMetaProperty('og:image', DEFAULT_IMAGE);
    setMetaProperty('og:site_name', SITE_NAME);
    setMetaProperty('og:locale', 'en_IN');

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', DEFAULT_IMAGE);

    // Update JSON-LD
    updateStructuredData(path, fullTitle, description, canonicalUrl);
}

/**
 * Build and inject JSON-LD structured data.
 */
function updateStructuredData(path, title, description, url) {
    // Remove existing dynamic schema
    const existing = document.getElementById('dynamic-schema');
    if (existing) existing.remove();

    const schemas = [];

    // Organization (always present)
    schemas.push({
        '@type': 'NGO',
        'name': SITE_NAME,
        'url': BASE_URL,
        'logo': DEFAULT_IMAGE,
        'description': 'VVK Foundation is dedicated to empowering marginalized sections of society, focusing on farmers, women, and youth in Karnataka.',
        'foundingDate': '2023',
        'founder': {
            '@type': 'Person',
            'name': 'Mrs. Veena Vijayanand Kashappanavar'
        },
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Bagalkot',
            'addressRegion': 'Karnataka',
            'addressCountry': 'IN'
        },
        'areaServed': {
            '@type': 'State',
            'name': 'Karnataka'
        },
        'sameAs': []
    });

    // WebSite with SearchAction
    schemas.push({
        '@type': 'WebSite',
        'name': SITE_NAME,
        'url': BASE_URL,
        'description': description
    });

    // Breadcrumbs
    const breadcrumbItems = buildBreadcrumbs(path);
    if (breadcrumbItems.length > 0) {
        schemas.push({
            '@type': 'BreadcrumbList',
            'itemListElement': breadcrumbItems
        });
    }

    // Page-specific schemas
    if (path === '/founder') {
        schemas.push({
            '@type': 'Person',
            'name': 'Mrs. Veena Vijayanand Kashappanavar',
            'jobTitle': 'Founder & Chairperson',
            'worksFor': { '@type': 'NGO', 'name': SITE_NAME },
            'url': `${BASE_URL}/founder`
        });
    }

    if (path === '/faq') {
        schemas.push({
            '@type': 'FAQPage',
            'mainEntity': [] // Populated dynamically if needed
        });
    }

    if (path === '/contact') {
        schemas.push({
            '@type': 'ContactPage',
            'name': `Contact ${SITE_NAME}`,
            'url': `${BASE_URL}/contact`
        });
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'dynamic-schema';
    script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': schemas
    });
    document.head.appendChild(script);
}

/**
 * Build breadcrumb structured data items.
 */
function buildBreadcrumbs(path) {
    if (path === '/') return [];

    const items = [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': BASE_URL }
    ];

    const pageName = path.substring(1).replace(/-/g, ' ');
    const prettyName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

    items.push({
        '@type': 'ListItem',
        'position': 2,
        'name': prettyName,
        'item': `${BASE_URL}${path}`
    });

    return items;
}

/** Helper: set or create a meta[name] tag */
function setMeta(name, content) {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

/** Helper: set or create a meta[property] tag */
function setMetaProperty(property, content) {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

/** Helper: set or create a link[rel] tag */
function setLink(rel, href) {
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}
