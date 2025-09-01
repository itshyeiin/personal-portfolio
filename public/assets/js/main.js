document.addEventListener("DOMContentLoaded", () => {
    /* ---------------- Smooth scrolling ---------------- */
    document.querySelectorAll('a[data-scroll]').forEach((a) => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href') || '';
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ---------------- Mobile menu toggle + a11y ---------------- */
    const toggle = document.querySelector('[data-menu-toggle]');
    const menu = document.querySelector('[data-menu]');
    const setExpanded = (el, val) => el?.setAttribute('aria-expanded', String(!!val));

    const syncMenu = () => {
        const isMobile = window.matchMedia('(max-width: 880px)').matches;
        if (!menu) return;
        if (isMobile) {
            // default collapsed on mobile if state was never set
            if (menu.hidden === undefined) menu.hidden = true;
        } else {
            menu.hidden = false;
        }
        setExpanded(toggle, !menu.hidden);
    };

    toggle?.addEventListener('click', () => {
        if (!menu) return;
        menu.hidden = !menu.hidden;
        setExpanded(toggle, !menu.hidden);
    });

    window.addEventListener('resize', syncMenu);
    syncMenu();

    /* ---------------- Dark mode toggle (persisted) ---------------- */
    const root = document.documentElement;
    const themeBtn = document.querySelector('[data-theme-toggle]');
    const THEME_KEY = 'theme';

    const applyTheme = (t) => (t === 'dark' ? root.classList.add('dark') : root.classList.remove('dark'));

    // initial theme from storage or OS
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) applyTheme(stored);
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) applyTheme('dark');

    themeBtn?.addEventListener('click', () => {
        const next = root.classList.toggle('dark') ? 'dark' : 'light';
        localStorage.setItem(THEME_KEY, next);
    });

    /* ---------------- Footer year ---------------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    /* ---------------- Ensure CTA scoping exists for "View My Work" ---------------- */
    document.querySelectorAll('a.btn.btn-primary').forEach((a) => {
        if ((a.textContent || '').trim().toLowerCase() === 'view my work') {
            a.setAttribute('data-cta', 'primary');
        }
    });

    // tiny click animation
    const primary = document.querySelector('[data-cta="primary"]');
    primary?.addEventListener('click', () => {
        primary.animate(
            [{ transform: 'scale(1)' }, { transform: 'scale(0.97)' }, { transform: 'scale(1)' }],
            { duration: 180, easing: 'ease-out' }
        );
    });

    /* ---------------- Tech Stack modal (robust open/close) ---------------- */
    /* ---------------- Tech Stack modal (open animation guaranteed) ---------------- */
    (() => {
        const controllers = new Map();

        const bindModal = (modal) => {
            if (controllers.has(modal)) return controllers.get(modal);

            const dialog = modal.querySelector('[data-modal-dialog]') || modal.querySelector('.modal__card');
            const backdrop = modal.querySelector('.modal__backdrop');
            const card = modal.querySelector('.modal__card');

            // Helper: force the browser to apply current styles before we toggle the class
            const forceReflow = (el) => void el.getBoundingClientRect();

            const open = () => {
                // 1) Render initial (closed) state
                modal.hidden = false;
                modal.setAttribute('aria-hidden', 'false');
                document.body.classList.add('no-scroll');
                modal.classList.remove('is-open');   // ensure start state
                // card has transform/opacity start styles in CSS

                // 2) Force layout so the start styles actually apply
                if (card) forceReflow(card);

                // 3) Next frame: flip to the open state (triggers transition)
                requestAnimationFrame(() => {
                    modal.classList.add('is-open');

                    // a11y focus
                    if (dialog && !dialog.hasAttribute('tabindex')) dialog.setAttribute('tabindex', '-1');
                    (dialog || modal).focus?.({ preventScroll: true });
                });
            };

            const close = () => {
                modal.classList.remove('is-open');   // animate out
                modal.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('no-scroll');

                // Hide after transition end (fallback timer just in case)
                const done = () => { modal.hidden = true; card?.removeEventListener('transitionend', done); };
                card?.addEventListener('transitionend', done);
                setTimeout(done, 320);
            };

            // Close buttons
            modal.querySelectorAll('[data-modal-close]').forEach((btn) => {
                btn.addEventListener('click', (e) => { e.preventDefault(); close(); });
            });

            // Backdrop click closes
            backdrop?.addEventListener('click', close);

            // Prevent dialog clicks from bubbling to backdrop
            dialog?.addEventListener('click', (e) => e.stopPropagation());

            // Esc to close
            document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) close(); });

            const ctl = { open, close };
            controllers.set(modal, ctl);
            return ctl;
        };

        // Wire openers (supports data-modal-target="#id" and data-modal-open="id|#id")
        document.querySelectorAll('[data-modal-target], [data-modal-open]').forEach((btn) => {
            let sel = btn.getAttribute('data-modal-target') || btn.getAttribute('data-modal-open');
            if (!sel) return;
            if (!sel.startsWith('#')) sel = `#${sel}`;
            const modal = document.querySelector(sel);
            if (!modal) return;

            const ctl = bindModal(modal);
            btn.addEventListener('click', ctl.open);
        });
    })();

    /* ---------------- ScrollReveal animations ---------------- */
    (() => {
        // Respect “Reduce Motion”
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce || !window.ScrollReveal) return;

        // Set sensible defaults; you can tweak these globally
        const sr = ScrollReveal({
            distance: '16px',
            duration: 650,
            easing: 'cubic-bezier(.22,.61,.36,1)',
            opacity: 0,
            viewFactor: 0.15,   // reveal when ~15% of the element is visible
            // reset: false     // default = false (reveal once) :contentReference[oaicite:1]{index=1}
        });

        // HERO
        sr.reveal('.hero-left', {
            origin: 'left',
            distance: '24px',
            duration: 800
        });
        sr.reveal('.hero-right .intro, .hero-right .title, .hero-right .subtitle, .hero-right .lead, .hero-right .cta-group', {
            origin: 'bottom',
            interval: 150        // stagger children nicely :contentReference[oaicite:2]{index=2}
        });

        // SECTION HEADINGS
        sr.reveal('.about_section_title, .section .container > h2, .section .container > h3', {
            origin: 'bottom'
        });

        // ABOUT & CARDS
        sr.reveal('.about-grid .about-card', {
            origin: 'bottom',
            interval: 150
        });

        // EXPERIENCE LIST
        sr.reveal('.exp-list .exp-item', {
            origin: 'bottom',
            interval: 150
        });

        // SKILLS GRID
        sr.reveal('#skills .about-card', {
            origin: 'bottom',
            interval: 150
        });
    })();
});