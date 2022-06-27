const display = document.querySelector('#display');
const keys = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=Operator]');

let newNumber = true;
let operator;
let previousNumber;
let firstNumber = true;

function updateDisplay(number) {
    if(newNumber){ 
        clearDisplay();
        display.textContent = number;
        newNumber = false;
    } else{
        display.textContent += number;
    }
}

const insertNumber = ({target}) => {
    updateDisplay(target.textContent)
    firstNumber = false;
};

keys.forEach(key => key.addEventListener('click', insertNumber));


const selectOperator = ({target}) => {
    operator = target.textContent;
    previousNumber = display.textContent;
    newNumber = true;
    firstNumber = true;
    console.log(previousNumber);
}

operators.forEach(operator => operator.addEventListener('click', selectOperator));

const calculate = () => {
    if(previousNumber && operator){
        const formatCount = (previousNumber + operator + display.textContent).replaceAll(',', '.');
        const result = eval(formatCount);
        
        firstNumber = true;
        newNumber = true;
        updateDisplay(result.toString().replace('.', ','));
        
    }

}

const equal = document.querySelector("#equal");

equal.addEventListener('click', calculate);

const clearDisplay = () => display.textContent = "";

document.querySelector("#clearDisplay").addEventListener("click", clearDisplay);

const clearCalc = () => {
    clearDisplay();
    newNumber = true;
    operator = undefined;
    previousNumber = undefined;
};

document.querySelector("#clearCalc").addEventListener("click", clearCalc);

const removeLastNumber = () => {
    display.textContent = display.textContent.slice(0, -1);
    if(display.textContent = ""){
        newNumber = true;
        firstNumber = true;
    }
};

document.querySelector("#backspace").addEventListener("click", removeLastNumber);

const invertSignal = () => {
    updateDisplay(display.textContent * -1);
}

document.querySelector("#inverter").addEventListener("click", invertSignal);

const addFloat = () => {    
    if(firstNumber){
        console.log("sd");
        updateDisplay("");
        display.textContent = "";
    }

    if(display.textContent == ""){
        console.log("test")
        updateDisplay(display.textContent + "0,");
        firstNumber = false;
    } else if(!display.textContent.includes(',')){
        oldNumber = display.textContent
        clearDisplay();
        updateDisplay(oldNumber + ",");
    } else{

    }
    
}

document.querySelector("#decimal").addEventListener("click", addFloat)
