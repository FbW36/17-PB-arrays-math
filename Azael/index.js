// # 18-PB-arrays-math

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

// *** Task // with Math.random() ==> get random item from colors array, if the item is number set it to ''

let colorsLength = colors.length;

console.log(colorsLength);

let random = Math.floor(Math.random() * colorsLength);
let randomColors = colors[random];
let randomColorsNumber = typeof colors[random] === "number" ? "" : colors[random];

console.log(randomColorsNumber);
