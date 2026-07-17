import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, d as renderTemplate, h as maybeRenderHead, i as renderComponent, w as createAstro } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
import { t as renderScript } from "./global_Ba0uPwjH.mjs";
import { t as supabase } from "./supabase_Cm4yaabg.mjs";
import { t as $$Layout } from "./Layout_CpsAPkTy.mjs";
import { t as $$Button } from "./Button_XQgawOLD.mjs";
import { n as $$Footer, r as $$Navbar, t as $$Section } from "./Section_CzSDR4eY.mjs";
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
		"title": `${service.title} | Pinabae Studio`,
		"description": service.description
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}${maybeRenderHead($$result)}<main class="flex-grow pt-32">${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result) => renderTemplate`<div class="max-w-4xl mx-auto"><a href="/layanan" class="text-gray-500 hover:text-primary mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>Kembali ke Layanan</a><div class="header-anim opacity-0 translate-y-8"><h1 class="text-4xl md:text-5xl font-bold text-dark mb-6">${service.title}</h1></div><div class="prose prose-lg prose-orange max-w-none text-text content-anim opacity-0 translate-y-8">${unescapeHTML(service.description)}</div><div class="mt-16 pt-8 border-t border-border flex items-center justify-between content-anim opacity-0 translate-y-8"><p class="text-lg font-medium text-dark">Tertarik dengan layanan ini?</p>${renderComponent($$result, "Button", $$Button, {
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
