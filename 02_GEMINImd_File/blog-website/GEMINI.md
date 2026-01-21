# Project Overview

This is a web project bootstrapped with Vite, utilizing React for the user interface and TypeScript for type-safe development. It provides a modern development setup with Fast Refresh (via Babel or SWC) and includes ESLint for code quality.

# Building and Running

To get started with the project, use the following commands:

*   **Install dependencies**:
    ```bash
    npm install
    ```

*   **Run the development server**:
    ```bash
    npm run dev
    ```
    This will start the Vite development server, typically accessible at `http://localhost:5173/` (or similar), with Hot Module Replacement (HMR) enabled.

*   **Build for production**:
    ```bash
    npm run build
    ```
    This command compiles the TypeScript code and bundles the application for production deployment.

*   **Run linter**:
    ```bash
    npm run lint
    ```
    This command runs ESLint to check for code style and potential errors.

*   **Preview the production build**:
    ```bash
    npm run preview
    ```
    After building, this command serves the static production build locally.

# Development Conventions

*   **Language**: TypeScript is used for all application code, ensuring type safety and improved code maintainability.
*   **Linting**: ESLint is configured to enforce code style and identify potential issues. The configuration can be expanded for more rigorous type-aware linting rules as suggested in the `README.md`.
*   **Framework**: React is used for building the user interface, following component-based architecture.
*   **Build Tool**: Vite is used as the build tool, offering a fast development experience and efficient production builds.
