
const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"]; 

let arrLength = colors.length;
let randomlySelected = Math.floor(Math.random() * arrLength);
let checkElement = isNaN(colors[randomlySelected]);
randomlySelected = checkElement? `${colors[randomlySelected]} is not a number ${checkElement}` : `${colors[randomlySelected]} is not a  number ${checkElement}`;

console.log(randomlySelected);

 