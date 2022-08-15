function add(...numbers) {
  return numbers.reduce((total, num) => {
    return total + num;
  }, 0);
}

function subtract(...numbers) {
  return numbers.reduce((total, num) => {
    return total - num;
  });
}

function multiply(...numbers) {
  return numbers.reduce((total, num) => {
    return total * num;
  });
}

function division(...numbers) {
  return numbers.reduce((total, num) => {
    return total / num;
  });
}

export {add, subtract, multiply, division};
