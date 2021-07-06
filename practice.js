function findMostRepeatedChar(s) {
  const newS = s
    .toLowerCase()
    .replace(/[,.;:'"?!`]/g, '')
    .replace(/[ ]/g, '');

  let obj = {};
  for (let i = 0; i < newS.length; i++) {
    if (!obj[newS[i]]) {
      obj[newS[i]] = 1;
    } else {
      obj[newS[i]]++;
    }
  }
  return obj;
}

const wordOccurances = (sentence) => {
  const wordArr = sentence
    .toLowerCase()
    .replace(/[,.;:?"'!]/g, '')
    .split(' ');

  let obj = {};
  for (let i = 0; i < wordArr.length; i++) {
    if (!obj[wordArr[i]]) {
      obj[wordArr[i]] = 1;
    } else {
      obj[wordArr[i]]++;
    }
  }
  return obj;
};

const deleteDuplicates = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let newArr = [];
  for (let i = 0; i < sortedArr.length; i++) {
    if (newArr.includes(sortedArr[i])) {
      // newArr = newArr.filter((n) => n !== sortedArr[i])
      newArr;
    } else {
      newArr.push(sortedArr[i]);
    }
  }
  return newArr;
};

function palindrome(str) {
  const re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  const len = str.length;
  if (str.length === 1) return false;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function palindromeCount(s) {
  const words = s.split(' ');
  let palArr = [];
  words.forEach((word) => {
    if (palindrome(word)) {
      palArr.push(word);
    } else {
      palArr;
    }
  });
  return `${palArr} ${palArr.length} palindromes`;
}

// console.log(deleteDuplicates([1, 3, 3, 6, 7, 2, 6]));

console.log(palindromeCount('Dad gave mom a Tesla as a racecar'));

// console.log(wordOccurances('The the sky is blue, and my favorite color is blue!'));

// console.log(findMostRepeatedChar('Hello! I`m Christine!'));
