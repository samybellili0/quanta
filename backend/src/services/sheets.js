import { google } from 'googleapis';

// Column order; must match the header row of the "Registrations" tab (see README).
const COLS = ['fullName', 'email', 'phone', 'university', 'fieldOfStudy', 'year', 'github', 'linkedin', 'facebook', 'orgMember', 'firstDept', 'secondDept', 'team', 'availability', 'skills', 'interests', 'experience', 'motivation', 'whyDept', 'scenarioDeadline', 'scenarioExams', 'eventIdea', 'signature'];

export async function appendRegistration(d) {
  const { GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;
  if (!GOOGLE_SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) throw new Error('Google Sheets not configured');
  const auth = new google.auth.JWT({
    email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  await google.sheets({ version: 'v4', auth }).spreadsheets.values.append({
    spreadsheetId: GOOGLE_SHEET_ID,
    range: 'Registrations!A:X',
    valueInputOption: 'RAW',
    requestBody: { values: [[new Date().toISOString(), ...COLS.map((c) => d[c] ?? '')]] },
  });
}
