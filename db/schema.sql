-- SMG Leads Database Schema
-- Sprint 6: Data Persistence for B2B Onboarding

CREATE TABLE IF NOT EXISTS smg_leads (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  business_name TEXT NOT NULL,
  rut        TEXT NOT NULL,
  address    TEXT NOT NULL,
  phone      TEXT NOT NULL,
  business_type TEXT NOT NULL DEFAULT 'Minimarket',
  status     TEXT NOT NULL DEFAULT 'pending',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_leads_rut ON smg_leads(rut);
CREATE INDEX IF NOT EXISTS idx_leads_status ON smg_leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created ON smg_leads(created_at);
