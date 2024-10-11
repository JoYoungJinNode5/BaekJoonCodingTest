const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const array = input[1].split(" ").map(Number);

let maxNum = array[0];
let minNum = array[0];

for (i = 1; i < N; i++) {
  if (array[i] > maxNum) {
    maxNum = array[i];
  }
  if (array[i] < minNum) {
    minNum = array[i];
  }
}

console.log(minNum, maxNum);
