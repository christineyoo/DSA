// 9. Remove characters
// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

function removeChars(string, badChar) {
  let newWord = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === badChar) {
      newWord += '';
    } else {
      newWord += string[i];
    }
  }
  console.log(newWord);
}

removeChars('Battle', 'a');

// Complexity is linear.
