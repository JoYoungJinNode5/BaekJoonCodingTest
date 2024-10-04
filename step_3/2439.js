const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = "";

for (let i = 0; i < input; i++) {
  for (let j = input; j > i + 1; j--) {
    result += " ";
  }
  for (let k = 0; k <= i; k++) {
    result += "*";
  }
  if (i < input - 1) {
    result += "\n";
  }
}

console.log(result);
