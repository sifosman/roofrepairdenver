const fs = require('fs');
const path = require('path');

function walk(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.next') walk(full, files);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      files.push(full);
    }
  }
  return files;
}

const files = walk(path.join(__dirname, 'app'));
const issues = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  // Match description: "..." or description: `...`
  const matches = content.match(/description:\s*(['"`])((?:\\.|(?!\1)[^\\])*?)\1/g);
  if (matches) {
    for (const match of matches) {
      const desc = match.replace(/description:\s*['"`]/, '').replace(/['"`]$/, '');
      if (desc.length > 160) {
        issues.push({ file: path.relative(__dirname, file), length: desc.length, text: desc });
      }
    }
  }
}

if (issues.length === 0) {
  console.log('All meta descriptions are 160 characters or under.');
} else {
  console.log(`Found ${issues.length} meta description(s) exceeding 160 characters:\n`);
  issues.forEach(i => {
    console.log(`File: ${i.file}`);
    console.log(`Length: ${i.length} chars`);
    console.log(`Text: ${i.text}`);
    console.log('---');
  });
}
