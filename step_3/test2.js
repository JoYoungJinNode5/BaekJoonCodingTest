let output = "";
const size = 5;

for (let i = 1; i <= size; i++) {
  for (let j = size; j > i; j--) {
    output += " ";
  }
  for (let k = 1; k <= i * 2 - 1; k++) {
    output += "*";
  }
  output += "\n";
}
for (let I = size - 1; I > 0; I--) {
  for (let J = 1; J <= size - I; J++) {
    output += " ";
  }
  for (let K = I * 2 - 1; K > 0; K--) {
    output += "*";
  }
  if (I > 1) {
    output += "\n";
  }
}
console.log(output);
