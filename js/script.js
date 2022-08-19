import * as mathFunc from "./math_functions.js";

// Getting all the buttons
let displayTop = document.querySelector(".top-section");
let displayBottom = document.querySelector(".buttom-section");
const numericButtons = [...document.querySelectorAll(".numeric")];
const operationButtons = [...document.querySelectorAll(".operation")];
const equalsButton = document.querySelector("#equal");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");

let currentOperand = "";
let previousOperand = "";
let operation = undefined;

numericButtons.map((button) => {
  button.addEventListener("click", (e) => {
    currentOperand = e.target.innerText;
    displayBottom.innerText += currentOperand;
    currentOperand = displayBottom.innerText;
  });
});

operationButtons.map((button) => {
  button.addEventListener("click", (e) => {
    operation = e.target.innerText;
    previousOperand = `${currentOperand} ${operation}`;
    displayTop.innerText = previousOperand;
  });
});

clearButton.addEventListener("click", () => {
  clear();
});
deleteButton.addEventListener("click", () => {
  deleteNum();
});

// ===================================
// FUNCTIONS
function clear() {
  currentOperand = "";
  previousOperand = "";
  operation = undefined;
  displayBottom.innerText = currentOperand;
  displayTop.innerText = previousOperand;
}

function deleteNum() {
  currentOperand = currentOperand.slice(0, -1);
  displayBottom.innerText = currentOperand;
}

function operator(func, prev, cur) {
  switch (func) {
    case "+":
      displayTop.innerText = prev + cur;
      break;
    case "-":
      displayTop.innerText = prev - cur;
      break;
    case "*":
      displayTop.innerText = prev * cur;
      break;
    case "÷":
      displayTop.innerText = prev / cur;
      break;
  }
}

// currentOperand = 12;
// previousOperand = 5;
// operation = "÷";

// console.log(operator(operation, previousOperand, currentOperand));
