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

walk(path.join(__dirname, 'src/pages/en'), (err, results) => {
  if (err) throw err;
  results.filter(f => f.endsWith('.astro')).forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add one more '../' to any import path that starts with '../'
    content = content.replace(/from\s+['"](\.\.\/[^'"]+)['"]/g, "from '../$1'");
    content = content.replace(/import\s+['"](\.\.\/[^'"]+)['"]/g, "import '../$1'");
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in: ${filePath}`);
  });
});
