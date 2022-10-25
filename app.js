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
    
    console.log('PLAYER', userChoice)
    computerChoice();
}

const gameResult = () => {
    if (userChoice === 'ROCK' && compChoice === 'SCISSORS' || userChoice === 'PAPER' && compChoice === 'ROCK' || userChoice === 'SCISSORS' && compChoice === 'PAPER') {
        console.log('YOU WON')
    }
    else if (userChoice === compChoice) {
        console.log('DRAW!')
    }
    else {
        console.log('COMP WON')
    }
}

const computerChoice = ()  => {
    const choiceArray = ['ROCK', 'PAPER', 'SCISSORS'];
    compChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    console.log('COMP', compChoice)
    gameResult()
}


gameImages.forEach((image) => image.addEventListener('click', playerChoice));

