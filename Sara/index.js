// with Math.random() ==> get random item from colors array, if the item is number set it to '' 
const colors = ["red", 9999, "green", "blue", 777, "yellow", "black", "purple", "brown"] ; // 

// length of array colors
console.log('length of colors ==>', colors.length) ; // 9

let randomItem = colors[Math.floor(Math.random() * colors.length)] ;
console.log('randomItem ==>', randomItem) ; // random Item

const pickColor = isNaN(randomItem) === true ? randomItem : "";
console.log('pickColor ==>', pickColor); // numbers not included







