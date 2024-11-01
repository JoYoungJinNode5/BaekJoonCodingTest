const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = input[0];
let result = "";
for (let i = 1; i < input.length; i++) {
  const A = input[i].split("");
  result += A[0] + A[A.length - 1] + "\n";
}

console.log(result);
