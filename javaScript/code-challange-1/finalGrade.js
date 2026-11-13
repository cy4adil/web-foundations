// Write your function here:
const finalGrade = (mark1, mark2, mark3) => {
  let average = 0;
  if((mark1 < 0 || mark1 > 100) || (mark2 < 0 || mark2 > 100) || (mark3 < 0 || mark3 > 100)) {
    return 'You have entered an invalid grade.';
  } else {
    average = (mark1 + mark2 + mark3) / 3;
  }

  if(average <= 59) {
    return 'F';
  } else if(average <= 69) {
    return 'D';
  } else if (average <= 79) {
    return 'C';
  } else if(average <= 89) {
    return 'B';
  } else {
    return 'A';
  }

}





// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!

console.log(finalGrade(49, 42, 45))

console.log(finalGrade(99, 192, 95))

console.log(finalGrade(99, 72, 95))

console.log(finalGrade(99, 42, 45))