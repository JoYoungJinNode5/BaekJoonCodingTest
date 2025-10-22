const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();

const map = new Map();

for (const ch of input) {
  const count = map.get(ch) || 0;
  map.set(ch, count + 1);
}

const maxCount = Math.max(...map.values());

let result = "";
for (const [ch, count] of map) {
  if (count === maxCount) {
    result += ch;
  }
}

if (result.length > 1) {
  console.log("?");
} else {
  console.log(result);
}