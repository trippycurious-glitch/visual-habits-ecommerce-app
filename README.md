# Visual Habits E-commerce App

A full-stack, mobile-responsive web app for selling **stickers, posters, and wall art** with a bold underground identity.

## Stack
- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Database:** PostgreSQL + Prisma schema
- **Payments:** Razorpay integration (with local mock fallback)

## Core Pages Delivered
- **Home** (`/`): brand-forward hero + featured drops
- **Product** (`/product`): product listing, price, size variants
- **Cart** (`/cart`): quantity management and total calculation
- **Checkout** (`/checkout`): Razorpay order initiation + payment verification flow
- **Admin** (`/admin`): add products and view current catalog

## Quick Start

### 1) Install dependencies
```bash
npm install --prefix frontend
npm install --prefix backend
```

### 2) Configure environment
```bash
cp backend/.env.example backend/.env
```

Set real Razorpay credentials in `backend/.env` for production behavior.

### 3) Run backend
```bash
npm run dev --prefix backend
```

### 4) Run frontend
```bash
npm run dev --prefix frontend
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:4000`

## Database Schema
- Prisma schema: `backend/prisma/schema.prisma`
- SQL reference schema: `docs/DATABASE_SCHEMA.sql`

## Project Architecture
See `docs/ARCHITECTURE.md` for full folder structure and API map.

## Deployment
See `DEPLOYMENT.md` for Railway + Vercel deployment instructions.
