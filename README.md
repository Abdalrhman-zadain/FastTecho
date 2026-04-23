# trustTechÂ® â€” Project Documentation

> **trustTechÂ®** is a multi-page marketing website for a technology company providing IT solutions across Jordan, UAE, and Saudi Arabia. Built with plain HTML, CSS, and JavaScript â€” no frameworks, no build step.

---

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Project Structure](#project-structure)
3. [Pages Overview](#pages-overview)
4. [CSS Architecture](#css-architecture)
5. [JavaScript Architecture](#javascript-architecture)
6. [i18n (Bilingual Support)](#i18n-bilingual-support)
7. [Design System](#design-system)
8. [Media Assets](#media-assets)
9. [External Services & APIs](#external-services--apis)
10. [How to Run](#how-to-run)
11. [How to Add a New Service Page](#how-to-add-a-new-service-page)
12. [Deployment](#deployment)

---

## Tech Stack

| Layer     | Technology                                   |
| --------- | -------------------------------------------- |
| Markup    | HTML5 (semantic)                             |
| Styling   | CSS3 (custom properties, grid, flexbox)      |
| Scripting | Vanilla JavaScript (ES6+, no deps)           |
| Fonts     | Google Fonts â€” Syne, DM Sans, Tajawal        |
| Forms     | FormSubmit.co (AJAX JSON endpoint)           |
| Hosting   | Static files â€” any web server / GitHub Pages |

**No build tools, bundlers, or package managers required.**

---

## Project Structure

```
trustTech/
â”œâ”€â”€ index.html                  # Homepage
â”œâ”€â”€ README.md                   # This file
â”œâ”€â”€ pages/                      # Service pages
â”‚   â”œâ”€â”€ web-app-development.html
â”‚   â”œâ”€â”€ ecommerce-solutions.html
â”‚   â”œâ”€â”€ digital-marketing-seo.html
â”‚   â””â”€â”€ data-expert-consulting.html
â”œâ”€â”€ assets/
â”‚   â”œâ”€â”€ css/                    # Stylesheets
â”‚   â”‚   â”œâ”€â”€ base.css
â”‚   â”‚   â”œâ”€â”€ nav.css
â”‚   â”‚   â”œâ”€â”€ home.css
â”‚   â”‚   â”œâ”€â”€ animations.css
â”‚   â”‚   â”œâ”€â”€ responsive.css
â”‚   â”‚   â””â”€â”€ service-pages.css
â”‚   â”œâ”€â”€ js/                     # Scripts
â”‚   â”‚   â”œâ”€â”€ i18n.js
â”‚   â”‚   â”œâ”€â”€ main.js
â”‚   â”‚   â””â”€â”€ service-pages.js
â”‚   â””â”€â”€ media/                  # Images and videos
â””â”€â”€ docs/
   â””â”€â”€ REDESIGN_REPORT.md
```

---

## Pages Overview

### Homepage (`index.html`)

The main landing page with all core company information.

| #   | Section    | Section ID       | Description                                                       |
| --- | ---------- | ---------------- | ----------------------------------------------------------------- |
| 1   | Navigation | â€”                | Fixed header with logo, nav links, Services dropdown, lang toggle |
| 2   | Hero       | `#home`          | Full-screen video background, headline, two CTA buttons           |
| 3   | Stats      | `#stats`         | 4 animated counters (50+ Projects, 3+ Countries, 100%, 4+ Years)  |
| 4   | Philosophy | `#philosophy`    | Two-column: text + video explaining company philosophy            |
| 5   | Services   | `#services`      | 6-card grid of core services (first two link to detail pages)     |
| 6   | Showcase   | `#showcase`      | Image carousel with 12 slides, arrows, dots, touch/swipe support  |
| 7   | Video      | `#company-video` | Embedded company intro video with controls                        |
| 8   | About      | `#about`         | Two-column: company photo + about text + CTA                      |
| 9   | Contact    | `#contact`       | Two-panel: contact info/socials + AJAX contact form               |
| 10  | Footer     | â€”                | Logo, copyright, country badges (Jordan, UAE, Saudi Arabia)       |

**CSS loaded:** `base.css` â†’ `nav.css` â†’ `home.css` â†’ `animations.css` â†’ `responsive.css`
**JS loaded:** `i18n.js` â†’ `main.js`

---

### Web & App Development (`pages/web-app-development.html`)

Service detail page for custom software development.

| #   | Section           | Description                                                       |
| --- | ----------------- | ----------------------------------------------------------------- |
| 1   | Navigation        | Same nav, links prefixed with `index.html`                        |
| 2   | Service Hero      | Back link, headline, subtext, CTA button                          |
| 3   | Stats Bar         | 4 counters: 50+ Projects, 15+ Countries, 99.9%, 4.9â˜…              |
| 4   | What We Offer     | 6 offering cards (Website, Mobile, Full-Stack, UI/UX, API, Maint) |
| 5   | Why Choose Us     | Image + 5 checkmark value propositions                            |
| 6   | Key Benefits      | 3 cards: 99.9% Uptime, 2Ã— Faster, 100% Code Ownership             |
| 7   | Project Showcase  | 6 project screenshots with captions                               |
| 8   | Process Timeline  | 5-step visual timeline (Discovery â†’ Deploy)                       |
| 9   | Client Feedback   | 3 testimonial cards with ratings                                  |
| 10  | Client Logos      | 8-brand infinite scroll ticker                                    |
| 11  | Team Spotlight    | 4 team member cards                                               |
| 12  | Pricing           | 3 tiers: Starter ($2,500), Growth ($8,000), Enterprise (Custom)   |
| 13  | FAQ               | 6 accordion items                                                 |
| 14  | Free Consultation | CTA banner for 30-min consultation                                |
| 15  | Final CTA         | "Ready to Build Something Great?" with button                     |
| 16  | Footer            | Same footer                                                       |

**CSS loaded:** `base.css` â†’ `nav.css` â†’ `animations.css` â†’ `responsive.css` â†’ `service-pages.css`
**JS loaded:** `i18n.js` â†’ `main.js` â†’ `service-pages.js`

---

### E-commerce Solutions (`pages/ecommerce-solutions.html`)

Service detail page for e-commerce development.

| #   | Section           | Description                                                           |
| --- | ----------------- | --------------------------------------------------------------------- |
| 1   | Navigation        | Same nav                                                              |
| 2   | Service Hero      | Back link, headline, subtext, CTA "Start Your Store"                  |
| 3   | Stats Bar         | 4 counters: 120+ Stores, $35M+ Revenue, 98% Uptime, 3Ã— Sales          |
| 4   | What We Offer     | 6 cards (Stores, Platforms, Payments, Inventory, Marketing, Security) |
| 5   | Why Choose Us     | "E-commerce That Actually Converts" + 5 points                        |
| 6   | Key Benefits      | 3 cards: 3Ã— Sales, 45% Less Abandonment, 24/7 Uptime                  |
| 7   | Project Showcase  | 6 project screenshots                                                 |
| 8   | Process Timeline  | 5-step (Market Research â†’ Go Live)                                    |
| 9   | Client Feedback   | 3 testimonial cards                                                   |
| 10  | Client Logos      | 8-brand ticker                                                        |
| 11  | Team Spotlight    | 4 e-commerce team members                                             |
| 12  | Pricing           | 3 tiers: Starter ($3,500), Growth ($12,000), Enterprise (Custom)      |
| 13  | FAQ               | 6 accordion items                                                     |
| 14  | Free Consultation | CTA banner                                                            |
| 15  | Final CTA         | "Ready to Sell Online?"                                               |
| 16  | Footer            | Same footer                                                           |

**CSS/JS:** Same as web-app-development.html

---

## CSS Architecture

The CSS is split into 6 modular files by responsibility:

| File                           | Lines | Purpose                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/css/base.css`          | ~173  | `:root` variables, box-sizing reset, body styles, layout helpers (`.container`, `.section`, `.section-label`), typography (`h1`â€“`h3`, `p`), button styles (`.btn`, `.btn-primary`, `.btn-secondary`)                                                                                                                                          |
| `assets/css/nav.css`           | ~130  | Fixed header (`.site-nav`), grid-based nav layout, nav links, hover dropdown with pseudo-element bridge, language toggle                                                                                                                                                                                                                      |
| `assets/css/home.css`          | ~584  | All homepage-specific sections: hero, stats, philosophy, services grid, carousel, video, about, contact panel, form inputs, footer                                                                                                                                                                                                            |
| `assets/css/animations.css`    | ~86   | `.reveal` / `.reveal-left` / `.reveal-right` scroll animations, `.in-view` state, stagger delays, `.glow-card` mouse-tracking gradient, `@keyframes float`, `@keyframes ping`                                                                                                                                                                 |
| `assets/css/responsive.css`    | ~101  | `@media` breakpoints at 1080px, 860px, 640px for homepage layouts. RTL overrides for Arabic (`html[dir="rtl"]`)                                                                                                                                                                                                                               |
| `assets/css/service-pages.css` | ~1253 | Everything for service detail pages: hero, offerings, tech stack, process steps, why choose us, benefits, project gallery, CTA, case studies, testimonials, stats bar, tabbed tech, timeline, video walkthrough, before/after slider, client logos, team, pricing, FAQ accordion, consultation banner â€” plus their own responsive breakpoints |

### Loading Strategy

- **Homepage** loads: `base` â†’ `nav` â†’ `home` â†’ `animations` â†’ `responsive`
- **Service pages** load: `base` â†’ `nav` â†’ `animations` â†’ `responsive` â†’ `service-pages`

Service pages do NOT load `home.css` (they don't use homepage-specific components), keeping page weight minimal.

---

## JavaScript Architecture

The JS is split into 3 files, each wrapped in an IIFE to avoid global pollution:

### `assets/js/i18n.js` (~149 lines)

- Contains **53 translation keys** in English and Arabic
- Handles language detection and switching via the `#langToggle` button
- Sets `lang` and `dir` attributes on `<html>` for RTL support
- Translates elements with `data-i18n` (text) and `data-i18n-placeholder` (inputs)
- Exposes `window.FT.translations` and `window.FT.getLang()` for other scripts

**Must load first** â€” other scripts depend on `window.FT`.

### `assets/js/main.js` (~236 lines)

Core interactions shared across all pages:

| Feature               | How it works                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| **Contact Form**      | Guarded with `if (contactForm)`. AJAX POST to FormSubmit.co                                            |
| **Mouse Glow**        | Tracks mouse position on `.glow-card` elements via CSS custom props                                    |
| **Header Scroll**     | Changes nav background opacity on scroll > 50px                                                        |
| **Active Nav**        | Highlights current section's nav link based on scroll position                                         |
| **Scroll Reveal**     | `IntersectionObserver` adds `.in-view` to `.reveal` elements                                           |
| **Counter Animation** | `IntersectionObserver` animates `[data-counter]` numbers                                               |
| **Carousel**          | Guarded with `if (track)`. Full carousel with arrows, dots, swipe, autoplay, responsive per-view count |

### `assets/js/service-pages.js` (~87 lines)

Service-page-only interactions:

| Feature                 | How it works                                        |
| ----------------------- | --------------------------------------------------- |
| **Tech Tabs**           | Tab button click toggles `.active` on panels        |
| **Stat Counter**        | `IntersectionObserver` for `[data-target]` elements |
| **Before/After Slider** | Mouse/touch drag updates `clip-path` on `.ba-after` |

### Null Safety

All scripts use **guard clauses** (`if (element)`) before accessing DOM elements that may not exist on every page. This prevents the JS IIFE from crashing when, for example, the carousel doesn't exist on service pages.

---

## i18n (Bilingual Support)

The site supports **English** and **Arabic** with a toggle button in the navigation.

### How it works

1. Elements with `data-i18n="key_name"` get their `textContent` replaced
2. Inputs with `data-i18n-placeholder="key_name"` get their `placeholder` replaced
3. Clicking the lang toggle switches between `en` / `ar`
4. Arabic mode sets `dir="rtl"` on `<html>`, activating RTL CSS overrides
5. Arabic uses the **Tajawal** font family

### Current Coverage

| Page                             | i18n coverage                 |
| -------------------------------- | ----------------------------- |
| `index.html`                     | Full (all sections)           |
| `pages/web-app-development.html` | Partial (nav + some sections) |
| `pages/ecommerce-solutions.html` | Nav only                      |

---

## Design System

### Colors

| Token           | Value                       | Usage                 |
| --------------- | --------------------------- | --------------------- |
| `--bg`          | `#06101a`                   | Page background       |
| `--bg-soft`     | `#0b1826`                   | Section backgrounds   |
| `--bg-card`     | `#0f2233`                   | Card backgrounds      |
| `--text`        | `#e8f3fb`                   | Primary text          |
| `--text-soft`   | `#9bb8cd`                   | Secondary text        |
| `--accent`      | `#52d8ff`                   | Primary accent (cyan) |
| `--accent-2`    | `#8ff1ff`                   | Secondary accent      |
| `--line`        | `rgba(104, 187, 232, 0.28)` | Borders               |
| `--line-strong` | `rgba(104, 187, 232, 0.48)` | Hover borders         |

### Typography

| Element   | Font Family | Weight  | Size (clamp)                    |
| --------- | ----------- | ------- | ------------------------------- |
| `h1`      | Syne        | 800     | `clamp(2.55rem, 6vw, 4.8rem)`   |
| `h2`      | Syne        | 700     | `clamp(2rem, 4vw, 3.35rem)`     |
| `h3`      | Syne        | 700     | `clamp(1.2rem, 2.3vw, 1.45rem)` |
| `p`       | DM Sans     | 400     | `clamp(1rem, 1.25vw, 1.11rem)`  |
| Nav links | Syne        | 600     | `0.86rem`                       |
| Arabic    | Tajawal     | 400â€“800 | Same sizes                      |

### Spacing & Borders

| Token         | Value        |
| ------------- | ------------ |
| `--radius-sm` | `12px`       |
| `--radius-md` | `18px`       |
| `--radius-lg` | `24px`       |
| `--container` | `1240px`     |
| `--nav-h`     | `92px`       |
| `--t`         | `0.32s ease` |

### Responsive Breakpoints

| Breakpoint | Layout Changes                                                |
| ---------- | ------------------------------------------------------------- |
| `â‰¤ 1080px` | Stats/services â†’ 2-col, philosophy/about/contact â†’ single-col |
| `â‰¤ 860px`  | Nav restructured, service page grids â†’ 2-col or 1-col         |
| `â‰¤ 640px`  | Everything â†’ single column, smaller carousel arrows           |

---

## Media Assets

### Used by the site

| File                                        | Used on            | Purpose               |
| ------------------------------------------- | ------------------ | --------------------- |
| `logo.png`                                  | All pages          | Header + footer logo  |
| `hero_video.mp4`                            | Homepage           | Hero background video |
| `philosophy_video.mp4`                      | Homepage           | Philosophy section    |
| `trustTech_showcase_video_web.mp4`         | Homepage           | Company video section |
| `WhatsApp Image 2025-09-14...c5f48788.avif` | Homepage           | About section image   |
| `showcase_2.jpg` â€“ `showcase_6.jpg`         | Homepage + service | Carousel + gallery    |
| `img_extra_4.jpg`, `img_extra_6â€“11.jpg`     | Homepage + service | Carousel + gallery    |

### Not currently referenced

`016c63a1-...edi.avif`, `about_team.jpg`, `video_1.mp4`, `trustTech_showcase_video.mp4`, `trustTech Ù…Ù† Ø§ÙØ¶Ù„...mkv`, `img_extra_12.jpg`, `img_extra_13.jpg`, `img_extra_14.jpg`

---

## External Services & APIs

| Service          | URL / Details                                           |
| ---------------- | ------------------------------------------------------- |
| **Google Fonts** | `fonts.googleapis.com` â€” Syne, DM Sans, Tajawal         |
| **FormSubmit**   | `formsubmit.co/ajax/info@trustTech.online` (AJAX POST) |
| **WhatsApp**     | `wa.me/962797006780`                                    |
| **LinkedIn**     | `linkedin.com/in/trustTech-company-ba264a384`          |
| **X (Twitter)**  | `x.com/trustTech25`                                    |
| **Instagram**    | `instagram.com/trustTecho/`                            |
| **TikTok**       | `tiktok.com/@trustTech0`                               |
| **Facebook**     | `facebook.com/trustTechLLC/`                           |
| **YouTube**      | `youtube.com/@trustTech-s`                             |

---

## How to Run

### Option 1 â€” Direct open

Double-click `index.html` to open in any browser.

### Option 2 â€” Local server (recommended for proper path resolution)

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# VS Code
# Install "Live Server" extension â†’ right-click index.html â†’ "Open with Live Server"
```

Then navigate to `http://localhost:8000`.

---

## How to Add a New Service Page

1. **Duplicate** `web-app-development.html` or `ecommerce-solutions.html`
2. **Rename** to your service slug, e.g. `digital-marketing.html`
3. **Update content:** title, meta description, hero text, offerings, stats, testimonials, pricing, FAQ, team, etc.
4. **Add nav dropdown link** in all HTML files:
   ```html
   <li><a href="digital-marketing.html">Digital Marketing & SEO</a></li>
   ```
5. **Wrap the service card** on the homepage in a link:
   ```html
   <a href="digital-marketing.html" class="service-card-link">
     <article class="service-card ...">...</article>
   </a>
   ```
6. CSS and JS files **don't need changes** â€” the service page styles and scripts are shared.

---

## Deployment

This is a fully static site â€” deploy to any static hosting:

- **GitHub Pages:** Push to `main`, enable Pages in repo settings
- **Netlify / Vercel:** Connect repo, zero config needed
- **Any web server:** Upload all files preserving folder structure

No build step, no environment variables, no server-side code required.

