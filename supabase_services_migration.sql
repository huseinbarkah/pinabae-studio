-- =================================================================================
-- Pinabae Studio - Services Table Migration
-- =================================================================================
-- IMPORTANT: Run this script in your Supabase Dashboard SQL Editor
-- This script adds new columns to support a more informative and conversion-oriented
-- services section.
-- =================================================================================

ALTER TABLE public.services
ADD COLUMN IF NOT EXISTS price_starts_from text,
ADD COLUMN IF NOT EXISTS badges jsonb DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS benefits jsonb DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS cta_text text,
ADD COLUMN IF NOT EXISTS cta_link text,
ADD COLUMN IF NOT EXISTS order_index integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT true;
