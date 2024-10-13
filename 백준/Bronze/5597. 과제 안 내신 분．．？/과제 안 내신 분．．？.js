const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let result = Array.from({ length: 30 }, (_, i) => i + 1);

result = result.filter((num) => !input.includes(num));

console.log(result.join("\n"));