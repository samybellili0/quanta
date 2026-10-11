import { validateRegistration } from '../validators/registration.js';
import { appendRegistration } from '../services/sheets.js';

export const register = async (req, res, next) => {
  const { errors, clean } = validateRegistration(req.body);
  if (errors) return res.status(400).json({ success: false, message: 'Please correct the highlighted fields.', errors });
  try {
    await appendRegistration(clean);
    res.status(201).json({ success: true, message: 'Registration successful.' });
  } catch (e) { next(e); }
};
