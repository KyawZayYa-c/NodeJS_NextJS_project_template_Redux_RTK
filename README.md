# Full-Stack Role-Based Template (Node.js & Next.js with Redux Toolkit & RTK Query)

A production-ready full-stack project template built with Node.js, Express, Next.js, Redux Toolkit, and RTK Query. It provides a scalable role-based architecture with secure JWT authentication, protected routes, API caching, optimistic updates, and a clean separation between frontend and backend.

## 🛠️ Tech Stack

### Frontend

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit & RTK Query
- **Styling:** Tailwind CSS

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Authentication:** JWT (JSON Web Tokens) with HttpOnly Cookies
- **Architecture:** Modular MVC / Feature-based Architecture

## 📂 Project Architecture

```text
├── backend/                         # Node.js & Express.js API
│   ├── src/
│   │   ├── controllers/             # Authentication & business logic
│   │   ├── middleware/              # Authentication & role-based guards
│   │   └── utils/                   # JWT & response helpers
│   └── server.js                    # Backend entry point
│
└── frontend/                        # Next.js application
    └── src/
        ├── app/
        │   ├── dashboard/            # Role-based dashboards
        │   │   ├── user/
        │   │   ├── admin/
        │   │   └── owner/
        │   └── login/
        ├── components/               # Reusable UI components & route guards
        └── lib/
            ├── api/                  # RTK Query base API & feature endpoints
            └── store/                # Redux store & custom hooks
```

## 🚀 Key Features

- **Secure Authentication:** JWT-based authentication using secure HttpOnly cookies.
- **Role-Based Access Control (RBAC):** Route and feature protection for `user`, `admin`, and `owner` roles.
- **Protected Routes:** Prevent unauthorized users from accessing restricted pages.
- **Redux Toolkit:** Centralized state management for client-side application state.
- **RTK Query:** Efficient API data fetching, caching, invalidation, and server-state management.
- **Optimistic Updates:** Provides instant UI feedback for supported update and delete operations with rollback on request failure.
- **Session Persistence:** Handles authentication state initialization to help maintain the user session after browser refreshes.
- **Scalable Architecture:** Separates frontend and backend responsibilities for easier maintenance and future development.
- **Reusable Structure:** Designed as a starting point for building full-stack applications with role-based access control.

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/KyawZayYa-c/NodeJS_NextJS_project_template_Redux_RTK.git
cd NodeJS_NextJS_project_template_Redux_RTK
```

### 2. Setup Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Setup Frontend

Open a new terminal and run:

```bash
cd frontend
pnpm install
pnpm dev
```

The frontend development server will start with Next.js, while the backend API runs separately with Express.js.

## 🔑 Test Accounts

| Role             | Email             | Password | Access                                |
| ---------------- | ----------------- | -------- | ------------------------------------- |
| **Regular User** | `user@gmail.com`  | `123`    | `/dashboard/user`                     |
| **Admin**        | `admin@gmail.com` | `123`    | `/dashboard/user`, `/dashboard/admin` |
| **Owner**        | `owner@gmail.com` | `123`    | All dashboards                        |

> **Note:** The test credentials above are intended for local development and demonstration purposes only. Do not use these credentials in a production environment.

## 🔐 Authentication & Authorization

This template uses JWT authentication with HttpOnly cookies to help protect authentication tokens from direct client-side JavaScript access.

The role-based access system supports three roles:

- **User:** Access to user-specific features and dashboard.
- **Admin:** Access to user and admin features.
- **Owner:** Full access to all available dashboards and features.

## 🔄 State Management

The project uses a hybrid Redux architecture:

- **Redux Toolkit:** Used for client-side and application-level state.
- **RTK Query:** Used for server-side data fetching, caching, synchronization, and API mutations.
- **Optimistic Updates:** Used where appropriate to provide a faster and smoother user experience.

This separation helps keep server state and local application state organized and easier to maintain.

## 📌 Purpose

This repository is designed as a reusable full-stack template for developers who want to start a new project with:

- Next.js App Router
- TypeScript
- Node.js & Express.js
- Redux Toolkit
- RTK Query
- JWT Authentication
- HttpOnly Cookies
- Role-Based Access Control
- Protected Routes
- Optimistic Updates

Instead of rebuilding the authentication, authorization, Redux, and RTK Query structure from scratch for every project, this template provides a reusable foundation that can be extended based on project requirements.

## 📄 License

This project is available for learning, development, and personal project purposes.