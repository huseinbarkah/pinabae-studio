import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
import { t as renderScript } from "./global_Ba0uPwjH.mjs";
import { t as $$Layout } from "./Layout_CpsAPkTy.mjs";
import { t as $$Input } from "./Input_DiSXXCKv.mjs";
import { t as $$Button } from "./Button_XQgawOLD.mjs";
//#region src/pages/admin/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Login = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login Admin | Pinabae Studio" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="min-h-screen bg-section flex flex-col justify-center py-12 sm:px-6 lg:px-8"><div class="sm:mx-auto sm:w-full sm:max-w-md"><div class="flex justify-center mb-6"><div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-2xl">P</div></div><h2 class="mt-6 text-center text-3xl font-extrabold text-dark">Masuk ke Dashboard</h2><p class="mt-2 text-center text-sm text-text">Atur konten website Anda dengan mudah.</p></div><div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md"><div class="bg-white py-8 px-4 shadow-sm border border-border sm:rounded-2xl sm:px-10"><div id="error-message" class="hidden p-4 mb-6 bg-red-50 text-red-600 text-sm rounded-xl"></div><form id="login-form" class="space-y-6">${renderComponent($$result, "Input", $$Input, {
		"id": "email",
		"name": "email",
		"type": "email",
		"label": "Alamat Email",
		"required": true
	})}${renderComponent($$result, "Input", $$Input, {
		"id": "password",
		"name": "password",
		"type": "password",
		"label": "Password",
		"required": true
	})}<div>${renderComponent($$result, "Button", $$Button, {
		"type": "submit",
		"class": "w-full"
	}, { "default": ($$result) => renderTemplate`Masuk` })}</div></form></div></div></div>` })}${renderScript($$result, "D:/Pinabae-Studio/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Pinabae-Studio/src/pages/admin/login.astro", void 0);
var $$file = "D:/Pinabae-Studio/src/pages/admin/login.astro";
var $$url = "/admin/login";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/login@_@astro
var page = () => login_exports;
//#endregion
export { page };
