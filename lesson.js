const https = require('https');
const fs = require('fs');

const url = 'https://github.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/raw/main/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt';
const fileName = 'London Swanwick Control 2017.txt';

https.get(url, (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    fs.writeFile(fileName, data, (error) => {
      if (error) {
        console.error(`An error occurred while writing the file: ${error.message}`);
        return;
      }
      const count = data.split('\n').length;
      console.log(`The file has been saved as ${fileName}. It has ${count} lines.`);
    });
  });

}).on('error', (error) => {
  console.error(`An error occurred while downloading the file: ${error.message}`);
});
