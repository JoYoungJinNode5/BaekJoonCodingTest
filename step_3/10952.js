const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (i = 0; i < input.length - 1; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  const sum = A + B;
  console.log(sum);
}
