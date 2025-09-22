"use client";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      const params = new URLSearchParams({ search, startDate, endDate });
      const res = await fetch(`/api/events?${params.toString()}`);
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, [search, startDate, endDate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>📅 Events Dashboard</h1>

      <div className={styles.filters}>
        <input
          className={styles.input}
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          className={styles.input}
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          className={styles.input}
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div className={styles.eventList}>
        {events.length === 0 ? (
          <p className={styles.noEvents}>No events found.</p>
        ) : (
          events.map((ev) => (
            <div key={ev.id} className={styles.eventCard}>
              <h2 className={styles.eventTitle}>{ev.event_name}</h2>
              <p className={styles.eventDate}>{ev.event_date}</p>
              <p className={styles.eventDescription}>
                {ev.description || "No description available."}
              </p>
              <a
                className={styles.eventLink}
                href={ev.link}
                target="_blank"
                rel="noreferrer"
              >
                More info →
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
