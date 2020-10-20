let log = console.log;

//  get random item from colors array, if the item is number set it to 
const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"];
log(typeof colors[0])

let randomItem = colors[Math.floor(Math.random() * colors.length)]
let colorOrBust = typeof randomItem === typeof 0 ? " " : randomItem;
log('color or nothing:', colorOrBust)