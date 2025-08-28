document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for in-page anchors
  document.querySelectorAll('a[data-scroll]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href') || '';
      if (href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Mobile menu toggle
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  toggle?.addEventListener('click', () => { menu.hidden = !menu.hidden; });

  // CTA click micro-interaction
  const primary = document.querySelector('[data-cta="primary"]');
  primary?.addEventListener('click', () => {
    primary.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(0.98)' }, { transform: 'scale(1)' }],
      { duration: 140, easing: 'ease-out' }
    );
  });

  // Dark mode toggle (persists)
  const html = document.documentElement;
  const key = 'theme:dark';
  const applyTheme = (isDark) => {
    html.classList.toggle('dark', isDark);
    try { localStorage.setItem(key, isDark ? '1' : '0'); } catch {}
  };
  // init from system / saved
  try {
    const saved = localStorage.getItem(key);
    if (saved === '1' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      applyTheme(true);
    }
  } catch {}

  document.querySelector('[data-theme-toggle]')?.addEventListener('click', () => {
    applyTheme(!html.classList.contains('dark'));
  });

  // Footer year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
