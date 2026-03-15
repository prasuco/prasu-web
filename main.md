
# Prasuco Design Guide

*A small product lab.*

---

# 1. Brand Philosophy

**Prasuco is a product lab.**

We build small, useful software and share it with the world.

* Some products become tools.
* Some become libraries.
* Some remain experiments.

Most things we build are **open source**.

We are not a startup studio.
We are not a developer community.

We are simply **a small group of friends hacking on ideas.**

Core ideas:

• Build small
• Ship fast
• Keep things simple
• Share the code

---

# 2. Brand Voice

Tone should feel:

* calm
* thoughtful
* slightly playful
* honest
* builder-oriented

Avoid:

❌ startup buzzwords
❌ corporate tone
❌ hype marketing

Prefer:

✔ simple language
✔ reflective writing
✔ honest descriptions

Example:

Bad

> Revolutionary platform for next-generation digital innovation.

Good

> A small tool to make esewa payments easier.

---

# 3. Logo Usage

Your logo:

**prasuco**

* `pras` → green
* `uco` → neutral

Meaning:

Green represents **building, experimentation, and growth**.

Usage guidelines:

• Use mostly on **dark backgrounds**
• Prefer **left aligned placement**
• Do not modify colors

Clear space:

```
minimum = height of "p"
```

Avoid:

* shadows
* gradients
* distortions

---

# 4. Color System

The UI should stay **very neutral**, letting the content speak.

## Primary Accent

Green

```
#22C55E
```

Use sparingly:

* links
* highlights
* hover states
* logo

---

## Neutral Palette

Background

```
#FFFFFF
```

Primary text

```
#111111
```

Secondary text

```
#6B7280
```

Divider

```
#E5E7EB
```

---

## Dark Mode

Background

```
#0B0B0B
```

Primary text

```
#F3F4F6
```

Secondary text

```
#9CA3AF
```

Accent green stays the same.

---

# 5. Typography

Typography should feel like **reading a clean engineering notebook**.

Primary font

**Inter**

Fallback

```
system-ui
```

Font stack

```
Inter, system-ui, -apple-system, sans-serif
```

---

## Type Scale

| Element       | Size | Weight |
| ------------- | ---- | ------ |
| Hero Title    | 32px | 600    |
| Section Title | 18px | 600    |
| Body          | 15px | 400    |
| Meta text     | 13px | 400    |

---

## Line Height

Body

```
1.6
```

Headings

```
1.3
```

---

# 6. Layout Philosophy

The site should feel like a **minimal personal lab notebook**.

Single column layout.

Max width:

```
680px
```

Structure:

```
Header
Intro
Products
Libraries
Experiments
Writing
Footer
```

Whitespace is extremely important.

Prefer **space over visual elements**.

---

# 7. Components

## Header

Simple identity block.

```
[avatar]  Prabin Subedi
          Full Stack Engineer & Tinkerer

Posts   Github
```

For Prasuco site:

```
prasuco

products
libraries
experiments
github
```

Rules:

* text navigation
* no heavy navbar
* no background bars

---

# 8. Product List

Products are the **core element**.

Structure:

```
[icon] Product Name
      short description
```

Example:

```
Easy Sewa
Making esewa payments easier.
```

Guidelines:

• Keep descriptions short
• Avoid marketing language
• Prefer practical explanations

Spacing:

```
16px between products
```

---

# 9. Libraries Section

When open-sourcing utilities.

Example format:

```
Library Name
Small utility for X
GitHub → 
```

Example tone:

> Lightweight React hook for persistent state.

---

# 10. Experiments

Not everything needs to be polished.

Experiments are welcome.

Example:

```
Geeta Mail
[experiment] get geeta insights in your mail
```

Label experiments clearly.

---

# 11. Writing

Writing should feel like **builder reflections**.

Example titles:

```
Why This Now
Building Small Tools
Shipping Experiments
```

Avoid clickbait titles.

---

# 12. Links

Links are **simple text**.

Hover behavior:

```
color → green
```

Transition

```
150ms ease
```

---

# 13. Footer

Minimal.

Example:

```
built with care by prasuco

github
twitter
```

Or

```
with ❤️ by friends hacking around
```

---

# 14. Motion

Motion should be **almost invisible**.

Allowed:

✔ link hover
✔ fade in

Avoid:

❌ big animations
❌ parallax
❌ fancy transitions

Duration

```
120–180ms
```

---

# 15. Product Philosophy

Prasuco products should aim to be:

**Simple**
**Open**
**Useful**

Typical product types:

* small tools
* dev utilities
* libraries
* experiments
* side projects

Not:

* massive enterprise apps
* complicated platforms

---

# 16. Design Inspirations

The aesthetic fits:

* indie hacker labs
* minimal dev blogs
* engineering notebooks

Focus:

**clarity > design decoration**

---

# 17. Tailwind Implementation

Container

```css
max-w-[680px] mx-auto px-4
```

Sections

```css
mt-12
```

Product list

```css
flex gap-4 items-start
```

Text

```css
text-neutral-900
text-neutral-600
```

---

# 18. Brand Tagline Ideas

Optional short lines:

**Option 1**

> small software lab

**Option 2**

> building small useful software

**Option 3**

> open source tools & experiments

**Option 4 (my favorite)**

> a small lab building useful software

---

# 19. Positioning Summary

Prasuco is:

✔ a product lab
✔ open source friendly
✔ small and experimental

Prasuco is not:

✖ an agency
✖ a developer community
✖ a startup accelerator

It is simply:

> a few friends hacking on ideas.

---

If you want, I can also help you design the **Prasuco website structure**, something like:

```
prasuco.com

/           → lab homepage
/products
/libraries
/experiments
/writing
/about
```

