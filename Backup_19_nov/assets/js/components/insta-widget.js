/**
 * VVK Foundation — Instagram Live Corner Widget Component
 * Pinned visible Instagram feed widget card on the lower left corner.
 */

export function initInstagramWidget() {
    // Check if widget already exists
    if (document.getElementById('insta-corner-widget')) return;

    const widgetHTML = `
        <div id="insta-corner-widget" class="insta-widget-container">
            <!-- Floating Corner Toggle Button (when minimized) -->
            <button class="insta-widget-toggle" id="insta-widget-toggle" aria-label="Toggle Instagram Feed Widget">
                <div class="insta-icon-wrapper">
                    <i class="fab fa-instagram"></i>
                </div>
                <span class="insta-widget-badge">
                    <span class="insta-pulse-dot"></span>
                    Instagram Feed
                </span>
            </button>

            <!-- Instagram Feed Corner Widget (Visible by default) -->
            <div class="insta-widget-card active" id="insta-widget-card" aria-hidden="false">
                <!-- Widget Top Bar -->
                <div class="insta-card-header">
                    <div class="insta-profile">
                        <div class="insta-avatar-ring">
                            <img src="/assets/images/logo.png" alt="VVK Foundation Instagram" class="insta-avatar">
                        </div>
                        <div class="insta-meta">
                            <div class="insta-username">
                                <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer">vvkfoundation.in</a>
                                <i class="fas fa-check-circle verified-icon" title="Verified Account"></i>
                            </div>
                            <span class="insta-subtext"><span class="insta-pulse-dot"></span> Live Feed • Instagram</span>
                        </div>
                    </div>
                    <div class="insta-header-actions">
                        <button class="insta-card-minimize" id="insta-card-minimize" title="Minimize Widget">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>

                <!-- Live Profile Sub-header & Follow CTA -->
                <div class="insta-card-stats">
                    <div class="stat-item">
                        <span class="stat-num">150+</span>
                        <span class="stat-lbl" data-i18n="instagram.posts_count">Posts</span>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-item">
                        <span class="stat-num">10K+</span>
                        <span class="stat-lbl" data-i18n="instagram.followers_count">Followers</span>
                    </div>
                    <div class="stat-divider"></div>
                    <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="insta-quick-follow-link">
                        <i class="fab fa-instagram"></i> Follow
                    </a>
                </div>

                <!-- Feed View Tabs -->
                <div class="insta-feed-tabs">
                    <button class="insta-feed-tab active" data-tab="grid"><i class="fas fa-th"></i> Recent Feed</button>
                    <button class="insta-feed-tab" data-tab="live"><i class="fab fa-instagram"></i> Live Profile</button>
                </div>

                <!-- Feed Container: Grid View -->
                <div class="insta-feed-content" id="insta-tab-grid">
                    <div class="insta-widget-grid">
                        <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="insta-grid-item" title="Nari Shakti Conference & Celebrations">
                            <img src="/assets/images/extracted/international_womensday_01.jpg" alt="Nari Shakti Conference" loading="lazy">
                            <div class="insta-item-overlay">
                                <span><i class="fas fa-heart"></i> 1.4k</span>
                                <span><i class="fas fa-comment"></i> 86</span>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="insta-grid-item" title="Free KAS PSI Academy Launch">
                            <img src="/assets/images/extracted/launch_of_free_kas_psi_coaching_academy_01.jpg" alt="KAS & PSI Coaching Academy" loading="lazy">
                            <div class="insta-item-overlay">
                                <span><i class="fas fa-heart"></i> 2.1k</span>
                                <span><i class="fas fa-comment"></i> 142</span>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="insta-grid-item" title="Mega Health Camp with SDM Narayana Hrudayalaya">
                            <img src="/assets/images/extracted/mega_cardiac_medical_health_camp_01.jpg" alt="Mega Health Camp" loading="lazy">
                            <div class="insta-item-overlay">
                                <span><i class="fas fa-heart"></i> 1.8k</span>
                                <span><i class="fas fa-comment"></i> 94</span>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="insta-grid-item" title="Banashankari Jatra Lok Kalyana">
                            <img src="/assets/images/extracted/banshankari_jathara_01.jpg" alt="Banashankari Jatra Celebration" loading="lazy">
                            <div class="insta-item-overlay">
                                <span><i class="fas fa-heart"></i> 3.2k</span>
                                <span><i class="fas fa-comment"></i> 215</span>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Feed Container: Live Profile Embed View -->
                <div class="insta-feed-content d-none" id="insta-tab-live">
                    <div class="insta-live-embed-wrapper">
                        <iframe src="https://www.instagram.com/vvkfoundation.in/embed" class="insta-iframe" frameborder="0" scrolling="no" allowtransparency="true" title="Instagram Live Profile Feed"></iframe>
                        <div class="insta-iframe-fallback">
                            <i class="fab fa-instagram fa-2x"></i>
                            <p>View live updates on @vvkfoundation.in</p>
                            <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="btn btn--insta btn--sm">
                                Open Instagram Profile
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Widget Footer -->
                <div class="insta-card-footer">
                    <a href="https://www.instagram.com/vvkfoundation.in/" target="_blank" rel="noopener noreferrer" class="btn btn--insta btn--block">
                        <i class="fab fa-instagram"></i> View @vvkfoundation.in on Instagram
                    </a>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);

    const toggleBtn = document.getElementById('insta-widget-toggle');
    const card = document.getElementById('insta-widget-card');
    const minimizeBtn = document.getElementById('insta-card-minimize');

    if (!toggleBtn || !card || !minimizeBtn) return;

    // Toggle minimize / expand
    minimizeBtn.addEventListener('click', () => {
        card.classList.remove('active');
        card.setAttribute('aria-hidden', 'true');
        toggleBtn.classList.add('visible');
    });

    toggleBtn.addEventListener('click', () => {
        const isOpen = card.classList.contains('active');
        if (isOpen) {
            card.classList.remove('active');
            card.setAttribute('aria-hidden', 'true');
        } else {
            card.classList.add('active');
            card.setAttribute('aria-hidden', 'false');
            toggleBtn.classList.remove('visible');
        }
    });

    // Tab switcher between Grid View and Live Feed Embed
    const tabs = card.querySelectorAll('.insta-feed-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const targetTab = tab.dataset.tab;
            const gridContent = document.getElementById('insta-tab-grid');
            const liveContent = document.getElementById('insta-tab-live');

            if (targetTab === 'live') {
                if (gridContent) gridContent.classList.add('d-none');
                if (liveContent) liveContent.classList.remove('d-none');
            } else {
                if (liveContent) liveContent.classList.add('d-none');
                if (gridContent) gridContent.classList.remove('d-none');
            }
        });
    });
}
