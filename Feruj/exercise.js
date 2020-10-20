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
colors[1] = "";
colors[4] = "";
const targetColor = colors[Math.floor(Math.random() * colors.length)];
console.log("Random Color ==> ", targetColor);
