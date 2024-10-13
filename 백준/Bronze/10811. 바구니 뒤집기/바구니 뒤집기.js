const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [basket, count] = input[0].split(" ").map(Number);
let basketArray = Array.from({ length: basket }, (_, i) => i + 1);

for (let i = 1; i <= count; i++) {
  let [startNum, endNum] = input[i].split(" ").map((num) => Number(num - 1));
  while (startNum < endNum) {
    let temp = basketArray[startNum];
    basketArray[startNum] = basketArray[endNum];
    basketArray[endNum] = temp;
    startNum++;
    endNum--;
  }
}

console.log(basketArray.join(" "));
