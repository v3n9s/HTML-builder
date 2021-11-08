const fs = require('fs/promises');

const srcDirUrl = `${__dirname}/files`;
const destDirUrl = `${__dirname}/files-copy`;

(async function(){
  try{
    await fs.rm(destDirUrl, {force: true, recursive: true});
    await fs.mkdir(destDirUrl, {recursive: true});
    const files = await fs.readdir(srcDirUrl);
    files.map((fileName) => {
      fs.copyFile(`${srcDirUrl}/${fileName}`, `${destDirUrl}/${fileName}`);
    });
  }
  catch(err){
    console.error(err);
  }
})();