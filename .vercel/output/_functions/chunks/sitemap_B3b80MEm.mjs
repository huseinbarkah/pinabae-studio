import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as supabase } from "./supabase_Cm4yaabg.mjs";
//#region src/pages/sitemap.xml.ts
var sitemap_xml_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
var GET = async ({ request }) => {
	const siteUrl = new URL(request.url).origin;
	try {
		const { data: blogs } = await supabase.from("blog_posts").select("slug").eq("status", "published");
		const { data: portfolios } = await supabase.from("portfolio").select("slug");
		const { data: services } = await supabase.from("services").select("slug");
		const staticPages = [
			"",
			"/tentang",
			"/layanan",
			"/portfolio",
			"/blog",
			"/kontak",
			"/faq",
			"/terms-conditions",
			"/privacy-policy"
		];
		let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
		staticPages.forEach((page) => {
			sitemap += `
  <url>
    <loc>${siteUrl}${page}</loc>
    <changefreq>${page === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`;
		});
		if (blogs && blogs.length > 0) blogs.forEach((blog) => {
			sitemap += `
  <url>
    <loc>${siteUrl}/blog/${blog.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
		});
		if (portfolios && portfolios.length > 0) portfolios.forEach((portfolio) => {
			sitemap += `
  <url>
    <loc>${siteUrl}/portfolio/${portfolio.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
		});
		if (services && services.length > 0) services.forEach((service) => {
			sitemap += `
  <url>
    <loc>${siteUrl}/layanan/${service.slug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
		});
		sitemap += `
</urlset>`;
		return new Response(sitemap, {
			status: 200,
			headers: {
				"Content-Type": "application/xml",
				"Cache-Control": "public, max-age=3600"
			}
		});
	} catch (error) {
		console.error("Error generating sitemap:", error);
		return new Response("Error generating sitemap", { status: 500 });
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/sitemap.xml@_@ts
var page = () => sitemap_xml_exports;
//#endregion
export { page };
