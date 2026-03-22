# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static HTML website** for "Hội Du học sinh Việt Nam tại Hamburg" (Vietnamese Students Association in Hamburg), Term 14. No build tools, no package manager, no framework — pure HTML, CSS, and JavaScript.

**Live URL**: https://hungryhungry.github.io/dhs-hamburg/
**Deployment**: GitHub Pages (auto-deploys from `main` branch)

## Development

No build step required. Open `index.html` directly in a browser, or use any local HTTP server:

```bash
python -m http.server 8080
# or
npx serve .
```

A local server is needed (not `file://`) because `main.js` uses the Fetch API to load page partials.

## Architecture

```
index.html          ← Main shell (nav, tab containers, script/style links)
css/style.css       ← All styling (~738 lines)
js/main.js          ← Tab switching + accordion toggle (~32 lines)
pages/
  vision.html       ← Vision & Mission tab content
  events.html       ← Events & Plans tab content
  org.html          ← Organization chart tab content
  roles.html        ← Department roles tab content
  contact.html      ← Contact information tab content
img/                ← Images (logo, banner)
```

**How pages load**: `index.html` defines tab containers. `main.js` uses `fetch()` to load each `pages/*.html` partial into the corresponding `.tab-content` div. Tab navigation is handled via `data-tab` attributes without any page reload.

## Key Patterns

- **Tab system**: `data-tab="vision"` on nav buttons corresponds to container IDs; `switchTab(tabId)` in `main.js` manages active state.
- **Accordion**: Role cards in `pages/roles.html` use `toggleRole(hdr)` toggling an `open` class.
- **CSS Variables**: All colors, radii, and shadows defined in `:root` at the top of `style.css`. The palette references both Vietnamese (red/yellow) and German (black/red/gold) flag colors.
- **Badge colors**: Blue = content/comms, Coral = operations, Amber = finance, Green = general.

## Content Editing

- To add/edit a tab's content, edit the corresponding file in `pages/`.
- To add a new tab: add a nav button in `index.html`, create `pages/<tabname>.html`, add a fetch call in `main.js`.
- Organization and member names are in `pages/org.html` and `pages/roles.html`.
- Event dates and plans are in `pages/events.html`.

## Language

Content is in Vietnamese. Commit messages may be in Vietnamese or English.
