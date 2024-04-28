let humanScore = 0;
let computerScore = 0;
let round = 1;

// HTML
const playerTxt = document.getElementById("playerTxt").innerText;
const computerTxt = document.getElementById("computerTxt").innerText;
const btn1 = document.getElementById("rock");
const btn2 = document.getElementById("paper");
const btn3 = document.getElementById("scissor");
const display = document.getElementById("display");
const pS = document.getElementById("playerScore");
const cS = document.getElementById("computerScore");
const r = document.getElementById("round");



function getComputerChoice(){
  let preChoice;
  let choice = Math.floor(Math.random() * 3);
  if(choice==preChoice){getComputerChoice();}
  preChoice = choice;
  switch (choice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
    default:
      alert("ERROR");
      break;
  }
};

function getHumanChoice(text){
  if(text=="Rock")        document.getElementById("playerTxt").textContent = "Rock";
  else if(text =="Paper")    document.getElementById("playerTxt").textContent = "Paper";
  else if(text == "Scissors") document.getElementById("playerTxt").textContent = "Scissors";
  else document.getElementById("playerTxt").textContent = "Error! Refresh the page";
  askComputerSelection();
}

function playRound(computerChoice){
  document.getElementById("computerTxt").innerText = computerChoice;
  round++;
document.getElementById("round").textContent = `Round: ${round}` 
logicCheck();
};

// const humanSelection = null;
// console.log(humanSelection);
function askComputerSelection (){
const computerSelection = getComputerChoice();
playRound(computerSelection);
}
function winnerDecide(op1, op2){
  if(op1=="Rock" && op2=="Paper"){return op2}
  else if(op1=="Rock" && op2=="Scissors"){return op1}
  else if(op1=="Paper" && op2=="Rock"){return op1}
  else if(op1=="Paper" && op2=="Scissors"){return op2}
  else if(op1=="Scissors" && op2=="Rock"){return op2}
  else if(op1=="Scissors" && op2=="Paper"){return op1}
  else{
    return "You made a mistake"
  }
}

function logicCheck(){
  player =document.getElementById("playerTxt").textContent;
  computer =document.getElementById("computerTxt").textContent ;
  console.log("checking logic")
  if(player===computer) {
    display.textContent = "Draw"
  }
  else{
    const ans = winnerDecide(player, computer);
    // console.log(ans+"  "+v)
    if(ans==document.getElementById("playerTxt").textContent){
    display.textContent = "Player wins";
    humanScore++;
    pS.textContent=`Player: ${humanScore}`
    roundCheck();
    }
    else if(ans==document.getElementById("computerTxt").textContent){
    display.textContent = "Computer Wins";
    computerScore++;
    cS.textContent=`Computer: ${computerScore}`
    roundCheck();
    }
  }
}

function roundCheck(){
  if(round>=6){
    if(humanScore==computerScore){alert("Draw")}
  else if(humanScore>computerScore){alert("You win")}
  else if(humanScore<computerScore){alert("You lose")}
  reset();
  }
  else return;
}
function reset(){
  location.reload();
}