import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent, v as defineScriptVars, w as createAstro } from "./server_DZ0hTl6C.mjs";
import { t as createComponent } from "./compiler_C9WHqJJs.mjs";
import { t as $$AdminLayout } from "./AdminLayout_BXmOd-gS.mjs";
import { t as supabase } from "./supabase_DM77KPLp.mjs";
//#region src/pages/admin/team/edit/[id].astro
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
		const { data } = await supabase.from("team_members").select("*").eq("id", id).single();
		if (data) initialData = data;
	} catch (e) {
		console.error(e);
	}
	if (!initialData) return Astro.redirect("/admin/team");
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Edit Tim | Admin Pinabae" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="mb-8 flex justify-between items-center"><div><h1 class="text-2xl font-bold text-dark">Edit Anggota Tim</h1><p class="text-text">Perbarui profil anggota tim.</p></div><a href="/admin/team" class="px-4 py-2 bg-gray-100 text-dark rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg>Batal</a></div><form${addAttribute(`editTeamData(${JSON.stringify(initialData)})`, "x-data")} @submit.prevent="saveMember" class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12" id="team-form"><div class="lg:col-span-2 space-y-6"><div class="bg-white p-6 rounded-xl border border-border shadow-sm"><div class="mb-6"><label class="block text-sm font-bold text-dark mb-2">Nama Lengkap <span class="text-red-500">*</span></label><input type="text" x-model="member.name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none" required></div><div class="mb-6"><label class="block text-sm font-bold text-dark mb-2">Jabatan (Posisi) <span class="text-red-500">*</span></label><input type="text" x-model="member.position" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none" required></div><div class="mb-6"><label class="block text-sm font-bold text-dark mb-2">Biografi Singkat <span class="text-red-500">*</span></label><textarea x-model="member.biography" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none" required></textarea></div></div><div class="bg-white p-6 rounded-xl border border-border shadow-sm"><h2 class="text-lg font-bold text-dark mb-4 border-b border-gray-100 pb-2">Sosial Media (Opsional)</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="block text-sm font-bold text-dark mb-2">URL LinkedIn</label><input type="url" x-model="member.linkedin_url" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"></div><div><label class="block text-sm font-bold text-dark mb-2">URL Instagram</label><input type="url" x-model="member.instagram_url" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none"></div></div></div></div><div class="space-y-6"><div class="bg-white p-6 rounded-xl border border-border shadow-sm"><h2 class="text-lg font-bold text-dark mb-4 border-b border-gray-100 pb-2">Simpan Perubahan</h2><button type="submit" class="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-orange-600 transition-colors flex justify-center items-center gap-2 shadow-sm shadow-orange-500/20" :disabled="submitting"><span x-show="!submitting">Simpan Anggota</span><span x-show="submitting" style="display: none;"><svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Menyimpan...</span></button></div><div class="bg-white p-6 rounded-xl border border-border shadow-sm"><h2 class="text-lg font-bold text-dark mb-4 border-b border-gray-100 pb-2">Foto Profil <span class="text-red-500">*</span></h2><div x-show="!member.photo_url" class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors" @click="$refs.fileInput.click()"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto text-gray-400 mb-2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><span class="text-sm font-medium text-primary">Upload Foto</span></div><div x-show="member.photo_url" class="relative group"><img :src="member.photo_url" class="w-full h-auto rounded-lg border border-gray-200 aspect-[3/4] object-cover"><button type="button" @click="member.photo_url = ''" class="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" title="Hapus Gambar"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button></div><input type="file" x-ref="fileInput" class="hidden" accept="image/*" @change="uploadImage"><div x-show="uploadingImage" class="mt-2 text-sm text-primary flex items-center gap-2" style="display: none;"><svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Mengunggah gambar...</div></div></div></form>` })}<script>(function(){${defineScriptVars({ memberId: id })}
  import { supabase } from '../../../../lib/supabase';

  document.addEventListener('alpine:init', () => {
    window.Alpine.data('editTeamData', (initialData) => ({
      submitting: false,
      uploadingImage: false,
      member: initialData || {
        name: '',
        position: '',
        biography: '',
        photo_url: '',
        linkedin_url: '',
        instagram_url: ''
      },

      init() {
        // Form is immediately ready
      },

      async uploadImage(event) {
        const file = event.target.files[0];
        if (!file) return;

        this.uploadingImage = true;
        try {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('folder', 'team');

          const res = await fetch('/api/upload', { method: 'POST', body: formData });
          const result = await res.json();
          if (!res.ok) throw new Error(result.error || 'Upload failed');

          this.member.photo_url = result.url;
        } catch (error: any) {
          console.error('Error uploading image:', error);
          alert('Gagal mengunggah gambar. Pesan: ' + (error.message || ''));
        } finally {
          this.uploadingImage = false;
          event.target.value = '';
        }
      },

      async saveMember() {
        if (!this.member.photo_url) {
          alert('Foto profil wajib diunggah!');
          return;
        }

        this.submitting = true;
        try {
          // Remove id and created_at to avoid modification errors if needed, but supabase update eq handles it
          const { id, created_at, ...updateData } = this.member;

          const { error } = await supabase
            .from('team_members')
            .update(updateData)
            .eq('id', memberId);

          if (error) throw error;

          alert('Berhasil memperbarui anggota tim!');
          window.location.href = '/admin/team';
        } catch (error) {
          console.error('Error saving member:', error);
          alert('Gagal memperbarui anggota tim. Pesan: ' + (error.message || JSON.stringify(error)));
        } finally {
          this.submitting = false;
        }
      }
    }));
  });
})();<\/script>`;
}, "D:/Pinabae-Studio/src/pages/admin/team/edit/[id].astro", void 0);
var $$file = "D:/Pinabae-Studio/src/pages/admin/team/edit/[id].astro";
var $$url = "/admin/team/edit/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/team/edit/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
