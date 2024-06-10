const display = document.getElementById("display");
const nums = document.querySelectorAll(".num");
const ac = document.querySelector("#clear");
const operators = document.querySelectorAll(".operator");
const enterBtn = document.querySelector("#enter");
const del = document.querySelector("#del");
const decimal = document.querySelector('#decimal');
//variable declaration
let num1, num2;
let operator;
let displayingResult = false;
let decimalUsed = false;
//Event Listeners
//AC
ac.addEventListener("click", ACDisplay);
enterBtn.addEventListener("click", enterPressed);
del.addEventListener("click", deleteFunction);
decimal.addEventListener("click", decimalFunction);
//Nums
nums.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (!displayingResult) display.textContent += e.target.textContent;
    else {
      ACDisplay();
      display.textContent = e.target.textContent;
    }
    displayingResult = false;
  });
});

//Operators
operators.forEach((key) => {
  key.addEventListener("click", (e) => {
    displayingResult = false;
    if (!num1) {
      num1 = Number(display.textContent);
    } else {
      num2 = Number(display.textContent);
    }
    display.textContent = "";

    if (num1 && num2) {
      console.log(num1, num2, operator);
      operate(num1, num2, operator);
    }
    //  display.textContent = "";

    operator = e.target.textContent;
  });
});
//function Definitions

//Operate function that takes, operator, num1, num2 and gives result
function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      showDisplay(num1 + num2);
      break;
    case "-":
      showDisplay(num1 - num2);
      break;
    case "*":
      showDisplay(num1 * num2);
      break;
    case "/":
      if (num2 === 0) {
        display.textContent = "Error! Div by 0";
        ACDisplay();
      } else showDisplay(num1 / num2);
      break;
    default:
      showDisplay("Syntax Error!");
      break;
  }
}
//Clear the display and the stored values and operations
function ACDisplay() {
  display.textContent = "";
  num1 = 0;
  num2 = 0;
  operator = "";
  displayingResult = false;
  decimalUsed = false;
}
//Just CleartheDisplay
function showDisplay(text) {
  console.log(num1, operator, num2, "=", text);
  display.textContent = text;
  displayingResult = true;
  num1 = Number(text);
  num2 = null;
}
//When enter button is pressed
function enterPressed() {
  if (num1) {
    num2 = Number(display.textContent);
  }
  if (num1 && num2) {
    operate(num1, num2, operator);
  }
  num1 = null;
}
//Delete last letter
function deleteFunction(){
  const text = display.textContent;
  display.textContent = text.split('').slice(0,text.split('').length-1).join('');
  console.log(display.textContent);
}
//Check if decimal is reused
function decimalFunction(){
  if(displayingResult){
    const save = display.textContent;
    ACDisplay();
    display.textContent = save+".";
  }
  if(display.textContent.split('').includes('.')){
    console.log("Prevented");
  }
  else{
    display.textContent+=".";
    console.log("Decimal added");
  }
}

//Keyboard Listeners
document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") {
    if (!displayingResult) display.textContent += e.key;
    else {
      display.textContent = e.key;
    }
    displayingResult = false;
  } else if (["+", "-", "/", "*"].includes(e.key)) {
    if (!num1) num1 = Number(display.textContent);
    else num2 = Number(display.textContent);
    display.textContent = "";
    if (num1 && num2) {
      console.log(num1, num2, operator);
      operate(num1, num2, operator);
    }
    operator = e.key;
  } else if (e.key === "Enter") enterPressed();
  else if (e.key === "Escape") ACDisplay();
  else if (e.key === "Backspace") deleteFunction();
  else if (e.key === ".") decimalFunction();
});
