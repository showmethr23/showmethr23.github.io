# Projects Page Technical Specification

## 1. Overview

This document defines the technical specifications for the "Projects" page of a personal portfolio website. This page is designed to effectively showcase the user's projects and provide detailed information for each, allowing visitors to easily explore and understand them.

## 2. Page Layout

The "Projects" page will consist of two main sections: a featured project at the top and a grid of other projects below it.

### 2.1 Layout Diagram (Mermaid Diagram)

```mermaid
graph TD
    A[Projects Page] --> B(Navigation Bar)
    A --> C(Main Content Area)

    C --> D[Featured Project Section]
    C --> E[Other Projects Grid Section]

    D --> F[Featured Project Card]
    F --> G[Image / Thumbnail (Left)]
    F --> H[Description / Details (Right)]
    H --> H1(Title)
    H --> H2(Summary)
    H --> H3(Tech Tags)
    H --> H4(GitHub Link)
    H --> H5(Demo Link)

    E --> I[Project Card 1]
    E --> J[Project Card 2]
    E --> K[Project Card 3]
    E --> L[...]

    I --> I1(Thumbnail)
    I --> I2(Title)
    I --> I3(Tech Tags)
    I --> I4(Short Summary)
    I --> I5(GitHub Link)
    I --> I6(Demo Link)

    J --> J1(Thumbnail)
    J --> J2(Title)
    J --> J3(Tech Tags)
    J --> J4(Short Summary)
    J --> J5(GitHub Link)
    J --> J6(Demo Link)

    K --> K1(Thumbnail)
    K --> K2(Title)
    K3[...]
```

### 2.2 Layout Details

*   **Featured Project Section:**
    *   Located at the top of the page, spanning full width.
    *   Highlights a single featured project.
    *   For visual impact, the image/thumbnail is placed on the left, and detailed descriptions on the right.
    *   The detailed description includes the project title, summary, technology tags used, and GitHub and demo links.
*   **Other Projects Grid Section:**
    *   Located below the featured project section.
    *   Displays other projects in a 3-column grid format.
    *   Each project card maintains the same size and height for visual consistency (not a Masonry layout).
    *   Each card includes a thumbnail, title, technology tags, a brief summary, and GitHub and demo links.

## 3. Data Structure (Specification for `src/data/projects.ts`)

Project data will be defined as an array within the `src/data/projects.ts` file. Each project object must conform to the following TypeScript interface.

### 3.1 `Project` TypeScript Interface

```typescript
/**
 * @interface Project
 * @description Represents a single project entry in the portfolio.
 * This interface defines the structure for each project displayed on the "Projects" page.
 */
export interface Project {
  /**
   * @property {string} id - A unique identifier for the project.
   * This is used for internal referencing and routing, if applicable.
   * Example: 'portfolio-v1'
   */
  id: string;
  /**
   * @property {string} title - The main title of the project, displayed prominently.
   * Example: 'Personal Portfolio Website V1'
   */
  title: string;
  /**
   * @property {string} summary - A concise summary or brief description of the project.
   * This will be shown on both featured and regular project cards.
   * Example: 'A responsive personal portfolio website built with Next.js 14 and Tailwind CSS.'
   */
  summary: string;
  /**
   * @property {string} thumbnail - The URL or path to the project's thumbnail image.
   * This image will be used for both featured and regular project cards.
   * Example: '/images/portfolio-v1-thumbnail.webp'
   */
  thumbnail: string;
  /**
   * @property {string[]} techTags - An array of technologies or tools used in the project.
   * These tags help categorize and describe the project's tech stack.
   * Example: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel']
   */
  techTags: string[];
  /**
   * @property {string} [githubLink] - Optional URL to the GitHub repository of the project.
   * If provided, a link to the repository will be displayed.
   * Example: 'https://github.com/your-username/your-portfolio-repo'
   */
  githubLink?: string;
  /**
   * @property {string} [demoLink] - Optional URL to the live demo or deployed version of the project.
   * If provided, a link to the live demo will be displayed.
   * Example: 'https://your-portfolio.vercel.app'
   */
  demoLink?: string;
  /**
   * @property {boolean} isFeatured - A flag indicating if the project should be displayed in the featured section.
   * Typically, only one project should have this set to 'true' at any given time.
   */
  isFeatured: boolean;
  /**
   * @property {number} [order] - Optional numerical order for display purposes.
   * Projects with lower 'order' values will appear earlier in lists or grids.
   */
  order?: number;
}

// Example structure for src/data/projects.ts:
// This file will export an array of Project objects.
//
// export const projects: Project[] = [
//   {
//     id: 'portfolio-v1',
//     title: 'Personal Portfolio Website V1',
//     summary: 'A responsive personal portfolio website built with Next.js 14 and Tailwind CSS.',
//     thumbnail: '/images/portfolio-v1-thumbnail.webp',
//     techTags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
//     githubLink: 'https://github.com/your-username/your-portfolio-repo',
//     demoLink: 'https://your-portfolio.vercel.app',
//     isFeatured: true,
//     order: 1,
//   },
//   {
//     id: 'e-commerce-platform',
//     title: 'Full-stack E-commerce Platform',
//     summary: 'A full-stack e-commerce solution integrating user authentication and a payment system.',
//     thumbnail: '/images/ecommerce-platform-thumbnail.webp',
//     techTags: ['Node.js', 'Express.js', 'MongoDB', 'React', 'Redux', 'Stripe API'],
//     githubLink: 'https://github.com/your-username/ecommerce-platform',
//     demoLink: 'https://ecommerce-demo.vercel.app',
//     isFeatured: false,
//     order: 2,
//   },
//   // ... potentially more project objects
// ];
```

## 4. Technical Considerations

*   **Framework:** Utilize Next.js (App Router) to appropriately leverage server and client components.
*   **Styling:** Implement responsive design and consistent UI using Tailwind CSS.
*   **Image Optimization:** Use the Next.js `Image` component for optimal image loading performance, recommending modern formats like `webp`.
*   **Accessibility:** Consider ARIA attributes for all UI elements and support keyboard navigation.
*   **Data Management:** Manage project data directly within `src/data/projects.ts` to minimize backend dependencies for simple project information. Future API integration can be considered if the number of projects grows or dynamic management becomes necessary.
*   **Responsive Design:** All layouts and card designs must be optimized for various screen sizes (mobile, tablet, desktop).
*   **Font Consistency:** Adhere to the font guidelines specified in `frontend/resume-skill-font-alignment.md`.
*   **Performance:** Apply lazy loading for images, code splitting, etc., to optimize Lighthouse scores.