-- =================================================================================
-- Pinabae Studio - Finance Module Migration
-- =================================================================================
-- IMPORTANT: Run this script in your Supabase Dashboard SQL Editor
-- This creates 6 new tables for the Finance Module:
-- 1. clients
-- 2. transaction_categories
-- 3. transactions
-- 4. invoices
-- 5. invoice_items
-- 6. financial_settings
-- =================================================================================

-- 1. CLIENTS TABLE
CREATE TABLE IF NOT EXISTS public.clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    company TEXT,
    email TEXT,
    phone TEXT,
    address TEXT,
    website TEXT,
    service TEXT,
    project_value NUMERIC DEFAULT 0,
    status TEXT DEFAULT 'Berjalan', -- Berjalan, Selesai, Pending
    total_paid NUMERIC DEFAULT 0,
    start_date DATE,
    deadline DATE,
    notes TEXT,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. TRANSACTION CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.transaction_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type TEXT NOT NULL, -- Pemasukan, Pengeluaran
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert Default Categories (Pemasukan)
INSERT INTO public.transaction_categories (name, type) VALUES
('Landing Page', 'Pemasukan'), ('Company Profile', 'Pemasukan'),
('Portfolio Website', 'Pemasukan'), ('SEO Optimization', 'Pemasukan'),
('Maintenance', 'Pemasukan'), ('Hosting', 'Pemasukan'),
('Domain', 'Pemasukan'), ('Lainnya', 'Pemasukan');

-- Insert Default Categories (Pengeluaran)
INSERT INTO public.transaction_categories (name, type) VALUES
('Hosting', 'Pengeluaran'), ('Domain', 'Pengeluaran'),
('Internet', 'Pengeluaran'), ('Listrik', 'Pengeluaran'),
('Transportasi', 'Pengeluaran'), ('Software', 'Pengeluaran'),
('ChatGPT', 'Pengeluaran'), ('Gemini', 'Pengeluaran'),
('Canva', 'Pengeluaran'), ('Marketing', 'Pengeluaran'),
('Operasional', 'Pengeluaran'), ('Lainnya', 'Pengeluaran');

-- 3. TRANSACTIONS TABLE
CREATE TABLE IF NOT EXISTS public.transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    date DATE NOT NULL,
    type TEXT NOT NULL, -- Pemasukan, Pengeluaran
    category_id UUID REFERENCES public.transaction_categories(id),
    client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL,
    amount NUMERIC NOT NULL,
    payment_method TEXT, -- Cash, Transfer, QRIS, E-Wallet
    status TEXT DEFAULT 'Berhasil', -- Pending, Berhasil, Dibatalkan
    notes TEXT,
    receipt_url TEXT,
    invoice_id UUID, -- Will add foreign key after invoices table created
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. INVOICES TABLE
CREATE TABLE IF NOT EXISTS public.invoices (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    invoice_number TEXT NOT NULL UNIQUE,
    client_id UUID REFERENCES public.clients(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    due_date DATE,
    status TEXT DEFAULT 'Draft', -- Draft, Menunggu Pembayaran, Sebagian Dibayar, Lunas
    subtotal NUMERIC DEFAULT 0,
    tax_rate NUMERIC DEFAULT 0,
    tax_amount NUMERIC DEFAULT 0,
    discount NUMERIC DEFAULT 0,
    grand_total NUMERIC DEFAULT 0,
    notes TEXT,
    is_deleted BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add foreign key constraint to transactions now that invoices exists
ALTER TABLE public.transactions
ADD CONSTRAINT fk_invoice
FOREIGN KEY (invoice_id) REFERENCES public.invoices(id) ON DELETE SET NULL;

-- 5. INVOICE ITEMS TABLE
CREATE TABLE IF NOT EXISTS public.invoice_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    invoice_id UUID REFERENCES public.invoices(id) ON DELETE CASCADE,
    description TEXT NOT NULL,
    qty NUMERIC DEFAULT 1,
    price NUMERIC DEFAULT 0,
    total NUMERIC DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. FINANCIAL SETTINGS TABLE (Singleton)
CREATE TABLE IF NOT EXISTS public.financial_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    business_name TEXT DEFAULT 'Pinabae Studio',
    address TEXT,
    logo_url TEXT,
    bank_account TEXT,
    qris_url TEXT,
    currency TEXT DEFAULT 'IDR',
    tax_percentage NUMERIC DEFAULT 0,
    invoice_prefix TEXT DEFAULT 'INV-',
    monthly_target NUMERIC DEFAULT 10000000,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default settings row
INSERT INTO public.financial_settings (business_name) VALUES ('Pinabae Studio');

-- =================================================================================
-- ROW LEVEL SECURITY (RLS)
-- Note: Assuming Admin Dashboard uses authenticated Supabase sessions
-- =================================================================================
DO $$ 
DECLARE 
    t text;
    tables_to_secure text[] := ARRAY['clients', 'transaction_categories', 'transactions', 'invoices', 'invoice_items', 'financial_settings'];
BEGIN 
    FOREACH t IN ARRAY tables_to_secure LOOP
        IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = t) THEN
            EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY;', t);
            
            -- Create clean new policies
            EXECUTE format('CREATE POLICY "Allow authenticated read on %I" ON public.%I FOR SELECT USING (auth.role() = ''authenticated'');', t, t);
            EXECUTE format('CREATE POLICY "Allow authenticated insert on %I" ON public.%I FOR INSERT WITH CHECK (auth.role() = ''authenticated'');', t, t);
            EXECUTE format('CREATE POLICY "Allow authenticated update on %I" ON public.%I FOR UPDATE USING (auth.role() = ''authenticated'');', t, t);
            EXECUTE format('CREATE POLICY "Allow authenticated delete on %I" ON public.%I FOR DELETE USING (auth.role() = ''authenticated'');', t, t);
        END IF;
    END LOOP;
END $$;
