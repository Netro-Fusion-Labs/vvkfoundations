/**
 * VVK Foundation — Sleek Multilingual PWA App Install Banner
 * Ultra-compact, non-intrusive, language-aware PWA prompt.
 */
(function() {
  'use strict';

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(() => console.log('VVK PWA Service Worker Registered'))
        .catch(() => {});
    });
  }

  // Check if running as Installed PWA Standalone app
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || 
                      window.navigator.standalone || 
                      document.referrer.includes('android-app://');

  if (isStandalone) return;

  // Restrict PWA install popup ONLY to Home Page ('/' or 'index.html')
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const isHomePage = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/index.html');
  if (!isHomePage) return;

  let deferredPrompt = null;

  // Multilingual Strings Dictionary
  const pwaI18n = {
    kn: {
      title: 'ವಿವಿಕೆ ಫೌಂಡೇಶನ್ ಆ್ಯಪ್',
      sub: 'ವೇಗದ ಪ್ರವೇಶಕ್ಕಾಗಿ ಆ್ಯಪ್ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿ',
      install: 'ಇನ್‌ಸ್ಟಾಲ್ (Install)',
      iosMsg: 'Safari ನಲ್ಲಿ Share (⬆) ಒತ್ತಿ "Add to Home Screen" ಆಯ್ಕೆಮಾಡಿ.'
    },
    hi: {
      title: 'VVK फाउंडेशन ऐप',
      sub: 'त्वरित पहुंच के लिए ऐप इंस्टॉल करें',
      install: 'इंस्टॉल (Install)',
      iosMsg: 'Safari में Share (⬆) दबाएं और "Add to Home Screen" चुनें।'
    },
    en: {
      title: 'VVK Foundation App',
      sub: 'Install our app for fast, easy access',
      install: 'Install App',
      iosMsg: 'In Safari, tap Share (⬆) and select "Add to Home Screen".'
    }
  };

  function getLangCode() {
    const saved = localStorage.getItem('vvk_lang');
    if (saved && pwaI18n[saved]) return saved;
    const docLang = document.documentElement.lang;
    if (docLang && pwaI18n[docLang]) return docLang;
    return 'kn';
  }

  // Inject Compact CSS Styles
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .vvk-pwa-pill-bar {
      position: fixed;
      bottom: 20px;
      right: 20px;
      max-width: 380px;
      width: calc(100% - 32px);
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(12px);
      border: 2px solid #15803d;
      border-radius: 16px;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
      padding: 12px 16px;
      z-index: 999999;
      display: flex;
      align-items: center;
      gap: 12px;
      transform: translateY(180%);
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      font-family: 'Noto Sans Kannada', 'Inter', sans-serif;
    }
    .vvk-pwa-pill-bar.show {
      transform: translateY(0);
    }
    .vvk-pwa-mini-icon {
      width: 58px;
      height: 38px;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px 5px;
      flex-shrink: 0;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }
    .vvk-pwa-mini-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .vvk-pwa-pill-body {
      flex: 1;
      min-width: 0;
    }
    .vvk-pwa-pill-title {
      font-size: 0.88rem;
      font-weight: 700;
      color: #0f172a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
    }
    .vvk-pwa-pill-sub {
      font-size: 0.75rem;
      color: #475569;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.25;
      margin-top: 2px;
    }
    .vvk-pwa-pill-btn {
      background: #15803d;
      color: #ffffff;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 7px 14px;
      border-radius: 9999px;
      border: none;
      cursor: pointer;
      white-space: nowrap;
      flex-shrink: 0;
      box-shadow: 0 3px 8px rgba(21, 128, 61, 0.25);
      transition: background 0.2s, transform 0.1s;
    }
    .vvk-pwa-pill-btn:hover {
      background: #166534;
    }
    .vvk-pwa-pill-close {
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 2px 4px;
      flex-shrink: 0;
      line-height: 1;
      transition: color 0.2s;
    }
    .vvk-pwa-pill-close:hover {
      color: #334155;
    }
  `;
  document.head.appendChild(styleEl);

  function renderPillBanner(isIos = false) {
    if (document.getElementById('vvkPwaPill')) return;

    const lang = getLangCode();
    const txt = pwaI18n[lang] || pwaI18n.kn;

    const pill = document.createElement('div');
    pill.id = 'vvkPwaPill';
    pill.className = 'vvk-pwa-pill-bar';

    if (isIos) {
      pill.innerHTML = `
        <div class="vvk-pwa-mini-icon"><img src="/assets/images/logo.png" alt="VVK Foundation Logo"></div>
        <div class="vvk-pwa-pill-body">
          <div class="vvk-pwa-pill-title">${txt.title}</div>
          <div class="vvk-pwa-pill-sub">${txt.iosMsg}</div>
        </div>
        <button type="button" class="vvk-pwa-pill-close" id="vvkPwaCloseBtn" aria-label="Close">&times;</button>
      `;
    } else {
      pill.innerHTML = `
        <div class="vvk-pwa-mini-icon"><img src="/assets/images/logo.png" alt="VVK Foundation Logo"></div>
        <div class="vvk-pwa-pill-body">
          <div class="vvk-pwa-pill-title">${txt.title}</div>
          <div class="vvk-pwa-pill-sub">${txt.sub}</div>
        </div>
        <button type="button" class="vvk-pwa-pill-btn" id="vvkPwaInstallBtn">${txt.install}</button>
        <button type="button" class="vvk-pwa-pill-close" id="vvkPwaCloseBtn" aria-label="Close">&times;</button>
      `;
    }

    document.body.appendChild(pill);

    setTimeout(() => pill.classList.add('show'), 600);

    const installBtn = document.getElementById('vvkPwaInstallBtn');
    if (installBtn) {
      installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const choice = await deferredPrompt.userChoice;
          if (choice.outcome === 'accepted') {
            console.log('User installed PWA app');
          }
          deferredPrompt = null;
          pill.classList.remove('show');
        } else {
          alert('To install app: Tap your browser menu (⋮ or Share) and select "Add to Home screen" or "Install App".');
          pill.classList.remove('show');
        }
      });
    }

    const closeBtn = document.getElementById('vvkPwaCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        pill.classList.remove('show');
        localStorage.setItem('vvk_pwa_dismissed_time', Date.now().toString());
      });
    }
  }

  // Capture beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

  // Always render PWA install banner on Home Page after 1.5 seconds if not dismissed
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  setTimeout(() => {
    const lastDismissed = localStorage.getItem('vvk_pwa_dismissed_time');
    if (!lastDismissed || (Date.now() - parseInt(lastDismissed, 10)) > 24 * 60 * 60 * 1000) {
      renderPillBanner(isIos);
    }
  }, 1500);

})();
