const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const A = input / 4;

console.log("long ".repeat(A) + "int");
