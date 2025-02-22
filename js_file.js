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
let oprPressed = false;

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

const displayNUM = document.querySelector("#displayNUM");

const buttons = document.querySelectorAll(".num-butt");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (displayNUM.textContent.length <= 12) {
            displayNUM.textContent += button.textContent;
        }
    });
});

const oprButtons = document.querySelectorAll(".opr-butt");

oprButtons.forEach(oprbtn => {
    oprbtn.addEventListener("click", () => {
        if (displayNUM.textContent.length >= 1) {
            if (oprPressed === false) {
                num1 = +displayNUM.textContent;
            }
            opr = oprbtn.textContent;
            oprPressed = true;
            console.log(opr);
            console.log(oprPressed);
            console.log(num1);
        }
    });
});