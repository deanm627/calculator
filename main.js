// document.addEventListener("DOMContentLoaded", function() {
//     alert("Hello!");
// });

let calculation = [];
let digitCount = 0;
let indexCount = 0;
let decimalIndicator = 0;
let calced = 0;

function pushNumber(number) {
    if (digitCount === 0) {
        calculation.push(number);
        resultDisplay.innerHTML = number;
    } else {
        if (decimalIndicator === 0) {
            let newNum = (calculation[indexCount] * 10) + number;
            calculation.pop();
            calculation.push(newNum);
            resultDisplay.innerHTML = newNum;
        } else {
            let numToAdd = number / (decimalIndicator * 10);
            console.log(numToAdd);
            calculation[indexCount] = calculation[indexCount] + numToAdd;
            calculation[indexCount].toFixed(5);
            console.log(calculation[indexCount]);
            decimalIndicator = decimalIndicator * 10;
            resultDisplay.innerHTML = calculation[indexCount];
        }
    }
    digitCount++;
    console.log(calculation);
    return calculation;
};

function pushOperator(operator) {
    calculation.push(operator);
    digitCount = 0;
    indexCount = indexCount + 2;
    decimalIndicator = 0;
    console.log(calculation);
    return calculation;
};

function pushDecimal(decimal) {
    let newStr = calculation[indexCount] + decimal;
    let newFloat = parseFloat(newStr);
    calculation.pop();
    calculation.push(newFloat);
    console.log(newFloat);
    console.log(calculation);
    resultDisplay.innerHTML = newFloat + ".";
    decimalIndicator = 1;
    return calculation; 
}

function clearArray() {
    calculation = [];
    digitCount = 0;
    indexCount = 0;
    decimalIndicator = 0;
    resultDisplay.innerHTML = 0;
    return calculation;
}

function calculate(array) {
    let answer = 0;
    let i = 1;
    if (array[i] === "+") {
        answer = array[i-1] + array[i+1];
    }
    if (array[i] === "-") {
        answer = array[i-1] - array[i+1];
    }
    if (array[i] === "*") {
        answer = array[i-1] * array[i+1];
    }
    if (array[i] === "/") {
        answer = array[i-1] / array[i+1];
    }
    calculation = [answer];
    indexCount = 0;
    digitCount = 1;
    decimalIndicator = 0;
    calced = 1;
    console.log(calculation);
    return answer;
}

const number0 = document.querySelector("#number0");
number0.addEventListener("click", function() {
    pushNumber(0);
});

const number1 = document.querySelector("#number1");
number1.addEventListener("click", function() {
    pushNumber(1);
});

const number2 = document.querySelector("#number2");
number2.addEventListener("click", function() {
    pushNumber(2);
});

const number3 = document.querySelector("#number3");
number3.addEventListener("click", function() {
    pushNumber(3);
});

const number4 = document.querySelector("#number4");
number4.addEventListener("click", function() {
    pushNumber(4);
});

const number5 = document.querySelector("#number5");
number5.addEventListener("click", function() {
    pushNumber(5);
});

const number6 = document.querySelector("#number6");
number6.addEventListener("click", function() {
    pushNumber(6);
});

const number7 = document.querySelector("#number7");
number7.addEventListener("click", function() {
    pushNumber(7);
});

const number8 = document.querySelector("#number8");
number8.addEventListener("click", function() {
    pushNumber(8);
});

const number9 = document.querySelector("#number9");
number9.addEventListener("click", function() {
    pushNumber(9);
});

const period = document.querySelector("#period");
period.addEventListener("click", function() {
    pushDecimal(".");
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", function() {
    clearArray();
});

const divide = document.querySelector("#divide");
divide.addEventListener("click", function() {
    pushOperator("/");
});

const multiply = document.querySelector("#multiply");
multiply.addEventListener("click", function() {
    pushOperator("*");
});

const subtract = document.querySelector("#subtract");
subtract.addEventListener("click", function() {
    pushOperator("-");
});

const add = document.querySelector("#add");
add.addEventListener("click", function() {
    pushOperator("+");
});

const resultDisplay = document.querySelector("#result_display");
const equals = document.querySelector("#equals");
equals.addEventListener("click", function() {
    let calcedResult = calculate(calculation);
    console.log(calcedResult);
    resultDisplay.innerHTML = calcedResult.toFixed(3); 
});
