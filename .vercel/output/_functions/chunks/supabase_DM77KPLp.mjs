import { createClient } from "@supabase/supabase-js";
//#region src/lib/supabase.ts
var supabaseUrl = "https://fwrmljqxfbiykncadfqo.supabase.co";
var supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cm1sanF4ZmJpeWtuY2FkZnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxODcyOTcsImV4cCI6MjA5OTc2MzI5N30.ENk3pWCcYDSAWIPX5qTQnhTLBEigPnRj9br7EzQybXI";
var supabase = createClient(supabaseUrl, supabaseAnonKey, {
	db: { schema: "public" },
	global: {
		headers: { "apikey": supabaseAnonKey },
		fetch: async (url, options) => {
			try {
				return await fetch(url, options);
			} catch (e) {
				console.error("Supabase fetch error:", e);
				return new Response(JSON.stringify({
					error: "Fetch failed",
					details: e
				}), {
					status: 500,
					headers: { "Content-Type": "application/json" }
				});
			}
		}
	}
});
//#endregion
export { supabase as t };
