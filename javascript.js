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
    if (number === 1) return 1;
    if (number === 0) return 0;
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

console.log(fib(7));
console.log('fib iterative', fibIterative(7))
console.log(factorialIterative(5));
console.log('factorial recursive', factorial(5));
