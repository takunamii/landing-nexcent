# Nexcent

[![Demo](https://img.shields.io/badge/demo-live-success)](https://landing-nexcent.netlify.app/)

**Live Demo:** https://landing-nexcent.netlify.app/

A responsive corporate landing page built from a Figma design using HTML, CSS, and Vanilla JavaScript.

The project focuses on responsive design, semantic HTML, modern CSS layout techniques, accessibility, and interactive UI without relying on frameworks or external JavaScript libraries.

## Features

* Fully responsive layout
* Mobile burger menu
* Hero slider
* Slider navigation
* Slider autoplay
* Semantic HTML5
* CSS Grid and Flexbox
* Responsive typography with `clamp()`
* Keyboard-friendly navigation
* `aria-expanded` support
* `Esc` key support
* Click-outside menu handling
* No JavaScript frameworks or libraries

## Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts

## Project Overview

Nexcent is a modern corporate landing page based on a Figma design.

The page includes a hero section with a slider, client logos, feature sections, statistics, product information, marketing cards, call-to-action sections, and a footer.

The project was built from scratch with a focus on accurate design implementation and responsive behavior across different screen sizes.

## Project Structure

```text
landing-nexcent/
├── index.html
└── assets/
    ├── css/
    │   ├── reset.css
    │   └── main.css
    ├── javascript/
    │   └── main.js
    ├── images/
    └── design.png
```

## JavaScript

Vanilla JavaScript is used to implement the interactive functionality of the page.

The main functionality includes:

* mobile navigation;
* menu open and close behavior;
* `aria-expanded` state management;
* closing the menu with the `Esc` key;
* closing the menu when clicking outside;
* hero slider;
* slide navigation;
* slider autoplay.

## Responsive Design

The layout is optimized for screen sizes starting from **320px**.

| Breakpoint | Behavior                                |
| ---------- | --------------------------------------- |
| `≥ 1100px` | Desktop navigation                      |
| `≤ 1100px` | Mobile navigation                       |
| `≤ 920px`  | Main sections switch to a column layout |
| `≤ 770px`  | Additional layout adjustments           |
| `≤ 450px`  | Footer switches to a single column      |
| `320px`    | No horizontal overflow                  |

## Getting Started

No dependencies are required.

You can open `index.html` directly in your browser.

Alternatively, run a local development server:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

You can also use:

```bash
npx serve .
```

## Design

The project was implemented based on a Figma design.

The design reference is included in:

```text
assets/design.png
```

## Project Goals

This project was created to practice:

* responsive web development;
* semantic HTML;
* modern CSS;
* CSS Grid and Flexbox;
* responsive typography;
* Vanilla JavaScript;
* accessibility;
* Figma-to-code implementation.

## License

This project is intended for educational and portfolio purposes.
