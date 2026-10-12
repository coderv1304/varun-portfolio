const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const dest = path.join(publicDir, 'resume.pdf');

// Check candidates
const candidates = [
  'Varun_Nair_CV (3).pdf',
  'Varun_Nair_CV.pdf',
  'Varun_Nair_Resume (1).pdf',
  'Varun_Nair_Resume.pdf'
];

let found = false;
for (const file of candidates) {
  const src = path.join(publicDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Successfully copied ${file} to public/resume.pdf`);
    found = true;
    break;
  }
}

if (!found) {
  console.log('No matching resume source file found in public/');
}
