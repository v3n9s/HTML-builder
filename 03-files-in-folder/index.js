const fs = require('fs');

fs.readdir(__dirname + '/secret-folder', {withFileTypes: true}, (err, files) => {
  if(err) throw err;
  files.filter((file) => file.isFile()).map((file) => {
    fs.stat(`${__dirname}/secret-folder/${file.name}`, (err, stats) => {
      const fileParts = file.name.split('.');
      const fileExt = fileParts.pop();
      const fileName = fileParts.join('.');
      console.log(`${fileName} - ${fileExt} - ${stats.size / 1000}kB`);
    });
  });
});