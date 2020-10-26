const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"];

const random = colors[Math.floor(Math.random() * colors.length)];
const pickColor = isNaN(random) === true ? random : "";
console.log(pickColor);
