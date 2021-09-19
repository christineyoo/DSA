// ["other", "this", "thing", "that"]
// ["thing", "other", "that", "this"]

// f1(a1, a2) -> shuffle
// f2(a1, shuffle) -> a2 (basically the inverse of f1)

//Create a tic-tac-toe class with a .move method. Do this in O(1) time

function factorial(number, answer = number) {
  if (number === 1) {
    return answer;
  }
  answer *= number - 1; //answer = 120*1=120
  return factorial(number - 1, answer); //factorial(1, 120)
}

function factorialIterative(number) {
  let answer = 1;
  for (let i = number; i >= 1; i--) {
    answer *= i;
  }
  return answer;
}

console.log(factorialIterative(5));
console.log('factorial recursive', factorial(5));
