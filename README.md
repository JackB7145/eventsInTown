# 📅 Events Dashboard

A lightweight **Next.js application** that displays upcoming events with search and filtering capabilities.  
This dashboard is powered by a daily-updated **ETL pipeline**, which scrapes and transforms event data from multiple sources before loading it into a Postgres database.

---

## 🔑 Key Features
- **Daily Updates** → Events are refreshed automatically through a GitHub Actions ETL workflow.  
- **Search & Filters** → Search by event name/description and filter by date range.  
- **Clean UI** → Simple, professional dashboard built with Next.js and CSS.  
- **Direct Links** → Each event includes a link to more information.  

---

## ⚙️ How It Works
1. **ETL Pipeline**  
   - Scrapes events from multiple sources (e.g., APIs, websites).  
   - Transforms and cleans the data.  
   - Loads it into a Postgres database.  

2. **Next.js App**  
   - Provides a frontend to browse, search, and filter events.  
   - Connects to an API route (`/api/events`) that queries the database.  

This ensures the dashboard always reflects the **latest events**, updated daily.  

---

## 🚀 Getting Started
```bash
npm install
npm run dev
