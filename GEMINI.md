# everfu-cv

A professional, print-friendly personal resume website built with modern web technologies.

## Project Overview

`everfu-cv` is a high-performance, aesthetically polished digital resume designed for both screen viewing and physical printing. It leverages a data-driven approach where the resume content is decoupled from the presentation layer, allowing for easy updates and maintenance.

### Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Sass (SCSS)
- **Animations:** Framer Motion
- **Icons:** Iconify
- **Package Manager:** pnpm

### Architecture

- **Data Layer (`src/lib/resume.ts`):** Centralized source of truth for all resume content.
- **Type Definitions (`src/types/resume.ts`):** Strict TypeScript interfaces ensuring data consistency across the application.
- **Component Layer (`src/components/`):** A collection of modular, reusable UI components (e.g., `ProjectCard`, `InfoSection`, `AnimatedSection`) that handle the rendering of resume data.
- **Presentation Layer (`src/app/page.tsx`):** The main entry point that orchestrates the layout and integrates the data with the components.

## Building and Running

### Prerequisites

- Node.js >= 20.9.0
- pnpm

### Development

```bash
pnpm install
pnpm dev
```
The application will be available at `http://localhost:3000`.

### Production

```bash
pnpm build
pnpm start
```

### Quality Assurance

```bash
pnpm typecheck
```

## Development Conventions

### Content Updates

To update the resume content, modify the `getResumeData` function in `src/lib/resume.ts`. Do not hardcode content directly into components.

### Styling

- Use Sass (`.scss`) for styling.
- Global styles are located in `src/app/globals.scss`.
- Prefer BEM-like naming conventions for CSS classes (as seen in `src/app/page.tsx`).

### Components

- New UI elements should be created as separate components in `src/components/`.
- Use `AnimatedSection` to wrap major sections for a polished entrance animation.

### Printing

The project is specifically optimized for printing. Test your changes by using the browser's print preview to ensure the layout remains clean and professional on paper.
