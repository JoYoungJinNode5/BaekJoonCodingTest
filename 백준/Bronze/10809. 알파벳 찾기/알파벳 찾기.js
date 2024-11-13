const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

let result = "";

for (let i = 97; i <= 122; i++) {
  const char = String.fromCharCode(i);
  const index = input.indexOf(char);

  if (index !== -1) {
    result += index + " ";
  } else {
    result += "-1" + " ";
  }
}

console.log(result.trim());
