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

colors[1] = [""];
colors[4] = [""];

console.log(
  "get random item:",
  colors[Math.floor(Math.random() * colors.length)]
);

// *** Task // with Math.random() ==> get random item from colors array, if the item is number set it to ''

// better cause always working:

let colorPicker = Math.floor(Math.random() * colors.length);
let filtered =
  typeof colors[colorPicker] === "number" ? "" : colors[colorPicker];
console.log(filtered);
