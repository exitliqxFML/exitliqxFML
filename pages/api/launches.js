// pages/api/launches.js

import { scoreLaunch } from '../../lib/scoreEngine';

export default async function handler(req, res) {
  try {
    // use global fetch (Next.js runtime)
    const response = await fetch('https://api.pump.fun/v1/launches/recent');
    if (!response.ok) {
      console.error('Pump.fun API error:', response.status, response.statusText);
      // return empty array so front-end never crashes
      return res.status(200).json([]);
    }

    const data = await response.json();
    // guard in case the shape is unexpected
    const items = Array.isArray(data.items) ? data.items : [];
    const scored = items.map(item => ({
      id:    item.id,
      name:  item.name,
      score: scoreLaunch(item),
    }));

    return res.status(200).json(scored);
  } catch (error) {
    console.error('Error in /api/launches:', error);
    // swallow errors and return an empty list
    return res.status(200).json([]);
  }
}
