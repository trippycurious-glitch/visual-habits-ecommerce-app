# Visual Habits E-commerce App Architecture

## Monorepo Structure

```text
visual-habits-ecommerce-app/
├── frontend/                 # React web app (Vite)
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # Cart state management
│   │   ├── pages/            # Home, Product, Cart, Checkout, Admin pages
│   │   ├── services/         # API + payment integration helpers
│   │   └── styles/           # Global dark premium styling
│   └── package.json
├── backend/                  # Node.js API (Express)
│   ├── prisma/               # Database schema (PostgreSQL)
│   ├── src/
│   │   ├── config/           # env setup
│   │   ├── controllers/      # Request handlers
│   │   ├── routes/           # API route modules
│   │   ├── services/         # Razorpay service
│   │   └── server.js         # API entrypoint
│   ├── .env.example
│   └── package.json
├── docs/
│   ├── ARCHITECTURE.md
│   └── DATABASE_SCHEMA.sql
├── README.md
└── DEPLOYMENT.md
```

## Core Feature Mapping

- **Product listing with images, prices, size variants**: `frontend/src/pages/ProductPage.jsx` + `backend/src/controllers/productController.js`
- **Cart & checkout**: `frontend/src/context/CartContext.jsx`, `frontend/src/pages/CartPage.jsx`, `frontend/src/pages/CheckoutPage.jsx`
- **Razorpay integration**: `frontend/src/services/paymentService.js`, `backend/src/services/razorpayService.js`
- **Admin dashboard**: `frontend/src/pages/AdminPage.jsx`
- **Order management**: `backend/src/controllers/orderController.js`, `backend/src/routes/orderRoutes.js`
- **Dark, premium, rebellious design language**: `frontend/src/styles/global.css`

## API Surface

- `GET /health` - service health
- `GET /api/products` - list products
- `POST /api/products` - add product (admin)
- `GET /api/orders` - list orders
- `POST /api/orders` - create order record
- `POST /api/payments/create-order` - create Razorpay order
- `POST /api/payments/verify` - verify payment signature
