# 🌐 Ayesha Gayanthi — Developer Portfolio

A modern, responsive personal portfolio website showcasing my projects, skills, and background as a Full Stack Developer and 3rd-year IT undergraduate at SLIIT.

**Built with:** React 18 · TypeScript · Vite · Tailwind CSS · React Router · Deployed on Vercel

**🔗 Live site:** [my-portfolio-9rf2.vercel.app](https://my-portfolio-9rf2.vercel.app/)

---

<img width="500" alt="Screenshot 2026-07-04 172515" src="https://github.com/user-attachments/assets/e17b3dad-6aec-45b4-bf46-2bc543284fee" />
<img width="500" alt="Screenshot 2026-07-04 172534" src="https://github.com/user-attachments/assets/b7b24832-9e54-49fd-83fb-f186bb717b59" />
<img width="500" alt="Screenshot 2026-07-04 172558" src="https://github.com/user-attachments/assets/f08c56a5-6c2b-47e4-bc9c-b094fe24c0b6" />
<img width="500" alt="Screenshot 2026-07-04 172618" src="https://github.com/user-attachments/assets/ce77bb58-a247-477f-8130-aa37ce01cf11" />

---

## ✨ Overview

This is a multi-page portfolio built from scratch with **React + TypeScript + Vite**, styled entirely with **Tailwind CSS**, and routed with **React Router**. Rather than a single long scrolling page, it's structured as a proper multi-route site with dedicated Home, About, Projects, and Contact pages — closer to how a real product website is organized.

The site brings together my academic background at SLIIT, a categorized breakdown of my technical skills (languages, frontend, backend, database, mobile, and tools), and a showcase of both my group university projects and individual Android apps. It also includes a fully working contact form wired up to Formspree, and a one-click CV download so recruiters or visitors can grab my resume directly without needing to ask.

The design leans on a dark, indigo-accented aesthetic with full dark-mode class support throughout every component, smooth hover/scroll micro-interactions, and a fully responsive layout that collapses into a mobile hamburger menu on smaller screens. It's deployed on Vercel with proper SPA rewrite rules so every route — not just the homepage — works correctly on direct load or refresh.

---

## 🌟 Features

- **Multi-page routing** — real routes (`/`, `/about`, `/projects`, `/contact`) instead of a single scrolling page, with `vercel.json` rewrites so deep links and page refreshes work correctly on Vercel.
- **Dark mode support** — components are styled with Tailwind's `dark:` variants throughout (Navbar, sections, cards).
- **Responsive design** — mobile-first layout with a collapsible hamburger menu in the Navbar and responsive grids for Skills/Projects.
- **Animated Hero section** — gradient background, status badge ("Open to Internships"), quick-facts chips (React · Spring Boot, Android · Kotlin, MySQL · MongoDB), and a scroll-indicator animation.
- **Working contact form** — client-side validation (required fields, email format) with loading/success/error states, submitted via **Formspree** so no custom backend is needed.
- **One-click CV download** — a `Download CV` button on both the Hero and Contact sections triggers a direct download of `/cv/Ayesha_Gayanthi_CV.pdf`.
- **Project showcase** — projects are split into **Web** and **Mobile** categories, each card tagged as *Group Project* or *Individual Project*, with tech stack, description, and a direct GitHub link.
- **Social links** — GitHub, LinkedIn, and email icons in the Hero, all pointing to real profiles.

---

## 🧩 Pages

The site is a proper multi-page SPA with four routes:

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero intro → About summary → Skills → Projects preview → Education |
| `/about` | **About** | Extended background & bio |
| `/projects` | **Projects** | Full project showcase (web + mobile) |
| `/contact` | **Contact** | Contact form + CV download |

Navigation is handled via a responsive `Navbar` (with active-link highlighting via `NavLink`) and a shared `Footer` across all pages.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 7 |
| Routing | React Router DOM v6 |
| Styling | Tailwind CSS 3.4 (with dark mode) |
| Icons | react-icons (Font Awesome set) |
| Form handling | Formspree (serverless form submissions) |
| Linting | ESLint (with `typescript-eslint`, React Hooks & React Refresh plugins) |
| Hosting | Vercel, with SPA rewrite rules |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── cv/
│   │   └── Ayesha_Gayanthi_CV.pdf   # Downloadable CV
│   ├── profile.jpeg                  # Profile photo
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── Footer.tsx           # Site-wide footer with social links
│   │   ├── layout/
│   │   │   └── Navbar.tsx           # Sticky navbar with mobile hamburger menu
│   │   └── sections/                # Page sections
│   │       ├── Hero.tsx             #   - Landing intro + CV download
│   │       ├── About.tsx            #   - Bio & profile photo
│   │       ├── Skills.tsx           #   - Categorized skills grid
│   │       ├── Projects.tsx         #   - Web & mobile project cards
│   │       ├── Education.tsx        #   - Academic background
│   │       └── Contact.tsx          #   - Contact form with validation
│   ├── data/
│   │   └── index.ts                 # Centralized site config (name, title, social links)
│   ├── pages/                       # Route-level pages
│   │   ├── Home.tsx                 #   - "/"
│   │   ├── About.tsx                #   - "/about"
│   │   ├── Projects.tsx             #   - "/projects"
│   │   └── Contact.tsx              #   - "/contact"
│   ├── styles/
│   │   └── index.css                # Global styles
│   ├── App.tsx                      # Route definitions
│   ├── main.tsx                     # App entry point
│   └── vite-env.d.ts
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vercel.json                       # SPA rewrite rules for Vercel
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
| **TaskFlow** | Kotlin · MPAndroidChart · Android Studio | Productivity app with habit tracking, mood logging, hydration monitoring, and progress charts. Includes a home-screen widget, scheduled reminders, and local data persistence. | [GitHub](https://github.com/it23677296-ayesha/task-flow-app) |

---

## 🧠 Technical Skills

Skills are grouped into categories on the **Skills** section of the Home page:

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

- **Color palette:** Indigo/purple accent on a slate (dark) base, with a light-mode counterpart via Tailwind's `dark:` variants.
- **Typography:** System UI stack (`Segoe UI`, `Tahoma`, `Geneva`, `Verdana`) configured in `tailwind.config.js` for consistent cross-platform rendering.
- **Cards:** Left-border accent cards (`border-l-4`) used consistently across Skills, Projects, and other content blocks for a clean, scannable layout.
- **Micro-interactions:** Hover lift effects on buttons, animated scroll-indicator on the Hero section, and smooth color-transition classes (`transition-colors duration-300`) for dark-mode toggling.

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
npm run build     # Type-check + production build
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

This tells Vercel to always serve `index.html` and let React Router handle the routing client-side.

**To deploy your own copy:**
1. Push the repo to GitHub.
2. Import it into [Vercel](https://vercel.com/new).
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — the `vercel.json` rewrites are picked up automatically.

---

## 📬 Contact Form Setup

The Contact page form posts to **Formspree** (`https://formspree.io/f/...`) via `fetch`, so there's no custom backend to maintain. Fields are validated client-side (name, valid email, message) before submission, with `idle` / `loading` / `success` / `error` states shown to the user. To reuse this for your own portfolio, swap in your own Formspree endpoint ID.

---

## 🗺️ Roadmap / Ideas for Improvement

- [ ] Add project screenshots/thumbnails to the Projects cards
- [ ] Add a blog or "Notes" section for write-ups
- [ ] Add unit tests (Vitest + React Testing Library)
- [ ] Add subtle page-transition animations between routes
- [ ] SEO metadata (Open Graph tags, favicon set) for link previews

---

## 👤 Author

**W. Ayesha Gayanthi Withanage**
3rd Year IT Undergraduate, SLIIT

- GitHub: [@it23677296-ayesha](https://github.com/it23677296-ayesha)
- LinkedIn: [ayesha-withanage](https://www.linkedin.com/in/ayesha-withanage-595aaa343/)
- Email: ayesha20021210@gmail.com

---

## 📄 License

This project is for personal portfolio use. Feel free to reference the structure, but please don't copy the content/branding directly.
