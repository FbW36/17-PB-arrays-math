// *** Task // with Math.random() ==> get random item from colors array, if the item is number set it to ''

const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"];


const colors2 = colors[Math.floor(colors.length * Math.random())];
colors3 = `${colors2}`
console.log("Your color is =>", colors3)
