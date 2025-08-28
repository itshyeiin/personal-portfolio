<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">

    <!--=============== FAVICON ===============-->
    <link rel="shortcut icon" href="{{ asset('assets/img/anthony-lapada-avatar.jpg') }}" type="image/x-icon">

    <!--=============== CSS ===============-->
    <link rel="stylesheet" href="{{ asset('assets/css/styles.css') }}">

    <title>Anthony Junior Lapada - Personal Portfolio</title>

</head>

<body class="bg-page" id="top">
    <header class="site-header">
        <div class="container header-inner">
            <a class="brand" href="#top">Anthony Junior Lapada</a>

            <button class="menu-toggle" aria-label="Open menu" data-menu-toggle>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
            </button>

            <nav class="nav" data-menu hidden>
                <a href="#home" class="active" data-scroll>Home</a>
                <a href="#about" data-scroll>About</a>
                <a href="#skills" data-scroll>Skills</a>
                <a href="#contact" data-scroll>Contact</a>
                <button class="theme-toggle" aria-label="Toggle dark mode" data-theme-toggle>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </button>
            </nav>
        </div>
    </header>

    <!-- Hero -->
    <main id="main" class="main">
        <section class="hero" id="hero">
            <div class="container hero-grid">
                <aside class="hero-left">
                    <div class="avatar-wrap">
                        <img class="avatar" alt="Anthony Junior Lapada avatar"
                            src="{{ asset('assets/img/anthony-lapada-avatar.jpg') }}" loading="lazy">
                    </div>

                    <ul class="socials" aria-label="Social links">
                        <li>
                            <a href="#" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                    <path
                                        d="M12 .5A12 12 0 0 0 0 12.7c0 5.4 3.4 9.9 8.1 11.5.6.1.8-.3.8-.6v-2c-3.3.7-4-1.5-4-1.5-.5-1.3-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.4 1.1 3 .8.1-.6.4-1.1.7-1.3-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.1-3.3-.1-.3-.5-1.6.1-3.2 0 0 .9-.3 3 .1a10.4 10.4 0 0 1 5.4 0c2.1-.4 3-.1 3-.1.6 1.6.2 2.9.1 3.2.7.9 1.1 2 1.1 3.3 0 4.5-2.8 5.4-5.4 5.8.4.4.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12.2 12.2 0 0 0 24 12.7C24 5.9 18.6.5 12 .5z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                    <path
                                        d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4.1 0 4.9 2.7 4.9 6.2V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8V24h-4V8z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Email">
                                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                    <path
                                        d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </aside>

                <section class="hero-right">
                    <p class="intro">Hello, I'm</p>
                    <h1 class="title">Anthony</h1>
                    <h2 class="subtitle">Frontend Web Developer &amp; SEO Specialist</h2>
                    <p class="lead">
                        I build modern, responsive web applications with a focus on user
                        experience and clean code. Let's create something amazing together.
                    </p>

                    <div class="cta-group">
                        <a href="#portfolio" class="btn btn-primary" data-cta="primary" data-scroll>View My Work</a>
                        <a href="#contact" class="btn btn-ghost" data-scroll>Contact Me</a>
                    </div>

                    <div class="blob" aria-hidden="true"></div>
                </section>
            </div>

            {{-- <a href="#about" class="scroll-down" data-scroll>Scroll Down</a> --}}
        </section>

        <section id="about" class="section alt">
            <div class="container">
                <h2 class="title">About</h2>
                <p class="lead subtitle">I’m a frontend developer &amp; SEO specialist focused on building fast,
                    accessible
                    interfaces with clean, readable UI. Below is a quick snapshot of my experience, education, and
                    skills.
                </p>

                <section class="experience" aria-label="Experience">
                    <ol class="exp-list">
                        <li class="exp-item">
                            <div class="exp-header">
                                <h3 class="exp-role">Full‑stack Web Developer · Baclaran Church – Volunteer Management
                                    System (Freelance)</h3>
                                <span class="exp-date">Mar 2025 — Jul 2025</span>
                            </div>
                            <p class="exp-summary">Shipped a volunteer management system end‑to‑end, from data model to
                                responsive UI.</p>
                            <ul class="exp-points">
                                <li>Built CRUD modules and role‑based access; streamlined onboarding and scheduling.
                                </li>
                                <li>Implemented responsive layouts and accessible forms with clean component patterns.
                                </li>
                                <li>Improved DX with clear folder structure, linting, and Git workflow.</li>
                            </ul>
                            <ul class="exp-tech">
                                <li>Laravel</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Git</li>
                            </ul>
                        </li>

                        <li class="exp-item">
                            <div class="exp-header">
                                <h3 class="exp-role">Microsoft Developer · Hacktiv Colab Inc. (Internship)</h3>
                                <span class="exp-date">Feb 2025 — May 2025</span>
                            </div>
                            <p class="exp-summary">Supported feature delivery and bug fixing in a collaborative, agile
                                environment.</p>
                            <ul class="exp-points">
                                <li>Contributed to sprints, tickets, and code reviews.</li>
                                <li>Wrote small UI utilities and improved form validation and error states.</li>
                            </ul>
                            <ul class="exp-tech">
                                <li>JavaScript</li>
                                <li>Git</li>
                                <li>Agile</li>
                            </ul>
                        </li>

                        <li class="exp-item">
                            <div class="exp-header">
                                <h3 class="exp-role">SEO Specialist · BrotherCamp</h3>
                                <span class="exp-date">May 2023 — Jul 2024</span>
                            </div>
                            <p class="exp-summary">Boosted organic visibility through technical fixes, content
                                optimization, and reporting.</p>
                            <ul class="exp-points">
                                <li>Ran audits, fixed CWV and indexing issues, and delivered keyword‑led content briefs.
                                </li>
                                <li>Set up GA4 &amp; Search Console dashboards for ongoing insights.</li>
                            </ul>
                            <ul class="exp-tech">
                                <li>GA4</li>
                                <li>GSC</li>
                                <li>Ahrefs</li>
                                <li>Schemas</li>
                            </ul>
                        </li>
                    </ol>
                </section>

                <section class="about-grid" aria-label="Education and Skills">
                    <div class="about-card">
                        <h3 class="about-title">Education</h3>
                        <p class="about-meta">
                            <strong>B.S. in Information Technology</strong><br>
                            Technological University of the Philippines
                        </p>

                        <p class="about-note"><strong>Graduation:</strong> August 2025</p>

                        <p class="about-note"><strong>Thesis:</strong> “Mayah’s Go Digital” (E‑commerce with inventory
                            management)</p>
                    </div>

                    <div class="about-card">
                        <h3 class="about-title">Tech Stack</h3>
                        <ul class="tags">
                            <li>Laravel</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Responsive Web Design</li>
                            <li>DOM Manipulation</li>
                            <li>Git</li>
                            <li>Figma</li>
                            <li>Photoshop</li>
                            <li>SEO</li>
                        </ul>
                    </div>

                    <div class="about-card">
                        <h3 class="about-title">Certifications &amp; Training</h3>
                        <ul class="bullets">
                            <li>Sololearn: HTML, CSS, JS, Responsive Web Design (2022)</li>
                            <li>DICT: Python Beginners &amp; Intermediate (2022)</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>

        <section id="portfolio" class="section">
            <div class="container">
                <h3>Portfolio</h3>
                <p>…</p>
            </div>
        </section>

        {{-- <section id="skills" class="section alt">
            <div class="container">
                <h3>Skills</h3>
                <p>…</p>
            </div>
        </section> --}}
    </main>

    <footer id="contact" class="site-footer">
        <div class="container">
            <p>© <span id="year"></span> Anthony Junior Lapada. All rights reserved.</p>
        </div>
    </footer>

    <!--=============== MAIN JS ===============-->
    <script src="{{ asset('assets/js/main.js') }}"></script>
</body>

</html>
