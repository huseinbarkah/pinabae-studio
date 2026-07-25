const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((file) => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const commonReplacements = {
  // General links
  'href="/layanan': 'href="/en/layanan',
  'href="/portfolio': 'href="/en/portfolio',
  'href="/blog': 'href="/en/blog',
  'href="/kontak"': 'href="/en/kontak"',
  'href="/tentang"': 'href="/en/tentang"',
  'href="/faq"': 'href="/en/faq"',
  'href="/"': 'href="/en/"',
  'href="/en/en/': 'href="/en/', // Fix double en just in case
  
  // Layanan texts
  'Layanan Kami \\| Pinabae Studio': 'Our Services | Pinabae Studio',
  'Apakah Bisnis Anda Mengalami Salah Satu Tantangan Ini\\?': 'Is Your Business Experiencing Any of These Challenges?',
  'Pilih Solusi Digital yang Tepat untuk Bisnis Anda': 'Choose the Right Digital Solution for Your Business',
  'Mana Solusi yang Tepat untuk Bisnis Anda\\?': 'Which Solution is Right for Your Business?',
  
  // Portfolio texts
  'Portfolio \\| Pinabae Studio': 'Portfolio | Pinabae Studio',
  'Karya Kami': 'Our Work',
  'Lihat bagaimana kami membantu berbagai bisnis': 'See how we help various businesses',
  
  // Blog texts
  'Artikel \\| Pinabae Studio': 'Blog | Pinabae Studio',
  'Insight & Artikel Terbaru': 'Latest Insights & Articles',
  
  // Shared
  '>Pelajari Lebih Lanjut<': '>Learn More<',
  'Hubungi Kami': 'Contact Us'
};

walk(path.join(__dirname, 'src/pages/en'), (err, results) => {
  if (err) throw err;
  results.filter(f => f.endsWith('.astro')).forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    for (const [key, value] of Object.entries(commonReplacements)) {
      const regex = new RegExp(key, 'g');
      content = content.replace(regex, value);
    }
    fs.writeFileSync(filePath, content);
    console.log(`Processed: ${filePath}`);
  });
});
