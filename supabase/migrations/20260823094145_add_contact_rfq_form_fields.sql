/*
# Add new form fields to contact and RFQ submission tables

1. Modified Tables
- `contact_submissions`: Added columns for designation, state, project_location, project_category, project_description, and expected_timeline to support the expanded project enquiry form.
- `rfq_submissions`: Added columns for designation, rfq_reference, project_name, project_location, and scope to support the expanded RFQ form.

2. Security
- No security changes. Existing RLS policies remain in effect (public INSERT only for anon, authenticated).

3. Notes
- All new columns are nullable to avoid breaking existing rows.
- The `subject` and `message` columns in contact_submissions are retained for backward compatibility.
- The `capacity_scale` column in rfq_submissions is retained for backward compatibility.
*/

-- Contact submissions: add new fields
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'designation') THEN
    ALTER TABLE contact_submissions ADD COLUMN designation text;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'state') THEN
    ALTER TABLE contact_submissions ADD COLUMN state text;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'project_location') THEN
    ALTER TABLE contact_submissions ADD COLUMN project_location text;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'project_category') THEN
    ALTER TABLE contact_submissions ADD COLUMN project_category text;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'project_description') THEN
    ALTER TABLE contact_submissions ADD COLUMN project_description text;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'contact_submissions' AND column_name = 'expected_timeline') THEN
    ALTER TABLE contact_submissions ADD COLUMN expected_timeline text;
  END IF;
END $$;

-- RFQ submissions: add new fields
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'rfq_submissions' AND column_name = 'designation') THEN
    ALTER TABLE rfq_submissions ADD COLUMN designation text;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'rfq_submissions' AND column_name = 'rfq_reference') THEN
    ALTER TABLE rfq_submissions ADD COLUMN rfq_reference text;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'rfq_submissions' AND column_name = 'project_name') THEN
    ALTER TABLE rfq_submissions ADD COLUMN project_name text;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'rfq_submissions' AND column_name = 'project_location') THEN
    ALTER TABLE rfq_submissions ADD COLUMN project_location text;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'rfq_submissions' AND column_name = 'scope') THEN
    ALTER TABLE rfq_submissions ADD COLUMN scope text;
  END IF;
END $$;
