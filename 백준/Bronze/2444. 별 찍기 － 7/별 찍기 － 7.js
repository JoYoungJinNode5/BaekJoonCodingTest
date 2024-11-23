const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let result = "";

for (let i = 1; i <= input; i++) {
  for (let j = input; j > i; j--) {
    result += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    result += "*";
  }
  result += "\n";
}
for (let I = input - 1; I > 0; I--) {
  for (let J = 1; J <= input - I; J++) {
    result += " ";
  }
  for (let K = I * 2 - 1; K > 0; K--) {
    result += "*";
  }
  if (I > 1) {
    result += "\n";
  }
}

console.log(result);
