const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if (M - 45 < 0) {
  H = H - 1;
  M = M + 15;
} else {
  M = M - 45;
}
H = (H + 24) % 24;
console.log(H + " " + M);
