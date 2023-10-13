let displayValue = '';

let firstNumber = '';
let operatorUsed = null;
let secondNumber = '';
let calculated = false;
let dotUsed = null;

let numInp = false;

function clearDisplay(){
    displayValue = "";
    firstNumber = '';
    operatorUsed = null;
    secondNumber = '';

    document.getElementById("display").value = displayValue;
};

function calculatePercent(){
    firstNumber = document.getElementById("display").value;

    if(firstNumber === ''){
        return displayValue = '';
    }
    const percentage = firstNumber / 100;

    displayValue = percentage;
    document.getElementById("display").value = displayValue;
}

function putNumInDisplay(value){

    if (numInp === true){
        displayValue = '';
    }
    numInp = false;

    displayValue += value;
    document.getElementById("display").value = displayValue;
};

function putOpInDisplay(operator){
    if (displayValue.indexOf(operatorUsed) !== 0){
        calculate();
    }
    numInp = false;
    operatorUsed = operator;
    displayValue += operator;
    if (displayValue.indexOf(operatorUsed) !== 0){
        findfirstNumber(displayValue, operatorUsed);
    }

    
    document.getElementById("display").value = displayValue;
};

function findfirstNumber(values, operator){
    
    
    const parts = values.split(operator);

    if (parts.length === 2) {
        firstNumber = parts[0];
        return firstNumber;
    }
    return null;
}

function findSecondNumber(values, operator){
    const index = values.indexOf(operator);
    if (index !== -1){
        secondNumber = values.slice(index + 1);
        return secondNumber;
    };
};

function addDot(dot){
    if (dotUsed === null){
        dotUsed = dot;
        displayValue += dot;
        document.getElementById("display").value = displayValue;
    } else{
        displayValue += "";
    };

    numInp = false;
};

function calculate(){
    findSecondNumber(displayValue, operatorUsed);
    
    const result = operate(firstNumber, operatorUsed, secondNumber);

    const hasMoreThanTwoDecimals = (result * 100) % 1 !== 0;

    if (isNaN(result)){
        return "";
    }

    const roundedResult = hasMoreThanTwoDecimals ? result.toFixed(2) : result;

    displayValue = roundedResult.toString();
    operatorUsed = null;
    numInp = true;
    return document.getElementById("display").value = displayValue;
};

function operate(numOne, operator, numTwo){
    if (operator === "+") {
        return +numOne + +numTwo;
    }else if (operator === "-") {
        return +numOne - +numTwo;
    }else if (operator === "*") {
        return +numOne * +numTwo;
    }else if (operator === "/") {
        if (numTwo == 0){
            clearDisplay();
            return document.getElementById("display").value = "ERROR";
            
        } else {
            return +numOne / +numTwo;
        };
    };
};
