//with Math.random() ==> get random item from colors array, if the item is number set it to ''
const colors = [
  'red',
  9999,
  'green',
  'blue',
  777,
  'yellow',
  'black',
  'purple',
  'brown',
];

let getRandom = Math.floor(Math.random() * colors.length);
console.log(typeof colors[getRandom] === 'string' ? colors[getRandom] : '');
