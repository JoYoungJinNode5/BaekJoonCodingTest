//1. 입력 첫 줄에 과목 개수가 나오고, 두번째 줄에서 과목의 점수가 나온다.
//2. 점수를 높게 평균을 내야하니 과목의 최대값을 구해서 그 수를 과목들의 합에 나누고 과목 수도 나눠야한다. 그리고 100을 곱한다.
//3. 소수점 2의 자리까지 맞으면 된다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const subjects = input[1].split(" ").map(Number);
const maxNumber = Math.max(...subjects);
const result = (subjects.reduce((acc, num) => acc + num) / N / maxNumber) * 100;

console.log(result);
