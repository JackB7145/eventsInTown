import { query } from "@/lib/db";

export default async function handler(req, res) {
  const { search = "", startDate = "", endDate = "" } = req.query;

  let sql = "SELECT * FROM events WHERE 1=1";
  const params = [];
  let i = 1;

  if (search) {
    sql += ` AND (event_name ILIKE $${i} OR description ILIKE $${i})`;
    params.push(`%${search}%`);
    i++;
  }

  if (startDate) {
    sql += ` AND event_date >= $${i}`;
    params.push(startDate);
    i++;
  }

  if (endDate) {
    sql += ` AND event_date <= $${i}`;
    params.push(endDate);
    i++;
  }

  sql += " ORDER BY event_date ASC LIMIT 100";

  try {
    const rows = await query(sql, params);
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch events" });
  }
}
