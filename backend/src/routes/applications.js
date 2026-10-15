import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { google } from 'googleapis';
import { validateApplication, COLS } from '../validators/application.js';

const router = Router();
const limiter = rateLimit({ windowMs: 60 * 60 * 1000, max: 5, standardHeaders: true, legacyHeaders: false });

router.post('/', limiter, async (req, res) => {
  const { errors, clean } = validateApplication(req.body);
  if (errors) return res.status(400).json({ message: 'Please correct the highlighted fields.', errors });

  const { GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;
  if (!GOOGLE_SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    console.error('Google Sheets not configured');
    return res.status(500).json({ message: 'Unable to process your request.' });
  }
  try {
    const auth = new google.auth.JWT({
      email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n').replace(/^"|"$/g, ''),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });
    const row = COLS.map((c) => (c === 'timestamp' ? new Date().toISOString() : clean[c] ?? ''));
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: 'Applications!A:BF',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [row] },
    });
    res.status(201).json({ message: 'Application received.' });
  } catch (e) {
    console.error(e.message);
    res.status(500).json({ message: 'Unable to process your request.' });
  }
});

export default router;
