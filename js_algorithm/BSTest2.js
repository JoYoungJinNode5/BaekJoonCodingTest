let cards = [
  ["Diamond", 3],
  ["Heart", "A"],
  ["Clover", "k"],
  ["Spade", 7],
];

//순서는 Heart, Diamond, Clover, Spade

function cardToPoint(card) {
  const addPoint = {
    Heart: 0,
    Diamond: 13,
    Clover: 13 * 2,
    Spade: 13 * 3,
  };

  const stringToNumber = {
    A: 1,
    J: 11,
    Q: 12,
    K: 13,
  };
  return (
    addPoint[card[0]] +
    (typeof card[1] === "number" ? card[1] : stringToNumber[card[1]])
  );
}

// function bubbleSort(array) {
//   for (let i = 0; i < cards.length - 1; i++) {
//     for (let j = 0; j < cards.length - 1 - i; j++) {
//       if (cardToPoint(array[j]) > cardToPoint(array[j + 1])) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

cards.sort((a, b) => cardToPoint(a) - cardToPoint(b));

console.log(cards);
