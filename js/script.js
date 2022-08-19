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
    displayBottom.innerText = "";
    displayTop.innerText = previousOperand;
  });
});

clearButton.addEventListener("click", () => {
  clear();
});
deleteButton.addEventListener("click", () => {
  deleteNum();
});

equalsButton.addEventListener("click", () => {
  currentOperand = parseFloat(currentOperand);
  previousOperand = parseFloat(previousOperand);
  displayBottom.innerText = currentOperand;
  currentOperand = operator(operation, previousOperand, currentOperand);
  displayBottom.innerText = currentOperand;

  previousOperand = "";
  displayTop.innerText = previousOperand;
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
  let total = 0;
  switch (func) {
    case "+":
      total = prev + cur;
      displayTop.innerText = total;
      break;
    case "-":
      total = prev - cur;
      displayTop.innerText = total;
      break;
    case "*":
      total = prev * cur;
      displayTop.innerText = total;
      break;
    case "÷":
      total = prev / cur;
      displayTop.innerText = total;
      break;
  }
  return total;
}
