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
//START START START START START START START HERE
// 1  
//create nodes for each button in index.html
const btnrock = document.querySelector('#btn-rock');
const btnpaper= document.querySelector('#btn-paper');
const btnsiz= document.querySelector('#btn-siz');
// var btnconsole = document.querySelector('btn-console')
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
//BELOW create variables to link the elements on the page by their unique id to the DOM elements using query selector
var blueConsole = document.querySelector('#btn-console');
var compConsole = document.querySelector('#btn-console-computer');
var totalConsole = document.querySelector('#btn-console-total');
function logRound(playerChoice, computerChoice, winner) {
    playConstText = console.log('Player:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner);
    console.log('(@#$&*#@$@#*($&#*@($&#@*($&#@*($&#*(@$&#*@)');
//TEST CODE BELOW 
//Using dom to output feel free to delete if not working

    blueConsole.innerHTML = '<h4>Player choice:' + playerChoice+'';

	compConsole.innerHTML = '<h4>Computer choice;' + computerChoice+'';

	totalConsole.innerHTML = '<h4>Winner:' + winner+'';

    


    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+ '</h3>';
    //this code block is what helped you finally find a way to do it.. i think the best way is create 3 divs... one for each of the player choice the computer choice and the outcome and just have them stacked on top of each other or something
    
};








