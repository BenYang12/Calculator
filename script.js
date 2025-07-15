//calculator operation consists of a number, operator, and another number
//Here, I will create three variables, one for each p art of the operator
let firstOperand = "";
let secondOperand = "";
let currentOperator = null;//this variable will store the operator clicked (+,-,etc.)
let displayValue = "0"; //this variable will store the currently typed or displayed number, I will set it to 0 as default




//functions for all basic math operators typically found on calculators
function add (a,b){
    return a + b;
}

function subtract (a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if (b === 0){
        return "Cannot Divide by Zero!"
    }
    return a / b;
}

//operate function
function operate (operator,a,b){
    //convert from string to number
    a = Number(a);
    b = Number(b);

    switch(operator){
        case "+": return add(a,b);
        case "-": return subtract(a,b);
        case "*": return multiply(a,b);
        case "/": return divide(a,b);
        default: return null;
    }
}

//functions that populate the display when digit buttons are clicked
//I will store the content of the display in displayValue
const digitButtons = document.querySelectorAll(".digit");//select all buttons with a class "digit";
//forEach() iterates over each element in an array, takes a callback function as argument, which is executed for each element.
//callback argument can take three arguments, currentElement, index, and array
digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (displayValue === "0"){
            displayValue = button.textContent; //replace at first
        }
        else{
            displayValue += button.textContent;// append numbers subsequently
        }
        display.textContent = displayValue; //update caluclator screen!
    })
})


//Operator Button clicks
const operatorButtons = document.querySelectorAll(".operator");
//same concept with digit buttons
operatorButtons.forEach(button =>{
    button.addEventListener("click", () => {
        if (currentOperator !== null && displayValue !== "" ){
            evaluate(); //this is here so my calculator does not evaluate more than a single pair of numbers at a time
        }
        firstOperand = displayValue; //first operand is the numbers we typed before clicking any operators
        currentOperator = button.textContent; //stores the operator button we just clicked;
        displayValue = ""; //we wipe the current displayValue so the user can enter the second operand
    })
})


//evaluate function
function evaluate(){
    secondOperand = displayValue; //new numbers typed after original display value is cleared after user types a operator button
    const result = operate(currentOperator, firstOperand, secondOperand);//call operate with operator and both operands
    display.textContent = result;//display result
    displayValue = result.toString();
    firstOperand = result;//save result as new firstOperand for proper chaining logic
    currentOperator = null;//reset currentOperator so new one can be selected

}
        

//equals button click
const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
    if (currentOperator === null || displayValue === "0"){
        return; //do nothing if there's no valid operation to perform (ex. user clicks + before entering any number)
    }
    evaluate(); //otherwise, call evalaute() to compute the result;
})

// clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    //reset all rßelevant variables to default (see beginning of program)
    firstOperand = "";
    secondOperand = "";
    currentOperator = null;
    displayValue = "0"; 
    display.textContent = displayValue; //update display that user sees

})
    

