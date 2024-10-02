const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

if (B + C >= 60) {
  A = A + Math.floor((B + C) / 60);
  B = (B + C) % 60;
} else {
  B = B + C;
}

A = (A + 24) % 24;

console.log(A, B);
