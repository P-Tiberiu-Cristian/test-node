//Importing the whole fs module
/*const fs = require('fs');

const first = fs.readFileSync('./content/first.txt', 'utf8');
const second = fs.readFileSync('./content/second.txt', 'utf8');
fs.writeFileSync(
    './content/fs-sync-result.txt',
    `The result of sync write file is: ${first}, ${second}!`
)*/

//Importing specific methods from fs module
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync(
    './content/fs-sync-result.txt',
    `The result of sync write file is: ${first}, ${second}!`
);
console.log('done with this task');
console.log('starting the next one');