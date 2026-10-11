import { useState } from 'react';
// Put the real logo at frontend/public/logo/quanta-logo.png; this placeholder shows until then.
export default function Logo({ size = 40 }) {
  const [missing, setMissing] = useState(false);
  return missing
    ? <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label="Quanta logo placeholder"><circle cx="20" cy="20" r="17" fill="none" stroke="#38BDF8" strokeWidth="2"/><ellipse cx="20" cy="20" rx="17" ry="6" fill="none" stroke="#E0F2FE" strokeWidth="1" transform="rotate(-30 20 20)"/><circle cx="20" cy="20" r="3.5" fill="#38BDF8"/></svg>
    : <img src="/logo/quanta-logo.png" width={size} height={size} alt="Quanta Multidisciplinaire logo" onError={() => setMissing(true)} />;
}
