const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = Number(input[0]);
let result = "";

for (let i = 1; i <= A; i++) {
  const num = Number(input[i].split(" ")[0]);
  const char = input[i].split(" ")[1];

  result +=
    char
      .split("")
      .map((char) => char.repeat(num))
      .join("") + "\n";
}

console.log(result);
