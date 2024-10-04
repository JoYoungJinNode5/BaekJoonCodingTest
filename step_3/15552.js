const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);

let result = "";

for (let i = 1; i <= N; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  result += A + B + "\n";
}

console.log(result);
