import { _ as addAttribute, c as renderSlot, d as renderTemplate, h as maybeRenderHead, w as createAstro } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
import { t as renderScript } from "./global_Ba0uPwjH.mjs";
//#region src/components/Navbar.astro
createAstro("https://astro.build");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const pathname = Astro.url.pathname;
	const navLinks = [
		{
			name: "Home",
			href: "/"
		},
		{
			name: "Tentang",
			href: "/tentang"
		},
		{
			name: "Layanan",
			href: "/layanan"
		},
		{
			name: "Portfolio",
			href: "/portfolio"
		},
		{
			name: "Artikel",
			href: "/blog"
		},
		{
			name: "Kontak",
			href: "/kontak"
		}
	];
	const isActive = (href) => {
		if (href === "/") return pathname === "/" || pathname === "";
		return pathname.startsWith(href);
	};
	return renderTemplate`${maybeRenderHead($$result)}<header id="navbar" x-data="{ mobileMenuOpen: false }" class="fixed top-0 md:top-6 w-full md:w-[90%] md:max-w-5xl md:left-0 md:right-0 md:mx-auto z-50 bg-white/60 backdrop-blur-lg border-b md:border border-border/50 md:rounded-full transition-all duration-300 md:shadow-md"><div class="w-full px-6 md:px-8 h-20 md:h-16 flex items-center justify-between"><a href="/" class="flex items-center hover:opacity-80 transition-opacity"><img src="/logo.png" alt="Pinabae Studio Logo" class="h-14 w-auto"></a><nav class="hidden md:flex items-center gap-4 lg:gap-8 font-medium text-sm lg:text-base">${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`transition-colors hover:text-primary ${isActive(link.href) ? "text-primary font-bold" : "text-text"}`, "class")}>${link.name}</a>`)}</nav><div class="hidden md:flex items-center gap-4"><a href="/kontak" class="whitespace-nowrap px-4 lg:px-6 py-2 lg:py-2.5 bg-dark text-white rounded-full text-sm lg:text-base font-medium hover:bg-gray-800 transition-colors">Konsultasi Gratis</a></div><button x-on:click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-dark p-2" aria-label="Menu"><svg x-show="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg><svg x-show="mobileMenuOpen" style="display: none;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div><!-- Mobile Menu Dropdown --><div x-show="mobileMenuOpen" style="display: none;" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 -translate-y-4" x-transition:enter-end="opacity-100 translate-y-0" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 translate-y-0" x-transition:leave-end="opacity-0 -translate-y-4" class="md:hidden absolute top-20 left-0 w-full bg-white border-b border-border shadow-lg"><nav class="flex flex-col px-6 py-6 gap-4 font-medium">${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`transition-colors py-2 border-b border-gray-100 ${isActive(link.href) ? "text-primary font-bold" : "text-text"}`, "class")}>${link.name}</a>`)}<a href="/kontak" class="mt-4 py-3 text-center bg-dark text-white rounded-full font-medium hover:bg-gray-800 transition-colors">Konsultasi Gratis</a></nav></div></header>${renderScript($$result, "D:/Pinabae-Studio/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Pinabae-Studio/src/components/Navbar.astro", void 0);
//#endregion
//#region src/components/Footer.astro
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`${maybeRenderHead($$result)}<footer class="bg-section border-t border-border mt-20 pt-16 pb-8"><div class="container mx-auto px-6"><div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"><div class="col-span-1 md:col-span-2"><a href="/" class="flex items-center mb-6 hover:opacity-80 transition-opacity inline-flex"><img src="/logo.png" alt="Pinabae Studio Logo" class="h-16 w-auto"></a><p class="text-text max-w-sm mb-6">Jasa pembuatan website profesional untuk membantu UMKM, startup, dan personal brand tumbuh di era digital.</p></div><div><h3 class="font-bold text-dark mb-4">Layanan</h3><ul class="space-y-3"><li><a href="/layanan/company-profile" class="text-text hover:text-primary transition-colors">Company Profile</a></li><li><a href="/layanan/e-commerce" class="text-text hover:text-primary transition-colors">E-Commerce</a></li><li><a href="/layanan/landing-page" class="text-text hover:text-primary transition-colors">Landing Page</a></li><li><a href="/layanan/custom-webapp" class="text-text hover:text-primary transition-colors">Custom Web App</a></li></ul></div><div><h3 class="font-bold text-dark mb-4">Perusahaan</h3><ul class="space-y-3"><li><a href="/tentang" class="text-text hover:text-primary transition-colors">Tentang Kami</a></li><li><a href="/portfolio" class="text-text hover:text-primary transition-colors">Portfolio</a></li><li><a href="/blog" class="text-text hover:text-primary transition-colors">Blog</a></li><li><a href="/kontak" class="text-text hover:text-primary transition-colors">Kontak</a></li></ul></div></div><div class="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-text"><p>&copy; ${currentYear} Pinabae Studio. All rights reserved.</p><div class="flex gap-4 mt-4 md:mt-0"><a href="/privacy-policy" class="hover:text-dark">Privacy Policy</a><a href="/terms-conditions" class="hover:text-dark">Terms & Conditions</a></div></div></div></footer>`;
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
//#endregion
export { $$Footer as n, $$Navbar as r, $$Section as t };
