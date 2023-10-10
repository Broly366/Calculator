let displayValue = '';

let firstnumber = '';
let operatorUsed = '';
let secondNumber = '';

function putNumInDisplay(value){
    displayValue += value;
    document.getElementById("display").value = displayValue;
};

function clearDisplay(){
    displayValue = "";
    firstnumber = '';
    operatorUsed = '';
    secondNumber = '';

    document.getElementById("display").value = displayValue;
};

function putOpInDisplay(operator){
    firstnumber = displayValue;
    operatorUsed = operator;
    displayValue += operator;
    document.getElementById("display").value = displayValue;
}

function findSecondNumber(values, operator){
    const index = values.indexOf(operator);

    if (index !== -1){
        secondNumber = values.slice(index + 1);
        return secondNumber;
    };
};

function calculate(){
    findSecondNumber(displayValue, operatorUsed);

    const result = operate(firstnumber, operatorUsed, secondNumber);

    displayValue = result;
    document.getElementById("display").value = displayValue;
}

function add(a, b) {
    return +a + +b;
};

function subtract(a , b) {
    return +a - +b;
};

function multiply(a, b) {
    return +a * +b;
};

function divide(a , b) {
    if (b === 0){
        return "ERROR";
    } else {
    return +a / +b;
    };
};

function operate(numOne, operator, numTwo){
    if (operator === "+") {
        return add(numOne, numTwo);
    }else if (operator === "-") {
        return subtract(numOne, numTwo);
    }else if (operator === "*") {
        return multiply(numOne, numTwo);
    }else if (operator === "/") {
        return divide(numOne, numTwo);
    };
};
