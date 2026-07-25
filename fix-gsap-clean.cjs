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

walk(path.join(__dirname, 'src/pages'), (err, results) => {
  if (err) throw err;
  results.filter(f => f.endsWith('.astro')).forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('import gsap') && content.includes('astro:page-load')) {
      // Clean up previous mess
      content = content.replace(/  document\.addEventListener\("astro:page-load", \(\) => \{\s+/g, '');
      content = content.replace(/  \}\);\s+<\/script>/g, '</script>');
      
      // Let's re-wrap cleanly using regex replace on the whole script block
      // We want to capture the imports, and then wrap the rest.
      
      content = content.replace(/<script>([\s\S]*?)<\/script>/g, (match, scriptContent) => {
        if (!scriptContent.includes('import gsap')) return match;
        
        // Find all imports
        let imports = [];
        let rest = [];
        let lines = scriptContent.split('\n');
        
        for (let line of lines) {
          if (line.trim().startsWith('import ')) {
            imports.push(line);
          } else {
            rest.push(line);
          }
        }
        
        // Put imports at top, then wrap rest
        return `<script>\n${imports.join('\n')}\n  document.addEventListener('astro:page-load', () => {\n${rest.join('\n')}\n  });\n</script>`;
      });
      
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned GSAP in: ${filePath}`);
    }
  });
});
