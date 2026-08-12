# KOG — Visual Direction

## Reference Ground Truth

The website follows the provided Nothin' reference as the primary visual specification: a black editorial canvas; sparse, fixed navigation with small uppercase utility links; oversized, compressed display typography; surreal, tactile artwork drifting through the composition; wide horizontal sections; understated metadata; and a long-scroll studio narrative that alternates between declarative statements, work stories, and visual interruptions. The reference is intentionally not a conventional centered landing page. It uses negative space, unexpected image placement, oversized type, and scroll-based reveals to create a sense of discovery.

KOG translates that language into a spiritual creative studio for Kingdom of God: **a place where faith is framed as a living, visual, expansive world rather than a static institution**. The site should feel reverent, contemporary, cinematic, and slightly strange without becoming glossy or corporate.

## Chosen Approach

### Design Movement
Contemporary editorial brutalism crossed with surreal devotional art direction. The composition should feel like a fashion-art publication, but the copy and imagery should carry a quiet sense of transcendence.

### Core Principles
1. **Black space is active space.** Large areas of near-black are used to create tension and let images and words arrive with weight.
2. **Faith appears through perspective, not decoration.** Avoid predictable church motifs; use sculptural, luminous, tactile forms and concise language.
3. **Typography behaves like architecture.** Large condensed headlines, short lines, and irregular alignment create the primary visual structure.
4. **Motion is a reveal.** Loading, image drift, and entrance transitions should feel like objects emerging from darkness rather than UI effects.

### Color Philosophy
Use a near-black foundation (#070707) with chalk white text and a single ownable electric-lime signal color (#d6ff38). The lime behaves like a spiritual spark: rare, precise, and used for the logo mark, counters, hover details, and small moments of emphasis. Secondary image colors may be saturated cobalt, flesh pink, silver, and warm ivory, but the UI remains restrained.

### Layout Paradigm
A long editorial scroll with an asymmetric 12-column rhythm, oversized type blocks, edge-to-edge media moments, and intentional off-grid placement. Navigation and metadata sit in the margins. Sections should not read as repeated cards; each should have a distinct spatial gesture.

### Signature Elements
- A small lime orbit/halo mark paired with a compact KOG wordmark.
- Numbered lime counters and tiny uppercase annotations that echo the reference's index-like interface.
- Surreal 3D devotional objects: a luminous stone, a translucent seed, a folded metallic halo, and a soft sculptural hand/light form.

### Interaction Philosophy
Interactions should feel direct and physical. Hovering reveals an image or changes the scale of a word; navigation opens as a full-screen black sheet with oversized links; work rows respond with a small lateral shift and a lime cue. Every interactive element has a visible focus state and respects reduced-motion preferences.

### Animation
A short black loading veil resolves through a lime progress count and dissolves into the hero. On first reveal, headline lines rise 24px with staggered opacity. Floating artwork uses slow, low-amplitude translation and rotation only. Section images shift by a few percent on scroll using CSS transforms. Hover transitions stay under 260ms; ambient artwork motion is much slower and is disabled under prefers-reduced-motion.

### Typography System
Use **Bebas Neue** for display headlines and **DM Mono** for labels, navigation, counters, and metadata. Display type is uppercase, tightly tracked, and oversized. Body copy is compact, sentence case, with a calm line-height and no unnecessary density. Avoid Inter and default sans-serif presentation.

### Brand Essence
**KOG is a visual studio for people building a more generous world, turning spiritual conviction into culture, identity, and experience.** Personality: **expansive, lucid, alive**.

### Brand Voice
Headlines are declarative and poetic without sounding mystical for its own sake. CTAs are concise and slightly invitational. Microcopy is quiet, precise, and never salesy.

Example lines:
- “We make room for what is larger than us.”
- “Bring the unseen into form.”

### Wordmark & Logo
The mark is a lime circular halo interrupted by a single vertical opening, suggesting both a portal and a letterform. The wordmark is rendered in a condensed uppercase face with generous tracking, never as a default text logo. The favicon uses the halo symbol alone.

### Signature Brand Color
**Kingdom Lime — #d6ff38.** This is the brand's unmistakable signal color: vivid, hopeful, and used sparingly enough to remain meaningful.

## Build Notes

The first page will be a one-page experience with sections for Hero, Manifesto, Selected Works, Studio, and Contact. The copy is original placeholder content for KOG and is not intended to reproduce the reference's text. All visual assets will be generated for this project and referenced through stable uploaded asset URLs.
