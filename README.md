# Patrick Vuong - Modern Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing professional experience, skills, projects, and contact information. This portfolio was designed with a focus on clean UI/UX and smooth animations to create an engaging user experience.

[![Built with React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4.1-646cff?logo=vite)](https://vitejs.dev/)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Design](#-design)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI Components**: Built with Radix UI primitives for accessibility and customization
- **Smooth Animations**: Engaging animations powered by Motion (Framer Motion) for enhanced user experience
- **Interactive Navigation**: Smooth scrolling navigation with active section highlighting
- **Hero Section**: Eye-catching hero section with professional introduction and social links
- **About Section**: Personal introduction with profile image and downloadable resume
- **Skills Showcase**: Visual display of technical and professional skills
- **Experience Timeline**: Professional experience displayed in an organized timeline format
- **Projects Gallery**: Showcase of featured marketing campaigns and projects
- **Contact Form**: Functional contact form for easy communication
- **Dark Mode Support**: Theme switching capability with next-themes
- **Icon Library**: Comprehensive icon set from Lucide React
- **Type Safety**: Full TypeScript support for better developer experience and code quality

## 🛠️ Tech Stack

### Core
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite 6.4.1** - Lightning-fast build tool and dev server

### UI Components & Styling
- **Radix UI** - Unstyled, accessible component primitives including:
  - Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, Navigation Menu, Popover, Select, Tabs, Tooltip, and more
- **Tailwind CSS v4** - Utility-first CSS framework for styling
- **class-variance-authority** - For managing component variants
- **clsx** & **tailwind-merge** - For conditional className merging

### Animation & Interaction
- **Motion (Framer Motion)** - Production-ready motion library for React
- **Embla Carousel** - Lightweight carousel library

### Forms & Validation
- **React Hook Form 7.55.0** - Performant, flexible forms with validation
- **Input OTP** - One-time password input component

### Additional Libraries
- **Lucide React 0.462.0** - Beautiful & consistent icon library
- **React Day Picker 8.10.1** - Date picker component
- **Recharts 2.15.2** - Chart library built with React components
- **Sonner 2.0.3** - Opinionated toast component
- **CMDK 1.1.1** - Command menu component
- **next-themes 0.4.6** - Theme switching support

### Development Tools
- **@vitejs/plugin-react-swc** - Fast refresh using SWC
- **@types/node** - TypeScript definitions for Node.js

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v20.x or higher recommended)
- **npm** (comes with Node.js) or **yarn** / **pnpm**

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/patrick-vuong/Patrick-Vuong-Portfolio.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Patrick-Vuong-Portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

   > **Note:** After installation, `node_modules/` and `build/` directories are automatically ignored by git through the `.gitignore` file. These directories should never be committed to the repository. If you see them being staged, refer to the [Troubleshooting](#-troubleshooting) section.

## 💻 Usage

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will open automatically at [http://localhost:3000](http://localhost:3000).

### Production Build

Build the application for production:

```bash
npm run build
```

The optimized production build will be created in the `build` directory (as configured in `vite.config.ts`).

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
Patrick-Vuong-Portfolio/
├── src/
│   ├── assets/              # Images and static assets
│   │   └── *.png           # Project images and icons
│   ├── components/          # React components
│   │   ├── About.tsx       # About section component
│   │   ├── Contact.tsx     # Contact form component
│   │   ├── Experience.tsx  # Experience timeline component
│   │   ├── Hero.tsx        # Hero section component
│   │   ├── Navigation.tsx  # Navigation component
│   │   ├── Projects.tsx    # Projects showcase component
│   │   ├── Skills.tsx      # Skills display component
│   │   └── ui/             # Reusable UI components
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── input.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── tabs.tsx
│   │       └── ... (more UI components)
│   ├── styles/              # Global styles
│   │   └── globals.css     # Global CSS styles
│   ├── workflows/           # GitHub Actions workflows
│   │   └── deploy.yml      # Deployment workflow
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Root CSS file
│   ├── Attributions.md     # Third-party attributions
│   └── README.md           # Project documentation
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
├── .gitignore             # Git ignore rules
└── README.md              # This file

```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server at http://localhost:3000 |
| `npm run build` | Creates an optimized production build in the `build` directory |

## 🚀 Deployment

### GitHub Pages

This project includes an example GitHub Actions workflow template in `src/workflows/deploy.yml`. It is not active by default and requires manual setup.

**⚠️ Important Setup Notes:**
1. The workflow file needs to be moved from `src/workflows/deploy.yml` to `.github/workflows/deploy.yml` to function.
2. The workflow's publish/build directory must match the Vite build output directory configured in `vite.config.ts` (currently `outDir: 'build'`). Update either the Vite config or the workflow so these values are consistent.

**Setting up GitHub Pages Deployment:**
1. Move the workflow file: `mkdir -p .github/workflows && mv src/workflows/deploy.yml .github/workflows/`
2. Ensure the workflow's publish/build directory matches the `outDir` in `vite.config.ts` (see note above).
3. Go to repository Settings → Pages
4. Set Source to "GitHub Actions"
5. Push to the `main` branch to trigger deployment

**Once configured, deployment is automatic:**
- Push to the `main` branch triggers automatic deployment
- Manually trigger deployment using GitHub Actions workflow dispatch

### Other Platforms

The production build (in the `build` folder) can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build` folder or connect your repository (set build command to `npm run build` and publish directory to `build`)
- **Vercel**: Import your repository and it will auto-detect Vite (set output directory to `build`)
- **Cloudflare Pages**: Connect your repository or use Wrangler CLI (build command: `npm run build`, output: `build`)
- **AWS S3 + CloudFront**: Upload the `build` folder to S3 and serve via CloudFront

## 🎨 Design

This portfolio is based on a Figma design available at:
[Modern Portfolio Website - Figma](https://www.figma.com/design/Jsbm1XqzoSveZQZdPhacd3/Modern-Portfolio-Website)

### Design System

The project uses components from [shadcn/ui](https://ui.shadcn.com/) under the MIT license.

### Images

Photos are sourced from [Unsplash](https://unsplash.com) and used under their license.

## 🎨 Customization

### Updating Content

1. **Personal Information**: Update the Hero, About, and Contact components with your information
2. **Skills**: Modify the Skills component to showcase your skills
3. **Experience**: Update the Experience component with your work history
4. **Projects**: Replace the Projects component content with your own projects
5. **Images**: Replace images in the `src/assets/` directory with your own

### Styling

- Global styles are in `src/styles/globals.css` and `src/index.css`
- Component styles use Tailwind CSS utility classes
- Customize colors, fonts, and spacing in your Tailwind configuration (if you add `tailwind.config.js`)

### Theme

The project includes theme switching capability via `next-themes`. Implement light/dark mode by:
1. Adding a theme toggle component
2. Configuring theme colors in your CSS
3. Using theme-aware classes in components

## 🐛 Troubleshooting

### Node Modules Being Staged in Git

If you encounter node_modules or build artifacts being staged when running the app:

1. **Verify .gitignore is working:**
   ```bash
   git check-ignore -v node_modules/
   git check-ignore -v build/
   ```
   
2. **If files were previously committed, remove them from git tracking:**
   ```bash
   # Remove node_modules from git (keeps local files)
   git rm -r --cached node_modules
   
   # Remove build directory from git (keeps local files)
   git rm -r --cached build
   
   # Commit the changes
   git commit -m "Remove tracked node_modules and build directory"
   ```

3. **Verify your .gitignore includes:**
   ```
   node_modules/
   build/
   dist/
   ```

4. **Clear git cache if issues persist:**
   ```bash
   git rm -r --cached .
   git add .
   git commit -m "Reset git cache to apply .gitignore"
   ```

### Build Issues

- Ensure Node.js version 20.x or higher is installed
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Clear Vite cache: `rm -rf node_modules/.vite`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project includes components from [shadcn/ui](https://ui.shadcn.com/) used under the [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

Photos are from [Unsplash](https://unsplash.com) and used under their [license](https://unsplash.com/license).

For the rest of the project code, please check with the repository owner for licensing terms.

## 📧 Contact

**Patrick Vuong**

- 📧 Email: pavuon@outlook.com
- 💼 LinkedIn: [linkedin.com/in/vuongpatrick](https://www.linkedin.com/in/vuongpatrick/)
- 🐙 GitHub: [github.com/patrick-vuong](https://github.com/patrick-vuong)

---

<div align="center">
  
**⭐ If you found this project helpful, please give it a star!**

© 2026 Designed and Built by Patrick Vuong

</div>  