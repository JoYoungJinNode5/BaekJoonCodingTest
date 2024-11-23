const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const isPalindrome = input.join("") === input.slice().reverse().join("");

console.log(isPalindrome ? 1 : 0);