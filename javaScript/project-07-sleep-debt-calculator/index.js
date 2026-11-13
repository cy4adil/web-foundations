// Sleep Debt Calculator

function getSleepHours(day) {
  day = day.toLowerCase();
  switch(day){
    case 'monday':
      return 7;
    case 'tuesday':
      return 6;
    case 'wednesday':
      return 12;
    case 'thursday':
      return 7;
    case 'friday':
      return 3;
    case 'saturday':
      return 8;
    case 'sunday':
      return 10;
    default:
      return null;
  }  
}

// const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// EXTRA PRACTICE VERSION
const getActualSleepHours = () => 7 + 6 + 12 + 7 + 3 + 8 + 10;


// const getIdealSleepHours = () => {
//   let idealHours = 8;
//   return idealHours * 7;
// }

// EXTRA PRACTICE VERSION
const getIdealSleepHours = (idealHours) => {
    return idealHours * 7;
};


const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(7);

  if(actualSleepHours === idealSleepHours) {
    console.log(`User slept for ${actualSleepHours} hours, User got the perfect amount of sleep`);
  } else if(actualSleepHours > idealSleepHours) {
    console.log(`User slept for ${actualSleepHours - idealSleepHours} hours extra, User got more sleep than needed`);
  } else if(actualSleepHours < idealSleepHours) {
    console.log(`User slept for ${idealSleepHours - actualSleepHours} hours less, User should get some rest`);
  } else {
    console.log('Something went wrong!');
  }
}

calculateSleepDebt();