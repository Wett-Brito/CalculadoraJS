const display = document.querySelector('#display');
const keys = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=Operator]');

let newNumber = true;
let operator;
let previousNumber;

function updateDisplay(number) {
    if(newNumber){
        display.textContent = number;
        newNumber = false;
    } else{
        display.textContent += number;
    }
}

const insertNumber = ({target}) => updateDisplay(target.textContent);

keys.forEach(key => key.addEventListener('click', insertNumber));


const selectOperator = ({target}) => {
    newNumber = true;
    operator = target.textContent;
    previousNumber = display.textContent;
    console.log(previousNumber);
}

operators.forEach(operator => operator.addEventListener('click', selectOperator));

const calculate = () => {
    if(previousNumber && operator){
        const formatCount = (previousNumber + operator + display.textContent).replaceAll(',', '.');
        const result = eval(formatCount);
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
};

document.querySelector("#backspace").addEventListener("click", removeLastNumber);

const invertSignal = () => {
    updateDisplay(display.textContent * -1);
}

document.querySelector("#inverter").addEventListener("click", invertSignal);

const addFloat = () => {
    newNumber = true;
    if(!display.textContent.includes(',')){
        updateDisplay(display.textContent + ",");
    } else{
        dateDisplay(display.textContent)
    }
    
}

document.querySelector("#decimal").addEventListener("click", addFloat)