import { useEffect, useState } from 'react';

// Local: http://127.0.0.1:8000 | Production: set VITE_API_URL in Vercel (your Render backend URL)
export const API_URL = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace(/\/$/, '');

// One request per endpoint, shared by every component (Hero, Footer, Contact... all need /profile)
const requests = {};

export function fetchApi(path) {
  if (!requests[path]) {
    requests[path] = fetch(`${API_URL}/api/${path}/`)
      .then((res) => {
        if (!res.ok) throw new Error(`API ${path}: ${res.status}`);
        return res.json();
      })
      .catch((err) => {
        delete requests[path]; // allow a retry on the next render
        throw err;
      });
  }
  return requests[path];
}

/**
 * Returns the fallback instantly, then swaps in live data from Django.
 * If the backend is asleep / offline / empty, the site keeps showing the fallback.
 */
export function useApi(path, fallback) {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let active = true;
    fetchApi(path)
      .then((json) => {
        const empty = Array.isArray(json) && json.length === 0;
        if (active && !empty) setData(json);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [path]);

  return data;
}

export async function postApi(path, body) {
  const res = await fetch(`${API_URL}/api/${path}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`API ${path}: ${res.status}`);
  return res.json();
}
