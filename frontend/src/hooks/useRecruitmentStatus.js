import { useState, useEffect } from 'react';

const FIRESTORE_SETTINGS_URL =
  'https://firestore.googleapis.com/v1/projects/quanta-a9d5c/databases/(default)/documents/settings/recruitment';

export function useRecruitmentStatus() {
  // Defaults to 'paused' as requested
  const [status, setStatus] = useState('paused');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function fetchStatus() {
      try {
        const res = await fetch(FIRESTORE_SETTINGS_URL);
        if (!res.ok) throw new Error('Status fetch failed');
        const json = await res.json();
        const serverStatus = json?.fields?.status?.stringValue;
        if (active && serverStatus) {
          setStatus(serverStatus);
        }
      } catch (err) {
        if (active) setStatus('paused');
      } finally {
        if (active) setLoading(false);
      }
    }

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  return { status, loading };
}
