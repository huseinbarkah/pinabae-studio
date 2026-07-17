import { t as createComponent } from "./compiler_C3SA6joR.mjs";
import { C as createAstro, _ as addAttribute, c as renderSlot, d as renderTemplate, h as maybeRenderHead } from "./server_F1LryteY.mjs";
//#region src/components/ui/Button.astro
createAstro("https://astro.build");
var $$Button = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Button;
	const { href, type = "button", variant = "primary", size = "md", class: className = "" } = Astro.props;
	const classes = `inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${{
		primary: "bg-primary text-white hover:bg-secondary focus:ring-primary shadow-md hover:shadow-lg",
		secondary: "bg-dark text-white hover:bg-gray-800 focus:ring-dark shadow-md hover:shadow-lg",
		outline: "border-2 border-border text-dark hover:border-dark focus:ring-dark bg-transparent",
		ghost: "text-text hover:text-dark hover:bg-gray-100 focus:ring-gray-200 bg-transparent"
	}[variant]} ${{
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-base",
		lg: "px-8 py-4 text-lg"
	}[size]} ${className}`;
	return renderTemplate`${href ? renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}>${renderSlot($$result, $$slots["default"])}</a>` : renderTemplate`<button${addAttribute(type, "type")}${addAttribute(classes, "class")}>${renderSlot($$result, $$slots["default"])}</button>`}`;
}, "D:/Pinabae-Studio/src/components/ui/Button.astro", void 0);
//#endregion
export { $$Button as t };
