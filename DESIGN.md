# Design Brief

## Direction

A2H Mobile Service Centre — Professional dark-themed mobile repair shop website with mechanical industrial aesthetic, warm orange accents, and white typography.

## Tone

Brutally clean, hardware-focused authority. Orange is system-wide accent, not just highlight. No gradients or excess animation — form follows workshop function.

## Differentiation

Wrench icon as persistent header branding element paired with strong orange accent system throughout CTA buttons, card borders, and emphasis text.

## Color Palette

| Token      | OKLCH             | Role                        |
| ---------- | ----------------- | --------------------------- |
| background | 0.12 0.01 50      | Near-black warm dark        |
| foreground | 0.95 0.005 50     | Bright white text           |
| card       | 0.18 0.015 50     | Lifted surface              |
| primary    | 0.62 0.24 55      | Vibrant warm orange (#ff9800 equivalent) |
| accent     | 0.62 0.24 55      | Orange system accent        |
| muted      | 0.55 0.01 50      | Secondary text gray         |

## Typography

- Display: Space Grotesk — mechanical, bold headings + hero text
- Body: DM Sans — clean, no-nonsense paragraphs and UI labels
- Mono: Geist Mono — technical, warm fallback
- Scale: hero `text-5xl md:text-7xl`, h2 `text-3xl md:text-5xl`, label `text-sm uppercase`, body `text-base`

## Elevation & Depth

Card layers lift 0.06 OKLCH lightness from background. Orange left border (3px) on service cards. No shadows — depth through color separation.

## Structural Zones

| Zone    | Background      | Border           | Notes                               |
| ------- | --------------- | ---------------- | ----------------------------------- |
| Header  | card (0.18)     | orange accent    | Sticky, wrench logo + nav           |
| Hero    | background      | orange accent bar | Full-width with CTA button         |
| Services | background     | alternate cards  | Card grid, orange left border 3px   |
| Gallery | background      | —                | Image grid, orange hover overlay    |
| Contact | background      | orange divider   | Contact form section                |
| Footer  | card (0.18)     | white top border | Copyright + links                   |

## Spacing & Rhythm

Sections: 4rem (md: 6rem) gaps. Card padding: 1.5rem. Micro-spacing 0.5rem–1rem. Even density across mobile/desktop via `sm:` and `md:` breakpoints.

## Component Patterns

- Buttons: orange background, white text, rounded 0.5rem, hover darker orange, no shadow
- Cards: card background, 0.5rem radius, orange left border 3px, hover slight lift
- Badges: orange background with white text, rounded full, small padding

## Motion

- Entrance: none (instant render, fast network)
- Hover: 0.2s ease color/border transition on interactive elements
- Decorative: none — focus on content clarity

## Constraints

- Dark mode only (`.dark` class)
- No external color functions or hex values in components
- All colors via OKLCH CSS variables only
- Mobile-responsive: `sm:` 640px, `md:` 768px, `lg:` 1024px breakpoints
- Orange accent used systematically (primary CTA, card accents, emphasis)

## Signature Detail

Wrench icon in header paired with systematic orange accent hierarchy. Industrial repair aesthetic elevated by refined typography and warm (not cold) dark palette.
