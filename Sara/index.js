// with Math.random() ==> get random item from colors array, if the item is number set it to '' 
const colors = ["red", 9999, "green", "blue", 777, "yellow", "black", "purple", "brown"] ; // 
// turn number into string number
colors[1] = colors[1].toString() ; // '999'
colors[4] = colors[4].toString() ; // '777'
console.log('colors ==>', colors) ; // 

// length of array colors
console.log('length of colors ==>', colors.length) ; // 9

let randomItem = colors[Math.floor(Math.random() * colors.length)] ;
console.log('randomItem ==>', randomItem) ; // random color 


 






