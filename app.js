const infoChoice = document.querySelector('.choice-info');
const userScore = document.querySelector('.user-points');
const compScore = document.querySelector('.comp-points');
const gameImages = document.querySelectorAll('.game-field div');


let userChoice = "";
let compChoice = ""; 
let userPoints = 0;
let compPoints = 0;

infoChoice.textContent = "Choose one !";
userScore.textContent = userPoints;
compScore.textContent = compPoints;


const playerChoice = (e) => {
    userChoice = e.target.dataset.option;
    infoChoice.textContent = `You chose a ${userChoice}!`;
    
    computerChoice();
}

const computerChoice = ()  => {
    const choiceArray = ['ROCK', 'PAPER', 'SCISSORS'];
    compChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
}


gameImages.forEach((image) => image.addEventListener('click', playerChoice));

