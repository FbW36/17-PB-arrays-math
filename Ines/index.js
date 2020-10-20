const colors = ["red", 9999, "green", "blue",777, "yellow", "black", "purple", "brown"];

let random = Math.floor(Math.random()*9);
// console.log("random>",random);

if (typeof colors[random] === "number"){
    console.log("number:");
    colors[random] = "";
    console.log(colors);
}
else{
    console.log("string");
}