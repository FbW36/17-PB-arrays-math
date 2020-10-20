const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"]; 

// with Math.random() ==> get random item from colors array, if the item is number set it to " "

colors[1] = [" "]
colors[4] = [" "]

// let randomNumber = Math.floor(Math.random() * colors.length);
// console.log(randomNumber);

// let randomColor = colors[randomNumber];
// console.log(randomColor);

console.log(colors[Math.floor(Math.random() * colors.length)]);