import { allEvents, eventById } from '../services/events.js';
export const listEvents = (req, res) => res.json({ success: true, data: allEvents() });
export const getEvent = (req, res) => {
  const e = eventById(req.params.id);
  return e ? res.json({ success: true, data: e }) : res.status(404).json({ success: false, message: 'Event not found.' });
};
