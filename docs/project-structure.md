# Project Structure

This document defines the folder structure, architecture, naming conventions, and development standards for Concert Management System V2.

---

# Project Architecture

The application follows a modern full-stack architecture with separate frontend and backend applications.

```
concert-management-system-v2/
│
├── client/                 # React Frontend
├── server/                 # Express Backend
├── docs/                   # Project Documentation
├── .github/                # GitHub Workflows
├── README.md
├── .gitignore
└── DECISIONS.md
```

---

# Frontend Structure

```
client/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── forms/
│   │   └── ui/
│   │
│   ├── pages/
│   ├── features/
│   ├── hooks/
│   ├── services/
│   ├── context/
│   ├── routes/
│   ├── utils/
│   ├── types/
│   ├── constants/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
└── tsconfig.json
```

---

# Backend Structure

```
server/
│
├── prisma/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── repositories/
│   ├── validators/
│   ├── utils/
│   ├── types/
│   ├── constants/
│   ├── modules/
│   ├── app.ts
│   └── server.ts
│
├── package.json
└── tsconfig.json
```

---

# Module-Based Development

The backend will be developed module by module.

Example modules:

- Authentication
- Users
- Events
- Venues
- Artists
- Tickets
- Bookings
- Payments
- Dashboard

Each module should contain its own routes, controller logic, service logic, validation, and business rules.

---

# Naming Conventions

## Files

Use lowercase with hyphens.

Examples:

- event.routes.ts
- auth.controller.ts
- booking.service.ts

---

## Components

Use PascalCase.

Examples:

- Navbar.tsx
- LoginForm.tsx
- DashboardCard.tsx

---

## Variables

Use camelCase.

Example:

```ts
const eventName = "";
```

---

## Classes

Use PascalCase.

Example:

```ts
class BookingService {}
```

---

## Constants

Use UPPER_SNAKE_CASE.

Example:

```ts
MAX_TICKETS_PER_BOOKING
```

---

# API Structure

All endpoints should begin with:

```
/api/v1/
```

Example:

```
/api/v1/auth/login
/api/v1/events
/api/v1/bookings
```

Versioning allows future API updates without breaking existing clients.

---

# Coding Standards

- Use TypeScript throughout the project.
- Keep functions small and focused.
- Avoid duplicate code.
- Validate all incoming requests.
- Handle errors consistently.
- Write meaningful commit messages.
- Update documentation when architecture changes.

---

# Git Workflow

Every feature should follow this process:

1. Plan the feature.
2. Implement the feature.
3. Test locally.
4. Update documentation if required.
5. Commit with a meaningful message.
6. Push to GitHub.

---

# Long-Term Goal

Maintain a clean, scalable, and production-inspired project structure that is easy to understand, extend, and maintain.