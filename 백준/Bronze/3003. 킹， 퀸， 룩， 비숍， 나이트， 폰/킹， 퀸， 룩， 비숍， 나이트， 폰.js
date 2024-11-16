const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ");

const king = input[0] > 1 ? -(input[0] - 1) : 1 - input[0];
const queen = input[1] > 1 ? -(input[1] - 1) : 1 - input[1];
const rook = input[2] > 2 ? -(input[2] - 2) : 2 - input[2];
const bishop = input[3] > 2 ? -(input[3] - 2) : 2 - input[3];
const knight = input[4] > 2 ? -(input[4] - 2) : 2 - input[4];
const pawn = input[5] > 8 ? -(input[5] - 8) : 8 - input[5];
console.log(
  king + " " + queen + " " + rook + " " + bishop + " " + knight + " " + pawn
);
