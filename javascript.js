// ["other", "this", "thing", "that"]
// ["thing", "other", "that", "this"]

// f1(a1, a2) -> shuffle
// f2(a1, shuffle) -> a2 (basically the inverse of f1)

//Create a tic-tac-toe class with a .move method. Do this in O(1) time

function factorial(number) {
  if (number === 2) {
    return 2;
  }
  return number * factorial(number - 1); //factorial(1, 120)
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
    return fib(number - 1) + fib(number - 2); //fib(4) + fib(3)
}                                             //  0, 1, 1, 2, 3, 5, 8

console.log(fib(7));

console.log(factorialIterative(5));
console.log('factorial recursive', factorial(5));
