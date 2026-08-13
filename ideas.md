# Ember & Bean — Design Direction

## Three stylistic approaches

### Theme Name: Quiet Craft Editorial
**Very Brief Intro:** A warm, tactile coffee-house editorial system that treats each cup like a small ritual. It pairs rich material tones with generous whitespace and print-inspired hierarchy to feel premium, human, and quietly confident.

**Probability:** 0.087

### Theme Name: Alpine Precision
**Very Brief Intro:** A crisp, mountain-lab approach with cool mineral tones, structured modules, and technical tasting language. It would feel exacting, modern, and highly systemized.

**Probability:** 0.014

### Theme Name: Night Roast Signal
**Very Brief Intro:** A dark, cinematic direction using charcoal surfaces, copper highlights, and tightly choreographed glow-like accents. It would position the subscription as an after-hours ritual with a more dramatic edge.

**Probability:** 0.063

## Selected direction: Quiet Craft Editorial

### Design Movement
Contemporary editorial minimalism with references to independent coffee roaster packaging, Japanese kissaten restraint, and tactile print ephemera. The work should feel composed and collectible rather than glossy or overly engineered.

### Core Principles
1. **Material warmth:** Make the interface feel touchable through parchment surfaces, coffee-brown ink, subtle grain, and oxidized copper accents.
2. **Editorial hierarchy:** Use display type, marginal notes, rule lines, and deliberate line lengths to guide the eye like a well-designed tasting journal.
3. **Asymmetrical calm:** Favor offset columns, open edges, and staggered content blocks over centered hero stacks and repeated rounded cards.
4. **Conversion with restraint:** One primary action—“Choose your ritual”—repeats with confidence, while secondary links remain quiet and useful.

### Color Philosophy
Parchment is the light, breathable field; espresso is the dependable ink; moss gives provenance and natural grounding; and oxidized copper is the ownable spark that signals craft without resorting to luxury gold. The palette should age well, feel sensory, and keep the coffee imagery in focus.

### Layout Paradigm
The page uses an editorial “tasting sheet” composition: a slim utility rail, an offset hero with the main message on the left and a large image plate on the right, then alternating split sections that change the reading rhythm. Sections are connected by fine rules, marginal labels, and generous vertical breathing room rather than boxed grids.

### Signature Elements
- A small copper “roast stamp” mark used as a visual anchor near key section headings.
- Hairline rules with tiny uppercase tasting-note labels, creating a printed field-guide quality.
- A recurring hand-drawn bean / ember symbol used in the header, favicon, and section transitions.

### Interaction Philosophy
Interactions should feel like handling a well-made object: direct, tactile, and calm. Primary buttons shift slightly and deepen on press; image plates lift by a few pixels on hover; plan selectors reveal their difference through an ink-like outline rather than loud color changes. Every interactive element keeps a visible focus state and remains fully keyboard reachable.

### Animation
Entrance motion is limited to opacity and transform, with 180–260ms snappy ease-out transitions. Hero copy and the image plate enter in a staggered sequence; section labels appear just before their content; and hover states use small translate-y shifts rather than scaling everything. Non-essential animation is disabled under `prefers-reduced-motion`.

### Typography System
Use **DM Serif Display** for large headlines and section titles, with **Manrope** for body copy, labels, navigation, and prices. Headlines should be 52–76px on desktop with tight leading and a restrained italic emphasis used only for sensory phrases. Body text stays between 15–18px with 1.6–1.75 line-height. Labels are 10–11px, uppercase, and letter-spaced.

### Brand Essence
**Positioning:** A considered monthly coffee ritual for people who want better mornings without more decisions.

**Personality:** Grounded, discerning, generous.

### Brand Voice
Headlines should be sensory, specific, and lightly poetic without becoming precious. CTAs should sound like an invitation into a ritual, not a software conversion funnel. Microcopy should be concise, transparent, and reassuring.

**Example headline:** “A better morning, already on its way.”

**Example CTA:** “Choose your ritual.”

### Wordmark & Logo
The wordmark is set in a high-contrast serif with the ampersand custom-drawn as a rising ember curl. The symbol is a bold, text-free copper mark: a simplified coffee bean split by a small flame-shaped cut, designed to remain legible at favicon size and distinct at header scale.

### Signature Brand Color
**Ember Copper — `#B9643D`**. It is warm, recognizable, and tied to the moment when roast heat becomes flavor; it supplies the brand’s memorable accent without overpowering the neutral field.

## Style Decisions

- Keep the primary hero action visible without competing secondary buttons.
- Use image backgrounds only when their brightness is controlled; dark espresso photography receives light type, while parchment imagery receives espresso type.
- Prefer editorial rules, offsets, and texture over generic rounded cards and gradients.
