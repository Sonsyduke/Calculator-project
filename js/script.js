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

function operator(num1, num2, func) {
  if (func === "+") {
    return mathFunc.add(num1, num2);
  } else if (func === "-") {
    return mathFunc.subtract(num1, num2);
  } else if (func === "*") {
    return mathFunc.multiply(num1, num2);
  } else if (func === "/") {
    return mathFunc.division(num1, num2);
  }
}

console.log(operator(7, 3, "+"));
console.log(operator(7, 3, "-"));
console.log(operator(7, 3, "*"));
console.log(operator(7, 3, "/"));
