import { _ as addAttribute, d as renderTemplate, h as maybeRenderHead, w as createAstro } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
//#region src/components/ui/Input.astro
createAstro("https://astro.build");
var $$Input = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Input;
	const { type = "text", name, id = name, label, placeholder, required = false, class: className = "", textarea = false, rows = 4 } = Astro.props;
	const baseInputStyles = "w-full px-4 py-3 rounded-xl border border-border bg-white text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed";
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`flex flex-col gap-2 ${className}`, "class")}>${label && renderTemplate`<label${addAttribute(id, "for")} class="text-sm font-medium text-dark">${label} ${required && renderTemplate`<span class="text-red-500">*</span>`}</label>`}${textarea ? renderTemplate`<textarea${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(rows, "rows")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(baseInputStyles, "class")}></textarea>` : renderTemplate`<input${addAttribute(type, "type")}${addAttribute(id, "id")}${addAttribute(name, "name")}${addAttribute(placeholder, "placeholder")}${addAttribute(required, "required")}${addAttribute(baseInputStyles, "class")}>`}</div>`;
}, "D:/Pinabae-Studio/src/components/ui/Input.astro", void 0);
//#endregion
export { $$Input as t };
