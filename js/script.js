import * as mathFunc from "./math_functions.js";

// TEST DATA
// console.log(mathFunc.add(4, 5));
// console.log(mathFunc.add(4, 5, 5, 6));

// console.log(mathFunc.subtract(8, 5));
// console.log(mathFunc.subtract(10, 5, 3, 8));

// console.log(mathFunc.multiply(4, 5));
// console.log(mathFunc.multiply(4, 5, 5, 6));

// console.log(mathFunc.division(10, 5));
// console.log(mathFunc.division(20, 5, 2, 5));

function operator(func, ...numbers) {
  if (func === "+") {
    return mathFunc.add(...numbers);
  } else if (func === "-") {
    return mathFunc.subtract(...numbers);
  } else if (func === "*") {
    return mathFunc.multiply(...numbers);
  } else if (func === "/") {
    return mathFunc.division(...numbers);
  }
}

console.log(operator("+", 7, 3, 12, 56));
console.log(operator("-", 15, 6, 4));
console.log(operator("*", 5, 6, 6));
console.log(operator("/", 5, 6, 6));
