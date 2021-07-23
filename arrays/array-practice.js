const findMax = (num1, num2) => {
  return Math.max(num1, num2);
};

// don't explicitly return true or false in a ternary
const isLandscape = (width, height) => {
  return width > height;
};

const fizzBuzz = (num) => {
  if (typeof num !== 'number') return NaN;
  else if (num % 15 === 0) return 'FizzBuzz';
  else if (num % 3 === 0) return 'Fizz';
  else if (num % 5 === 0) return 'Buzz';
  return num;
};

const demeritPoints = (speed) => {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed <= speedLimit + kmPerPoint) return 'Ok';
  else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) return 'License suspended';
    else return `${points} points`;
  }
};

const showNumbers = (limit) => {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
};

const countTruthy = (array) => {
  let count = 0;
  for (const item of array) {
    if (item) count++;
  }
  return count;
};

const showProperties = (object) => {
  for (let key in object) {
    if (typeof object[key] === 'string') console.log(key, object[key]);
  }
};

//counting repeating values
const sum = (limit) => {
  let multiples = [];
  for (let i = 3; i <= limit; i += 3) {
    multiples.push(i);
  }
  for (let i = 5; i <= limit; i += 5) {
    multiples.push(i);
  }
  return multiples.reduce((a, b) => a + b, 0);
};

//not counting repeating values
const sumWithoutRepeats = (limit) => {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
};

const calculateGrade = (marks) => {
  const average = Math.ceil(marks.reduce((a, b) => a + b) / marks.length);
  if (average >= 90 && average <= 100) return 'A';
  else if (average >= 80 && average <= 89) return 'B';
  else if (average >= 70 && average <= 79) return 'C';
  else if (average >= 60 && average <= 69) return 'D';
  else return 'F';
};

const showStars = (rows) => {
  for (let i = 1; i <= rows; i++) {
    console.log('*'.repeat(i));
  }
};

const showPrimes = (limit) => {
  for (let number = 2; number <= limit; number++) {
    if (isPrime(number)) console.log(number);
  }
};

function isPrime(number) {
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) return false;
  }
  return true;
}

