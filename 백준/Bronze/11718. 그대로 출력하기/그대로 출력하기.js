const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let result = "";

for (let i = 0; i < input.length; i++) {
  result += input[i] + "\n";
}
console.log(result);
