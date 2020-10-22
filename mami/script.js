const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"]; 

let randomNumber = Math.floor(Math.random()* colors.length);

console.log(typeof colors[randomNumber] === 'string' ? colors[randomNumber]:'');

