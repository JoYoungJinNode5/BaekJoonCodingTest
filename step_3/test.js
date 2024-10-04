let result = "";
//for문은 반복 for문안에서도 반복 따라서 j가 처움에 4번 반복
for (let i = 1; i < 5; i++) {
  for (let j = 4; j > i; j--) {
    result += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
