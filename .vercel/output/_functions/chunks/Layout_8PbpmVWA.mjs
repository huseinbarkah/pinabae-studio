import { t as createComponent } from "./compiler_C3SA6joR.mjs";
import { C as createAstro, _ as addAttribute, c as renderSlot, d as renderTemplate, g as renderHead } from "./server_F1LryteY.mjs";
import "./global_BLMbRZRc.mjs";
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title = "Pinabae Studio | Jasa Pembuatan Website Profesional", description = "Pinabae Studio membantu UMKM, startup, dan personal brand membangun kredibilitas melalui website modern, cepat, dan SEO Friendly." } = Astro.props;
	return renderTemplate`<html lang="id" class="scroll-smooth"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Google Fonts: Plus Jakarta Sans --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">${renderHead($$result)}</head><body class="flex flex-col min-h-screen">${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "D:/Pinabae-Studio/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Layout as t };
