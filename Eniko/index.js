
// *** Task // with Math.random() ==> get random item from colors array, if the item is number set it to ''

// 🚀 Enjoy the challenges

const colors = [
    "red",
    9999,
    "green",
    "blue",
    777,
    "yellow",
    "black",
    "purple",
    "brown",
    ];
    const random = colors[Math.floor(Math.random() * colors.length)];
    const pickColor = isNaN(random) === true ? random : "";
    console.log(pickColor);

    //