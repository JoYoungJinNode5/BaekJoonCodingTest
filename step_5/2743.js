const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const result = input.split("");

console.log(result.length);
