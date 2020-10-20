const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"]; 

// with Math.random() ==> get random item from colors array, if the item is number set it to " "

let randomNumber = Math.floor(Math.random() * colors.length);
// console.log(randomNumber);

let randomColor = colors[randomNumber];
// console.log(randomColor);

console.log(typeof(colors[randomNumber]) === 'string' ? colors[randomNumber] : " ");

