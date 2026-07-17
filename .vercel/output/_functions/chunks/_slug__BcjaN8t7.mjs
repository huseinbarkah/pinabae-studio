import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { S as unescapeHTML, _ as addAttribute, a as Fragment, d as renderTemplate, h as maybeRenderHead, i as renderComponent, w as createAstro } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
import { t as renderScript } from "./global_Ba0uPwjH.mjs";
import { t as supabase } from "./supabase_DM77KPLp.mjs";
import { t as $$Layout } from "./Layout_DK0FnCb7.mjs";
import { n as $$Footer, r as $$Navbar, t as $$Section } from "./Section_CzSDR4eY.mjs";
//#region src/pages/blog/[slug].astro
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
	const { data: post, error } = await supabase.from("blog_posts").select("*, categories(name, slug)").eq("slug", slug).eq("status", "published").single();
	if (error || !post) return Astro.redirect("/404");
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {
		"title": `${post.seo_title || post.title} | Blog Pinabae Studio`,
		"description": post.seo_description || post.excerpt
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, {})}${maybeRenderHead($$result)}<main class="flex-grow pt-32"><article>${renderComponent($$result, "Section", $$Section, { "class": "pb-10" }, { "default": ($$result) => renderTemplate`<div class="max-w-3xl mx-auto text-center"><a href="/blog" class="text-gray-500 hover:text-primary mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>Kembali ke Blog</a><div class="flex items-center justify-center gap-3 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6 header-anim opacity-0 translate-y-4">${post.categories && renderTemplate`<span class="text-primary">${post.categories.name}</span>`}${post.published_at && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span>&bull;</span><span>${new Date(post.published_at).toLocaleDateString("id-ID", {
		year: "numeric",
		month: "long",
		day: "numeric"
	})}</span>` })}`}</div><h1 class="text-3xl md:text-5xl lg:text-6xl font-bold text-dark mb-10 leading-tight header-anim opacity-0 translate-y-4 text-balance">${post.title}</h1></div>${post.featured_image && renderTemplate`<div class="max-w-5xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-xl mb-16 header-anim opacity-0 translate-y-8"><img${addAttribute(post.featured_image, "src")}${addAttribute(post.title, "alt")} class="w-full h-full object-cover"></div>`}<div class="max-w-3xl mx-auto prose prose-lg prose-orange text-text content-anim opacity-0 translate-y-8">${unescapeHTML(post.content)}</div>` })}</article></main>${renderComponent($$result, "Footer", $$Footer, {})}` })}${renderScript($$result, "D:/Pinabae-Studio/src/pages/blog/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Pinabae-Studio/src/pages/blog/[slug].astro", void 0);
var $$file = "D:/Pinabae-Studio/src/pages/blog/[slug].astro";
var $$url = "/blog/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
