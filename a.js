const obj = {
    str: "string",
    number: 123,
    array: [1, 2, 3, 4],
    float: 1.1,
    object: {
      key: "value",
    },
    fun() {
      return true;
    },
    add(a, b) {
      return a + b;
    },
  };
  
  setTimeout(() => {
    obj.str = "string2";
  }, 1000);
  
  module.exports = obj;