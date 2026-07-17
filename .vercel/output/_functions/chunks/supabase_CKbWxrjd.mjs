import { t as createComponent } from "./compiler_C3SA6joR.mjs";
import { C as createAstro, _ as addAttribute, c as renderSlot, d as renderTemplate, h as maybeRenderHead } from "./server_F1LryteY.mjs";
import { createClient } from "@supabase/supabase-js";
//#region src/components/Navbar.astro
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<header class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-border/50 transition-all duration-300"><div class="container mx-auto px-6 h-20 flex items-center justify-between"><a href="/" class="flex items-center gap-2"><!-- Pinabae Logo Placeholder --><div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">P</div><span class="font-bold text-xl text-dark tracking-tight">Pinabae <span class="text-primary">Studio</span></span></a><nav class="hidden md:flex items-center gap-8 font-medium text-text"><a href="/layanan" class="hover:text-primary transition-colors">Layanan</a><a href="/portfolio" class="hover:text-primary transition-colors">Portfolio</a><a href="/blog" class="hover:text-primary transition-colors">Blog</a><a href="/tentang" class="hover:text-primary transition-colors">Tentang Kami</a></nav><div class="hidden md:flex items-center gap-4"><a href="/kontak" class="px-6 py-2.5 bg-dark text-white rounded-full font-medium hover:bg-gray-800 transition-colors">Konsultasi Gratis</a></div><button class="md:hidden text-dark p-2" aria-label="Menu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg></button></div></header>`;
}, "D:/Pinabae-Studio/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-section border-t border-border mt-20 pt-16 pb-8"><div class="container mx-auto px-6"><div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"><div class="col-span-1 md:col-span-2"><a href="/" class="flex items-center gap-2 mb-6"><div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">P</div><span class="font-bold text-xl text-dark tracking-tight">Pinabae <span class="text-primary">Studio</span></span></a><p class="text-text max-w-sm mb-6">Jasa pembuatan website profesional untuk membangun kredibilitas bisnis Anda dengan desain premium dan performa maksimal.</p></div><div><h3 class="font-bold text-dark mb-4">Layanan</h3><ul class="space-y-3"><li><a href="/layanan/company-profile" class="text-text hover:text-primary transition-colors">Company Profile</a></li><li><a href="/layanan/e-commerce" class="text-text hover:text-primary transition-colors">E-Commerce</a></li><li><a href="/layanan/landing-page" class="text-text hover:text-primary transition-colors">Landing Page</a></li><li><a href="/layanan/custom-webapp" class="text-text hover:text-primary transition-colors">Custom Web App</a></li></ul></div><div><h3 class="font-bold text-dark mb-4">Perusahaan</h3><ul class="space-y-3"><li><a href="/tentang" class="text-text hover:text-primary transition-colors">Tentang Kami</a></li><li><a href="/portfolio" class="text-text hover:text-primary transition-colors">Portfolio</a></li><li><a href="/blog" class="text-text hover:text-primary transition-colors">Blog</a></li><li><a href="/kontak" class="text-text hover:text-primary transition-colors">Kontak</a></li></ul></div></div><div class="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-text"><p>&copy; ${currentYear} Pinabae Studio. All rights reserved.</p><div class="flex gap-4 mt-4 md:mt-0"><a href="/privacy-policy" class="hover:text-dark">Privacy Policy</a><a href="/terms-conditions" class="hover:text-dark">Terms & Conditions</a></div></div></div></footer>`;
}, "D:/Pinabae-Studio/src/components/Footer.astro", void 0);
//#endregion
//#region src/components/ui/Section.astro
createAstro("https://astro.build");
var $$Section = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Section;
	const { id, class: className = "", containerClass = "", background = "white" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section${addAttribute(id, "id")}${addAttribute(`py-20 md:py-32 ${{
		white: "bg-white",
		gray: "bg-section",
		dark: "bg-dark text-white"
	}[background]} ${className}`, "class")}><div${addAttribute(`container mx-auto px-6 ${containerClass}`, "class")}>${renderSlot($$result, $$slots["default"])}</div></section>`;
}, "D:/Pinabae-Studio/src/components/ui/Section.astro", void 0);
var supabase = createClient("https://fwrmljqxfbiykncadfqo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cm1sanF4ZmJpeWtuY2FkZnFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxODcyOTcsImV4cCI6MjA5OTc2MzI5N30.ENk3pWCcYDSAWIPX5qTQnhTLBEigPnRj9br7EzQybXI");
//#endregion
export { $$Navbar as i, $$Section as n, $$Footer as r, supabase as t };
