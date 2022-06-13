/*
Write a function `chooseyEndings` that accepts an array of words and a suffix
string as arguments. The function should return a new array containing the words
that end in the given suffix. If the value passed in is not an array, return an
empty array. Solve this using Array's `filter()` method.

HINT: There are built in JavaScript functions that will help with determining if
a strings ends a certain way. Go see if you can find it on MDN!

Examples:
*/

let chooseyEndings = function(words, suffix) {
  // Your code here
  words = Object.values(words)
  let output = words.filter(word => suffix == word.slice(-1 * suffix.length))
  return output
};


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = chooseyEndings;
} catch (e) {
  module.exports = null;
}
