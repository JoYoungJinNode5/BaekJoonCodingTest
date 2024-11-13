const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const B = input[1].split("").map(Number);
console.log(B.reduce((acc, cur) => acc + cur, 0));
