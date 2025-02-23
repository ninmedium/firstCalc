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

let num1 = undefined;
let num2 = undefined;
let opr = "";
let oprPressed = false;
let twoNum = false;

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
                return "Error"
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
        if (oprPressed) {
            displayNUM.textContent = "";
            oprPressed = false;
            twoNum = true;
        }
        if (displayNUM.textContent.length <= 12) {
            displayNUM.textContent += button.textContent;
        }
    });
});

const oprButtons = document.querySelectorAll(".opr-butt");

oprButtons.forEach(oprbtn => {
    oprbtn.addEventListener("click", () => {
        if (displayNUM.textContent.length >= 1) {
            if (twoNum) {
                num2 = +displayNUM.textContent;
                displayNUM.textContent = operate(num1, opr, num2);
                num1 = +displayNUM.textContent;
                twoNum = false;
            } else {
                num1 = +displayNUM.textContent;
            }
            opr = oprbtn.textContent;
            oprPressed = true;
        }
    });
});

const equal = document.querySelector("#buttEQUAL");

equal.addEventListener("click", () => {
    if (twoNum) {
        num2 = +displayNUM.textContent;
        displayNUM.textContent = operate(num1, opr, num2);
        oprPressed = false;
        twoNum = false;
    }
});