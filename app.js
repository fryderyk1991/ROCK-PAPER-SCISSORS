const infoChoicePlayer = document.querySelector('.choice-info-player');
const infoChoiceComp = document.querySelector('.choice-info-comp')
const userScore = document.querySelector('.user-points');
const compScore = document.querySelector('.comp-points');
const gameImages = document.querySelectorAll('.game-field div');

const tablePlayer = [...document.querySelectorAll('.table-player')];
const tableComp = [...document.querySelectorAll('.table-comp')];
const showDraw = document.querySelector('.draw-text');

const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal-text');
const modalCloseBtn = document.querySelector('.fa-solid');
const tryAgainBtn = document.querySelector('.modal-button');
const restartGameBtn = document.querySelector('.restart-btn');
const blurBackground = document.querySelector('.blur');

let userChoice = "";
let compChoice = ""; 
let userPoints = 0;
let compPoints = 0;

infoChoicePlayer.textContent = "Choose one !";
infoChoiceComp.textContent =  "Comp choice !";
userScore.textContent = userPoints;
compScore.textContent = compPoints;

let counterOfRounds = -1;

let counterOfWinPlayer = [];
let counterOfWinComp = [];

const cleanTableScore = () => {
    tablePlayer.forEach((item) => {
        item.textContent = "";
    });
    tableComp.forEach((item) => {
        item.textContent = "";
    })
} 
const playAgain = () => {
    modalContainer.classList.remove('show');
    infoChoicePlayer.textContent = "Choose one !";
    infoChoiceComp.textContent =  "Comp choice !";
    userPoints = 0;
    userScore.textContent = userPoints;
    compPoints = 0;
    compScore.textContent = userPoints;
    counterOfRounds = -1;
    showDraw.classList.remove('show');
    blurBackground.classList.remove('bg');
    cleanTableScore();
    counterOfWinPlayer = [];
    counterOfWinComp = [];
    gameImages.forEach((image) => image.addEventListener('click', playerChoice));
} 

const modalRestart = () => {
    modalContainer.classList.add('show');
    modalText.textContent = 'are you sure ?';
    blurBackground.classList.add('bg');
    tryAgainBtn.textContent = 'yes';
}

const modalWin = () => {
    modalContainer.classList.add('show');
    modalText.textContent = 'congratulations, you are the winner!';
    blurBackground.classList.add('bg');
    tryAgainBtn.textContent = 'try again...';
}
const modalLoose = () => {
    modalContainer.classList.add('show');
    modalText.textContent = 'sorry, you lost!';
    blurBackground.classList.add('bg');
    tryAgainBtn.textContent = 'try again...';
}    
const modalDraw = () => {
    modalContainer.classList.add('show');
    modalText.textContent = 'draw! try again!';
    blurBackground.classList.add('bg');
    tryAgainBtn.textContent = 'try again...';
}

const playerChoice = (e) => {
    userChoice = e.target.dataset.option;
    infoChoicePlayer.textContent = `You chose a ${userChoice}!`;
    gameImages.forEach((image) => image.removeEventListener('click', playerChoice));
    computerChoice();
}

restartGameBtn.addEventListener('click', modalRestart);

tryAgainBtn.addEventListener('click', playAgain);

modalCloseBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show');
    blurBackground.classList.remove('bg');
})

const gameResult = () => {
    if (userChoice === 'ROCK' && compChoice === 'SCISSORS' || userChoice === 'PAPER' && compChoice === 'ROCK' || userChoice === 'SCISSORS' && compChoice === 'PAPER') {
        userPoints++;
        userScore.textContent = userPoints;
        counterOfRounds++;
        let renderPlayerResultInTable = tablePlayer[counterOfRounds];
        let winPlayer = renderPlayerResultInTable.textContent = 'win';
        counterOfWinPlayer.push(winPlayer);
    }
    else if (userChoice === compChoice) {
        showDraw.classList.add('show');
        counterOfRounds++;
        let renderPlayerResultInTable = tablePlayer[counterOfRounds];
        renderPlayerResultInTable.textContent = 'draw';
        let renderCompResultInTable = tableComp[counterOfRounds];
        renderCompResultInTable.textContent = 'draw';
    }
    else {
        compPoints++;
        compScore.textContent = compPoints;
        counterOfRounds++;
        let renderCompResultInTable = tableComp[counterOfRounds];
        let winComp = renderCompResultInTable.textContent = 'win';
        counterOfWinComp.push(winComp);
    }
    // game over
    if (counterOfRounds === 4 && counterOfWinPlayer.length > counterOfWinComp.length) {
        console.log('game over - PLAYER WON!')
        modalWin();
        return playerChoice;
    }
    if (counterOfRounds === 4 && counterOfWinPlayer.length < counterOfWinComp.length) {
        console.log('game over -  COMP WON!')
        modalLoose();
        return playerChoice;
    }
    if (counterOfRounds === 4 && counterOfWinPlayer.length === counterOfWinComp.length) {
        console.log('game over - DRAW!')
        modalDraw();
        return playerChoice;
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

