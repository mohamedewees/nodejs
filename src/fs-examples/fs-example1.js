import fs from 'fs';
///////////////////////////////////////////
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
///////////////////////////////////////////
// the above code can be removed if we use bable.

// const data = fs.readFileSync('./src/Hello.txt','utf8'); // not the best way to write the file directory. there is another way using "__dirname"

const data = fs.readFileSync(__dirname + '/Hello.txt' , 'utf8');
console.log(data);
