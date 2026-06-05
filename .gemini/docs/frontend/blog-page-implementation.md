# Blog Page Implementation

## Overview
Implemented the Blog page with a modern layout, tag filtering, and specific typography requirements (Inter and Pretendard).

## Key Features
- **Hero Section:** Large "Blog" title using the Inter font.
- **Tag Filtering:** A horizontal bar with capsule-shaped buttons that filter posts in real-time.
- **Post List:** A centered list (approx. 750px width) of blog posts sorted by date.
- **Typography:** 
    - English: Inter (via Google Fonts)
    - Korean: Pretendard (via CDN)
- **Styling:** Adhered to the requested color palette (#FFFFFF background, #212529/#333333 text) and interactive states.

## Files Created/Modified
- `src/app/blog/page.tsx`: Main blog page component (Client Component for filtering).
- `src/data/posts.ts`: Data structure and initial sample posts.
- `src/app/layout.tsx`: Added font loading for Inter and Pretendard.
- `src/app/globals.css`: Updated global styles, font stacks, and Tailwind v4 theme variables.

## Technical Details
- **Filtering:** Used React `useState` and `useMemo` for efficient client-side filtering.
- **Tailwind v4:** Utilized the new `@theme inline` syntax for theme extensions.
- **Responsive Design:** Used `.page-container` for consistent margins and `flex-wrap` for the tag bar.
