const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = "";
// for (let i = 1; i <= input; i++) {
//   result += "*".repeat(i) + "\n";
// }

// console.log(result.trim());

/**이중 반복문으로 하는 방법*/

for (let i = 1; i <= input; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result.trim());
