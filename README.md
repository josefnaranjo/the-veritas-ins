# Veritas Institute – Website Prototype

This is the prototype for the **Veritas Institute** website, built with [Next.js](https://nextjs.org/) and [Tailwind CSS v4](https://tailwindcss.com/).  
It’s designed as a **static, responsive site** that communicates our mission and serves as a foundation for future development.

---

## ✨ Tech Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS v4
- **Deployment:** [Vercel](https://vercel.com/) (auto-deploy from main branch)
- **Language:** TypeScript

---

## 📂 Project Structure
```
src/
  app/
    layout.tsx        # Root layout (header/footer and global structure)
    page.tsx          # Home page
    globals.css       # Tailwind v4 imports
  components/
    Header.tsx        # Shared header (WIP)
    Footer.tsx        # Shared footer (WIP)
public/               # Static assets
tailwind.config.js    # Tailwind configuration
postcss.config.mjs    # PostCSS configuration for Tailwind v4
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended, v20 or newer)
- npm (v10+)

### Installation
Clone the repo and install dependencies:
```bash
git clone https://github.com/<your-username>/veritas-prototype.git
cd veritas-prototype
npm install
```

### Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

---

## 📌 Notes
- This is a **prototype**; content and components will evolve.
- Future enhancements include:
  - Adding About and Contact pages
  - Integrating a CMS for team content updates
  - SEO optimization and accessibility refinements

---

## 📄 License
© 2025 Veritas Institute – For internal and volunteer use only.
