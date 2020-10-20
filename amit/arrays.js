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

const colors2 = colors[Math.floor(Math.random() * colors.length)];
console.log(colors2);

let ans = typeof colors2 === "number" ? "" : colors2;
console.log(ans);

// or let ans = isNaN(colors2) === true ? colors2 : "";
// console.log(ans);
