// X대학 M교수님은 프로그래밍 수업을 맡고 있다. 교실엔 학생이 30명이 있는데, 학생 명부엔 각 학생별로 1번부터 30번까지 출석번호가 붙어 있다.

// 교수님이 내준 특별과제를 28명이 제출했는데, 그 중에서 제출 안 한 학생 2명의 출석번호를 구하는 프로그램을 작성하시오.

/**
 * 방법1. 1부터 30까지 수가 있는 배열을 생성하고 for문을 돌려 해당 되는 숫자를 배열에서 뺀다.
 * 근데 굳이 for문을 써야할까?
 * 걍 쓰지뭐
 **/

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let result = Array.from({ length: 30 }, (_, i) => i + 1);

result = result.filter((num) => !input.includes(num));

console.log(result.join("\n"));
