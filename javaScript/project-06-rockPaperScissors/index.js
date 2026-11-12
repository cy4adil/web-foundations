// Rock Paper Scissors Game


const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  let userChoice = ''
  
  if(userInput === 'bomb') {
    return userInput;
  }

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    userChoice = userInput;
  } else {
    userChoice = 'Invalid input! Enter Rock, Paper, or Scissors';
  }
  return userChoice;
}

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3);
  let computerChoice = "";
  if(randomChoice === 0) {
    computerChoice = 'rock';
  } else if(randomChoice === 1) {
    computerChoice = 'paper';
  } else if(randomChoice === 2) {
    computerChoice = 'scissors';
  } else {
    computerChoice = 'invalid choice';
  }
  return computerChoice;
}

const determineWinner = (userChoice, computerChoice) => {
  
  if(userChoice === 'bomb'){
    return 'User Won!';
  }

  if(userChoice === computerChoice) {
    return 'Game is tie';
  }

  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  }

  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  }

  if(userChoie === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  }
}

// console.log(determineWinner('paper', 'rock'));

function playGame() {
  userChoice = getUserChoice('rock');
  computerChoice = getComputerChoice();

  console.log(`User selected ${userChoice} and computer selected ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();