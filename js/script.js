import * as mathFunc from "./math_functions.js";

// Getting all the buttons
let bottomInput = document.querySelector(".buttom-section");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const numericBtns = document.querySelectorAll(".numeric");
const plusBtn = document.querySelector("#plus");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divisionBtn = document.querySelector("#division");
const equalBtn = document.querySelector("#equal");
const dotBtn = document.querySelector("#dot");

plusBtn.addEventListener("click", () => {
  console.log("Connected to Plus btn");
});
subtractBtn.addEventListener("click", () => {
  console.log("Connected to Subtract btn");
});
multiplyBtn.addEventListener("click", () => {
  console.log("Connected to multiply btn");
});
divisionBtn.addEventListener("click", () => {
  console.log("Connected to division btn");
});
dotBtn.addEventListener("click", () => {
  console.log("Connected to dot btn");
});
equalBtn.addEventListener("click", () => {
  console.log("Connected to equal btn");
});

// Convert all the textContent to numbers
numericBtns.forEach((e) => {
  e.addEventListener("click", function () {
    bottomInput.textContent += +e.textContent;
  });
});

// clearBtn.addEventListener("click", () => {
//   console.log("Connected to Clear btn");
// });
// deleteBtn.addEventListener("click", () => {
//   console.log("Connected to Delete btn");
// });

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

// console.log(operator("+", 7, 3, 12, 56));
// console.log(operator("-", 15, 6, 4));
// console.log(operator("*", 5, 6, 6));
// console.log(operator("/", 5, 6, 6));
