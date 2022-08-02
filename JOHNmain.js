//following js file written by myself to try to follow along with the DOM exercises portion of the odin project


const choices = ['rock', 'paper', 'scissors'];
let winners = [];
function game(yourchoice) {
    playRound(yourchoice);
}

function playRound(yourchoice) {
    const playerSelection = playerChoice(yourchoice);
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner);
}

function playerChoice(yourchoice) {
    let input = yourchoice;
    // console.log('this will print over 5 functions fml::::' + yourchoice);
    return input;
}

function computerChoice() {
    let compChoose = choices[Math.floor(Math.random() * choices.length)];
    // console.log('compy mccomputer chooses!   ' + compChoose); 
    return compChoose;
}

const btnrock = document.querySelector('#btn-rock');
const btnpaper= document.querySelector('#btn-paper');
const btnsiz= document.querySelector('#btn-siz');

btnrock.onclick = () => game('rock');
btnpaper.onclick = () => game('paper');
btnsiz.onclick = () => game('scissors');

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "It is a tie";
    } else if (
        (choiceP === 'rock' && choiceC == 'scissors') ||
        (choiceP === 'paper' && choiceC == 'rock') ||
        (choiceP === 'scissors' && choiceC == 'paper')
    ) {
        return 'Player Won';
    } else {
        return 'Computer Won';
    }
        
};

function logRound(playerChoice, computerChoice, winner) {
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner);
    console.log('(@#$&*#@$@#*($&#*@($&#@*($&#@*($&#*(@$&#*@(');

};








