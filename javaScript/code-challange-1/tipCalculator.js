// Write your function here:
const tipCalculator = (quality, total) => {
  // quality is string
  // total is number
  let tip = 0;
  switch(quality){
    case 'bad':
      tip = total * 0.05;
      break;
    case 'ok':
      tip = total * 0.15;
      break;
    case 'good':
      tip = total * 0.20;
      break;
    case 'excellent':
      tip = total * 0.30;
      break;
    default:
      tip = total * 0.18;
      break;  
  }
  return tip;  
}

// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!

console.log(tipCalculator('bad', 1000))

console.log(tipCalculator('ok', 2500))
