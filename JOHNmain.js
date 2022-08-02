//following js file written by myself to try to follow along with the DOM exercises portion of the odin project


const choices = ['rock', 'paper', 'scissors'];
let winners = [];
// 3 
// start game function using yourchoice param
function game(yourchoice) {
    playRound(yourchoice);
}
// 4 
// started from game function
//continuing to use yourchoice param
function playRound(yourchoice) {
    const playerSelection = playerChoice(yourchoice);
    const computerSelection = computerChoice();
    // 6 
    // yourchoice param plugged into checkWinner
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    //9
    //execute final console log function logRound
    logRound(playerSelection, computerSelection, winner);
}
// 5
//carried all the way from event listener the yourchoice 
//param is finally plugged into input
function playerChoice(yourchoice) {
    let input = yourchoice;
    // console.log('this will print over 5 functions fml::::' + yourchoice);
    return input;
}
//8
// comp choice generated from random number generator
function computerChoice() {
    let compChoose = choices[Math.floor(Math.random() * choices.length)];
    // console.log('compy mccomputer chooses!   ' + compChoose); 
    return compChoose;
}
// 1  
//create nodes for each button in index.html
const btnrock = document.querySelector('#btn-rock');
const btnpaper= document.querySelector('#btn-paper');
const btnsiz= document.querySelector('#btn-siz');
// 2 
//create event listeners for each div in index.html
//input string ie rock paper or scissors into game function 
//upon being clicked
btnrock.onclick = () => game('rock');
btnpaper.onclick = () => game('paper');
btnsiz.onclick = () => game('scissors');
// 7 
// final logic for rock paper scissors game
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
// 10 
// logs what the player chose
//logs the computer choice
//logs who won from the returns in the checkWinner function
//above
function logRound(playerChoice, computerChoice, winner) {
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner);
    console.log('(@#$&*#@$@#*($&#*@($&#@*($&#@*($&#*(@$&#*@(');

};








