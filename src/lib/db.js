// lib/db.js
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DB_URL, // set in .env.local
});

export async function query(q, params) {
  const client = await pool.connect();
  try {
    const res = await client.query(q, params);
    return res.rows;
  } finally {
    client.release();
  }
}
