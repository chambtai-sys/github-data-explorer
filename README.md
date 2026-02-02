# GitHub Project Data Viewer

A sleek, modern web application to explore and visualize detailed insights about any public GitHub repository.

![GitHub Data Viewer](https://img.shields.io/badge/React-18-blue?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss) ![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite)

## ✨ Features

- **Repository Search** — Enter any GitHub URL or `owner/repo` format
- **Comprehensive Stats** — Stars, forks, watchers, issues, language, license, size, and last push date
- **Top Contributors** — Visual breakdown with contribution bars
- **Recent Commits** — Latest commits with author info and timestamps
- **Languages Chart** — Color-coded breakdown of repository languages
- **Beautiful UI** — Dark theme with smooth animations and glass-morphism effects

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Navigate to project directory
cd YOUR_REPO_NAME

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running Locally

```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:5173
```

### Building for Production

```bash
# Create production build
npm run build

# Preview the production build locally
npm run preview
```

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Date Formatting:** [date-fns](https://date-fns.org/)

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── CommitsList.tsx
│   ├── ContributorsList.tsx
│   ├── LanguagesChart.tsx
│   ├── LoadingSkeleton.tsx
│   ├── RepoHeader.tsx
│   ├── SearchInput.tsx
│   ├── StatsGrid.tsx
│   └── ui/            # shadcn/ui components
├── hooks/             # Custom React hooks
│   └── useGitHubData.ts
├── pages/             # Page components
│   └── Index.tsx
├── types/             # TypeScript type definitions
│   └── github.ts
├── lib/               # Utility functions
└── index.css          # Global styles & design tokens
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## ⚠️ GitHub API Rate Limits

This app uses the GitHub REST API without authentication, which has the following limits:

- **60 requests per hour** for unauthenticated requests

If you need higher limits, you can implement GitHub OAuth or use a personal access token.

## 🎨 Customization

### Design System

The app uses CSS custom properties for theming. Modify `src/index.css` to customize:

- Colors and gradients
- Typography
- Animations
- Glass effects

### Adding Features

The codebase is modular and easy to extend. Common enhancements:

- Add authentication for higher API limits
- Implement repository comparison
- Add activity graphs with Recharts
- Save favorite repositories

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Data provided by the [GitHub REST API](https://docs.github.com/en/rest)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

Made with ❤️ using [Lovable](https://lovable.dev)
