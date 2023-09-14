document.addEventListener("DOMContentLoaded", function() {

    let calculation = [];
    let operatorSignal = 0;
    let indexCount = 0;
    let firstNum = "";
    let secondNum = "";

    function pushNumber(numberChar) {
        if (operatorSignal === 0) {
            firstNum = firstNum + numberChar;
            calculation[indexCount] = firstNum;
            resultDisplay.innerHTML = firstNum;
            console.log(calculation);
            return calculation;
        };

        secondNum = secondNum + numberChar;
        calculation[indexCount] = secondNum;
        resultDisplay.innerHTML = secondNum;
        console.log(calculation);
        return calculation;
    };

    function pushOperator(operator) {
        if (operatorSignal === 1) {
            calculate(calculation);
        };
        calculation.push(operator);
        indexCount = 2;
        operatorSignal = 1;
        console.log(calculation);
        return calculation;
    };

    function clearArray() {
        calculation = [];
        operatorSignal = 0;
        indexCount = 0;
        firstNum = "";
        secondNum = "";
        resultDisplay.innerHTML = 0;
        console.log(calculation);
        return calculation;
    };

    function calculate(array) {
        let num1 = parseFloat(firstNum);
        let num2 = parseFloat(secondNum);
        let answer = 0;

        switch (array[1]) {
            case "+":
                answer = num1 + num2;
                break;
            case "-":
                answer = num1 - num2;
                break;
            case "*":
                answer = num1 * num2;
                break;
            case "/":
                answer = num1 / num2;
                break;
        };
        
        let result;
        if (Number.isInteger(answer)) {
            result = answer;
        } else {
            result = answer.toFixed(3);
        };

        calculation = [result.toString()];
        firstNum = result;
        secondNum = "";
        indexCount = 1;
        operatorSignal = 0;
        console.log(calculation);
        resultDisplay.innerHTML = result;
        return calculation;
    };

    function changeSign() {
        let num;
        if (operatorSignal === 0) {
            num = parseFloat(firstNum) * -1;
            firstNum = num.toString();
            calculation[0] = firstNum;
            resultDisplay.innerHTML = firstNum;
            console.log(calculation);
            return calculation;
        } else {
            num = parseFloat(secondNum) * -1;
            secondNum = num.toString();
            calculation[2] = secondNum;
            resultDisplay.innerHTML = secondNum;
            console.log(calculation);
            return calculation;
        };
    };

    function convertToPercent() {
        let num;
        if (operatorSignal === 0) {
            num = parseFloat(firstNum) / 100;
            firstNum = num.toString();
            calculation[0] = firstNum;
            resultDisplay.innerHTML = firstNum;
            console.log(calculation);
            return calculation;
        } else {
            num = parseFloat(secondNum) / 100;
            secondNum = num.toString();
            calculation[2] = secondNum;
            resultDisplay.innerHTML = secondNum;
            console.log(calculation);
            return calculation;
        };
    };

    const resultDisplay = document.querySelector("#result_display");

    const number0 = document.querySelector("#number0");
    number0.addEventListener("click", function() {
        pushNumber("0");
    });

    const number1 = document.querySelector("#number1");
    number1.addEventListener("click", function() {
        pushNumber("1");
    });

    const number2 = document.querySelector("#number2");
    number2.addEventListener("click", function() {
        pushNumber("2");
    });

    const number3 = document.querySelector("#number3");
    number3.addEventListener("click", function() {
        pushNumber("3");
    });

    const number4 = document.querySelector("#number4");
    number4.addEventListener("click", function() {
        pushNumber("4");
    });

    const number5 = document.querySelector("#number5");
    number5.addEventListener("click", function() {
        pushNumber("5");
    });

    const number6 = document.querySelector("#number6");
    number6.addEventListener("click", function() {
        pushNumber("6");
    });

    const number7 = document.querySelector("#number7");
    number7.addEventListener("click", function() {
        pushNumber("7");
    });

    const number8 = document.querySelector("#number8");
    number8.addEventListener("click", function() {
        pushNumber("8");
    });

    const number9 = document.querySelector("#number9");
    number9.addEventListener("click", function() {
        pushNumber("9");
    });

    const period = document.querySelector("#period");
    period.addEventListener("click", function() {
        pushNumber(".");
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

    const equals = document.querySelector("#equals");
    equals.addEventListener("click", function() {
        calculate(calculation);
    });

    const plusMinus = document.querySelector("#plus_minus");
    plusMinus.addEventListener("click", function() {
        changeSign();
    });

    const percent = document.querySelector("#percent");
    percent.addEventListener("click", function() {
        convertToPercent();
    });

});
