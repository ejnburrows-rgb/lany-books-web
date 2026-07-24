# Design System: Gretel Storybook System

## Brand & Style

The brand personality is nurturing, whimsical, and educational, specifically tailored for children aged 4-6. The design system prioritizes a "calm-tech" approach, avoiding the overstimulating animations and loud palettes typical of arcade-style apps. Instead, it leverages a storybook aesthetic that feels like a natural extension of a physical literacy primer.

The visual style is **Tactile / Modern Storybook**. It utilizes soft, hand-drawn line work and a flat design language that avoids complex gradients or glossy finishes. The goal is to evoke an emotional response of security and curiosity, encouraging young learners to explore Spanish literacy at their own pace within a familiar, warm environment.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy to maintain the "book-like" structure across devices. Content is centered within safe margins to ensure the character of Gretel remains a focal point on the screen.

- **Desktop/Tablet:** 12-column grid with wide 32px gutters to allow the storybook illustrations to breathe.
- **Mobile:** 4-column grid with 16px gutters.
- **Touch Targets:** A strict minimum touch target of 56px (3.5rem) is enforced for all interactive elements, accommodating the less precise motor skills of 4-6 year olds. 
- **Whitespace:** Generous padding between sections prevents the "arcade" look, maintaining a calm, focused learning environment.

## Elevation & Depth

This system avoids digital shadows in favor of **Tonal Layers** and **Line Art Depth**. 
- **The Ink Line:** Interactive elements are defined by a subtle 2px border in a slightly darker shade of the element's fill color, mimicking hand-drawn ink.
- **Physicality:** Instead of elevation via shadows, "pressed" states for buttons use a slight downward shift (2px) and a darker tonal fill to simulate a physical push.
- **Layering:** Background elements use the skin tone (`#F6D2B3`) or pale pastel washes to sit "behind" the primary red and blue interface components.

## Components

### Buttons
Buttons are large, pill-shaped, and use the Primary Red (`#E2574C`) for "Go/Next" actions. They feature a thick bottom-border (4px) in a darker shade to create a "squishy" tactile appearance without using shadows.

### Letter Cards
Large, rounded squares (`rounded-xl`) with a Neutral (`#FDF8F3`) background and a 2px ink-style border. The character is centered using the `alphabet-card` typography style.

### Navigation
Simple, icon-based navigation (Home, Back, Audio). Icons use thick, rounded strokes that match the hand-drawn style of the Gretel character illustrations.

### Input Fields
Used sparingly for names. They should appear as "lined paper" underscores rather than boxed-in rectangles to feel more like a classroom workbook.

### Progress Indicators
Represented by a row of small icons (like the flowers on Gretel’s dress). As the child progresses, the flowers change from a subtle outline to a solid Primary Red fill.

## Design Theme Tokens

- Color mode: `LIGHT`
- Custom color: `#e2574c`
- font: `PLUS_JAKARTA_SANS`
- headlineFont: `PLUS_JAKARTA_SANS`
- bodyFont: `PLUS_JAKARTA_SANS`
- labelFont: `PLUS_JAKARTA_SANS`
- Roundness: `ROUND_EIGHT`

### Named Colors

| Token | Hex |
| --- | --- |
| `background` | `#fef8f3` |
| `error` | `#ba1a1a` |
| `error_container` | `#ffdad6` |
| `inverse_on_surface` | `#f5f0eb` |
| `inverse_primary` | `#ffb4ab` |
| `inverse_surface` | `#32302d` |
| `on_background` | `#1d1b19` |
| `on_error` | `#ffffff` |
| `on_error_container` | `#93000a` |
| `on_primary` | `#ffffff` |
| `on_primary_container` | `#fffbff` |
| `on_primary_fixed` | `#410002` |
| `on_primary_fixed_variant` | `#8c1815` |
| `on_secondary` | `#ffffff` |
| `on_secondary_container` | `#784709` |
| `on_secondary_fixed` | `#2d1600` |
| `on_secondary_fixed_variant` | `#6a3c00` |
| `on_surface` | `#1d1b19` |
| `on_surface_variant` | `#59413e` |
| `on_tertiary` | `#ffffff` |
| `on_tertiary_container` | `#fdfcff` |
| `on_tertiary_fixed` | `#001c39` |
| `on_tertiary_fixed_variant` | `#004883` |
| `outline` | `#8c716d` |
| `outline_variant` | `#e0bfbb` |
| `primary` | `#aa2e28` |
| `primary_container` | `#cc473d` |
| `primary_fixed` | `#ffdad6` |
| `primary_fixed_dim` | `#ffb4ab` |
| `secondary` | `#875216` |
| `secondary_container` | `#feb873` |
| `secondary_fixed` | `#ffdcbe` |
| `secondary_fixed_dim` | `#feb873` |
| `surface` | `#fef8f3` |
| `surface_bright` | `#fef8f3` |
| `surface_container` | `#f2ede8` |
| `surface_container_high` | `#ece7e2` |
| `surface_container_highest` | `#e6e2dd` |
| `surface_container_low` | `#f8f3ee` |
| `surface_container_lowest` | `#ffffff` |
| `surface_dim` | `#ded9d4` |
| `surface_tint` | `#ad312a` |
| `surface_variant` | `#e6e2dd` |
| `tertiary` | `#005da7` |
| `tertiary_container` | `#2976c7` |
| `tertiary_fixed` | `#d4e3ff` |
| `tertiary_fixed_dim` | `#a4c9ff` |
