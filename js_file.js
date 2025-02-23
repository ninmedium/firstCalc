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
let res = "";

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

function formatResult(result) {
    let resStr = result.toString();
    if (resStr.length > 13) {
        if (!isNaN(result)) {
            resStr = Number(result).toExponential(6);
            if (resStr.length > 13) {
                resStr = resStr.slice(0, 13);
            }
        } else {
            resStr = resStr.slice(0, 13);
        }
    }
    return resStr;
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
                res = operate(num1, opr, num2);
                displayNUM.textContent = formatResult(res);
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
        res = operate(num1, opr, num2);
        displayNUM.textContent = formatResult(res);
        oprPressed = false;
        twoNum = false;
    }
});

const allClear = document.querySelector("#buttAC");

allClear.addEventListener("click", () => {
    displayNUM.textContent = "";
    num1 = undefined;
    num2 = undefined;
    opr = "";
    oprPressed = false;
    twoNum = false;
});

const decimal = document.querySelector("#buttPOINT");

decimal.addEventListener("click", () => {
    if (displayNUM.textContent.includes(".")) {
        return;
    }
    if (displayNUM.textContent.length >= 1 && displayNUM.textContent.length <= 12) {
        displayNUM.textContent += ".";
    }
});

const perc = document.querySelector("#buttPERC");

perc.addEventListener("click", () => {
    if (displayNUM.textContent.length >= 1) {
        displayNUM.textContent = formatResult(+displayNUM.textContent / 100);
    }
});

const delButton = document.querySelector("#buttDEL");

delButton.addEventListener("click", () => {
    if (oprPressed) {
        oprPressed = false;
        opr = "";
        return;
    }
    if (displayNUM.textContent.length > 0) {
        displayNUM.textContent = displayNUM.textContent.slice(0, -1);
    }
});