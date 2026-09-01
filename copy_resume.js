const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'public', 'Varun_Nair_Resume (1).pdf');
const dest = path.join(__dirname, 'public', 'resume.pdf');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied resume to public/resume.pdf');
} else {
  console.log('Source file not found:', src);
}
