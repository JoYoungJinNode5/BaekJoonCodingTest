const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function getDialNumber(char) {
  if (char >= "A" && char <= "Z") {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 67) return 3;
    if (code >= 68 && code <= 70) return 4;
    if (code >= 71 && code <= 73) return 5;
    if (code >= 74 && code <= 76) return 6;
    if (code >= 77 && code <= 79) return 7;
    if (code >= 80 && code <= 83) return 8;
    if (code >= 84 && code <= 86) return 9;
    if (code >= 87 && code <= 90) return 10;
  }
  return null;
}

let result = 0;

for (char of input) {
  result += Number(getDialNumber(char));
}

console.log(result);
