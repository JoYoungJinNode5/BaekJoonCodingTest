const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

for (let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
