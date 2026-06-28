# Raghavendra Vajrapu — Portfolio

Personal portfolio website built with **TanStack Start**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

> Live at: [Portfolio Preview](https://id-preview--87f1af3f-3819-4f6c-9af2-c2eaaf4109a2.lovable.app)

---

## Overview

A modern, animated portfolio showcasing projects, career journey, tech stack and a contact form. Features smooth scroll animations, a custom cursor, project detail pages, and server-side contact form handling via EmailJS.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19 + Vite 7) |
| Styling | Tailwind CSS v4, shadcn/ui components |
| Animation | Framer Motion, GSAP |
| Backend | Cloudflare Workers (via `@cloudflare/vite-plugin`) |
| Database | Supabase (PostgreSQL + contact_messages table) |
| Contact | EmailJS REST API (server-side, no client credentials) |
| Forms | React Hook Form + Zod validation |

## Projects Featured

| # | Project | Tag |
|---|---------|-----|
| 01 | **MealMate** | Subscription Meal Delivery Platform |
| 02 | **TaskBuddy** | Student Productivity & Collaboration |
| 03 | **Rentora** | Gadget & Asset Rental Platform |
| 04 | **RankForge** | AI-Powered Student & College Management |
| 05 | **Rain Bank ATM** | Smart Rainwater Storage & Water ATM |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (or Node.js + npm)

### Install dependencies

```bash
bun install
```

### Environment variables

Create a `.env` file (or ensure these are set in your deployment platform):

```env
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=your-anon-key

# EmailJS (server-side only)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key   # optional, for stricter auth
```

### Run locally

```bash
bun dev
```

Open `http://localhost:8080`

### Build for production

```bash
bun run build
```

## Project Structure

```
src/
  components/          # Reusable UI components
  components/ui/         # shadcn/ui components
  lib/                   # Utilities, project data, server functions
  routes/                # TanStack Start file-based routes
  routes/api/            # API / server routes
  integrations/          # Supabase client, auth middleware
  styles.css             # Tailwind v4 global styles
```

## Key Features

- **Server-side contact form** — No client-side EmailJS credentials; form submissions hit a `createServerFn` that calls the EmailJS REST API securely.
- **Project detail pages** — Dynamic routes (`/projects/:slug`) with rich project overviews, problems, solutions, and tech highlights.
- **Smooth animations** — Framer Motion scroll-triggered animations, custom cursor, and staggered entrance effects.
- **Responsive design** — Mobile-first layout with Tailwind CSS v4.

## Deployment

Built for **Cloudflare Workers** via the `@cloudflare/vite-plugin`. The SSR entry point is `src/server.ts`.

## License

MIT — feel free to fork and adapt for your own portfolio.

---

Built with curiosity by **Raghavendra Vajrapu**.
