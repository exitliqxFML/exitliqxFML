// pages/api/launches.js

import fetch from 'node-fetch';

const BITQUERY_API_URL = 'https://graphql.bitquery.io/';
const BITQUERY_API_KEY = process.env.BITQUERY_API_KEY;

export default async function handler(req, res) {
  // Fetch tokens created in the last 10 minutes
  const tenMinsAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();

  const graphqlQuery = {
    query: `
      query ($since: ISO8601DateTime!) {
        solana {
          instructions(
            where: {
              instruction: {
                program: { name: { is: "pump" }, method: { is: "create" } }
              }
              block: { time: { since: $since } }
            }
          ) {
            instruction {
              accounts {
                token {
                  mint
                  symbol
                  name
                }
              }
            }
            transaction {
              signature
            }
          }
        }
      }
    `,
    variables: { since: tenMinsAgo },
  };

  try {
    const response = await fetch(BITQUERY_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': BITQUERY_API_KEY,
      },
      body: JSON.stringify(graphqlQuery),
    });
    const { data, errors } = await response.json();

    if (errors) {
      console.error('Bitquery errors:', errors);
      return res.status(500).json({ error: 'Error fetching from Bitquery' });
    }

    // Map each create‐instruction to a row
    const launches = data.solana.instructions.map((ins) => {
      const acct = ins.instruction.accounts[0]?.token || {};
      return {
        id: ins.transaction.signature,
        name: acct.symbol || acct.name || acct.mint,
        // Compute a dummy risk score by hashing the mint and mod 100,
        // or replace with your real scoreLaunch logic if you prefer
        score: Math.floor(
          Array.from(acct.mint || '')
            .reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % 100
        ) + 1,
      };
    });

    return res.status(200).json(launches);
  } catch (err) {
    console.error('API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
