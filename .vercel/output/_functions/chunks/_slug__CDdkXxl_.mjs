import { n as __exportAll, t as createComponent } from "./compiler_C3SA6joR.mjs";
import { C as createAstro, d as renderTemplate, h as maybeRenderHead, i as renderComponent, x as unescapeHTML } from "./server_F1LryteY.mjs";
import { t as renderScript } from "./global_BLMbRZRc.mjs";
import { t as $$Layout } from "./Layout_8PbpmVWA.mjs";
import { t as $$Button } from "./Button_DXxonDKN.mjs";
import { i as $$Navbar, n as $$Section, r as $$Footer, t as supabase } from "./supabase_CKbWxrjd.mjs";
//#region src/pages/layanan/[slug].astro
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
	const { data: service, error } = await supabase.from("services").select("*").eq("slug", slug).single();
	if (error || !service) return Astro.redirect("/404");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${service.name} | Pinabae Studio`,
		"description": service.short_description
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}${maybeRenderHead($$result)}<main class="flex-grow pt-32">${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result) => renderTemplate`<div class="max-w-4xl mx-auto"><a href="/layanan" class="text-gray-500 hover:text-primary mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>Kembali ke Layanan</a><div class="header-anim opacity-0 translate-y-8"><h1 class="text-4xl md:text-5xl font-bold text-dark mb-6">${service.name}</h1>${service.price_start && renderTemplate`<p class="text-xl text-primary font-medium mb-10">Mulai dari Rp ${service.price_start.toLocaleString("id-ID")}</p>`}</div><div class="prose prose-lg prose-orange max-w-none text-text content-anim opacity-0 translate-y-8">${unescapeHTML(service.full_description || service.short_description)}</div><div class="mt-16 pt-8 border-t border-border flex items-center justify-between content-anim opacity-0 translate-y-8"><p class="text-lg font-medium text-dark">Tertarik dengan layanan ini?</p>${renderComponent($$result, "Button", $$Button, {
		"href": "/kontak",
		"size": "lg"
	}, { "default": ($$result) => renderTemplate`Konsultasi Sekarang` })}</div></div>` })}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "D:/Pinabae-Studio/src/pages/layanan/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Pinabae-Studio/src/pages/layanan/[slug].astro", void 0);
var $$file = "D:/Pinabae-Studio/src/pages/layanan/[slug].astro";
var $$url = "/layanan/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/layanan/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
