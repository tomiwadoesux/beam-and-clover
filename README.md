# Project Tooling & Code Quality Setup

This project uses a **modern, opinionated linting and Git workflow** to enforce high code quality, catch runtime issues early, and keep the codebase consistent as it scales.

The setup is designed for **Next.js 16 (App Router + Turbopack)** and focuses on developer experience without compromising correctness.

---

## 🚀 Tech Stack (Tooling)

- **Next.js** `16.1.6` (Turbopack)
- **ESLint** — `@antfu/eslint-config`
- **Husky** — Git hooks
- **lint-staged** — staged-file linting

---

## ✨ Why This Setup Exists

- Catch React / JSX / SVG errors before runtime
- Prevent broken code from being committed
- Enforce consistent style across the team
- Improve long-term maintainability
- Reduce CI failures by shifting checks left (local dev)

---

## 🧹 ESLint (Antfu Config)

This project uses **@antfu/eslint-config**, a widely adopted, community-maintained ESLint configuration.

### What it enforces
- React & JSX best practices
- DOM & SVG property validation
- Import ordering
- Sensible defaults with minimal config
- Strictness without unnecessary noise
