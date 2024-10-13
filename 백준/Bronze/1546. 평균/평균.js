const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const subjects = input[1].split(" ").map(Number);
const maxNumber = Math.max(...subjects);
const result = (subjects.reduce((acc, num) => acc + num) / N / maxNumber) * 100;

console.log(result);
