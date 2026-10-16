import { EVENTS } from '../data/club.js';

const API = import.meta.env.VITE_API_URL || '/api';

async function req(path, opts) {
  const res = await fetch(`${API}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(json.message || 'Request failed'), { errors: json.errors });
  return json;
}

export const getEvents = async () => {
  try {
    const res = await req('/events');
    if (res?.data && Array.isArray(res.data) && res.data.length > 0) {
      return res.data;
    }
    return EVENTS;
  } catch {
    // Graceful fallback to verified club dataset
    return EVENTS;
  }
};

export const getEvent = async (id) => {
  try {
    const res = await req(`/events/${id}`);
    if (res?.data) return res.data;
    return EVENTS.find((e) => e.id === id) || null;
  } catch {
    return EVENTS.find((e) => e.id === id) || null;
  }
};

export const postRegistration = (body) =>
  req('/registrations', { method: 'POST', body: JSON.stringify(body) });

export const postApplication = (body) =>
  req('/applications', { method: 'POST', body: JSON.stringify(body) });
