/**
 * Shared template helpers for the /initiatives page components.
 * Every visible string is rendered through an i18n key: the initial HTML already
 * holds the active-language text, and `data-i18n` lets applyTranslations() swap
 * it when the visitor changes language.
 */

import { translate } from '../../i18n.js?v=2.0.1';

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

/** Escape a string for safe use in HTML text and attribute values. */
export function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ESCAPES[ch]);
}

/**
 * Render an element whose text comes from an i18n key.
 * Only use on elements with no element children (applyTranslations replaces textContent).
 * @param {string} key
 * @param {string} [tag='span']
 * @param {string} [attrs=''] Extra attributes, already escaped.
 */
export function i18n(key, tag = 'span', attrs = '') {
    return `<${tag}${attrs ? ' ' + attrs : ''} data-i18n="${esc(key)}">${esc(translate(key))}</${tag}>`;
}

/** Swap an existing [data-i18n] element to a different key (used by toggles). */
export function setI18n(el, key) {
    if (!el) return;
    el.setAttribute('data-i18n', key);
    el.textContent = translate(key);
}

export { translate };
