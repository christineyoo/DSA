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

function mode(str) {
  const s = str
    .replace(/[, ]/g, ' ')
    .split(' ')
    .filter((e) => e !== '')
    .map((e) => +e)
    .sort((a, b) => a - b);
  // console.log(s);
  let modeObj = {};
  for (let i = 0; i < s.length; i++) {
    if (!modeObj[s[i]]) {
      modeObj[s[i]] = 1;
    } else {
      modeObj[s[i]]++;
    }
  }

  const digits = Object.keys(modeObj);
  const frequencies = Object.values(modeObj);

  let currMax = frequencies[0];
  let index;
  for (let i = 0; i < frequencies.length; i++) {
    if (frequencies[i] > currMax) {
      currMax = frequencies[i];
      index = i;
    }
  }
  return `Mode = ${digits[index]}, Frequency of Mode = ${frequencies[index]}`;
}

// take in an array.
// set the answer to an initial value [0]
// loop through the array, comparing if a[i] < a[i] + a[i+1]. If true, set answer to the the greater value.
// also compare which is the max between answer and
const findLargestSum = (arr) => {
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
    answer = Math.max(arr[i], answer);
  }
  return answer;
};

// console.log(wordOccurances('The the sky is blue, and my favorite color is blue!'));
// console.log(findMostRepeatedChar('Hello! I`m Christine!'));
// console.log(deleteDuplicates([1, 3, 3, 6, 7, 2, 6]));
// console.log(palindromeCount('Dad gave mom a Tesla as a racecar'));
// console.log(mode(`1, 2, 3, 6, 10, 3, 5, 6, 3, 3`));
// console.log(findLargestSum([0, 3, 5, -1]));

const showAddress = (object) => {
  for (let key in object) {
    console.log(`${key}: ${object[key]}`);
  }
};

// Exercise 1: Address Object
const myAddress = {
  street: '4931 Parkhurst Dr',
  city: 'Baton Rouge',
  zipcode: 70714
};

// Exercise 2: Factory and Constructor Functions
class Address {
  constructor(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
  }

  showAddress() {
    const formattedAddress = `
    Street: ${this.street}
    City: ${this.city}
    Zipcode: ${this.zipcode}
    `;
    return formattedAddress;
  }
}

// Exercise 3: Object equality
function areEqual(address1, address2) {
  let result = false;
  for (let key in address1) {
    if (address1[key] !== address2[key]) return result;
    else result = true;
  }
  return result;
}

function areSame(address1, address2) {
  let result = false;
  if (address1 !== address2) return result;
  else result = true;
  return result;
}

const address1 = new Address('4931 parkhurst drive', 'baton rouge', 70714);
const address2 = new Address('4931 parkhurst drive', 'baton rouge', 70714);
const address3 = address1;
// console.log(areSame(address1, address3));

// Exercise 4: Blog post object
let post = {
  title: 'a',
  body: 'b',
  author: 'c',
  views: 1,
  comments: [
    {
      author: 'd',
      body: 'e'
    },
    {
      author: 'd2',
      body: 'e2'
    }
  ],
  isLive: true
};

// Exercise 5: Constructor functions
class Post {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
  }
}

const newPost = new Post('title', 'hello', 'christine');

//Exercise 6: Price Range Object
// let priceRanges = [
//   { label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
//   { label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
//   { label: '$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 }
// ];

// let restaurants = [
//   {averagePerPerson: 5}
// ]

