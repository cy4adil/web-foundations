// Palindrome

let word = 'Madam'.toLowerCase();
console.log(word);

let splitStr = word.split(''); // we got each character of a word
console.log(splitStr); 

let reverseStr = splitStr.reverse(); // we got reverse characters of word
console.log(reverseStr);

// now, joining back the reverse characters into a string
reverseStr = reverseStr.join(""); // joined by empty string
console.log(reverseStr);

//  now we will check if the word is palindrome or not

if(word === reverseStr) {
    console.log(`${word} is palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
}