const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let remain = [];

for (let i = 0; i < input.length; i++) {
  if (!remain.includes(input[i] % 42)) {
    remain.push(input[i] % 42);
  }
}

console.log(remain.length);
