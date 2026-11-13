/**
 * Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?
 * 
 * 
 * 
 * 
 */

// Write your function here:
const calculateWeight = (earthWeight, planet) => {
  if(typeof earthWeight !== 'number' || typeof planet !== 'string') {
    console.log('Enter valid inputs');
    return null;
  }

  let weight = 0;
  if(planet === 'Mercury') {
    weight = earthWeight * 0.378;
  } else if (planet === 'Venus') {
    weight = earthWeight * 0.907;
  } else if(planet === 'Mars') {
    weight = earthWeight * 0.377;
  } else if(planet === 'Jupiter') {
    weight = earthWeight * 2.36;
  } else if(planet === 'Saturn') {
    weight = earthWeight * 0.916;
  } else {
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }

  return weight;

}


// Uncomment the line below when you're ready to try out your function
console.log(calculateWeight(100, 'Jupiter')) // Should print 236

// We encourage you to add more function calls of your own to test your code!

console.log(calculateWeight(80, 'Mars'))
console.log(calculateWeight(80, 'Moon'))
console.log(calculateWeight(80, 'Venus'))
console.log(calculateWeight(80, 'Saturn'))
console.log(calculateWeight(80, 78))
console.log(calculateWeight('Adil', 78))