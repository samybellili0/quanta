async function req(path, opts) {
  const res = await fetch(`/api${path}`, { headers: { 'Content-Type': 'application/json' }, ...opts });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(json.message || 'Request failed'), { errors: json.errors });
  return json;
}
export const getEvents = () => req('/events').then((j) => j.data);
export const getEvent = (id) => req(`/events/${id}`).then((j) => j.data);
export const postRegistration = (body) => req('/registrations', { method: 'POST', body: JSON.stringify(body) });
