const fs = require("fs");
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = [1, 1, 2, 2, 2, 8];
let result = "";
for (let i = 0; i < arr.length; i++) {
  result += arr[i] - input[i] + " ";
}

console.log(result);