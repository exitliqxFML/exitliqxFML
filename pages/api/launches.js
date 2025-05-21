// pages/api/launches.js

import { scoreLaunch } from '../../lib/scoreEngine';

export default async function handler(req, res) {
  try {
    // Try fetching real launches from Pump.fun
    const response = await fetch('https://api.pump.fun/v1/launches/recent');
    if (!response.ok) {
      console.warn(`Pump.fun fetch failed: ${response.status} ${response.statusText}`);
      // Fallback sample data (adjust this array to show more coins)
      const sample = [
        { id: '1', name: 'MOONSHOT',  score: scoreLaunch({ liquidity_usd:  1000, total_supply:   500 }) },
        { id: '2', name: 'LAUNCHPAD', score: scoreLaunch({ liquidity_usd:  2000, total_supply:   100 }) },
        { id: '3', name: 'FARTCOIN',  score: scoreLaunch({ liquidity_usd:   100, total_supply: 10000 }) },
      ];
      return res.status(200).json(sample);
    }

    // Parse and score real data
    const data = await response.json();
    const items = Array.isArray(data.items) ? data.items : [];
    const scored = items.map(item => ({
      id:    item.id.toString(),
      name:  item.name,
      score: scoreLaunch(item),
    }));

    return res.status(200).json(scored);
  } catch (err) {
    console.error('Error in /api/launches:', err);
    // On exception, return an empty array (or reuse sample if you prefer)
    return res.status(200).json([]);
  }
}
