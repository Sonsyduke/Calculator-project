import * as mathFunc from "./math_functions.js";

class Calculator {
  constructor(displayTop, displayBottom) {
    this.displayTop = displayTop;
    this.displayBottom = displayBottom;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  delete() {}
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }
  chooseOperation(operation) {}
  compute() {}
  updateDisplay() {
    this.displayBottom.innerText = this.currentOperand;
  }
}

// Getting all the buttons
let displayTop = document.querySelector(".top-section");
let displayBottom = document.querySelector(".buttom-section");
// const buttons = [...document.querySelectorAll(".button")];
const numericButtons = [...document.querySelectorAll(".numeric")];
const operationButtons = [...document.querySelectorAll(".operation")];
const equalsButton = document.querySelector("#equal");
const deleteButton = document.querySelector("#clear");
const clearButton = document.querySelector("#delete");

const calculator = new Calculator(displayTop, displayBottom);

numericButtons.map((numButton) => {
  numButton.addEventListener("click", () => {
    calculator.appendNumber(numButton.innerText);
    calculator.updateDisplay();
  });
});

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
