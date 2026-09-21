# Nexcent

[![Demo](https://img.shields.io/badge/demo-live-success)](https://landing-nexcent.netlify.app/)

**Live Demo:** https://landing-nexcent.netlify.app/

Адаптивный landing page **Nexcent**, созданный по макету из Figma с использованием чистого HTML, CSS и Vanilla JavaScript.

Проект реализован без фреймворков и сборщиков. Основное внимание уделено responsive design, семантической разметке, современной CSS-вёрстке и интерактивности на JavaScript.

## ✨ Features

* Fully responsive layout
* Mobile burger menu
* Hero slider
* Slider navigation
* Slider autoplay
* Semantic HTML5
* CSS Grid & Flexbox
* Responsive typography with `clamp()`
* Keyboard-friendly navigation
* `aria-expanded` support
* `Esc` key support
* No JavaScript frameworks or libraries

## 🛠️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* CSS Grid
* Flexbox
* CSS Custom Properties
* Google Fonts

## 📋 Project Overview

Nexcent is a modern corporate landing page based on a Figma design.

The page includes a hero slider, client logos, feature sections, statistics, product information, marketing cards, CTA and footer.

The project was built from scratch with a focus on responsive behavior and clean frontend implementation without using UI frameworks.

## 📁 Project Structure

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

## 🎞️ JavaScript

Vanilla JavaScript is used for interactive functionality:

* mobile navigation;
* menu open / close behavior;
* `aria-expanded` state;
* closing the menu with `Esc`;
* closing the menu when clicking outside;
* hero slider;
* slide navigation;
* slider autoplay.

## 📱 Responsive Design

The layout is optimized for screens starting from **320px**.

| Breakpoint | Behavior                                |
| ---------- | --------------------------------------- |
| `≥ 1100px` | Desktop navigation                      |
| `≤ 1100px` | Mobile navigation                       |
| `≤ 920px`  | Main sections switch to a column layout |
| `≤ 770px`  | Additional content adjustments          |
| `≤ 450px`  | Footer becomes a single column          |
| `320px`    | No horizontal overflow                  |

## 🚀 Getting Started

No dependencies are required.

Simply open:

```text
index.html
```

in your browser.

Or start a local server:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## 🎨 Design

The project was implemented based on a Figma design.

The design reference is included in:

```text
assets/design.png
```

## 🎯 Purpose

This project was created to practice:

* responsive web development;
* semantic HTML;
* modern CSS;
* CSS Grid and Flexbox;
* Vanilla JavaScript;
* accessibility;
* Figma-to-code implementation.

## 📄 License

This project is intended for educational and portfolio purposes.
