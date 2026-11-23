/**
 * VVK Foundation — Form Validator
 * A simple shared validator if needed by other modules.
 * Note: contact.js and volunteer.js currently have their own validation logic.
 * This can be expanded later if more complex validation is required.
 */

// This file is currently a placeholder for future complex validation rules.
// Basic HTML5 validation is handled within the respective page modules.
export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
