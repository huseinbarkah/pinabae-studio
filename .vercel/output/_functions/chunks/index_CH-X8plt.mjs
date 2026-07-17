import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as addAttribute, c as renderSlot, d as renderTemplate, h as maybeRenderHead, i as renderComponent, w as createAstro } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
import { t as renderScript } from "./global_Ba0uPwjH.mjs";
import { t as $$AdminLayout } from "./AdminLayout_BXmOd-gS.mjs";
//#region src/components/ui/Card.astro
createAstro("https://astro.build");
var $$Card = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Card;
	const { class: className = "", hover = true } = Astro.props;
	const baseStyles = "bg-white rounded-3xl border border-border p-6 overflow-hidden";
	const hoverStyles = hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1" : "";
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`${baseStyles} ${hoverStyles} ${className}`, "class")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "D:/Pinabae-Studio/src/components/ui/Card.astro", void 0);
//#endregion
//#region src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard | Admin Pinabae" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="mb-8"><h1 class="text-2xl font-bold text-dark">Dashboard</h1><p class="text-text">Selamat datang di panel admin Pinabae Studio.</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">${renderComponent($$result, "Card", $$Card, { "class": "flex items-center gap-4" }, { "default": ($$result) => renderTemplate`<div class="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg></div><div><p class="text-sm text-gray-500 font-medium">Total Blog</p><p class="text-2xl font-bold text-dark" id="stat-blog">-</p></div>` })}${renderComponent($$result, "Card", $$Card, { "class": "flex items-center gap-4" }, { "default": ($$result) => renderTemplate`<div class="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg></div><div><p class="text-sm text-gray-500 font-medium">Portfolio</p><p class="text-2xl font-bold text-dark" id="stat-portfolio">-</p></div>` })}${renderComponent($$result, "Card", $$Card, { "class": "flex items-center gap-4" }, { "default": ($$result) => renderTemplate`<div class="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div><div><p class="text-sm text-gray-500 font-medium">Pesan Masuk</p><p class="text-2xl font-bold text-dark" id="stat-messages">-</p></div>` })}${renderComponent($$result, "Card", $$Card, { "class": "flex items-center gap-4" }, { "default": ($$result) => renderTemplate`<div class="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div><div><p class="text-sm text-gray-500 font-medium">Layanan</p><p class="text-2xl font-bold text-dark" id="stat-services">-</p></div>` })}</div>` })}${renderScript($$result, "D:/Pinabae-Studio/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Pinabae-Studio/src/pages/admin/index.astro", void 0);
var $$file = "D:/Pinabae-Studio/src/pages/admin/index.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
//#endregion
export { page };
