let assert = require('assert')

/*
  Given the variable 'statement' below, write a function that reverses
  the letters in each word, but leaves the words in the same order
*/

let statement = 'Penn Mutual sells life insurance'

function reverseLetters(str) {
  // PLACE YOUR CODE BELOW
  const words = str.split(' ');  // Create an array of words from input string
  let newString = '';
  console.log(words);
  for (i=0; i < words.length; i++) {
     newString += words[i].split("").reverse().join("");  // Create an array, reverse it, and join letters together
     if (i < ( words.length - 1)) newString += ' ';  // Don't add spave after last entry
  }
  return newString; 
  // PLACE YOUR CODE ABOVE
}

let reversedWords = reverseLetters(statement)

assert.equal(reversedWords, 'nneP lautuM slles efil ecnarusni', 'Strings are not equal') || console.log('Success')

console.log(reversedWords)

/*
  Your console output should look like the following
  when run with "node 4_word_reversal.js":

Success
nneP lautuM slles efil ecnarusni

*/