// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// Input: num

// Output:
// n = 1 -> 0, 1
// n = 2 -> 0, 1, 1,
// n = 3 -> 0, 1, 1, 2,
// n = 4 -> 0, 1, 1, 2, 3,
// n = 5 -> 0, 1, 1, 2, 3, 5,
// n = 6 -> 0, 1, 1, 2, 3, 5, 8,
// n = 7 -> 0, 1, 1, 2, 3, 5, 8, 13

// Input to each recursive call:

// Output of each recursive call: a sequence of fibonacci numbers until the nth iteration.

function fib(n) {
  if (n < 2) return n;
  return fib(n - 2) + fib(n - 1);
}

console.log(fib(7));

// "1,".concat(findNextFib(1)) = 1,
// "1, 1".concat(findNextFib(2)) = 1, 1,
// "1, 1, 2".concat(findNExtFib(1, 2)) = 1, 1, 2,
// "1, 1, 2, 3".concat(findNextFib(2, 3)) = 1, 1, 2, 3,
// ...

// The time complexity for this algorithm is factorial because if we pass in an input of size n, the fib function is called for n-1 and n-2, and each of those are further broken down to smaller cases until we reach the base case. So we have (n-1)*(n-2)*(n-3)... which is = n!
