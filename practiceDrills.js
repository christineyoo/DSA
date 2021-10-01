// ["other", "this", "thing", "that"]
// ["thing", "other", "that", "this"]

// f1(a1, a2) -> shuffle
// f2(a1, shuffle) -> a2 (basically the inverse of f1)

//Create a tic-tac-toe class with a .move method. Do this in O(1) time

function factorial(number) {
  if (number === 2) {
    return 2;
  }
  return number * factorial(number - 1);
}

function factorialIterative(number) {
  let answer = 1;
  for (let i = number; i >= 1; i--) {
    answer *= i;
  }
  return answer;
}

function fib(number) {
    if (number < 2) return number;
    return fib(number - 1) + fib(number - 2);
}                                             

function fibIterative(number) {
    let fibs = [0, 1];
    let sum = 0;
    for (let i = 1; i < number; i++) {
            sum = fibs[0] + fibs[1]
            fibs[0] = fibs[1];
            fibs[1] = sum;
    }
    return number === 0 ? fibs[0] : fibs[1];
}

// console.log(fib(7));
// console.log('fib iterative', fibIterative(7))
// console.log(factorialIterative(5));
// console.log('factorial recursive', factorial(5));


var s = "{}{}[]" // return true
var s1 = "{{{}}}" //return true
var s2 = "{[][]()" //return false
var s3 = "" //return true
var s4 = "{[](){}}" //return true
var s5 = "{[](]){}}" //return false
var s6 = "{[}]" // return false
var s7 = "{]" //return false

function balancedBrackets(string) {
  let stack = []
  let bracketPairs = {
    "{": "}",
    "[" : "]",
    "(" : ")"
  }
  
  for (let i = 0; i < string.length; i++) {
    let current = string[i]                 
    let lastOpeningBracket = stack[stack.length - 1]
    if (current in bracketPairs) {
      stack.push(current)
    } else if (bracketPairs[lastOpeningBracket] === current) {
      stack.pop()
    } else return false
  }


  return stack.length === 0
}

console.log('expected true and got', balancedBrackets(s))
console.log('expected true and got', balancedBrackets(s1))
console.log('expected false and got', balancedBrackets(s2))
console.log('expected true and got', balancedBrackets(s3))
console.log('expected true and got', balancedBrackets(s4))
console.log('expected false and got', balancedBrackets(s5))
console.log('expected false and got', balancedBrackets(s6))
console.log('expected false and got', balancedBrackets(s7))
