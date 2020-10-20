const colors = [
  "red",
  9999,
  "green",
  "blue",
  777,
  "yellow",
  "black",
  "purple",
  "brown",
];

randomIndex = Math.floor(Math.random() * colors.length);
console.log("Random Index is ==>", randomIndex);
console.log("Its color is ==>", colors[randomIndex]);
let whichType =
  typeof colors[randomIndex] === "string"
    ? console.log("It is a string =", colors[randomIndex])
    : console.log("It is a number =", colors[""]);
