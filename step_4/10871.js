const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [totalNum, standardNum] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number);
let result = [];

for (let i = 0; i < totalNum; i++) {
  if (array[i] < standardNum) {
    result.push(array[i]);
  }
}

console.log(result.join(" "));

// const result = array.filter((lowNum) => lowNum < standardNum);

// console.log(result.join(" "));
