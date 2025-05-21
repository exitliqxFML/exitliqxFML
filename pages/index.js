import { useEffect, useState } from 'react';
import LaunchTable from '../components/LaunchTable';

export default function Home() {
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    async function load() {
      const res = await fetch('/api/launches');
      setLaunches(await res.json());
    }
    load();
    const iv = setInterval(load, 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">$FML Rugpull Detector</h1>
      <LaunchTable data={launches} />
    </div>
  );
}
