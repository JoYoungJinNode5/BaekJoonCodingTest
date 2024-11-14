const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const A = Number(input[0].split("").reverse().join(""));
const B = Number(input[1].split("").reverse().join(""));

if (A > B) {
  console.log(A);
} else {
  console.log(B);
}
