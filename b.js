const { str } = require("./a");

console.log(str);

setTimeout(() => {
  console.log(str);
}, 2000);