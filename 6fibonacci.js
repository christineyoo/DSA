// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// Input: num

// Output:
// 1,
// 1, 1,
// 1, 1, 2,
// 1, 1, 2, 3,
// 1, 1, 2, 3, 5,
// 1, 1, 2, 3, 5, 8,
// 1, 1, 2, 3, 5, 8, 13

// Input to each recursive call: a pair of numbers, the last two numbers of the sequence that was just produced.

// Output of each recursive call: a sequence of fibonacci numbers until the nth iteration.

function fib(num) {
  if (num === 2) {
    return 1;
  }
  return fib(num) + fib(num - 1);
}

console.log(fib(3));

// "1,".concat(findNextFib(1)) = 1,
// "1, 1".concat(findNextFib(1, 1)) = 1, 1,
// "1, 1, 2".concat(findNExtFib(1, 2)) = 1, 1, 2,
// "1, 1, 2, 3".concat(findNextFib(2, 3)) = 1, 1, 2, 3,
// ...

// The time complexity for this algorithm is linear because there is a direct proportion between the input size and the running time. If n = 2, then it takes 2 iterations. If n = 4, then it takes 4 iterations.
