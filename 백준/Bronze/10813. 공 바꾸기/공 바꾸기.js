const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [basket, count] = input[0].split(" ").map(Number);
result = new Array(basket).fill(0).map((_, index) => index + 1);

for (let i = 1; i <= count; i++) {
  const [A, B] = input[i].split(" ").map((num) => Number(num) - 1);
  let temp = result[A];
  result[A] = result[B];
  result[B] = temp;
}

console.log(result.join(" "));
