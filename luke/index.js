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
let choosenItem = colors[Math.floor(Math.random() * colors.length)];
console.log(choosenItem);

let isNumber = typeof choosenItem === typeof 1 ? "" : choosenItem;
console.log(isNumber);
