# Projects Page Implementation

This document details the implementation of the "Projects" page (`src/app/projects/page.tsx`), including its data structure, component breakdown, and styling considerations.

## 1. Data Structure (`src/data/projects.ts`)

The project data is defined in `src/data/projects.ts` as an array of `Project` objects. The `Project` interface includes:

- `id`: Unique identifier for the project.
- `title`: Project title.
- `summary`: A brief description.
- `thumbnail`: URL to the project's image.
- `techTags`: An array of technologies used.
- `githubLink?`: Optional link to the GitHub repository.
- `demoLink?`: Optional link to the live demo.
- `isFeatured`: Boolean to mark a project as featured.
- `order?`: Optional display order.

**Example `Project` Interface:**
```typescript
export interface Project {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  techTags: string[];
  githubLink?: string;
  demoLink?: string;
  isFeatured: boolean;
  order?: number;
}
```

## 2. Component Breakdown

The "Projects" page is composed of the following main components:

### 2.1. `src/app/projects/page.tsx`

This is the main page component responsible for:
- Importing the `projects` data from `src/data/projects.ts`.
- Filtering projects into `featuredProject` and `otherProjects`.
- Rendering the `FeaturedProjectCard` if a featured project exists.
- Rendering a grid of `ProjectCard` components for other projects.
- Applying overall page layout and headings.

**Structure:**
```tsx
// src/app/projects/page.tsx
import { projects } from '@/data/projects';
import FeaturedProjectCard from '@/components/FeaturedProjectCard';
import ProjectCard from '@/components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const featuredProject = projects.find((project) => project.isFeatured);
  const otherProjects = projects.filter((project) => !project.isFeatured);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold font-geist text-center mb-10 text-white">
        나의 프로젝트
      </h1>

      {featuredProject && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold font-geist mb-6 text-white text-center md:text-left">
            주요 프로젝트
          </h2>
          <FeaturedProjectCard project={featuredProject} />
        </section>
      )}

      <section>
        <h2 className="text-3xl font-semibold font-geist mb-6 text-white text-center md:text-left">
            다른 프로젝트
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
```

### 2.2. `src/components/FeaturedProjectCard.tsx`

This component displays a single, prominent featured project.

-   **Props:** Takes a `project` object of type `Project`.
-   **Layout:** Utilizes a `flex flex-col md:flex-row` for a responsive horizontal layout (image on left, details on right for medium screens and above).
-   **Image:** Uses `Next/image` for optimized image rendering.
-   **Content:** Displays `title`, `summary`, `techTags` (as styled badges), and optional `githubLink` and `demoLink` buttons.
-   **Styling:** Tailwind CSS is used for responsive design, gradients, shadows, and button styling. `font-geist` and `font-bold` are used for titles.

### 2.3. `src/components/ProjectCard.tsx`

This component displays a single project within the "Other Projects" grid.

-   **Props:** Takes a `project` object of type `Project`.
-   **Layout:** Uses `flex flex-col` to ensure consistent height (`h-full`) within the grid.
-   **Image:** Uses `Next/image` for the project thumbnail, with `layout="fill"` and `objectFit="cover"`.
-   **Content:** Displays `title`, `summary`, `techTags` (as styled badges), and optional `githubLink` and `demoLink` buttons.
-   **Styling:** Tailwind CSS for card appearance, hover effects, text styling, and button styling. `font-geist` and `font-bold` are used for titles.

## 3. Styling and Responsiveness

-   **Tailwind CSS:** All components are styled using Tailwind CSS classes for rapid development and consistency.
-   **Font Consistency:** Titles (`h1`, `h2`, `h3`) consistently use `font-bold` and `font-geist` (if defined in `tailwind.config.ts`) as per architectural guidelines.
-   **Responsive Design:** The main page and component layouts are designed to adapt to different screen sizes using Tailwind's responsive prefixes (e.g., `md:`, `lg:`). The "Other Projects" section uses a `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` layout.
-   **Image Optimization:** `Next/image` component is used throughout for performance, lazy loading, and responsive image sizing.
-   **Accessibility:** Semantic HTML elements are used, and `alt` attributes are provided for images.

## 4. Usage

To integrate the projects page, ensure `src/app/projects/page.tsx` is correctly placed, and import the `FeaturedProjectCard` and `ProjectCard` components into `src/app/projects/page.tsx`. Project data should be managed in `src/data/projects.ts`.
