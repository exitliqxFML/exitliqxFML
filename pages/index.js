import { useEffect, useState } from 'react';
import LaunchTable from '../components/LaunchTable';

export default function Home() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/launches');
        const data = await res.json();
        if (Array.isArray(data)) {
          setLaunches(data);
        } else {
          console.error('Invalid API response:', data);
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    }

    load();
    const iv = setInterval(load, 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
        $FML Rugpull Detector
      </h1>
      <LaunchTable data={launches} />
    </div>
  );
}
