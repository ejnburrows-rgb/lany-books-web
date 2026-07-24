# Design System: Heritage Ledger

## Brand & Style

This design system reimagines the CRM experience through the lens of traditional Cuban bookbinding and editorial craftsmanship. It departs from the sterile, "SaaS-blue" corporate aesthetic in favor of a **Tactile / Skeuomorphic** approach that feels like a physical heritage document—warm, grounded, and permanent.

The visual narrative is built on the concept of "The Mahogany Binder," where digital data is treated with the care of a hand-bound register. The style utilizes rich textures (parchment, leather, gold leaf) and high-quality serif typography to evoke feelings of trust, legacy, and human-centric business management. Despite its historical aesthetic, the system remains high-performance, using clean layouts and systematic data organization to ensure professional efficiency.

Key visual motifs include:
- **Physicality:** Containers that look like paper sheets stacked on a desk.
- **Craftsmanship:** Golden filigree (fleurons) used as structural dividers.
- **Tactility:** Leather-bound navigation spines and ink-press stamps for status indicators.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** approach, centering content to create a focused, "open book" feel.

- **The Canvas:** Page content is locked to a 1280px max-width container. 
- **Grid:** Use a 12-column grid for dashboards with a consistent 20px gutter (`gutter`).
- **Editorial Margins:** Card containers should utilize generous internal padding (24px to 32px) to prevent data from feeling cramped, mimicking the wide margins of expensive book layouts.
- **Dividers:** Replace standard horizontal rules with the "Fleuron Divider"—a centered golden floral emblem with horizontal lines extending outward. This should be used to separate major vertical sections of a page.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows** that simulate physical materials stacked on a dark mahogany surface.

- **Base Layer:** The Parchment Canvas (`#F5E6D3`) is the "desk" level.
- **Sheet Level:** Cards and data containers are the "paper" level (`#FFF8EE`). They use a prominent 3px Satin Gold border to create physical definition.
- **Shadows:** Use warm, Espresso-tinted shadows rather than neutral grays. For cards, use `0 8px 32px rgba(92, 64, 51, 0.15)`. This creates a soft "lift" from the parchment background.
- **Navigation:** The Top/Side navigation is treated as the "Leather Binder" (`#78350F`), which sits at the highest structural elevation but uses color rather than shadow to denote its permanence.

## Components

- **Buttons:** Primary buttons must feel tactile. Apply a linear gradient from Rust Orange (`#D2691E`) to Mahogany (`#A0522D`). Frame them with a 2px Satin Gold border. On hover, the button should lift slightly (`translateY(-2px)`) with a warm glow.
- **Cards:** The core CRM container. Background must be Sheet Surface (`#FFF8EE`) with a subtle noise texture. Always include the 3px gold border and the warm espresso shadow.
- **Inputs:** Form fields should look like ledger lines. Use the Sheet Surface background and a 1.5px Satin Gold border. On focus, the border should glow with Coral Orange (`#EA580C`).
- **Status Stamps:** Use the `label-caps` typography. Success/Paid states use Mint Green backgrounds; Error/Overdue states use Spanish Red. These should have a slight 2px dashed border to mimic ink press marks.
- **Navigation Links:** Within the Mahogany binder, active links should be highlighted with a soft tan-colored block and gold outline, using Georgia Serif for the text.
- **Ornamental Divider:** A custom SVG fleuron (floral) motif centered between two 1px gold lines. This is required for separating major sections on a dashboard.

## Design Theme Tokens

- Color mode: ``
- Custom color: ``
- Roundness: ``
