const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const array = input[1].split(" ").map(Number);
const sameNum = Number(input[2]);
let sum = 0;

for (let i = 0; i < input[0]; i++) {
  if (sameNum === array[i]) {
    sum += 1;
  }
}

console.log(sum);
