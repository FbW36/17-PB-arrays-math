// *** Task // with Math.random() ==> get random item from colors array, if the item is number set it to ''

const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"];


const colors2 = colors[Math.floor(colors.length * Math.random())];


let color3 = typeof colors2 === typeof 777 ? " " : colors2;
console.log('Result without impostors:', color3)