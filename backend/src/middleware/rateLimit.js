import rateLimit from 'express-rate-limit';
const message = { success: false, message: 'Too many requests. Please try again later.' };
export const publicLimiter = rateLimit({ windowMs: 60_000, limit: 100, message });
export const registrationLimiter = rateLimit({ windowMs: 60 * 60_000, limit: 5, message });
