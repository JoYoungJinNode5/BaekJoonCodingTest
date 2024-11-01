const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const result = input[0].split("");
const num = Number(input[1]) - 1;
console.log(result[num]);
