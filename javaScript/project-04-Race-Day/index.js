let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = true;
let runnerAge = 18;

if(runnerAge > 18 && isEarly) {
  // adding 1000 to racenumber
  raceNumber += 1000;
}

if(runnerAge > 18 && isEarly) {
  console.log(`Your race number is ${raceNumber}, and your race will start at 9:30 am.`);
} else if (runnerAge > 18 && !isEarly) {
  console.log(`Your race number is ${raceNumber}, and your race will start at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}, and your race will start at 12:30 pm.`);
} else {
  console.log('Contact Registeration Desk Please');
}