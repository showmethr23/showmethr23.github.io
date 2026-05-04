# Project Structure

This document describes the directory structure of the `github.io` project and the role of each file/folder. The project is built on Next.js App Router, utilizing TypeScript and Tailwind CSS.

## 1. Root Directory

*   `.gemini/`: Stores Gemini-related files such as agent personas and architecture documents.
    *   `agents/`: Role definition files (`.md`) for each agent (manager, architect, frontend, backend, tester).
    *   `docs/`: Directory for documentation by each agent.
        *   `architecture/`: System architecture-related documents (e.g., `system-overview.md`, `project-structure.md`).
        *   `backend/`, `frontend/`, `manager/`, `testing/`: Role-specific documents for each agent.
*   `.git/`: Files related to the Git version control system.
*   `.github/`: GitHub-related configuration files.
    *   `workflows/`: GitHub Actions workflow definitions (e.g., `deploy.yml` for CI/CD).
*   `.next/`: Directory where Next.js build and cache files are generated. **Not tracked by `.gitignore`.**
*   `node_modules/`: Directory where project dependencies are installed. **Not tracked by `.gitignore`.**
*   `out/`: Directory where static HTML output is saved if the Next.js `output` option is set to `export`.
*   `public/`: Directory containing static assets (images, fonts, etc.). Directly accessible from the root URL of the Next.js app.
    *   `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`: Icon or logo files used in the project.
*   `src/`: Directory containing the project's source code.
    *   `app/`: Root directory for Next.js App Router. Defines page routing and layouts.
        *   `favicon.ico`: Website favicon.
        *   `globals.css`: Global stylesheet (including Tailwind CSS).
        *   `layout.tsx`: Root layout component. Applied commonly to all pages.
        *   `page.tsx`: Page component corresponding to the root path (`/`).
        *   `about/`: Page directory corresponding to the `/about` path.
            *   `page.tsx`: About page component.
        *   `resume/`: Page directory corresponding to the `/resume` path.
            *   `page.tsx`: Resume page component.
    *   `components/`: Directory for collecting reusable UI components.
        *   `Header.tsx`: Website's header component.
    *   `data/`: Static data files used in the application.
        *   `skills.ts`: Developer's skill list data.
        *   `social-media.ts`: Social media link data.
        *   `timeline.ts`: Career or project timeline data.
    *   `lib/`: Code acting as utility functions, helpers, etc. (currently empty).
*   `.editorconfig`: Code editor configuration file.
*   `.gitignore`: List of files and directories to be excluded from Git version control.
*   `eslint.config.mjs`: ESLint configuration file.
*   `GEMINI.md`: Document defining the project's Agent system and core rules (Project Central Command).
*   `next.config.js`: Next.js configuration file.
*   `package-lock.json`: File recording the exact versions of npm or yarn package dependencies.
*   `package.json`: Project metadata and list of dependencies.
*   `postcss.config.mjs`: PostCSS configuration file (primarily used with Tailwind CSS).
*   `PROGRESS.md`: File recording project progress and agent task status.
*   `README.md`: File describing general information, setup instructions, and execution methods for the project.
*   `tailwind.config.ts`: Tailwind CSS configuration file.
*   `tsconfig.json`: TypeScript compiler configuration file.

## 2. Key File Descriptions

*   **`GEMINI.md`**: Defines the core guidelines for this project's Agent-based development workflow.
*   **`PROGRESS.md`**: A central index that tracks the progress of all agent tasks and provides links to documents and deliverables.
*   **`src/app/layout.tsx`**: The top-level layout for Next.js App Router, containing `<html />`, `<body />` tags, and global components (e.g., Header, Footer).
*   **`src/app/page.tsx`**: The main landing page (`/`) of the application.
*   **`src/components/*.tsx`**: Reusable UI components, separated from page logic to enhance ease of development and maintenance.
*   **`src/data/*.ts`**: Hardcoded or statically managed data, providing data to pages without API calls. This is useful for information that does not frequently change, typical for a portfolio site.

This structure follows Next.js App Router recommendations, designed with modularity, scalability, and maintainability in mind. Maintaining a consistent pattern when adding new pages or components can improve development efficiency.
