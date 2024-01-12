function reverse(string) {
  return string.split('').reverse().join('');
}
function isPalindrome(word) {
  const reversedWord = reverse(word);
  return word === reversedWord;
}
///My pseudocode
//If the passed word appears the same when reversed, the code should return "true" on the terminal. Else (if the words is not the same when reversed), it should return "false" on the terminal

  //My written explanation of the solution 
  //My Explanation: The above code means that the function should return true if the word, when written in reverse, is the same as the original form of the word
  
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
  

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("");
}

module.exports = isPalindrome;
