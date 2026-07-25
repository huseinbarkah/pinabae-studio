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
    
    if (content.includes('import gsap') && !content.includes('astro:page-load')) {
      // Find the closing </script> and the line before it.
      // And we need to wrap everything after the imports.
      // Usually the script looks like:
      // <script>
      //   import gsap from 'gsap';
      //   import { ScrollTrigger } from 'gsap/ScrollTrigger';
      //   ... logic ...
      // </script>
      
      let lines = content.split('\n');
      let scriptStarted = false;
      let newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        if (line.trim() === '<script>') {
          scriptStarted = true;
          newLines.push(line);
        } else if (line.trim() === '</script>' && scriptStarted) {
          scriptStarted = false;
          newLines.push('  });');
          newLines.push(line);
        } else if (scriptStarted) {
          if (line.trim().startsWith('import ') || line.trim() === 'gsap.registerPlugin(ScrollTrigger);') {
            newLines.push(line);
            // Insert event listener start after registerPlugin or imports
            if (line.trim() === 'gsap.registerPlugin(ScrollTrigger);' || (line.trim().startsWith('import ') && !lines[i+1].trim().startsWith('import ') && !lines[i+1].trim().startsWith('gsap.registerPlugin'))) {
              newLines.push('  document.addEventListener("astro:page-load", () => {');
            }
          } else {
            // inside the listener
            newLines.push('  ' + line);
          }
        } else {
          newLines.push(line);
        }
      }
      
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed GSAP in: ${filePath}`);
    }
  });
});
