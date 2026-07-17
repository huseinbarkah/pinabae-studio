import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
import { t as renderScript } from "./global_Ba0uPwjH.mjs";
import { t as supabase } from "./supabase_DM77KPLp.mjs";
import { t as $$Layout } from "./Layout_DK0FnCb7.mjs";
import { t as $$Button } from "./Button_XQgawOLD.mjs";
import { n as $$Footer, r as $$Navbar, t as $$Section } from "./Section_CzSDR4eY.mjs";
//#region src/pages/layanan/index.astro
var layanan_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const { data: services } = await supabase.from("services").select("*").order("created_at", { ascending: true });
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Layanan Kami | Pinabae Studio",
		"description": "Jasa pembuatan website company profile, landing page, portfolio, dan custom web app profesional."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}${maybeRenderHead($$result)}<main class="flex-grow pt-32"><!-- Header -->${renderComponent($$result, "Section", $$Section, { "class": "pb-10 md:pb-16 text-center" }, { "default": ($$result) => renderTemplate`<div class="max-w-[720px] mx-auto header-anim opacity-0 translate-y-8"><span class="inline-block text-primary font-bold tracking-wider text-sm mb-4 uppercase">Layanan Pinabae Studio</span><h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6">Bangun Website yang Memberikan <span class="text-primary">Kesan Pertama</span> Terbaik.</h1><p class="text-lg md:text-xl text-text leading-relaxed text-balance">Setiap bisnis memiliki kebutuhan yang berbeda. Karena itu, kami menghadirkan solusi website yang dirancang untuk membangun kepercayaan, memperkuat identitas digital, dan mendukung pertumbuhan bisnis Anda.</p></div>` })}<!-- Services List -->${renderComponent($$result, "Section", $$Section, { "class": "pb-24" }, { "default": ($$result) => renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto cards-container">${services && services.length > 0 ? services.map((service) => renderTemplate`<div class="group bg-white rounded-[24px] p-8 border border-gray-200/60 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(245,124,0,0.12)] service-card opacity-0 translate-y-8 flex flex-col h-full"><div class="flex justify-between items-start mb-6"><div class="w-12 h-12 rounded-2xl bg-orange-50/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-500 ease-out"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg></div>${service.badge_text && renderTemplate`<span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">${service.badge_text}</span>`}</div><h3 class="text-2xl font-bold text-dark mb-3 tracking-tight">${service.title}</h3><p class="text-text leading-relaxed mb-8 flex-grow line-clamp-3">${service.description.replace(/<[^>]*>?/gm, "")}</p><a${addAttribute(`/layanan/${service.slug}`, "href")} class="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 mt-auto">Pelajari Lebih Lanjut <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a></div>`) : renderTemplate`<div class="col-span-1 md:col-span-2 text-center py-12 text-gray-500">Belum ada layanan yang ditambahkan.</div>`}</div>` })}<!-- CTA -->${renderComponent($$result, "Section", $$Section, {
		"background": "gray",
		"class": "py-20 text-center"
	}, { "default": ($$result) => renderTemplate`<h2 class="text-3xl md:text-4xl font-bold mb-6">Butuh Layanan Custom?</h2><p class="text-lg text-text max-w-2xl mx-auto mb-8">Tidak menemukan apa yang Anda cari? Konsultasikan kebutuhan spesifik Anda dengan tim kami.</p>${renderComponent($$result, "Button", $$Button, {
		"href": "/kontak",
		"size": "lg"
	}, { "default": ($$result) => renderTemplate`Hubungi Kami Sekarang` })}` })}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "D:/Pinabae-Studio/src/pages/layanan/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Pinabae-Studio/src/pages/layanan/index.astro", void 0);
var $$file = "D:/Pinabae-Studio/src/pages/layanan/index.astro";
var $$url = "/layanan";
//#endregion
//#region \0virtual:astro:page:src/pages/layanan/index@_@astro
var page = () => layanan_exports;
//#endregion
export { page };
