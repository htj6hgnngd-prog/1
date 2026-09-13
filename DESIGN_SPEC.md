# Event Content Production - Design & Conversion Spec

## 1. Positioning
The site is not a generic videography landing page and not a SaaS layout. It must feel like an editorial production studio with enough commercial clarity to convert event producers, brands, agencies and private clients.

Core promise: one coordinated team produces photo, film and fast social content from the same event with one visual language.

Primary conversion: request a preliminary estimate.
Secondary conversion: inspect selected work.

## 2. Visual system
Palette:
- Ink: #0A0A09
- Secondary ink: #171715
- Warm paper: #EBE8DF
- Secondary paper: #D6D1C6
- Signal orange: #FF3D1F
- Muted text: #8B877F
- Dark line: rgba(10,10,9,.28)
- Light line: rgba(235,232,223,.28)

Color ratio:
- 45% near-black
- 45% warm paper
- 8% media imagery
- <=2% signal orange except the horizontal signal band/marquee

Typography:
- Display/body: Onest 400/500/600/700
- Technical labels: IBM Plex Mono 400/500
- Display tracking: approximately -0.075em
- Display line-height: 0.76-0.82
- Small label tracking: 0.09-0.12em

Desktop scale:
- H1: clamp(66px, 9.65vw, 176px)
- H2: clamp(58px, 7.65vw, 138px)
- Project titles: clamp(30px, 3.25vw, 58px)
- Body lead: 18-25px
- Technical labels: 8-10px

Mobile scale:
- Hero: 55-86px
- Section headings: 48-78px
- Project titles: 25-34px
- Body: 16-17px

## 3. Grid and spacing
Desktop page gutter: clamp(18px, 2.2vw, 38px).
Header: 74px desktop / 62px mobile.
Section vertical rhythm: 10-16vh.
Main sections intentionally alternate full black and warm-paper fields to create chapter transitions.

Use asymmetry rather than centered cards. Avoid floating rounded cards, glassmorphism, gradient blobs, generic SaaS dashboards, icon grids and excessive pills.

## 4. Homepage architecture
1. Fixed navigation
2. Hero statement + showreel slot
3. Signal proof strip with production disciplines
4. Selected work with sticky visual and interactive project index
5. Production scope with oversized PHOTO / FILM / FAST / SCALE typography
6. Coverage system, split-screen backstage + process
7. Starting formats and pricing
8. Moving positioning statement
9. Closing reel slot
10. Minimal request form
11. Footer

## 5. Hero behavior
The first screen must communicate category and value in under 5 seconds.

Headline: "СОБЫТИЕ ПРОХОДИТ. КОНТЕНТ ОСТАЁТСЯ."

The showreel area stays empty until real media is supplied. Do not use generated or stock media. Desktop has restrained scroll scale/lift so the media field feels cinematic instead of static.

## 6. Work / case studies
Do not use a generic masonry card wall. Use a sticky media stage plus a large editorial list.

Each project case should eventually contain:
- 1 lead still or looping muted teaser
- event type
- deliverables
- duration / scale if useful
- short problem / solution / result
- 6-12 photos or 1-3 videos maximum on detail page

The homepage should show 4-6 strongest cases only.

## 7. Commercial logic
The site must reduce uncertainty in this order:
- what you do
- how good the work looks
- what exactly can be delivered
- how the team works
- where pricing starts
- how to start

Never hide all pricing behind a form. Show starting formats, then allow custom scaling. This filters low-intent leads while keeping the studio premium.

Primary CTA wording: "Получить расчёт".
Avoid vague CTAs such as "Узнать больше".

## 8. Motion direction
Motion must communicate hierarchy, not decorate empty space.

Allowed:
- header hide/reveal on scroll
- subtle hero media scale/lift
- project-row hover translation
- arrow reveal
- accordion transition
- one marquee chapter divider
- later: muted showreel autoplay only after media is supplied

Avoid:
- custom cursor as a core navigation device
- heavy WebGL before the real media library exists
- endless parallax
- motion on every line of text
- long preloaders

Preferred timing:
- micro interactions: 220-380ms
- section entrances: 600-850ms
- easing: cubic-bezier(.22,1,.36,1)

Respect prefers-reduced-motion.

## 9. Mobile
Mobile is not a compressed desktop version.

Rules:
- one-column reading flow
- menu becomes full-screen editorial navigation
- selected-work list appears before its media stage
- hide secondary technical metadata if it competes with the project title
- minimum touch targets ~48px
- no horizontal overflow
- hero copy must remain legible at 320px wide

## 10. Performance
Targets after real media is added:
- LCP < 2.5s on good mobile 4G
- CLS < 0.1
- INP < 200ms
- homepage initial transfer target < 1.5MB before showreel starts streaming

Media requirements:
- poster images AVIF/WebP
- responsive srcset
- showreel H.264/H.265/WebM depending delivery path
- muted playsinline autoplay, with poster fallback
- lazy-load below-the-fold media
- no 4K source loaded on mobile by default

## 11. Conversion instrumentation before final launch
Connect:
- Yandex Metrica
- form-submit goal
- CTA click goals
- project-open goal
- 50% and 90% scroll goals
- source/UTM capture in lead form

## 12. Content still required before final public launch
- final studio name and logo/wordmark
- real showreel
- real project media
- actual Telegram / phone / email
- destination for the lead form
- privacy-policy URL

No generated photos or stock substitutes should be introduced without explicit approval.
