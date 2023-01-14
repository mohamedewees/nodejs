const fs = require('fs');
const args = process.argv.slice(2);
const name = args[0];
fs.writeFile('Hello.txt',`Hello ${name}`,(err)=>{});
console.log(process.argv.slice(2));