# TECH STORE ⚡

A modern e-commerce web application for electronics and tech products, built with React 19 and Redux Toolkit.

🔗 **Live Demo**: [Link Here]([https://electronics-store-api-two.vercel.app](https://e-commerce-two-livid-63.vercel.app/))

## Features

- 🏠 **Home Page** — Hero section, featured products, and "Why Choose Us" highlights
- 🛍️ **Product Browsing** — Search with debounce, pagination, and category filtering
- 📄 **Product Details** — Full product view with breadcrumb navigation and similar products
- 🛒 **Shopping Cart** — Add/remove items, quantity controls, order summary with tax & shipping
- 💳 **Checkout Modal** — Interactive credit card preview with real-time input validation
- 📂 **Categories** — Browse by category with icon mapping and product counts
- 🔔 **Toast Notifications** — Feedback on every user action (add to cart, remove, checkout, subscribe)
- 💾 **Persistent Cart** — Cart data saved to localStorage via Redux middleware
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| Redux Toolkit | State Management |
| React Router v7 | Client-side Routing |
| Tailwind CSS v4 | Styling |
| Axios | HTTP Client |
| Lucide React | Icons |
| React Hot Toast | Notifications |
| Vite 8 | Build Tool |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/ahmedtika74/E-commerce-React.js.git

# Navigate to the project
cd E-commerce-React.js

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

## Project Structure

```
src/
├── api/                  # Axios instance & API config
├── app/                  # Redux store setup
├── components/
│   ├── layout/           # Navbar, Footer, CheckoutModal
│   └── ui/               # Reusable UI components
├── features/
│   ├── cart/              # Cart slice (localStorage persistence)
│   └── products/         # Product slice (6 async thunks)
└── pages/                # Route-level page components
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
