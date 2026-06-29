# VVK Foundation Website

This is a premium, modern, and highly-performant static website for the VVK Foundation. The architecture has been intentionally designed using **Vanilla Web Technologies (HTML, CSS, JS)** to ensure lightning-fast performance, long-term maintainability, and independence from complex frameworks.

## 🏗 Architecture Overview

The website operates as a **Single Page Application (SPA)** using pure Vanilla JavaScript, completely removing the need for a heavy backend or React/Next.js overhead.

### Core Engines (Vanilla JS)
The logic is cleanly divided into separate modules inside `assets/js/`:
1. **`app.js`**: The main entry point that initializes the router, translations, and animations on page load.
2. **`router.js`**: A custom Vanilla JS router. It intercepts link clicks, updates the browser history API (`window.history.pushState`), and triggers the view to change without a page reload.
3. **`pages.js`**: Contains the HTML templates for each route (e.g., `renderHome`, `renderGallery`, `renderFounder`). When a route changes, this engine renders the new HTML string into the `#app-content` div.
4. **`i18n.js`**: A robust internationalization engine. It fetches JSON translation files (`en.json`, `kn.json`, `hi.json`) and dynamically replaces the text content of any HTML element that has a `data-i18n` attribute.
5. **`animations.js`**: Uses the `IntersectionObserver` API to detect when elements enter the viewport and triggers scroll animations (slide-up, fade-in, staggers).

### Styles & Theming (CSS3)
We use a modular CSS architecture inside `assets/css/`:
*   **`variables.css`**: The design system's source of truth. Contains color palettes, typography, spacing, and border-radius tokens.
*   **`global.css`**: Global resets, typography rules, and base styles.
*   **`components.css`**: Reusable UI elements like `.btn`, `.card`, and `.navbar`.
*   **`pages.css`**: Specific layout rules for individual sections (e.g., Hero section, Gallery Grid, Founder Layout).
*   **`animations.css`**: Contains the keyframes and transition classes used by the `animations.js` engine.

### Data & Content
*   **`assets/lang/`**: Contains the JSON dictionaries for English (`en.json`), Kannada (`kn.json`), and Hindi (`hi.json`).
*   **`assets/images/`**: Contains AI-generated premium imagery and photos extracted directly from the Foundation's official PDF reports.

## 🚀 Development & Deployment

### Local Development
Because this is an SPA that relies on JavaScript modules and fetching JSON files, you **cannot** just double-click `index.html` (due to browser CORS restrictions). 

You must serve the folder using a local server. The recommended command is:
```bash
npx serve -s
```
> **Important:** The `-s` flag tells the `serve` package to act as a Single Page Application, routing all 404s back to `index.html`. This ensures that if you refresh the page on a route like `/founder`, it won't break.

### Production Deployment (Apache / cPanel)
When you upload these files to your live server (via FileZilla, cPanel, etc.), the website will work immediately.
We have included an **`.htaccess`** file in the root directory. This file instructs Apache servers to route all requests back to `index.html`, ensuring that direct links (like `https://vvkfoundation.org/gallery`) load perfectly instead of throwing a 404 error.

## 📝 How to Add or Update Content

**To update text:**
1. Open the JSON files in `assets/lang/`.
2. Find the key you want to change (e.g., `"youth_desc"`) and update the value.
3. Ensure you update it across all three languages.

**To add a new page:**
1. Create a rendering function in `pages.js` (e.g., `function renderNewPage() { return '<section>...</section>'; }`).
2. Add the route to the `routes` object at the top of `pages.js` (e.g., `'/new-page': renderNewPage`).
3. Add a link in `index.html` with the `data-route` attribute: `<a href="/new-page" data-route>New Page</a>`.

## 🎨 Design Philosophy
The design strictly follows premium NGO patterns (inspired by Tata Trusts, Smile Foundation):
*   **Vibrant Urgency:** Uses high-contrast gold/orange accents for Calls-to-Action to drive donations and engagement.
*   **Story-Driven:** Uses full-bleed imagery and impact statistics upfront.
*   **Accessibility First:** Ensures high contrast ratios and supports multiple regional languages seamlessly.
