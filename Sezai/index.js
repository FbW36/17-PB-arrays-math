// 18 Arrays Math

//*** Task // with Math.random() ==> get random item from colors array, if the item is number set it to ''

const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"];
colors[1] = "";
colors[4] = "";
let colorPicker = colors[Math.floor(Math.random() * colors.length)];
console.log("Hallo ==> ", colorPicker);

