# Deployment Guide - Visual Habits

## Services
- **Frontend**: Vercel
- **Backend**: Railway / Render / Fly.io
- **Database**: Managed PostgreSQL (Railway Postgres, Neon, Supabase, etc.)

## Environment Variables

### Backend
- `PORT=4000`
- `DATABASE_URL=postgresql://...`
- `RAZORPAY_KEY_ID=rzp_live_...`
- `RAZORPAY_KEY_SECRET=...`
- `FRONTEND_URL=https://your-frontend-domain.com`

### Frontend
- `VITE_API_URL=https://your-backend-domain.com/api`

## Deploy Backend (Railway Example)
1. Create a Railway project and connect your Git repository.
2. Set root directory to `backend`.
3. Add environment variables listed above.
4. Deploy with start command:
   ```bash
   npm start
   ```
5. Ensure `/health` returns `{ status: "ok" }`.

## Deploy Frontend (Vercel Example)
1. Import repository in Vercel.
2. Set root directory to `frontend`.
3. Add `VITE_API_URL` environment variable.
4. Build command:
   ```bash
   npm run build
   ```
5. Output directory: `dist`.

## Database Migration
Run from `backend`:
```bash
npm run prisma:generate
npm run prisma:migrate -- --name init
```

## Production Notes
- Replace in-memory product/order controllers with Prisma-backed services.
- Use webhook verification for robust Razorpay payment status updates.
- Add JWT auth + role-based admin protection before public launch.
