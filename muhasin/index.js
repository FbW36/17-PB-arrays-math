const colors = ["red", 9999, "green", "blue", 777, "yellow", "black", "purple", "brown"];

const randomColor = colors[Math.floor(Math.random() * colors.length)];
isNaN(randomColor) ? randomColor : randomColor = "";

console.log("randomColor ==> ", randomColor);