/*
# Create RSIPL India public submission tables

1. New Tables
- `contact_submissions`: public enquiries with name, company, email, phone, subject, message, and timestamp.
- `rfq_submissions`: project quotation requests with organisation, contact details, location, project scope, commercial context, and timestamp.
- `vendor_registrations`: supplier onboarding requests with company identity, contact details, work categories, business profile, and timestamp.

2. Security
- Row level security is enabled on all three tables.
- The site has no sign-in flow, so anonymous and authenticated visitors may submit records. These tables are write-only from the public application perspective; no public read policy is created.

3. Notes
- The tables are intentionally append-oriented for procurement intake.
- Timestamps default to the database clock for consistent audit context.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS rfq_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_person text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  state text NOT NULL,
  city text NOT NULL,
  project_type text NOT NULL,
  capacity_scale text,
  timeline text,
  budget_range text,
  technical_requirements text,
  additional_notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS vendor_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  registration_number text NOT NULL,
  contact_person text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  categories_of_work text NOT NULL,
  years_in_business text NOT NULL,
  annual_turnover_range text NOT NULL,
  certifications_held text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE rfq_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendor_registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit contact enquiries" ON contact_submissions;
CREATE POLICY "Public can submit contact enquiries" ON contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "Public can submit RFQs" ON rfq_submissions;
CREATE POLICY "Public can submit RFQs" ON rfq_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);
DROP POLICY IF EXISTS "Public can submit vendor registrations" ON vendor_registrations;
CREATE POLICY "Public can submit vendor registrations" ON vendor_registrations FOR INSERT TO anon, authenticated WITH CHECK (true);