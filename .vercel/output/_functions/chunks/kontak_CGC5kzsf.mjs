import { n as __exportAll, t as createComponent } from "./compiler_C3SA6joR.mjs";
import { C as createAstro, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_F1LryteY.mjs";
import { t as renderScript } from "./global_BLMbRZRc.mjs";
import { t as $$Layout } from "./Layout_8PbpmVWA.mjs";
import { t as $$Input } from "./Input_BVFsfh98.mjs";
import { t as $$Button } from "./Button_DXxonDKN.mjs";
import { i as $$Navbar, n as $$Section, r as $$Footer, t as supabase } from "./supabase_CKbWxrjd.mjs";
//#region src/pages/kontak.astro
var kontak_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Kontak,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Kontak = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Kontak;
	let success = false;
	let errorMsg = "";
	if (Astro.request.method === "POST") try {
		const data = await Astro.request.formData();
		const name = data.get("name");
		const email = data.get("email");
		const phone = data.get("phone");
		const subject = data.get("subject");
		const message = data.get("message");
		const { error } = await supabase.from("messages").insert([{
			name,
			email,
			phone,
			subject,
			message
		}]);
		if (error) throw error;
		success = true;
	} catch (err) {
		errorMsg = err.message || "Terjadi kesalahan. Silakan coba lagi.";
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": "Hubungi Kami | Pinabae Studio",
		"description": "Konsultasikan kebutuhan website dan digital marketing bisnis Anda bersama Pinabae Studio."
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}${maybeRenderHead($$result)}<main class="flex-grow pt-32">${renderComponent($$result, "Section", $$Section, {}, { "default": ($$result) => renderTemplate`<div class="max-w-5xl mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16"><div class="header-anim opacity-0 translate-y-8"><h1 class="text-4xl md:text-5xl font-bold text-dark mb-6">Mari Berdiskusi</h1><p class="text-lg text-text mb-10">Ceritakan tentang bisnis Anda dan apa yang ingin Anda capai. Kami akan membantu merancang solusi website yang tepat sasaran.</p><div class="space-y-6"><div class="flex items-start gap-4"><div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-dark shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div><div><h3 class="font-bold text-dark">WhatsApp</h3><p class="text-text">+62 812-XXXX-XXXX</p></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-dark shrink-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div><div><h3 class="font-bold text-dark">Email</h3><p class="text-text">hello@pinabaestudio.com</p></div></div></div></div><div class="bg-white p-8 rounded-3xl border border-border shadow-lg form-anim opacity-0 translate-y-8">${success ? renderTemplate`<div class="text-center py-12"><div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div><h3 class="text-2xl font-bold text-dark mb-2">Pesan Terkirim!</h3><p class="text-text mb-6">Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.</p>${renderComponent($$result, "Button", $$Button, { "href": "/" }, { "default": ($$result) => renderTemplate`Kembali ke Beranda` })}</div>` : renderTemplate`<form method="POST" class="space-y-6"><h3 class="text-2xl font-bold text-dark mb-6">Kirim Pesan</h3>${errorMsg && renderTemplate`<div class="p-4 bg-red-50 text-red-600 rounded-lg text-sm mb-6">${errorMsg}</div>`}<div class="grid grid-cols-1 md:grid-cols-2 gap-6">${renderComponent($$result, "Input", $$Input, {
		"name": "name",
		"label": "Nama Lengkap",
		"required": true,
		"placeholder": "Cth: Budi Santoso"
	})}${renderComponent($$result, "Input", $$Input, {
		"name": "phone",
		"type": "tel",
		"label": "No. WhatsApp",
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
	}, { "default": ($$result) => renderTemplate`Kirim Pesan` })}</form>`}</div></div></div>` })}</main>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "D:/Pinabae-Studio/src/pages/kontak.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Pinabae-Studio/src/pages/kontak.astro", void 0);
var $$file = "D:/Pinabae-Studio/src/pages/kontak.astro";
var $$url = "/kontak";
//#endregion
//#region \0virtual:astro:page:src/pages/kontak@_@astro
var page = () => kontak_exports;
//#endregion
export { page };
