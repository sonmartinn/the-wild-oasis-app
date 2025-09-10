# The Wild Oasis

A small admin web app for managing cabin bookings. Built with React + Vite, Supabase (Auth, Storage, Postgres) and TanStack Query. Styling is done with styled-components.

## Key features

- User authentication: sign up, log in, update profile (avatar, name, password) via Supabase Auth
- User avatar upload to Supabase Storage
- Bookings management: list, filter, pagination, detail, update, delete
- Cabins and users management pages
- Dashboard with charts and metrics (Recharts)
- Route protection for authenticated / unauthenticated pages
- Reusable UI primitives (Form, Button, Modal, Select, Table, etc.)

## Tech stack

- React (Vite)
- @tanstack/react-query for server state & caching
- Supabase (Auth, Storage, Postgres)
- styled-components for styling
- Recharts for charts
- ESLint (flat config) + Prettier for linting & formatting
- Vite for bundling

## Requirements

- Node.js v16+ (recommended)
- npm or yarn
- A Supabase project with Auth and Storage configured

## Environment

Create a .env (or use Vite env) with:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Install & run (Windows)

```
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview production build
```

## Lint & format

```
npm run lint
npm run lint:fix
npm run format
```

Notes:

- Prefer letting Prettier handle formatting and disabling formatting rules in ESLint (use `eslint-config-prettier` or turn off specific stylistic rules) to avoid conflicts on save.

## Project structure (important folders)

- src/
  - features/ — feature modules (authentication, bookings, cabins, dashboard...)
  - services/ — API wrappers (supabase, apiAuth, apiBookings...)
  - ui/ — shared UI components
  - pages/ — route pages (Login, Dashboard, Bookings...)
  - context/, hooks/, styles/, utils/

## Quick debugging tips

- Supabase `signUp` creates a session for the new user (it replaces the current session).
- After login, use `queryClient.setQueryData(['user'], user)` to populate cache and avoid an immediate refetch.
- For outside-click + portals, ensure event ordering (capture vs bubble) or use stopPropagation on the toggle to prevent immediate close.
- If Prettier and ESLint conflict on save, install `eslint-config-prettier`, keep it last in extends (flat-config import), and disable overlapping rules (indent, semi, comma-dangle, etc.).

## Extending

- Add tests with Jest + React Testing Library
- Extract shared ESLint/Prettier config into a reusable package for other
