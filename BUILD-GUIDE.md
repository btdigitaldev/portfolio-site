# Portfolio Build Guide — Muhammad Bilal

This is the detailed spec for the site (also usable as a prompt if you hand this project to another developer or AI tool later). Everything below reflects what's actually in `index.html` / `style.css` right now.

## 1. Stack
Plain HTML, CSS and vanilla JS. No build step, no framework — open `index.html` directly or serve the folder with any static host (Vercel, Netlify, GitHub Pages all work with zero config).

## 2. File structure
```
/index.html                  → home page (hero, about, experience, skills, projects, contact)
/project-calcularrfc.html    → case study page (template to copy for new projects)
/project-ivyradar.html       → case study page (template to copy for new projects)
/style.css                   → all styles, design tokens at the top of the file
/script.js                   → mobile nav toggle, skill-bar animation, footer year
/robots.txt
/sitemap.xml                 → add new URLs here whenever you add a page
```

## 3. Design system (already in `style.css :root`)
- **Colors:** ink navy `#10141B` / `#171D27` (dark sections), warm paper `#F6F3EC` (light sections), brass accent `#D9A441`, teal accent `#3FA79A`.
- **Type:** Space Grotesk (headings), Inter (body), JetBrains Mono (labels, stats, data).
- **Pattern:** dark hero/experience/projects sections alternate with light about/skills/contact sections. A right-hand "readout" panel in the hero shows real stats in a mono data-panel style — reinforces the SEO/metrics identity instead of a generic photo hero.

## 4. How to add a new project case study (matches your `/project/slug` URL pattern)
1. Duplicate `project-ivyradar.html` → rename to `project-<slug>.html`.
2. Update: `<title>`, meta description, canonical URL, the `.kicker` line, `<h1>`, `.tagline`, and the four `.pd-meta` cells (role / stack / market or duration / live link).
3. Replace the two `.pd-block` columns with real content for that project:
   - **The problem** — what need existed before the project.
   - **What I built** — concrete, specific bullets (features, not adjectives).
   - **SEO & performance** or **Approach** — what you actually did, technically.
   - **Outcome** — honest result. If you don't have a metric, describe the state of the product rather than inventing a number.
4. Add a card for it in `index.html` inside `#projects .proj-grid`, linking to the new file.
5. Add the new URL to `sitemap.xml`.

## 5. Content rules (why the copy reads the way it does)
- No placeholder/lorem-ipsum copy anywhere — every claim on the site traces back to your resume or to a fact I could verify about the live product.
- TK Highgate is listed as **on-site, Multan, Pakistan** (not remote) per your correction — keep this consistent everywhere if you add more mentions of that role.
- Don't add metrics you can't back up (traffic numbers, ranking positions, conversion lifts). If you get real numbers later (Search Console data, PageSpeed scores, etc.), add them to the relevant `.pd-block` — specific, sourced numbers are the single highest-leverage SEO/credibility upgrade you can make to this site.
- Keep each project card description to 1–2 honest sentences about what the tool does, not marketing language.

## 6. SEO checklist for anything you add later
- Unique `<title>` and `<meta name="description">` per page (150–160 characters).
- One `<h1>` per page.
- `rel="canonical"` pointing at the final hosted URL — update the domain in every file once you know your final domain (currently set to `https://bilaltoor.online/`).
- Add new pages to `sitemap.xml` and keep `robots.txt` pointing at it.
- Compress any images you add (WebP, under ~150KB) and always set `width`/`height` or `aspect-ratio` to avoid layout shift.
- Internal links between the home page and every case study (already in place) — don't let a project page become an orphan page with no inbound link.

## 7. Deploying
Push the folder to a GitHub repo and import it into Vercel, or drag-and-drop the folder into Netlify. No environment variables or build command needed since there's no framework.
