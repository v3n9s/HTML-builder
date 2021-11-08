const fs = require('fs');

function writeToFile(data){
  fs.appendFile(__dirname + '/text.txt', data, 'utf-8', (err) => {
    if(err) throw err;
  });
}

process.stdin.on('data', (chunk) => {
  if(chunk.toString('utf-8').trim() === 'exit') process.exit();
  writeToFile(chunk);
});

process.on('exit', () => {
  console.log('See you soon!');
});

process.on('SIGINT', () => process.exit());

console.log('Welcome, start typing');

writeToFile('');