let scores = [
  { name: "철수", score: 85 },
  { name: "영희", score: 92 },
  { name: "민수", score: 88 },
  { name: "혜진", score: 97 },
  { name: "진수", score: 90 },
];

function bubbleSort(scores) {
  for (let i = 0; i < scores.length - 1; i++) {
    for (let j = 0; j < scores.length - 1 - i; j++) {
      if (scores[j].score > scores[j + 1].score) {
        let temp = scores[j];
        scores[j] = scores[j + 1];
        scores[j + 1] = temp;
      }
    }
  }
  return scores;
}

console.log(bubbleSort(scores));
