# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Static HTML website for **Hội Du học sinh Việt Nam tại Hamburg** (Vietnamese Students Association in Hamburg), Term 14 (VSHH e.V.).

- **Live URL**: https://hungryhungry.github.io/dhs-hamburg/
- **Deployment**: GitHub Pages — auto-deploys on push to `main`
- **Stack**: Pure HTML, CSS, JavaScript. No build tools, no package manager, no framework.

## Running Locally

A local HTTP server is required (not `file://`) because `main.js` uses `fetch()` to load page partials:

```bash
python -m http.server 8080
# or
npx serve .
```

## Architecture

`index.html` is the main shell containing the hero header, nav bar, tab containers, footer, and script/style links. On load, an inline script fetches each `pages/*.html` partial into its corresponding `.tab-content` div.

```
index.html              ← Shell: nav, tab containers, script/style links
css/style.css           ← All styling (~738 lines)
js/main.js              ← Tab switching + accordion toggle (~33 lines)
pages/
  vision.html           ← "Giới thiệu" tab
  events.html           ← "Sự kiện & Kế hoạch" tab
  amvangtudo.html       ← Âm Vang Tự Do sub-page
  org.html              ← "Sơ đồ tổ chức" tab
  roles.html            ← "Nhiệm vụ các ban" tab
  contact.html          ← "Liên hệ" tab
img/                    ← Logo, banner images
```

## Key Patterns

- **Tab system**: Nav buttons carry `data-tab="<id>"`. `switchTab(tabId)` in `main.js` toggles `.active` on both the button and `#tab-<id>`. Note: there is a hidden `amvangtudo` tab container in `index.html` with no corresponding nav button — it is loaded silently.
- **Accordion**: Role cards in `pages/roles.html` call `toggleRole(hdr)` which toggles an `.open` class on the parent element.
- **CSS variables**: All colors, radii, and shadows are defined in `:root` in `style.css`. The palette references Vietnamese flag colors (`--vn-red`, `--vn-yellow`) and German flag colors (`--de-black`, `--de-red`, `--de-gold`).
- **Badge color convention**: Blue = content/comms, Coral = operations, Amber = finance, Green = general.

## Content Editing

- Edit tab content in the corresponding `pages/*.html` file.
- To add a new tab: add a nav button in `index.html`, create `pages/<tabname>.html`, and add a fetch call in the inline script at the bottom of `index.html`.
- Member names and org structure live in `pages/org.html` and `pages/roles.html`.
- Event dates and plans live in `pages/events.html`.

## Language

All content is in Vietnamese. Commit messages may be in Vietnamese or English.
