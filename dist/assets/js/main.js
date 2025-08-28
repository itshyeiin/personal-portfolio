document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for in-page anchors
    document.querySelectorAll("a[data-scroll]").forEach((a) => {
        a.addEventListener("click", (e) => {
            const href = a.getAttribute("href") || "";
            if (href.startsWith("#")) {
                e.preventDefault();
                document
                    .querySelector(href)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // Mobile menu toggle
    const toggle = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-menu]");
    toggle?.addEventListener("click", () => {
        menu.hidden = !menu.hidden;
    });

    // CTA click micro-interaction
    const primary = document.querySelector('[data-cta="primary"]');
    primary?.addEventListener("click", () => {
        primary.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(0.98)" },
                { transform: "scale(1)" },
            ],
            { duration: 140, easing: "ease-out" }
        );
    });

    // Dark mode toggle (persists)
    const html = document.documentElement;
    const key = "theme:dark";
    const applyTheme = (isDark) => {
        html.classList.toggle("dark", isDark);
        try { localStorage.setItem(key, isDark ? "1" : "0"); } catch {}
    };
    // init from system / saved
    try {
        const saved = localStorage.getItem(key);
        if (
            saved === "1" ||
            (saved === null && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            applyTheme(true);
        }
    } catch {}

    document
        .querySelector("[data-theme-toggle]")
        ?.addEventListener("click", () => {
            applyTheme(!html.classList.contains("dark"));
        });

    // Footer year
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // --- NEW: Staggered reveal for About callouts ---
    const revealItems = document.querySelectorAll('#about .about_section_subtitle.reveal');
    if ('IntersectionObserver' in window && revealItems.length) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add('is-visible');
                    io.unobserve(e.target);
                }
            });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
        revealItems.forEach((el) => io.observe(el));
    } else {
        // Fallback: no IO support
        revealItems.forEach((el) => el.classList.add('is-visible'));
    }
});

// Modal logic (unchanged)
(function () {
    const modal = document.getElementById("stackModal");
    if (!modal) return;

    const openers = document.querySelectorAll('[data-modal-open="stackModal"]');
    const closers = modal.querySelectorAll("[data-modal-close]");
    const focusableSel =
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    let lastFocused = null;

    const open = (e) => {
        e && e.preventDefault();
        lastFocused = document.activeElement;
        modal.hidden = false;
        document.body.classList.add("no-scroll");
        const first = modal.querySelector(focusableSel);
        if (first) first.focus();
    };

    const close = () => {
        modal.hidden = true;
        document.body.classList.remove("no-scroll");
        if (lastFocused && typeof lastFocused.focus === "function")
            lastFocused.focus();
    };

    openers.forEach((btn) => btn.addEventListener("click", open));
    closers.forEach((btn) => btn.addEventListener("click", close));
    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal__backdrop")) close();
    });
    document.addEventListener("keydown", (e) => {
        if (!modal.hidden && e.key === "Escape") close();
    });
})();
