import { Router } from 'express';
import { publicLimiter, registrationLimiter } from '../middleware/rateLimit.js';
import { listEvents, getEvent } from '../controllers/events.js';
import { register } from '../controllers/registrations.js';

const r = Router();
r.get('/health', (q, s) => s.json({ success: true }));
r.get('/events', publicLimiter, listEvents);
r.get('/events/:id', publicLimiter, getEvent);
r.post('/registrations', registrationLimiter, register);
export default r;
