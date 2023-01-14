// const calc = require('./test-code1/function1');
import {calculator} from "./test-code1/function1.js";

const args = process.argv.slice(2);
var x = Number(args[0]);
var operation = args[1];
var y = Number(args[2]);

const result = calculator(x,y,operation);
console.log(result);