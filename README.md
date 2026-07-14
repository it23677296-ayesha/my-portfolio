# 🌐 Ayesha Gayanthi — Developer Portfolio

A modern, responsive, multi-page personal portfolio website showcasing my projects, technical skills, and academic background as a Full Stack Developer and 3rd-year IT undergraduate at SLIIT.

**Built with:** React 18 · TypeScript · Vite 7 · Tailwind CSS 3 · React Router v6 · Deployed on Vercel

**🔗 Live site:** [my-portfolio-9rf2.vercel.app](https://my-portfolio-9rf2.vercel.app/)

---

<img width="400" height="1723" alt="portfolio-light-mode" src="https://github.com/user-attachments/assets/4bc00d2d-824e-403a-826f-90138cb7a54f" />
<img width="400" height="1723" alt="portfolio-dark-mode" src="https://github.com/user-attachments/assets/4c7b076f-8538-4698-8fc2-282b1691f46d" />
<img width="400" height="600" alt="contact-dark-mode" src="https://github.com/user-attachments/assets/30613aa7-10f8-401a-b9a8-fe9dfdb3d572" />
<img width="400" height="600" alt="contact-light-mode" src="https://github.com/user-attachments/assets/1a0f4e23-4fcb-43da-88d1-4ba2c64d0d92" />

---

## ✨ Overview

This is a multi-page portfolio built from scratch with **React + TypeScript + Vite**, styled entirely with **Tailwind CSS**, and routed with **React Router**. Instead of one long scrolling page, it's structured as a proper multi-route site — `Home`, `About`, `Projects`, and `Contact` — closer to how a real product website is organized.

The site brings together my SLIIT academic background, a categorized breakdown of my technical skills (languages, frontend, backend, database, mobile, and tools), and a showcase of both group university projects and individual Android apps. It includes a fully working contact form wired up to **Formspree**, a one-click CV download, and a **light/dark theme toggle** with the preference persisted to `localStorage`.

The design uses an indigo/purple accent on a clean slate color base, with full dark-mode styling across every component via Tailwind's `dark:` variants, smooth hover/scroll micro-interactions, and a fully responsive layout that collapses into a mobile hamburger menu on smaller screens. It's deployed on Vercel with a SPA rewrite rule so every route — not just the homepage — loads correctly on direct visit or refresh.

---

## 🌟 Features

- **Multi-page routing** — real routes (`/`, `/about`, `/projects`, `/contact`) instead of a single scrolling page, powered by React Router v6.
- **Light/dark mode toggle** — a `ThemeContext` + `ThemeToggle` component manage theme state, persist the choice to `localStorage`, and toggle a `dark` class on `<html>` that Tailwind's `dark:` variants key off of. Defaults to light mode.
- **Responsive design** — mobile-first layout with a collapsible hamburger menu in the `Navbar` and responsive grids across Skills/Projects sections.
- **Animated Hero section** — gradient background, an "Open to Internships" status badge, quick-fact chips (React · Spring Boot, Android · Kotlin, MySQL · MongoDB), social links, and an animated scroll indicator.
- **Working contact form** — client-side validation (required name/message, email format check) with `idle` / `loading` / `success` / `error` states, submitted via **Formspree** so no custom backend is required.
- **One-click CV download** — a "Download CV" button on both the Hero and Contact sections triggers a direct download of `/cv/Ayesha_Gayanthi_CV.pdf`.
- **Project showcase** — projects split into **Web** and **Mobile** categories, each tagged *Group Project* or *Individual Project*, with tech stack, description, and a direct GitHub link.
- **Social links** — GitHub, LinkedIn, and email icons (via `react-icons`) in the Hero, Navbar, and Footer.

---

## 🧩 Pages

| Route | Page | Renders |
|---|---|---|
| `/` | **Home** | Hero → About → Skills → Projects → Education |
| `/about` | **About** | About → Skills → Education |
| `/projects` | **Projects** | Full project showcase (Web + Mobile) |
| `/contact` | **Contact** | Contact form + CV download |

Since `Home`, `About`, `Projects`, and `Contact` all compose the same underlying section components (`Hero`, `About`, `Skills`, `Projects`, `Education`, `Contact`), each section only has to be built once and is reused across pages. Navigation is handled via a sticky, responsive `Navbar` with active-link highlighting (`NavLink`) and a shared `Footer` on every page.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 7 |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS 3.4 (with `dark:` mode support) |
| Icons | `react-icons` (Font Awesome set) |
| Theme persistence | React Context + `localStorage` |
| Form handling | Formspree (serverless form submissions) |
| Linting | ESLint (`typescript-eslint`, React Hooks & React Refresh plugins) |
| Hosting | Vercel, with SPA rewrite rules |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── cv/
│   │   └── Ayesha_Gayanthi_CV.pdf     # Downloadable CV
│   ├── profile.jpeg                    # Profile photo
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Footer.tsx             # Site-wide footer with social links
│   │   │   └── ThemeToggle.tsx        # Light/dark mode switch button
│   │   ├── layout/
│   │   │   └── Navbar.tsx             # Sticky navbar with mobile hamburger menu
│   │   └── sections/                  # Reusable page sections
│   │       ├── Hero.tsx               #   - Landing intro + CV download
│   │       ├── About.tsx              #   - Bio & profile photo
│   │       ├── Skills.tsx             #   - Categorized skills grid
│   │       ├── Projects.tsx           #   - Web & mobile project cards
│   │       ├── Education.tsx          #   - Academic background
│   │       └── Contact.tsx            #   - Contact form with validation
│   ├── context/
│   │   └── ThemeContext.tsx           # Theme provider (light/dark + localStorage)
│   ├── pages/                          # Route-level pages (compose sections above)
│   │   ├── Home.tsx                    #   - "/"
│   │   ├── About.tsx                   #   - "/about"
│   │   ├── Projects.tsx                #   - "/projects"
│   │   └── Contact.tsx                 #   - "/contact"
│   ├── styles/
│   │   └── index.css                   # Global styles & Tailwind directives
│   ├── App.tsx                         # Route definitions
│   ├── main.tsx                        # App entry point
│   └── vite-env.d.ts
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vercel.json                         # SPA rewrite rule for Vercel
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 🚀 Featured Projects

### 🌐 Web (Group Projects)
| Project | Tech | Description | Link |
|---|---|---|---|
| **UniSpectra** | React.js · Spring Boot · MySQL | Multi-module university platform. Built the Assignment Workflow module — task creation, Kanban-style tracking, and an AI-powered Research Assistant for topic/resource suggestions. | [GitHub](https://github.com/Chenuka01/UniSpectra) |
| **Smart Campus Hub** | React · TypeScript · Spring Boot · MySQL | University ecosystem for facility management. Built the Facility & Asset Management module — smart catalog with real-time availability, categorization, and favorites for quick booking. | [GitHub](https://github.com/Chenuka01/smart-campus-hub) |

### 📱 Mobile (Individual Projects)
| Project | Tech | Description | Link |
|---|---|---|---|
| **QuickBus** | Kotlin · XML · Android Studio | Android app for bus route search, schedule viewing, seat booking, and payments. Full end-to-end user flow with authentication, profile management, and bottom-navigation UI. | [GitHub](https://github.com/it23677296-ayesha/quick-bus-app) |
| **TaskFlow** | Kotlin · MPAndroidChart · WorkManager · Android Studio | Habit-tracker productivity app with mood logging, hydration monitoring, and progress charts. Includes scheduled reminders (via WorkManager) and local data persistence. | [GitHub](https://github.com/it23677296-ayesha/task-flow-app) |

---

## 🧠 Technical Skills

Skills are grouped into categories on the **Skills** section:

- **Languages:** Java, JavaScript, PHP, SQL, Kotlin
- **Frontend:** React.js, HTML5 / CSS3, Bootstrap, Tailwind CSS
- **Backend:** Node.js, Express.js, Spring Boot, Java Servlets & JSP, REST APIs
- **Database:** MySQL, MongoDB
- **Mobile:** Android Studio, Kotlin, XML UI
- **Tools:** Git / GitHub, VS Code, Eclipse, Postman

---

## 🎓 Education

**BSc (Hons) in Information Technology**
Sri Lanka Institute of Information Technology (SLIIT), Malabe
Oct 2023 – Present · 3rd Year

---

## 🎨 Design Notes

- **Color palette:** Indigo/purple accent on a slate base — light mode uses white/slate-50 backgrounds, dark mode switches to slate-900/950 via Tailwind's `dark:` variants applied throughout every component.
- **Theme system:** `ThemeContext` exposes `theme` and `toggleTheme`; on change it adds/removes the `dark` class on `document.documentElement` and writes the choice to `localStorage` so it persists across visits. Defaults to light mode on first load.
- **Typography:** System UI stack (`Segoe UI`, `Tahoma`, `Geneva`, `Verdana`) configured in `tailwind.config.js` for consistent cross-platform rendering.
- **Cards:** Left-border accent cards (`border-l-4`) used consistently across Skills, Projects, and other content blocks for a clean, scannable layout.
- **Micro-interactions:** Hover-lift effects on buttons, an animated scroll indicator on the Hero, and `transition-colors duration-300` classes for smooth light/dark transitions.

---

## 💻 Getting Started

Clone and run locally:

```bash
git clone <repo-url>
cd portfolio
npm install
npm run dev
```

Other available scripts:

```bash
npm run build     # Type-check (tsc -b) + production build
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## 📦 Deployment

Deployed on **Vercel** at [my-portfolio-9rf2.vercel.app](https://my-portfolio-9rf2.vercel.app/).

Because this is a client-side-routed single-page app, a plain static deploy would 404 on any route other than `/` when accessed directly or refreshed (e.g. `/projects`). The `vercel.json` rewrite rule fixes this:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This tells Vercel to always serve `index.html` and let React Router handle routing on the client.

**To deploy your own copy:**
1. Push the repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — the `vercel.json` rewrite is picked up automatically.

---

## 📬 Contact Form Setup

The Contact section's form posts to **Formspree** via `fetch`, so there's no custom backend to maintain. Fields (name, email, message) are validated client-side before submission — required-field checks plus a regex email format check — with `idle` / `loading` / `success` / `error` states shown to the user throughout. To reuse this for your own portfolio, swap in your own Formspree endpoint.

---

## 🗺️ Roadmap / Ideas for Improvement

- [ ] Add project screenshots/thumbnails to the Projects cards
- [ ] Add a blog or "Notes" section for write-ups
- [ ] Add unit tests (Vitest + React Testing Library)
- [ ] Add subtle page-transition animations between routes
- [ ] SEO metadata (Open Graph tags, favicon set) for link previews
- [ ] Centralize site content (name, links, project data) into a single `src/data` config file

---

## 👤 Author

**W. Ayesha Gayanthi Withanage**
3rd Year IT Undergraduate, SLIIT

- GitHub: [@it23677296-ayesha](https://github.com/it23677296-ayesha)
- LinkedIn: [ayesha-withanage](https://www.linkedin.com/in/ayesha-withanage-595aaa343/)
- Email: ayesha20021210@gmail.com

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details. Copyright (c) 2026 Ayesha Gayanthi.

You're free to use, copy, modify, and distribute this code (even commercially), as long as the original copyright notice and license text are included. Note that this covers the *code* — please don't reuse the personal content (name, CV, project write-ups, photos) as your own.
