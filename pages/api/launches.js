import fetch from 'node-fetch';
import { scoreLaunch } from '../../lib/scoreEngine';

export default async function handler(req, res) {
  try {
    const r = await fetch('https://api.pump.fun/v1/launches/recent');
    const { items } = await r.json();
    const scored = items.map(i => ({
      id:    i.id,
      name:  i.name,
      score: scoreLaunch(i),
    }));
    res.status(200).json(scored);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to load launches' });
  }
}
