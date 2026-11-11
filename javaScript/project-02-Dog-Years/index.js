// my age
let myAge = 18;

// early years of Dog - setting to 2
let earlyYears = 2;

// first two years count as 10.5 dog years each - 
earlyYears *= 10.5;

// subtracting 2 from myAge as we already accounted for first two years
let laterYears = myAge - 2; // we will change this value later

// multiplying by 4 to calculate the dog years accounted for by your later years.
laterYears *= 4;

// checking the result so far
console.log(earlyYears);
console.log(laterYears);

// adding both years to get dog years
let myAgeInDogYears = earlyYears + laterYears;

// writing my name and converting it in lowercase
let myName = 'Adil'.toLowerCase();

// using string interpolation to display dog years.
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`)
