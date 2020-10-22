
const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"];
let colorPicker = Math.floor(Math.random() * colors.length);
let filtered = typeof colors[colorPicker] === "number" ? "" : colors[colorPicker];
console.log( filtered);

