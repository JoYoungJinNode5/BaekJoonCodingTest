const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(/\s+/);

const A = parseInt(input[0]);
const B = parseInt(input[1]);

let sum = 0;
for (let i = 2; i <= B * 2 + 1; i += 2) {
  let price = parseInt(input[i]);
  let quantity = parseInt(input[i + 1]);
  sum += price * quantity;
}

if (sum === A) {
  console.log("Yes");
} else {
  console.log("No");
}

//다른 사람 답
const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n"); // 줄마다 나눔

let total = 0;

const pay = Number(inputData[0]);
const N = Number(inputData[1]);
for (var i = 2; i <= N + 1; i++) {
  //for 문 안에서는 const사용 가능 재할당맘 막을 수 있고, 재선언은 가능
  const [price, n] = inputData[i].split(" ").map(Number); // 예로 "3000 4"를 공백을 split으로 나눔 그리고 map으로 숫자로 변환해서 뽑는다.
  total += price * n;
}

if (pay === total) {
  console.log("Yes");
} else {
  console.log("No");
}
