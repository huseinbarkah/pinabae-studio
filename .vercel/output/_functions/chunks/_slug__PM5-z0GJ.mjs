import { n as __exportAll, t as createComponent } from "./compiler_C3SA6joR.mjs";
import { C as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_F1LryteY.mjs";
import { t as renderScript } from "./global_BLMbRZRc.mjs";
import { t as $$Layout } from "./Layout_8PbpmVWA.mjs";
import { t as $$Button } from "./Button_DXxonDKN.mjs";
import { i as $$Navbar, n as $$Section, r as $$Footer, t as supabase } from "./supabase_CKbWxrjd.mjs";
//#region src/pages/portfolio/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const { data: item, error } = await supabase.from("portfolio").select("*").eq("slug", slug).single();
	if (error || !item) return Astro.redirect("/404");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${item.title} | Portfolio Pinabae Studio`,
		"description": item.description
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}${maybeRenderHead($$result)}<main class="flex-grow pt-32">${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result) => renderTemplate`<div class="max-w-4xl mx-auto"><a href="/portfolio" class="text-gray-500 hover:text-primary mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>Kembali ke Portfolio</a><div class="header-anim opacity-0 translate-y-8 mb-12 text-center"><div class="text-sm font-bold text-primary uppercase tracking-widest mb-4">${item.client_name}</div><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">${item.title}</h1></div>${item.image_url && renderTemplate`<div class="aspect-video w-full rounded-3xl overflow-hidden mb-12 shadow-2xl content-anim opacity-0 translate-y-8"><img${addAttribute(item.image_url, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover"></div>`}<div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 content-anim opacity-0 translate-y-8"><div class="md:col-span-2 prose prose-lg max-w-none text-text"><h3 class="text-2xl font-bold text-dark mb-4">Tentang Proyek</h3><p>${item.description}</p></div><div class="bg-section p-8 rounded-3xl"><div class="mb-6"><h4 class="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Klien</h4><p class="font-medium text-dark">${item.client_name || "-"}</p></div>${item.services_rendered && item.services_rendered.length > 0 && renderTemplate`<div class="mb-6"><h4 class="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Layanan</h4><div class="flex flex-wrap gap-2">${item.services_rendered.map((service) => renderTemplate`<span class="bg-white border border-border px-3 py-1 rounded-full text-sm font-medium text-dark">${service}</span>`)}</div></div>`}${item.website_url && renderTemplate`<div><h4 class="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Website</h4><a${addAttribute(item.website_url, "href")} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium flex items-center gap-1 break-all">Kunjungi Website<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a></div>`}</div></div><div class="pt-8 border-t border-border text-center content-anim opacity-0 translate-y-8"><h3 class="text-2xl font-bold text-dark mb-6">Ingin membuat proyek serupa?</h3>${renderComponent($$result, "Button", $$Button, {
		"href": "/kontak",
		"size": "lg"
	}, { "default": ($$result) => renderTemplate`Mulai Konsultasi` })}</div></div>` })}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "D:/Pinabae-Studio/src/pages/portfolio/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Pinabae-Studio/src/pages/portfolio/[slug].astro", void 0);
var $$file = "D:/Pinabae-Studio/src/pages/portfolio/[slug].astro";
var $$url = "/portfolio/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/portfolio/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
