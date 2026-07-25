const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/pages/en/index.astro');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = {
  'Jasa Pembuatan Website Profesional': 'Professional Website Development Services',
  'Kami membantu UMKM, startup, dan perusahaan membangun kehadiran digital yang profesional melalui website, SEO, dan solusi digital yang meningkatkan kredibilitas, trafik, serta penjualan.': 'We help SMEs, startups, and enterprises build a professional digital presence through websites, SEO, and digital solutions that increase credibility, traffic, and sales.',
  '>Konsultasi Sekarang<': '>Consult Now<',
  '>Lihat Portfolio<': '>View Portfolio<',
  'Mengapa Bisnis Memilih Pinabae Studio\\?': 'Why Businesses Choose Pinabae Studio?',
  'Kami menggabungkan strategi, desain, dan teknologi untuk menciptakan solusi digital yang relevan, berdampak, dan mendukung pertumbuhan bisnis.': 'We combine strategy, design, and technology to create digital solutions that are relevant, impactful, and support business growth.',
  'Strategi Berbasis Tujuan': 'Goal-Oriented Strategy',
  'Kami memulai setiap proyek dengan memahami tujuan bisnis Anda agar solusi digital yang dibangun benar-benar memberikan nilai dan hasil yang terukur.': 'We start every project by understanding your business goals so the digital solutions we build truly provide value and measurable results.',
  'Solusi Digital Terintegrasi': 'Integrated Digital Solutions',
  'Website, SEO, branding, dan solusi digital kami dirancang saling terhubung untuk memperkuat kehadiran bisnis Anda di dunia digital.': 'Our website, SEO, branding, and digital solutions are designed to connect and strengthen your business presence in the digital world.',
  'Berorientasi pada Pertumbuhan': 'Growth-Oriented',
  'Setiap solusi yang kami bangun difokuskan untuk meningkatkan visibilitas, membangun kepercayaan pelanggan, dan membuka lebih banyak peluang bisnis.': 'Every solution we build is focused on increasing visibility, building customer trust, and unlocking more business opportunities.',
  'Kolaborasi yang Transparan': 'Transparent Collaboration',
  'Kami mengutamakan komunikasi yang terbuka, proses kerja yang jelas, dan pendampingan yang responsif agar setiap proyek berjalan efektif.': 'We prioritize open communication, clear workflows, and responsive support to ensure every project runs effectively.',
  'Solusi Digital untuk Mengembangkan Bisnis Anda': 'Digital Solutions to Grow Your Business',
  'Kami membantu UMKM, perusahaan, hingga personal brand membangun kehadiran digital yang profesional, dipercaya pelanggan, dan siap mendukung pertumbuhan bisnis.': 'We help SMEs, enterprises, and personal brands build a professional digital presence that customers trust and is ready to support business growth.',
  'Pelajari Lebih Lanjut': 'Learn More',
  'Artikel & Insight untuk Mengembangkan Bisnis Digital.': 'Articles & Insights to Grow Your Digital Business.',
  'Temukan berbagai artikel seputar website, SEO, branding, teknologi, dan strategi digital untuk membantu bisnis Anda berkembang.': 'Discover various articles about websites, SEO, branding, technology, and digital strategies to help your business thrive.',
  'Lihat Semua Artikel': 'View All Articles',
  'Baca Artikel': 'Read Article',
  '>Konsultasi Gratis<': '>Free Consultation<',
  'Siap Mengembangkan Bisnis Anda': 'Ready to Grow Your Business',
  'Secara Digital\\?': 'Digitally?',
  'Konsultasikan kebutuhan digital bisnis Anda bersama Pinabae Studio. Kami membantu merancang solusi yang tepat untuk meningkatkan kredibilitas, visibilitas, dan peluang pertumbuhan bisnis Anda.': 'Consult your digital business needs with Pinabae Studio. We help design the right solutions to increase credibility, visibility, and growth opportunities for your business.',
  'Harga Transparan': 'Transparent Pricing',
  'Solusi Sesuai Kebutuhan Bisnis': 'Customized Business Solutions',
  'Pendampingan Setelah Project Selesai': 'Post-Project Support',
  'Konsultasi via WhatsApp': 'Consult via WhatsApp'
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  content = content.replace(regex, value);
}

// Modify internal links to point to /en/
content = content.replace(/href="\/layanan/g, 'href="/en/layanan');
content = content.replace(/href="\/portfolio/g, 'href="/en/portfolio');
content = content.replace(/href="\/blog/g, 'href="/en/blog');

fs.writeFileSync(filePath, content);
console.log('Translated index.astro successfully');
