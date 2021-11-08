const fs = require('fs');

fs.ReadStream(__dirname + '/text.txt', {encoding: 'utf-8'})
  .on('data', (chunk) => {
    console.log(chunk);
  });