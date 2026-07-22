-- =================================================================================
-- Pinabae Studio - Supabase RLS Security Setup (Fix Infinite Recursion)
-- =================================================================================
-- IMPORTANT: Run this script in your Supabase Dashboard SQL Editor
-- This script safely enables RLS, DROPS ANY OLD POLICIES (which are causing the 
-- infinite recursion bug with user_roles), and sets clean new policies.
-- =================================================================================

DO $$ 
DECLARE 
    t text;
    tables_to_secure text[] := ARRAY['blog_posts', 'portfolio', 'services', 'faqs', 'team_members', 'messages', 'categories', 'site_settings'];
    p_record record;
BEGIN 
    FOREACH t IN ARRAY tables_to_secure LOOP
        IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = t) THEN
            -- Enable RLS
            EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY;', t);
            
            -- DROP ALL EXISTING POLICIES on this table to prevent infinite recursion or conflicts
            FOR p_record IN SELECT policyname FROM pg_policies WHERE schemaname = 'public' AND tablename = t LOOP
                EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I;', p_record.policyname, t);
            END LOOP;

            -- Create clean new policies
            EXECUTE format('CREATE POLICY "Allow public read on %I" ON public.%I FOR SELECT USING (true);', t, t);
            EXECUTE format('CREATE POLICY "Allow authenticated insert on %I" ON public.%I FOR INSERT WITH CHECK (auth.role() = ''authenticated'');', t, t);
            EXECUTE format('CREATE POLICY "Allow authenticated update on %I" ON public.%I FOR UPDATE USING (auth.role() = ''authenticated'');', t, t);
            EXECUTE format('CREATE POLICY "Allow authenticated delete on %I" ON public.%I FOR DELETE USING (auth.role() = ''authenticated'');', t, t);
        ELSE
            RAISE NOTICE 'Table public.% does not exist. Skipping RLS setup for it.', t;
        END IF;
    END LOOP;
END $$;

-- =================================================================================
-- SETUP RLS FOR STORAGE 'media' BUCKET
-- This secures your file uploads
-- =================================================================================
DO $$ 
DECLARE
    p_record record;
BEGIN
    -- Drop all existing policies on storage.objects to ensure a clean slate
    FOR p_record IN SELECT policyname FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects' LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON storage.objects;', p_record.policyname);
    END LOOP;

    -- Create new secure policies for the media bucket
    CREATE POLICY "Allow public read on media storage" ON storage.objects FOR SELECT USING (bucket_id = 'media');
    CREATE POLICY "Allow authenticated insert on media storage" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');
    CREATE POLICY "Allow authenticated update on media storage" ON storage.objects FOR UPDATE USING (bucket_id = 'media' AND auth.role() = 'authenticated');
    CREATE POLICY "Allow authenticated delete on media storage" ON storage.objects FOR DELETE USING (bucket_id = 'media' AND auth.role() = 'authenticated');
EXCEPTION
    WHEN undefined_table THEN
        RAISE NOTICE 'storage.objects table does not exist. Please make sure Storage is enabled in your Supabase project.';
END $$;
