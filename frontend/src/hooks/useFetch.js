import { useEffect, useState } from 'react';
export default function useFetch(fn, deps = []) {
  const [s, set] = useState({ data: null, loading: true, error: false });
  useEffect(() => {
    let live = true;
    set({ data: null, loading: true, error: false });
    fn().then((data) => live && set({ data, loading: false, error: false })).catch(() => live && set({ data: null, loading: false, error: true }));
    return () => { live = false; };
    // eslint-disable-next-line
  }, deps);
  return s;
}
