// Write your function here:
const numImaginaryFriends = (numberOfFriends) => {
  if(numberOfFriends < 0) {
    console.log('Invalid input');
    return null;
  }
  let imaginaryFriends = 0;
  imaginaryFriends = Math.ceil(numberOfFriends * 0.25);
  return imaginaryFriends;
}





// Uncomment the lines below when you're ready to try out your function
console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)

// We encourage you to add more function calls of your own to test your code!

console.log(numImaginaryFriends(50))
console.log(numImaginaryFriends(5))
