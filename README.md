# 🌐 Ayesha Gayanthi — Personal Portfolio

A modern, responsive personal portfolio website built to showcase my projects, technical skills, and experience as a Full Stack Developer. Designed and developed from scratch using React, TypeScript, and Tailwind CSS — deployed on Vercel.

🔗 **Live Site:** [my-portfolio-9rf2.vercel.app](https://my-portfolio-9rf2.vercel.app)
📂 **Repository:** [github.com/it23677296-ayesha/my-portfolio](https://github.com/it23677296-ayesha/my-portfolio)

<img width="500" alt="Screenshot 2026-07-02 225441" src="https://github.com/user-attachments/assets/258f17fc-328d-432b-928f-73099ac2186a" />
<img width="500" alt="Screenshot 2026-07-02 225501" src="https://github.com/user-attachments/assets/75fa26f1-ebc3-4004-bdeb-e6712eb953b6" />
<img width="500" alt="Screenshot 2026-07-02 225558" src="https://github.com/user-attachments/assets/b52bb350-54be-4f6b-af13-d514d43014d5" />
<img width="500" alt="Screenshot 2026-07-02 225626" src="https://github.com/user-attachments/assets/cc7c79b4-43c4-4c7c-8526-65e36c397705" />

## 📖 About

This portfolio represents my journey as a **3rd-year BSc (Hons) Information Technology** undergraduate at **SLIIT (Malabe)**, currently seeking a **Full Stack Developer internship**. It's built to give recruiters and collaborators a fast, clean overview of who I am, what I've built, and what I bring to a team.

The site is organized into four routed pages:

- **Home** — hero intro, quick highlights, and CV download
- **About** — bio, profile photo, and skills matrix
- **Projects** — detailed breakdown of group (web) and individual (mobile) projects
- **Contact** — contact form + direct social/email links

I built this project end-to-end — component architecture, Tailwind design system, form handling, and deployment — as both a real portfolio and a demonstration of my frontend skills.

---

## ✨ Features

| Feature | Details |
|---|---|
| 📱 Fully responsive | Mobile-first layout tested across breakpoints (`sm`, `md`, `lg`) using Tailwind's responsive utilities |
| 🧭 Client-side routing | Multi-page navigation (Home, About, Projects, Contact) via React Router DOM with active-link highlighting, no full page reloads |
| 🌗 Light/Dark mode toggle | Theme switcher in the navbar with preference saved in `localStorage` |
| 🗂️ Categorized project showcase | Web projects (group work) and Mobile apps (individual work) shown separately, each with tech tags and a direct GitHub repo link |
| 🧩 Component-based architecture | Reusable, isolated components under `layout/`, `sections/`, and `common/` for easy maintenance |
| 🎯 Skills matrix | Skills grouped into 6 categories — Languages, Frontend, Backend, Database, Mobile, Tools |
| 📄 One-click CV download | Recruiters can download my CV as a PDF directly from the Hero section |
| ✉️ Contact form with validation | Client-side validation for name, email format, and message before submission, with inline error messages and status feedback |
| 🍔 Responsive mobile navbar | Sticky navbar that collapses into a hamburger menu (open/close icon toggle) on smaller screens |
| ⚡ Fast builds & HMR | Powered by Vite for instant dev server start and hot module replacement |
| 🔍 Type-safe codebase | Written entirely in TypeScript with strict typing across components and data models |

---

## 🛠️ Tech Stack

| Category   | Technologies |
|------------|-------------|
| Frontend   | React 18, TypeScript, React Router DOM |
| Styling    | Tailwind CSS, PostCSS, Autoprefixer |
| Icons      | React Icons, Font Awesome |
| Build Tool | Vite 7 |
| Linting    | ESLint + typescript-eslint |
| Deployment | Vercel (auto-deploy on push to `main`) |
| Version Control | Git & GitHub |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── cv/                        # Downloadable CV (PDF)
│   ├── profile.jpeg               # Profile photo
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   └── Footer.tsx          # Site-wide footer with social links
│   │   ├── layout/
│   │   │   └── Navbar.tsx          # Sticky navbar with mobile hamburger menu
│   │   └── sections/               # Page sections
│   │        ├── Hero.tsx            #   - Landing intro + CV download
│   │        ├── About.tsx           #   - Bio & profile photo
│   │        ├── Skills.tsx          #   - Categorized skills grid
│   │        ├── Projects.tsx        #   - Web & mobile project cards
│   │        ├── Education.tsx       #   - Academic background & coursework
│   │        └── Contact.tsx         #   - Contact form with validation
│   ├── pages/                      # Route-level pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── styles/                     # Global styles
│   ├── App.tsx                     # Route definitions
│   ├── main.tsx                    # App entry point
│   └── vite-env.d.ts
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.app.json / tsconfig.node.json
└── package.json
```

---

## 🚀 Featured Projects

### 🌐 Web Projects (Group)

| Project | Tech Stack | Description |
|---|---|---|
| [**UniSpectra**](https://github.com/Chenuka01/UniSpectra) | React.js · Spring Boot · MySQL | Multi-module university platform. Built the **Assignment Workflow module** — task creation, Kanban-style tracking, and an AI-powered Research Assistant for topic/resource suggestions. |
| [**Smart Campus Hub**](https://github.com/Chenuka01/smart-campus-hub) | React · TypeScript · Spring Boot · MySQL | University ecosystem app for facility management. Built the **Facility & Asset Management module** — smart catalog with real-time availability, categorization, and favorites for quick booking. |

### 📱 Mobile Applications (Individual)

| Project | Tech Stack | Description |
|---|---|---|
| [**QuickBus**](https://github.com/it23677296-ayesha/quick-bus-app) | Kotlin · XML · Android Studio | Android app for bus route search, schedule viewing, seat booking, and payments. Built the end-to-end user flow — authentication, profile management, and bottom-navigation UI. |
| [**TaskFlow**](https://github.com/it23677296-ayesha/task-flow-app) | Kotlin · MPAndroidChart · Android Studio | Productivity app with habit tracking, mood logging, hydration monitoring, and progress charts. Includes a home-screen widget, scheduled reminders, and local data persistence. |

> Each project card on the live site links directly to its GitHub repository for full source code and documentation.

---

## 🎓 Education

**BSc (Hons) in Information Technology** — Sri Lanka Institute of Information Technology (SLIIT), Malabe
*Oct 2023 – Present · 3rd Year*

Relevant coursework: OOP · Data Structures & Algorithms · DBMS · Software Frameworks · Mobile App Development · IT Project Management

---

## 🎨 Design Approach

- **Color system** — a consistent indigo/blue accent palette on a slate neutral background, applied through Tailwind utility classes and global overrides in `src/styles/index.css`
- **Card-based layout** — projects and skills are presented as cards with hover states for a polished, interactive feel
- **Section rhythm** — consistent vertical spacing (`py-16 md:py-20`) and section titles/subtitles across pages for visual consistency
- **Accessibility-minded** — semantic HTML, `aria-label`s on icon-only buttons/links, sufficient color contrast, and descriptive link text (e.g. "View Repository") rather than generic "click here" links

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/it23677296-ayesha/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server with hot reload |
| `npm run build` | Type-check with `tsc -b` and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project (requires adding `eslint.config.js` for ESLint v9) |

---

## ☁️ Deployment

This project is deployed on **Vercel**, connected directly to the `main` branch of this repository. Every push triggers an automatic build and deployment — no manual deploy steps needed.

To deploy your own copy:
1. Fork/clone this repository
2. Import the project into [Vercel](https://vercel.com/new)
3. Vercel auto-detects the Vite framework preset — no extra configuration needed
4. Deploy 🚀

---

## 🗺️ Roadmap

Planned improvements for future iterations:

- [x] Dark mode toggle (light/dark theme switch with saved preference)
- [ ] Scroll/entry animations (e.g. Framer Motion)
- [ ] Backend integration for the contact form (currently client-side validated only)
- [ ] Blog/notes section for technical write-ups
- [ ] Unit tests for key components
- [ ] Improve Lighthouse performance & accessibility scores

---

## 📬 Contact

- **GitHub:** [@it23677296-ayesha](https://github.com/it23677296-ayesha)
- **LinkedIn:** [Ayesha Withanage](https://www.linkedin.com/in/ayesha-withanage-595aaa343/)
- **Email:** [ayesha20021210@gmail.com](mailto:ayesha20021210@gmail.com)
- **Portfolio:** [my-portfolio-9rf2.vercel.app](https://my-portfolio-9rf2.vercel.app)

---

## 🙏 Acknowledgments

- Icons by [React Icons](https://react-icons.github.io/react-icons/) and [Font Awesome](https://fontawesome.com/)
- Built and deployed with [Vite](https://vitejs.dev/) and [Vercel](https://vercel.com/)

---

## 📄 License

This project is open source under the **MIT License**. Feel free to fork it as a starting point for your own portfolio — please avoid copying personal content/CV details directly.
