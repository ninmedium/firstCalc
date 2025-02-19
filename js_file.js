function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1 = 0;
let num2 = 0;
let opr = "";

function operate(num1, opr, num2) {
    switch (opr) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            if (num2 === 0) {
                return "Error: Don't divide by 0"
            }
            return divide(num1, num2);
        default:
            return "Error";
    }
}