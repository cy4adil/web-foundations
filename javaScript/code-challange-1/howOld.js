// Write your function here:

const howOld = (age, year) => {
  const theCurrentYear = 2026;
  const yearDifference = year - theCurrentYear;
  const newAge = age + yearDifference;

  if(newAge < 0) {
    return `The year ${year} was ${Math.abs(newAge)} years before you were born`;
  } else if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
}



// Once your function is written, write function calls to test your code!

console.log(howOld(34, 1886));
console.log(howOld(34, 1992));
console.log(howOld(34, 1996));
console.log(howOld(34, 2040));
console.log(howOld(34, 2030));

/**
 * 
 * Once you have newAge, you’ll be able to handle the three different cases.

If the newAge is less than 0, this means the year provided was before the person was born. If the newAge is greater than their current age, this means the year passed in is in the future. Otherwise, we know the year provided was in the past, but not before they were born.
 */