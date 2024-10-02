const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

let prize = 0;

if (A === B && B === C) {
  prize = 10000 + A * 1000;
} else if (A === B || A === C || B === C) {
  const same = A === B || A === C ? A : B;
  prize = 1000 + same * 100;
} else {
  prize = Math.max(A, B, C) * 100;
}

console.log(prize);
