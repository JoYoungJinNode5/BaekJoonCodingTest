const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  const N = input[i].split(" ").map(Number);
  console.log(N[0] + N[1]);
}
