const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = "";

for (i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  result += A + B + "\n";
}

console.log(result);
