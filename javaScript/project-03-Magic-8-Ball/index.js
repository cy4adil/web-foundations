// user name
let userName = 'Adil';

// using ternary operator to greet a user
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// user's quastion to magic 8 ball
let userQuestion = 'Am I a programmer?';
// prmpting the user's question
console.log(`So, ${userName}, you asked, ${userQuestion}`);

// generating random number from 0 to 7
let randomNumber = Math.floor(Math.random() * 8);

// a varaible to hold the value of Ball based on random Number
let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Invalid selection';
    break;
}

console.log(eightBall);