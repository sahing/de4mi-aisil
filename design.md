# design.md – Alisil Technology Pvt Ltd Website

Design system for the Alisil corporate website. Companion to the PRD.
Tagline: **"Powering Businesses Through Smart Technology"**

> Colour values are approximations sampled from the logo image. Replace them with the official brand hex values when available.

---

## 1. Design Principles

1. **Smart, not flashy.** Futuristic and premium, but credible for enterprise buyers. Motion supports meaning, never decorates.
2. **One idea per screen.** Large type, generous whitespace, one primary action.
3. **Make 15 services feel simple.** Group into five pillars; use consistent cards and icons.
4. **AI-first storytelling.** The "AI is Replacing & Changing" module is the signature interaction.
5. **Fast and accessible.** WCAG 2.2 AA, Core Web Vitals in the green, reduced-motion respected.

---

## 2. Brand Identity

| Element | Description |
|---|---|
| Name | Alisil Technology Pvt Ltd |
| Wordmark | ALISIL in bold squared letters (A amber, L-I sky blue, S navy, I amber, L sky blue); "TECHNOLOGY PVT LTD" in navy |
| Symbol | Amber ring around a blue and navy "S/A" monogram |
| Tagline | Powering Businesses Through Smart Technology |

**Logo usage**
- Use a transparent SVG. The supplied PNG has a white background and drop shadow, so it will not work on dark sections.
- Provide three versions: full colour (light backgrounds), white/one-colour (dark backgrounds), symbol only (favicon, app icon, small spaces).
- Clear space: at least the height of the ring's gap on all sides. Minimum width: 120 px (full), 24 px (symbol).
- Do not add the 3D bevel or shadow on the web; use the flat version.

---

## 3. Colour

### 3.1 Brand palette

| Token | Hex | Use |
|---|---|---|
| `navy-900` | `#0B1B33` | Dark page background, footer |
| `navy-800` | `#10264A` | Dark cards, surfaces |
| `navy-700` | `#17345F` | **Brand navy**, headings on light, dark buttons |
| `navy-500` | `#3A5A8C` | Secondary text on light, borders on dark |
| `sky-600` | `#1473B0` | Links and filled buttons with white text (5.1:1 on white) |
| `sky-500` | `#1B8FD2` | **Brand sky blue**, accents, icons, highlights on dark |
| `sky-300` | `#7CC4EC` | Hover glow, chart secondary |
| `sky-100` | `#E6F3FB` | Light tinted sections |
| `amber-500` | `#F39C12` | **Brand amber**, primary CTA, key numbers |
| `amber-600` | `#D98505` | CTA hover |
| `amber-100` | `#FDF1DC` | Highlight backgrounds |
| `green-500` | `#2FB57A` | Sustainability section only |
| `white` | `#FFFFFF` | Light background |
| `gray-50` | `#F6F8FB` | Alternate section background |
| `gray-200` | `#DDE3EC` | Borders on light |
| `gray-600` | `#566377` | Body text on light |

### 3.2 Semantic tokens

| Token | Light theme | Dark theme |
|---|---|---|
| `--bg` | `#FFFFFF` | `#0B1B33` |
| `--bg-alt` | `#F6F8FB` | `#10264A` |
| `--surface` | `#FFFFFF` | `#132B52` |
| `--text` | `#17345F` | `#FFFFFF` |
| `--text-muted` | `#566377` | `#B8C6DC` |
| `--border` | `#DDE3EC` | `#2A4372` |
| `--accent` | `#1473B0` | `#1B8FD2` |
| `--cta` | `#F39C12` | `#F39C12` |
| `--cta-text` | `#0B1B33` | `#0B1B33` |

### 3.3 Gradients

- **Hero gradient:** `linear-gradient(135deg, #0B1B33 0%, #17345F 55%, #1B8FD2 130%)`
- **Accent gradient (text and lines):** `linear-gradient(90deg, #1B8FD2, #F39C12)`
- **Glow:** `radial-gradient(circle at 30% 20%, rgba(27,143,210,.35), transparent 60%)`

### 3.4 Contrast checks (approximate)

| Pair | Ratio | Use |
|---|---|---|
| Navy `#17345F` on white | ~12:1 | Pass for all text |
| White on `sky-600` | ~5.1:1 | Pass for buttons |
| White on `sky-500` | ~3.6:1 | Large text and icons only |
| Navy `#0B1B33` on amber `#F39C12` | ~7.8:1 | Pass for CTA labels |
| Amber on `navy-900` | ~7.8:1 | Pass |
| Sky `#1B8FD2` on `navy-900` | ~4.9:1 | Pass |

Always verify final values with a contrast tool before launch.

---

## 4. Typography

| Role | Font | Fallback |
|---|---|---|
| Headings, display | **Sora** (600/700) | Inter, system-ui, sans-serif |
| Body, UI | **Inter** (400/500/600) | system-ui, sans-serif |
| Numbers, code | **JetBrains Mono** (500) | ui-monospace, monospace |

Self-host fonts as WOFF2 with `font-display: swap`.

### Type scale (fluid)

| Token | Size (mobile → desktop) | Weight | Line height | Use |
|---|---|---|---|---|
| `display` | 40px → 72px | 700 | 1.05 | Hero headline |
| `h1` | 34px → 56px | 700 | 1.1 | Page titles |
| `h2` | 28px → 40px | 700 | 1.15 | Section titles |
| `h3` | 22px → 28px | 600 | 1.25 | Card titles |
| `h4` | 18px → 20px | 600 | 1.3 | Sub-headings |
| `body-lg` | 18px → 20px | 400 | 1.6 | Lead paragraphs |
| `body` | 16px | 400 | 1.6 | Default text |
| `small` | 14px | 400 | 1.5 | Captions, meta |
| `eyebrow` | 12px | 600 | 1.2 | Uppercase label, letter-spacing 0.14em |

Max line length: 70 characters for body text.

---

## 5. Layout

- **Grid:** 12 columns, max content width 1240px, gutters 24px (desktop), 16px (mobile).
- **Breakpoints:** `sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280 · `2xl` 1536.
- **Section spacing:** 96px vertical on desktop, 64px on tablet, 48px on mobile.
- **Spacing scale (px):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Radius:** `sm` 8px (inputs), `md` 14px (cards), `lg` 24px (feature panels), `full` (pills).
- **Elevation:**
  - `e1`: `0 1px 2px rgba(11,27,51,.08)`
  - `e2`: `0 8px 24px rgba(11,27,51,.12)`
  - `e3`: `0 20px 48px rgba(11,27,51,.20)`
  - Dark theme: use borders and glow instead of shadows.

---

## 6. Components

### 6.1 Buttons
| Variant | Style |
|---|---|
| Primary | Amber background, navy text, radius `full`, 48px high, hover `amber-600` with slight lift |
| Secondary | Transparent, 1.5px sky border, sky text; hover fills `sky-100` (light) or 10% sky (dark) |
| Ghost / link | Sky text with animated arrow, underline on hover |
| Focus | 3px outline `sky-300`, 2px offset on every interactive element |

### 6.2 Header and mega-menu
- Sticky, transparent over the hero, turns solid navy with blur (`backdrop-filter: blur(12px)`) after 40px scroll.
- Mega-menu opens on hover/focus with five pillar columns, each listing its services with one-line descriptions.
- Mobile: full-screen drawer with accordion per pillar.
- Right side: language/theme toggle, "Book a Consultation" primary button.

### 6.3 Service card
- Surface card, radius `md`, 1px border, 24px padding.
- Contents: line icon (sky), title (`h3`), one-line summary, "Learn more →".
- Hover: border turns sky, soft glow, icon animates, card lifts 4px.
- Group cards under five pillar headings with a small eyebrow label.

### 6.4 "AI is Replacing & Changing" module (signature)
- Toggle: **Before AI ↔ With AI**, pill switch with amber knob.
- Each service row shows three states with colour coding:
  - **Replacing:** amber tag
  - **Changing:** sky tag
  - **Rising:** green tag
- Content morphs with a 300 ms cross-fade and a counter animation for impact figures.
- Filter chips by pillar. Keyboard-operable; state announced to screen readers (`aria-live="polite"`).

### 6.5 Hero
- Dark gradient background with an animated network/particle or gradient-mesh canvas (disabled for reduced motion and on low-power devices).
- Left: eyebrow, `display` headline, `body-lg` subline from the tagline, two buttons.
- Right: abstract visual (node graph forming the "S/A" symbol) or product-style dashboard illustration.

### 6.6 Other components
Stat counters, logo carousel, testimonial slider, case-study card, timeline/stepper, tabs, accordion (FAQ), form fields, toasts, modals, breadcrumbs, pagination, newsletter bar, cookie banner.

### 6.7 Forms
- Labels above fields, 48px inputs, radius `sm`, visible focus ring.
- Inline validation with text (not colour alone). Honeypot plus rate limiting for spam.
- Success state confirms next step and expected response time.

---

## 7. Iconography and Imagery

- **Icons:** one line-icon set (Lucide or Phosphor), 1.5px stroke, 24px grid, sky colour; amber for emphasis only.
- **Service icons (suggested):** AI/Data (brain-circuit), BPO (headset), KPO (book-open-check), Cloud (cloud), Cognitive Ops (workflow), Consulting (compass), Networking (network), Enterprise (building-2), IoT (cpu), Network Solutions (router), Sustainability (leaf), Management & Tech Consulting (line-chart), BPM (git-branch), Cybersecurity & QE (shield-check), App Dev (code-2).
- **Illustrations:** abstract geometric data/network graphics in brand colours.
- **Photography:** real teams and client environments, cool colour grade; avoid generic stock handshakes.
- **Images:** AVIF/WebP, responsive `srcset`, lazy-loaded below the fold, explicit width/height to prevent layout shift.

---

## 8. Motion

| Pattern | Spec |
|---|---|
| UI feedback (hover, press) | 150–250 ms, `ease-out` |
| Scroll reveal | Fade + 24px rise, 500 ms, stagger 80 ms, trigger once |
| Counters | Count up over 1.2 s when 40% visible |
| Hero background | Slow loop, under 10% CPU budget; pause when tab is hidden |
| Page transitions | Subtle fade, 200 ms |

Honour `prefers-reduced-motion: reduce` by removing parallax, counters and background animation.

---

## 9. Page Patterns

- **Home:** hero → trust bar → five-pillar services grid → AI module → impact numbers → case studies → industries → insights → sustainability → CTA banner.
- **Service page:** hero → capabilities grid → AI replacing/changing/rising panel → approach timeline → tools and partners → case studies → FAQ → related services → CTA.
- **Alternate backgrounds:** white → `gray-50` → navy dark band, so the page has rhythm.
- **Sustainability pages:** introduce `green-500` as a secondary accent.

---

## 10. Accessibility

- WCAG 2.2 AA minimum; touch targets at least 44×44px.
- Visible focus on all controls; logical tab order; skip-to-content link.
- Semantic landmarks and heading order; descriptive link text.
- Alt text for informative images; decorative images marked `alt=""`.
- Do not rely on colour alone (tags carry text labels and icons).
- Test with keyboard, screen reader (NVDA/VoiceOver) and 200% zoom.

---

## 11. Implementation Tokens

### 11.1 CSS variables

```css
:root {
  --navy-900: #0B1B33;
  --navy-800: #10264A;
  --navy-700: #17345F;
  --sky-600: #1473B0;
  --sky-500: #1B8FD2;
  --sky-300: #7CC4EC;
  --sky-100: #E6F3FB;
  --amber-500: #F39C12;
  --amber-600: #D98505;
  --green-500: #2FB57A;

  --bg: #FFFFFF;
  --bg-alt: #F6F8FB;
  --surface: #FFFFFF;
  --text: #17345F;
  --text-muted: #566377;
  --border: #DDE3EC;
  --accent: var(--sky-600);
  --cta: var(--amber-500);
  --cta-text: var(--navy-900);

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;

  --font-heading: "Sora", "Inter", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #0B1B33;
    --bg-alt: #10264A;
    --surface: #132B52;
    --text: #FFFFFF;
    --text-muted: #B8C6DC;
    --border: #2A4372;
    --accent: var(--sky-500);
  }
}
:root[data-theme="dark"] {
  --bg: #0B1B33;
  --bg-alt: #10264A;
  --surface: #132B52;
  --text: #FFFFFF;
  --text-muted: #B8C6DC;
  --border: #2A4372;
  --accent: var(--sky-500);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; }
}
```

### 11.2 Tailwind config (extract)

```js
// tailwind.config.js
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        navy: { 900: "#0B1B33", 800: "#10264A", 700: "#17345F", 500: "#3A5A8C" },
        sky: { 100: "#E6F3FB", 300: "#7CC4EC", 500: "#1B8FD2", 600: "#1473B0" },
        amber: { 100: "#FDF1DC", 500: "#F39C12", 600: "#D98505" },
        eco: { 500: "#2FB57A" },
      },
      fontFamily: {
        heading: ["Sora", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      borderRadius: { sm: "8px", md: "14px", lg: "24px" },
      boxShadow: {
        e1: "0 1px 2px rgba(11,27,51,.08)",
        e2: "0 8px 24px rgba(11,27,51,.12)",
        e3: "0 20px 48px rgba(11,27,51,.20)",
      },
      maxWidth: { content: "1240px" },
    },
  },
};
```

---

## 12. Do and Don't

| Do | Don't |
|---|---|
| Use amber only for the primary action and key figures | Use amber for body text or large backgrounds |
| Keep navy as the dominant colour | Add new brand colours (purple, red) |
| Use the flat SVG logo | Place the shadowed PNG on dark backgrounds |
| Keep animations under 600 ms | Autoplay sound or full-screen video |
| Show real outcomes and numbers | Use generic claims without evidence |

---

## 13. Open Items

1. Official brand hex values and any brand guideline PDF.
2. SVG logo (full colour, white, symbol only).
3. Approval of Sora + Inter, or the company's existing fonts.
4. Confirm whether a dark theme ships at launch.
5. Photography and client logo permissions.
