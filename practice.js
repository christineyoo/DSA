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

console.log(deleteDuplicates([1, 3, 3, 6, 7, 2, 6]));

// console.log(wordOccurances('The the sky is blue, and my favorite color is blue!'));

// console.log(findMostRepeatedChar('Hello! I`m Christine!'));
