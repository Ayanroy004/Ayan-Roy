# Ayan Roy – Full-Stack Developer Portfolio

A modern, responsive personal portfolio website built with **React 19**, **TypeScript**, and **Tailwind CSS v4**, featuring interactive code playgrounds, theme switching, cursor spotlight effects, and smooth section navigation.

![Portfolio Preview](https://img.shields.io/badge/status-active-success.svg)
![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38BDF8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## ⚡ Quick Start with NPM

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 1. Clone the repository
```bash
git clone https://github.com/ayan-roy/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot module replacement.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

### 5. Preview production build locally
```bash
npm run preview
```

### 6. Lint & type check
```bash
npm run lint
```

---

## 🛠 Available NPM Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the Vite development server on port `3000` |
| `npm run build` | Compiles TypeScript and creates optimized production assets in `dist/` |
| `npm run preview` | Starts a local server to preview the production build |
| `npm run lint` | Runs TypeScript type checker (`tsc --noEmit`) to validate code |
| `npm run clean` | Removes build output directory (`dist/`) |

---

## 🎨 Features & Highlights

- **4 Designer Themes**:
  - `Deep Charcoal` (Minimalist Obsidian with Electric Sky Cyan)
  - `Midnight Cobalt` (Deep Oceanic Sapphire with Vivid Blue)
  - `Emerald Matrix` (Dark Jade Terminal with Mint)
  - `Violet Nebula` (Cosmic Amethyst with Electric Fuchsia)
- **Interactive Terminal in Hero**:
  - Multi-tab file viewer (`Developer.ts`, `Stack.config.ts`, `Architecture.ts`)
  - Interactive "Run" button simulating live compilation and environment verification
  - One-click copy code to clipboard with animated feedback
- **Spotlight Cursor Illumination**:
  - Real-time mouse-coordinate tracking spotlight on cards (`SpotlightCard`)
- **Centralized Data Architecture**:
  - All profile details, projects, skills, education, and links are managed in a single file (`src/data/portfolioData.ts`)
- **Interactive Project Showcase**:
  - Modal inspection with project screenshots, architectural breakdown, and repository links
  - Category filters: *All*, *Full-Stack*, *Frontend*, *Machine Learning*, *Web App*
- **Curriculum Vitae**:
  - Direct local PDF download (`/resume/Ayan_Roy_CV.pdf`)
  - In-app "View Full Resume" modal with printable formatting
- **Accessible & Responsive**:
  - WCAG AA contrast compliance across all themes
  - ARIA attributes, semantic landmarks, and full keyboard navigation

---

## 📂 Project Structure

```text
├── public/
│   └── resume/
│       └── Ayan_Roy_CV.pdf       # Downloadable resume document
├── src/
│   ├── assets/
│   │   └── images/               # High-fidelity project screenshots & previews
│   ├── components/
│   │   ├── About.tsx             # Academic bio & split-layout info cards
│   │   ├── Contact.tsx           # Contact form with validation & mail client fallback
│   │   ├── Education.tsx         # Vertical academic timeline
│   │   ├── Footer.tsx            # Footer with quick links, social icons & copyright
│   │   ├── Hero.tsx              # First-screen headline, CTAs & code playground
│   │   ├── Journey.tsx           # 6-step engineering growth timeline
│   │   ├── Navbar.tsx            # Sticky header with AR brand mark & theme toggle
│   │   ├── ProjectModal.tsx      # Deep project inspection modal
│   │   ├── Projects.tsx          # Featured showcase with filter tabs
│   │   ├── Resume.tsx            # In-page CV section with download actions
│   │   ├── ResumeModal.tsx       # Printable in-app CV viewer
│   │   ├── Services.tsx          # 4 ability cards (What I Can Do)
│   │   ├── Skills.tsx            # Categorized tech grid with real SVG icons
│   │   ├── SpotlightCard.tsx     # Cursor-following illumination wrapper
│   │   ├── TechIcon.tsx          # SVG brand graphics for languages & tools
│   │   └── ThemeToggle.tsx       # 4-theme palette switcher dropdown
│   ├── context/
│   │   └── ThemeContext.tsx      # Theme state management & localStorage sync
│   ├── data/
│   │   └── portfolioData.ts      # Centralized source of truth for all portfolio content
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Tailwind v4 imports, theme CSS variables & glowing styles
│   └── main.tsx                  # React DOM entry point
├── index.html                    # SEO meta tags, AR favicon & Schema.org JSON-LD
├── package.json                  # NPM packages, dependencies & scripts
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite build and Tailwind CSS configuration
```

---

## ⚙️ Customization Guide

To personalize the portfolio with your own details:

1. Open `src/data/portfolioData.ts`.
2. Update the `profile` object (name, email, titles, social links, biography).
3. Modify the `projects` array with your own real-world projects and preview images.
4. Replace or update the PDF resume in `public/resume/Ayan_Roy_CV.pdf`.
5. Run `npm run build` to verify everything compiles cleanly!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
Designed & Developed with Passion by **Ayan Roy**.
