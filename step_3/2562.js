const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let maxNum = input[0];
let order = 1;

for (let i = 1; i < input.length; i++) {
  if (input[i] > maxNum) {
    maxNum = input[i];
    order = i + 1;
  }
}

console.log(maxNum + "\n" + order);
