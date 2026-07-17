import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent, v as defineScriptVars, w as createAstro } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
import { t as $$AdminLayout } from "./AdminLayout_BXmOd-gS.mjs";
import { t as supabase } from "./supabase_Cm4yaabg.mjs";
//#region src/pages/admin/services/edit/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const { id } = Astro.params;
	let initialData = null;
	try {
		const { data } = await supabase.from("services").select("*").eq("id", id).single();
		if (data) initialData = data;
	} catch (e) {
		console.error(e);
	}
	if (!initialData) return Astro.redirect("/admin/services");
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Edit Layanan | Admin Pinabae" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="mb-8 flex justify-between items-center"><div><h1 class="text-2xl font-bold text-dark">Edit Layanan</h1><p class="text-text">Perbarui informasi layanan.</p></div><a href="/admin/services" class="px-4 py-2 bg-gray-100 text-dark rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>Batal</a></div><form${addAttribute(`editServiceData(${JSON.stringify(initialData)})`, "x-data")} @submit.prevent="updateService" class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12" id="service-form"><!-- Main Content Area --><div class="lg:col-span-2 space-y-6"><div class="bg-white p-6 rounded-xl border border-border shadow-sm"><div class="mb-6"><label class="block text-sm font-bold text-dark mb-2">Nama Layanan <span class="text-red-500">*</span></label><input type="text" x-model="service.title" @input="generateSlug" class="w-full px-4 py-3 text-lg font-bold border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none" required></div><div class="mb-6"><label class="block text-sm font-bold text-dark mb-2">Deskripsi Singkat <span class="text-red-500">*</span></label><textarea x-model="service.description" rows="3" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none" required></textarea></div><div class="mb-6 grid grid-cols-2 gap-4"><div><label class="block text-sm font-bold text-dark mb-2">Teks Badge (Label)</label><input type="text" x-model="service.badge_text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"></div><div><label class="block text-sm font-bold text-dark mb-2">Nama Icon (Lucide)</label><input type="text" x-model="service.icon" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"><p class="text-xs text-gray-500 mt-1"><a href="https://lucide.dev/icons/" target="_blank" class="text-primary hover:underline">Referensi Lucide Icons</a>.</p></div></div></div></div><!-- Sidebar --><div class="space-y-6"><div class="bg-white p-6 rounded-xl border border-border shadow-sm"><h2 class="text-lg font-bold text-dark mb-4 border-b border-gray-100 pb-2">Simpan</h2><button type="submit" class="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-orange-600 transition-colors flex justify-center items-center gap-2 shadow-sm shadow-orange-500/20" :disabled="submitting"><span x-show="!submitting">Perbarui Layanan</span><span x-show="submitting" style="display: none;"><svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></span></button></div><div class="bg-white p-6 rounded-xl border border-border shadow-sm"><h2 class="text-lg font-bold text-dark mb-4 border-b border-gray-100 pb-2">Slug URL <span class="text-red-500">*</span></h2><input type="text" x-model="service.slug" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none text-sm bg-gray-50" required></div></div></form>` })}<script>(function(){${defineScriptVars({ serviceId: id })}
  import { supabase } from '../../../../lib/supabase';

  document.addEventListener('alpine:init', () => {
    window.Alpine.data('editServiceData', (initialData) => ({
      submitting: false,
      service: initialData || {
        title: '',
        slug: '',
        description: '',
        badge_text: '',
        icon: 'box'
      },

      init() {
        // Form is immediately ready because of SSR data
      },

      generateSlug() {
        this.service.slug = this.service.title
          .toLowerCase()
          .replace(/[^\\w\\s-]/g, '')
          .replace(/[\\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');
      },

      async updateService() {
        if (!this.service.title || !this.service.slug || !this.service.description) {
          alert('Mohon isi field yang wajib!');
          return;
        }

        this.submitting = true;
        try {
          const { error } = await supabase
            .from('services')
            .update(this.service)
            .eq('id', serviceId);

          if (error) {
            if (error.code === '23505') {
              alert('Slug sudah digunakan.');
            } else {
              throw error;
            }
            return;
          }

          alert('Layanan berhasil diperbarui!');
          window.location.href = '/admin/services';
        } catch (error) {
          console.error('Error updating service:', error);
          alert('Gagal memperbarui layanan.');
        } finally {
          this.submitting = false;
        }
      }
    }));
  });
})();<\/script>`;
}, "D:/Pinabae-Studio/src/pages/admin/services/edit/[id].astro", void 0);
var $$file = "D:/Pinabae-Studio/src/pages/admin/services/edit/[id].astro";
var $$url = "/admin/services/edit/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/services/edit/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
