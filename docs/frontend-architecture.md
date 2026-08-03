# Frontend Architecture

## Overview

The frontend of Concert Management System V2 follows a hybrid architecture.

This combines a shared component structure with feature-based development.

The goal is to keep the application scalable, maintainable, and easy to navigate as new modules are added.

---

# Architecture Principles

- Keep related code together.
- Avoid duplicate components.
- Separate business logic from presentation.
- Reuse components whenever possible.
- Prefer composition over duplication.
- Keep files small and focused.

---

# Folder Structure

```
src/
│
├── app/
│
├── assets/
│
├── components/
│
├── features/
│
├── hooks/
│
├── services/
│
├── context/
│
├── lib/
│
├── constants/
│
├── types/
│
├── utils/
│
├── styles/
│
└── index.css
```

---

# app/

Contains application-level configuration.

Examples

- App.tsx
- main.tsx
- router.tsx
- providers.tsx

---

# assets/

Contains static assets.

Examples

- Images
- Icons
- Fonts
- Logos

---

# components/

Reusable UI components.

These components should not contain business logic.

Structure

```
components/

common/
layout/
ui/
```

### common

Shared reusable components.

Examples

- Button
- Input
- Modal
- Table
- Card

### layout

Layout components.

Examples

- Navbar
- Sidebar
- Footer
- PageLayout

### ui

Small reusable UI elements.

Examples

- Badge
- Avatar
- Spinner
- Tooltip

---

# features/

Every business module gets its own folder.

Example

```
features/

auth/
users/
events/
venues/
artists/
tickets/
bookings/
dashboard/
```

Each feature may contain

```
auth/

components/
pages/
hooks/
services/
types/
```

Everything related to authentication stays inside the authentication feature.

---

# hooks/

Reusable custom React hooks.

Examples

- useAuth()
- useDebounce()
- usePagination()

---

# services/

Shared services.

Examples

- API Client
- Authentication Service
- Storage Service

---

# context/

React Context providers.

Examples

- AuthContext
- ThemeContext

---

# lib/

Third-party library configuration.

Examples

- Axios configuration
- Utility library configuration

---

# constants/

Application constants.

Examples

- Routes
- Roles
- API URLs

---

# types/

Shared TypeScript types.

Examples

- User
- Event
- Ticket

---

# utils/

Utility functions.

Examples

- Date formatting
- Currency formatting
- Validators

---

# styles/

Global styles.

Examples

- Global CSS
- Theme
- Variables

---

# Naming Conventions

## Components

PascalCase

Example

```
LoginForm.tsx
Navbar.tsx
DashboardCard.tsx
```

---

## Hooks

camelCase beginning with use

Example

```
useAuth.ts
useFetch.ts
```

---

## Utility Files

camelCase

Example

```
formatDate.ts
calculatePrice.ts
```

---

## Types

PascalCase

Example

```
User.ts
Booking.ts
```

---

# Development Guidelines

- Reuse components before creating new ones.
- Keep feature-specific code inside its feature folder.
- Keep shared code outside feature folders.
- Avoid deeply nested folders.
- Write readable code before writing clever code.
- Every new feature should follow the same folder structure.

---

# Long-Term Goal

Maintain a frontend architecture that remains clean, scalable, and easy to understand even as the application grows into a production-sized project.