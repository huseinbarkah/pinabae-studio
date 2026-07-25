const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/en/tentang.astro');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = {
  'Tentang Kami \\| Pinabae Studio': 'About Us | Pinabae Studio',
  'Mengenal lebih dekat dengan tim Pinabae Studio dan perjalanan kami dalam membantu UMKM dan startup tumbuh di era digital.': 'Get to know the Pinabae Studio team and our journey in helping SMEs and startups grow in the digital era.',
  '>Tentang Pinabae Studio<': '>About Pinabae Studio<',
  'Mitra Digital Terpercaya untuk Pertumbuhan Bisnis Anda.': 'Your Trusted Digital Partner for Business Growth.',
  'Pinabae Studio lahir dari visi sederhana:': 'Pinabae Studio was born from a simple vision:',
  'membantu UMKM, startup, dan pelaku bisnis lokal untuk bisa bersaing di ranah digital.': 'to help SMEs, startups, and local businesses compete in the digital realm.',
  'Kami percaya bahwa memiliki website dan kehadiran digital yang profesional bukan lagi kemewahan, melainkan kebutuhan esensial untuk membangun kredibilitas dan memenangkan kepercayaan pelanggan.': 'We believe that having a professional website and digital presence is no longer a luxury, but an essential need to build credibility and win customer trust.',
  'Berawal dari kecintaan kami terhadap teknologi dan desain, kami terus berkembang menjadi agensi digital terpadu. Kami tidak hanya membuat website yang indah, tetapi juga berfokus pada strategi SEO, branding, dan solusi digital yang berdampak nyata pada penjualan dan visibilitas bisnis klien kami.': 'Starting from our passion for technology and design, we have grown into an integrated digital agency. We do not just create beautiful websites; we focus on SEO strategies, branding, and digital solutions that have a real impact on our clients sales and business visibility.',
  'Nilai-Nilai Utama Kami': 'Our Core Values',
  'Prinsip yang membimbing setiap langkah dan karya yang kami ciptakan untuk klien.': 'The principles that guide every step and work we create for our clients.',
  'Kualitas Tanpa Kompromi': 'Uncompromising Quality',
  'Kami selalu memberikan hasil terbaik dalam desain, kode, dan performa di setiap project.': 'We always deliver the best results in design, code, and performance in every project.',
  'Fokus pada Hasil': 'Focus on Results',
  'Bukan sekadar tampilan yang bagus, kami berorientasi pada konversi, penjualan, dan metrik yang penting bagi bisnis Anda.': 'Not just good looks, we are oriented towards conversions, sales, and metrics that matter to your business.',
  'Kolaborasi Transparan': 'Transparent Collaboration',
  'Kami menganggap klien sebagai mitra. Proses pengerjaan selalu dikomunikasikan secara terbuka.': 'We consider clients as partners. The work process is always communicated openly.',
  'Inovasi Berkelanjutan': 'Continuous Innovation',
  'Teknologi terus berkembang, dan kami selalu beradaptasi dengan tren serta *tools* terbaru untuk memberikan solusi terbaik.': 'Technology continues to evolve, and we always adapt to the latest trends and tools to provide the best solutions.',
  'Pendekatan Kami dalam Bekerja': 'Our Approach to Work',
  'Kami memiliki proses yang terstruktur untuk memastikan setiap solusi digital yang kami bangun dapat mencapai tujuan bisnis Anda.': 'We have a structured process to ensure every digital solution we build achieves your business goals.',
  'Pemahaman Bisnis': 'Understanding the Business',
  'Kami mulai dengan mendengarkan. Memahami visi, audiens target, dan tantangan bisnis Anda adalah kunci keberhasilan.': 'We start by listening. Understanding your vision, target audience, and business challenges is the key to success.',
  'Strategi & Perencanaan': 'Strategy & Planning',
  'Merumuskan strategi digital, arsitektur informasi, dan *wireframe* awal sebelum eksekusi dimulai.': 'Formulating digital strategy, information architecture, and initial wireframes before execution begins.',
  'Desain & Pengembangan': 'Design & Development',
  'Mengeksekusi rencana menjadi desain visual yang menarik dan kode yang bersih, cepat, serta responsif.': 'Executing the plan into attractive visual designs and clean, fast, and responsive code.',
  'Optimasi & Peluncuran': 'Optimization & Launch',
  'Melakukan pengujian ketat, optimasi SEO *on-page*, hingga akhirnya *website* siap diluncurkan ke publik.': 'Conducting rigorous testing, on-page SEO optimization, until the website is finally ready to be launched to the public.',
  'Pendampingan & Evaluasi': 'Support & Evaluation',
  'Pekerjaan kami tidak berhenti setelah peluncuran. Kami siap mendampingi dan melakukan evaluasi performa secara berkala.': 'Our work does not stop after launch. We are ready to provide support and conduct periodic performance evaluations.',
  'Siap Memulai Transformasi Digital Bersama Kami\\?': 'Ready to Start Your Digital Transformation With Us?',
  'Mari diskusikan ide dan kebutuhan bisnis Anda. Kami siap membantu merancang solusi yang tepat.': 'Let’s discuss your ideas and business needs. We are ready to help design the right solution.',
  '>Hubungi Kami Sekarang<': '>Contact Us Now<'
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  content = content.replace(regex, value);
}

// Modify internal links to point to /en/
content = content.replace(/href="\/layanan/g, 'href="/en/layanan');
content = content.replace(/href="\/portfolio/g, 'href="/en/portfolio');
content = content.replace(/href="\/blog/g, 'href="/en/blog');
content = content.replace(/href="\/kontak"/g, 'href="/en/kontak"');

fs.writeFileSync(filePath, content);
console.log('Translated tentang.astro successfully');
