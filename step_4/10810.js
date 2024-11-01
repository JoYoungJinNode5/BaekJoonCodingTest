const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [basket, putCount] = input[0].split(" ").map(Number);
let result = new Array(basket).fill(0);

for (let i = 1; i <= putCount; i++) {
  const [startBasket, endBasket, ballNum] = input[i].split(" ").map(Number);
  for (let j = startBasket - 1; j <= endBasket - 1; j++) {
    result[j] = ballNum;
  }
}

console.log(result.join(" "));
