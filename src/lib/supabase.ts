import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Check your environment variables.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key',
  {
    db: { schema: 'public' },
    global: {
      headers: {
        'apikey': supabaseAnonKey || '',
      },
      fetch: async (url, options) => {
        try {
          return await fetch(url, options);
        } catch (e) {
          console.error("Supabase fetch error:", e);
          return new Response(JSON.stringify({ error: "Fetch failed", details: e }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
          });
        }
      },
    },
  }
);
