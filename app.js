const infoChoicePlayer = document.querySelector('.choice-info-player');
const infoChoiceComp = document.querySelector('.choice-info-comp')
const userScore = document.querySelector('.user-points');
const compScore = document.querySelector('.comp-points');
const gameImages = document.querySelectorAll('.game-field div');

const tablePlayer = [...document.querySelectorAll('.table-player')];
const tableComp = [...document.querySelectorAll('.table-comp')];
const showDraw = document.querySelector('.draw-text');

let userChoice = "";
let compChoice = ""; 
let userPoints = 0;
let compPoints = 0;

infoChoicePlayer.textContent = "Choose one !";
infoChoiceComp.textContent =  "Comp choice !";
userScore.textContent = userPoints;
compScore.textContent = compPoints;


const playerChoice = (e) => {
    userChoice = e.target.dataset.option;
    infoChoicePlayer.textContent = `You chose a ${userChoice}!`;
    gameImages.forEach((image) => image.removeEventListener('click', playerChoice));
    computerChoice();
}

const gameResult = () => {
    if (userChoice === 'ROCK' && compChoice === 'SCISSORS' || userChoice === 'PAPER' && compChoice === 'ROCK' || userChoice === 'SCISSORS' && compChoice === 'PAPER') {
        console.log('YOU WON')
        userPoints++;
        userScore.textContent = userPoints;
    }
    else if (userChoice === compChoice) {
        console.log('DRAW!')
        showDraw.classList.add('show');
    }
    else {
        console.log("COMP WON");
        compPoints++;
        compScore.textContent = compPoints;
    }
    setTimeout(() => {
        infoChoicePlayer.textContent = "Choose one !";
        infoChoiceComp.textContent =  "Comp choice !";
        showDraw.classList.remove('show');
        gameImages.forEach((image) => image.addEventListener('click', playerChoice));
    }, 2000)   
}

const choiceArray = ['ROCK', 'PAPER', 'SCISSORS'];

const computerChoice = ()  => {
    setTimeout(() => {
        compChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];
        infoChoiceComp.textContent = `Comp chose a ${compChoice}`;
        gameResult()
    },1000)
}


gameImages.forEach((image) => image.addEventListener('click', playerChoice));

