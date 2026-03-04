import fs from 'fs';

const html = fs.readFileSync('/app/applet/fetch.js', 'utf8'); // Wait, the fetch script just prints the HTML.
// I can just fetch it again and parse it.
import https from 'https';

https.get('https://general-committee-eng-dtunit-apa.netlify.app/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const match = data.match(/const ENG_DATA = (\{[\s\S]*?\});\s*<\/script>/);
    if (match) {
      fs.writeFileSync('/app/applet/eng_data.js', 'export const ENG_DATA = ' + match[1] + ';');
      console.log('Data extracted successfully.');
    } else {
      console.log('Data not found.');
    }
  });
});
