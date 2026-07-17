import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
import { t as renderScript } from "./global_Ba0uPwjH.mjs";
import { t as $$Layout } from "./Layout_CpsAPkTy.mjs";
import { t as $$Input } from "./Input_DiSXXCKv.mjs";
import { t as $$Button } from "./Button_XQgawOLD.mjs";
import { n as $$Footer, r as $$Navbar, t as $$Section } from "./Section_CzSDR4eY.mjs";
//#region src/pages/kontak.astro
var kontak_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Kontak,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Kontak = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Hubungi Kami | Pinabae Studio",
		"description": "Konsultasikan kebutuhan website dan digital marketing bisnis Anda bersama Pinabae Studio."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}${maybeRenderHead($$result)}<main class="flex-grow pt-32">${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result) => renderTemplate`<div class="max-w-5xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16"><div class="header-anim opacity-0 translate-y-8"><h1 class="text-4xl md:text-5xl font-bold text-dark mb-6">Mari Berdiskusi</h1><p class="text-lg text-text mb-10">Ceritakan tentang bisnis Anda dan apa yang ingin Anda capai. Kami akan membantu merancang solusi website yang tepat sasaran.</p><div class="space-y-6"><div class="flex items-start gap-4"><div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-dark shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div><div><h3 class="font-bold text-dark">WhatsApp</h3><p class="text-text">+62 823-3926-5052</p></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-dark shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div><div><h3 class="font-bold text-dark">Email</h3><p class="text-text">pinabaestudio@gmail.com</p></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-dark shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></div><div><h3 class="font-bold text-dark">Instagram</h3><p class="text-text">@pinabaestudio</p></div></div></div></div><div class="bg-white p-8 rounded-3xl border border-border shadow-lg form-anim opacity-0 translate-y-8"><form id="waForm" class="space-y-6"><h3 class="text-2xl font-bold text-dark mb-6">Kirim Pesan</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6">${renderComponent($$result, "Input", $$Input, {
		"name": "name",
		"label": "Nama Lengkap",
		"required": true,
		"placeholder": "Cth: Budi Santoso"
	})}${renderComponent($$result, "Input", $$Input, {
		"name": "phone",
		"type": "tel",
		"label": "No. WhatsApp Anda",
		"required": true,
		"placeholder": "Cth: 08123456789"
	})}</div>${renderComponent($$result, "Input", $$Input, {
		"name": "email",
		"type": "email",
		"label": "Alamat Email",
		"required": true,
		"placeholder": "Cth: budi@email.com"
	})}${renderComponent($$result, "Input", $$Input, {
		"name": "subject",
		"label": "Subjek / Layanan",
		"required": true,
		"placeholder": "Cth: Pembuatan Website E-Commerce"
	})}${renderComponent($$result, "Input", $$Input, {
		"name": "message",
		"label": "Pesan Anda",
		"required": true,
		"textarea": true,
		"rows": 5,
		"placeholder": "Ceritakan detail kebutuhan Anda..."
	})}${renderComponent($$result, "Button", $$Button, {
		"type": "submit",
		"class": "w-full"
	}, { "default": ($$result) => renderTemplate`Kirim via WhatsApp` })}</form></div></div></div>` })}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "D:/Pinabae-Studio/src/pages/kontak.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Pinabae-Studio/src/pages/kontak.astro", void 0);
var $$file = "D:/Pinabae-Studio/src/pages/kontak.astro";
var $$url = "/kontak";
//#endregion
//#region \0virtual:astro:page:src/pages/kontak@_@astro
var page = () => kontak_exports;
//#endregion
export { page };
