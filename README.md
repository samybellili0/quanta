# Quanta Multidisciplinaire — club website

React + Vite frontend (`frontend/`) and Express REST API (`backend/`). Registrations flow: React → API → validation/sanitisation → Google Sheets. No admin dashboard.

## Run
```bash
npm run install:all                    # root + backend + frontend deps
cp backend/.env.example backend/.env   # then fill in values
npm run dev                            # API :5000, site :5173 (Vite proxies /api)
```

## Google Sheets
1. Google Cloud: create a project, enable **Google Sheets API**, create a **service account**, download its JSON key.
2. Create a Sheet with a tab named `Registrations`; share it (Editor) with the service-account email.
3. In `backend/.env` set `GOOGLE_SHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY` (quoted, newlines as `\n`).
Columns: timestamp, name, email, phone, university, field, year, interests, motivation, GitHub, LinkedIn.

## Content
- **Events:** `backend/src/services/events.js`; images in `frontend/public/images/`.
- **Logo:** `frontend/public/logo/quanta-logo.png` (placeholder shows until then).
- **Stats, team, contact/social links:** `frontend/src/sections/Static.jsx` (placeholders marked).

## Deploy
`npm run build --prefix frontend` and host `frontend/dist` (Netlify/Vercel/Nginx). Run `backend` with `npm start`, set `FRONTEND_URL` to the site origin, and route `/api` to it.
