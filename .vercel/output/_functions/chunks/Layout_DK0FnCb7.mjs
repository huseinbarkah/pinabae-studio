import { _ as addAttribute, c as renderSlot, d as renderTemplate, g as renderHead, w as createAstro } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
import { t as renderScript } from "./global_Ba0uPwjH.mjs";
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "Pinabae Studio | Jasa Pembuatan Website Profesional", description = "Pinabae Studio membantu UMKM, startup, dan personal brand membangun kredibilitas melalui website modern, cepat, dan SEO Friendly." } = Astro.props;
	return renderTemplate`<html lang="id" class="scroll-smooth"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/logo.png"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(Astro.url.href, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro.url.href, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL("/logo.png", Astro.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro.url.href, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL("/logo.png", Astro.url), "content")}><!-- SEO Basics --><meta name="robots" content="index, follow"><!-- Google Fonts: Plus Jakarta Sans --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">${renderHead($$result)}</head><body class="flex flex-col min-h-screen">${renderSlot($$result, $$slots["default"])}<!-- Smooth Scrolling (Lenis) -->${renderScript($$result, "D:/Pinabae-Studio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/Pinabae-Studio/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Layout as t };
