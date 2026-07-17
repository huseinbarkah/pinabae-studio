import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import fs from "node:fs";
import nodePath from "node:path";
//#region src/pages/api/upload.ts
var upload_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
var POST = async ({ request }) => {
	try {
		const formData = await request.formData();
		const file = formData.get("file");
		const folder = formData.get("folder") || "uploads";
		if (!file) return new Response(JSON.stringify({ error: "No file provided" }), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
		const fileExt = file.name.split(".").pop();
		const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);
		const uploadDir = nodePath.join(process.cwd(), "public", "uploads", folder);
		if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
		const filePath = nodePath.join(uploadDir, fileName);
		fs.writeFileSync(filePath, buffer);
		const publicUrl = `/uploads/${folder}/${fileName}`;
		return new Response(JSON.stringify({ url: publicUrl }), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		console.error("Upload API error:", error);
		return new Response(JSON.stringify({ error: error.message || "Internal server error" }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
};
//#endregion
//#region \0virtual:astro:page:src/pages/api/upload@_@ts
var page = () => upload_exports;
//#endregion
export { page };
