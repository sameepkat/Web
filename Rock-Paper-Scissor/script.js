//Quersy Selection
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const displayPlayer = document.querySelector('#displayPlayer');
const displayComputer = document.querySelector('#displayComputer');
const playerTxt = document.querySelector('#playerTxt');
const computerTxt = document.querySelector('#computerTxt');
const playerScoreTxt = document.querySelector('#playerScore');
const computerScoreTxt = document.querySelector('#computerScore');
const drawsTxt = document.querySelector('#draws');
const roundTxt = document.querySelector('#round');

//Variable Initialization
let round = 1;
let playerScore = 0;
let draws = 0;
let computerScore = 0;
let turn = "player";
let computerChoice = 0;

//Event Listeners
rock.addEventListener("click", ()=> handlePlayerChoice('rock'));
paper.addEventListener("click", () => handlePlayerChoice('paper'));
scissor.addEventListener("click", () => handlePlayerChoice('scissor'));
//functions

//playerChoice
function handlePlayerChoice(playerChoice){
    displayChoice('player', playerChoice);
    const computerChoice = pickRandom();
    displayChoice('computer', computerChoice);
    determineWinner(playerChoice, computerChoice)
}

//displayer
function displayChoice(Turn, Choice){
    if(Turn=="player")    playerTxt.textContent = `${turnEmoji(Choice)}`;
    else  computerTxt.textContent = `${turnEmoji(Choice)}`;
}

//turnEmoji
function turnEmoji(input){
    if(input==='rock'){return '🪨';}
    else if(input === 'paper') return '🗞️';
    else if(input === 'scissor') return '✂️';
    else return `Error ${input}`;
}
//randomPicker
function pickRandom(){
    const choices = ['rock', 'paper', 'scissor'];
    const rand = Math.floor(Math.random()*choices.length);
    return choices[rand];
}

//determine winner
function determineWinner(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        draws++;
        displayPlayer.textContent = "It's a tie!";
        displayComputer.textContent = "It's a tie!"
    }
    else if((playerChoice === 'rock' && computerChoice === 'scissor') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissor' && computerChoice === 'paper'))
    {
        playerScore++;
        displayPlayer.textContent = 'Player Wins!';
        displayComputer.textContent = 'Computer loses';
    }
    else{
        computerScore++;
        displayPlayer.textContent = 'Player loses!';
        displayComputer.textContent = 'Computer wins!';
    }
    round++;
    updateScoreDisplay();
}

//Update Score Display
function updateScoreDisplay(){
    playerScoreTxt.textContent = `Player: ${playerScore}`;
    computerScoreTxt.textContent = `Computer: ${computerScore}`;
    drawsTxt.textContent = `Draws: ${draws}`;
    roundTxt.innerHTML = `<strong>Round</strong>: ${round}`;
}

// document.addEventListener("mousemove", pickRandom);