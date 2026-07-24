# Design System: Lumina Learning

## Brand & Style

This design system is built for the intersection of traditional pedagogy and modern digital interaction. It targets parents, educators, and young learners, balancing academic authority with a gentle, encouraging atmosphere. 

The visual style is **Corporate / Modern** with a strong leaning toward **Soft Minimalism**. It utilizes large, airy sections, a warm pastel-driven palette, and highly approachable rounded geometry. The goal is to evoke feelings of safety, clarity, and optimism, ensuring the technology feels like a natural extension of a physical classroom rather than a cold replacement.

## Layout & Spacing

This design system follows a **Fluid Grid** model within a maximum container width of 1200px.

- **Vertical Rhythm:** A strict 8px baseline is used. Major sections are separated by 80px to 100px of vertical padding to allow the content to breathe.
- **Grid:** A 12-column grid for desktop, 6-column for tablet, and 2-column for mobile.
- **Margins:** 24px gutters are standard for desktop. On mobile, side margins should be a minimum of 20px.
- **Sectioning:** Content is grouped into full-width background bands. Transitions between blue, yellow, and green zones mark shifts in the narrative or information type.

## Elevation & Depth

To maintain the soft, friendly aesthetic, this design system avoids heavy shadows. Depth is communicated primarily through:

- **Tonal Layering:** Using different background colors (Pastel Blue, Yellow, Green) to distinguish between content blocks.
- **Subtle Surface Lift:** Elements like cards or software mockups use a very soft, high-diffusion shadow (`0px 4px 24px rgba(0,0,0,0.06)`) to appear floating just above the surface.
- **Flat Containers:** Most containers (like form inputs) use a clean white fill with no shadow, relying on the contrast against colored backgrounds for visibility.

## Components

### Buttons
Primary buttons are pill-shaped with the Primary Blue background and white text. They should include a subtle hover state that slightly darkens the blue. Secondary buttons use a transparent background with a Primary Blue outline.

### Inputs & Forms
Input fields are white with an 8px corner radius. Labels are positioned above the field in `label-md` weight. Select menus use a subtle chevron icon and matching roundedness.

### Cards & Mockups
Software dashboard previews and product cards should feature a 16px corner radius. When displaying "digital" content, use a white background to contrast against the pastel section washes.

### Timelines & Progress
Use clean, thin lines with circular nodes for progress or timelines. The nodes should be filled with the Primary Blue to indicate milestones.

### Navigation
The header is clean and minimal, using a centered nav link structure. Active states are indicated by a subtle Primary Blue underline or a change in weight.

## Design Theme Tokens

- Color mode: `LIGHT`
- Custom color: `#6499b9`
- font: `HANKEN_GROTESK`
- headlineFont: `HANKEN_GROTESK`
- bodyFont: `HANKEN_GROTESK`
- labelFont: `HANKEN_GROTESK`
- Roundness: `ROUND_EIGHT`

### Named Colors

| Token | Hex |
| --- | --- |
| `background` | `#fcf9f8` |
| `error` | `#ba1a1a` |
| `error_container` | `#ffdad6` |
| `inverse_on_surface` | `#f3f0ef` |
| `inverse_primary` | `#98cdef` |
| `inverse_surface` | `#313030` |
| `on_background` | `#1c1b1b` |
| `on_error` | `#ffffff` |
| `on_error_container` | `#93000a` |
| `on_primary` | `#ffffff` |
| `on_primary_container` | `#002f43` |
| `on_primary_fixed` | `#001e2d` |
| `on_primary_fixed_variant` | `#074c69` |
| `on_secondary` | `#ffffff` |
| `on_secondary_container` | `#676348` |
| `on_secondary_fixed` | `#1e1c07` |
| `on_secondary_fixed_variant` | `#4b472e` |
| `on_surface` | `#1c1b1b` |
| `on_surface_variant` | `#41484d` |
| `on_tertiary` | `#ffffff` |
| `on_tertiary_container` | `#14311e` |
| `on_tertiary_fixed` | `#03210f` |
| `on_tertiary_fixed_variant` | `#304d38` |
| `outline` | `#71787e` |
| `outline_variant` | `#c0c7ce` |
| `primary` | `#2c6482` |
| `primary_container` | `#6499b9` |
| `primary_fixed` | `#c5e7ff` |
| `primary_fixed_dim` | `#98cdef` |
| `secondary` | `#635f44` |
| `secondary_container` | `#e7e0be` |
| `secondary_fixed` | `#eae3c1` |
| `secondary_fixed_dim` | `#cdc7a6` |
| `surface` | `#fcf9f8` |
| `surface_bright` | `#fcf9f8` |
| `surface_container` | `#f0eded` |
| `surface_container_high` | `#eae7e7` |
| `surface_container_highest` | `#e5e2e1` |
| `surface_container_low` | `#f6f3f2` |
| `surface_container_lowest` | `#ffffff` |
| `surface_dim` | `#dcd9d9` |
| `surface_tint` | `#2c6482` |
| `surface_variant` | `#e5e2e1` |
| `tertiary` | `#47654f` |
| `tertiary_container` | `#7a9a81` |
| `tertiary_fixed` | `#c9ebce` |
| `tertiary_fixed_dim` | `#adcfb3` |
