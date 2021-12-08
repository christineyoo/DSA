// ["other", "this", "thing", "that"]
// ["thing", "other", "that", "this"]

// f1(a1, a2) -> shuffle
// f2(a1, shuffle) -> a2 (basically the inverse of f1)

//Create a tic-tac-toe class with a .move method. Do this in O(1) time

function factorial(number) {
  if (number === 2) {
    return 2
  }
  return number * factorial(number - 1)
}

function factorialIterative(number) {
  let answer = 1
  for (let i = number; i >= 1; i--) {
    answer *= i
  }
  return answer
}

function fib(number) {
  if (number < 2) return number
  return fib(number - 1) + fib(number - 2)
}

function fibIterative(number) {
  let fibs = [0, 1]
  let sum = 0
  for (let i = 1; i < number; i++) {
    sum = fibs[0] + fibs[1]
    fibs[0] = fibs[1]
    fibs[1] = sum
  }
  return number === 0 ? fibs[0] : fibs[1]
}

// console.log(fib(7));
// console.log('fib iterative', fibIterative(7))
// console.log(factorialIterative(5));
// console.log('factorial recursive', factorial(5));

var s = '{}{}[]' // return true
var s1 = '{{{}}}' //return true
var s2 = '{[][]()' //return false
var s3 = '' //return true
var s4 = '{[](){}}' //return true
var s5 = '{[](]){}}' //return false
var s6 = '{[}]' // return false
var s7 = '{]' //return false

function balancedBrackets(string) {
  let stack = []
  let bracketPairs = {
    '{': '}',
    '[': ']',
    '(': ')'
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

// console.log('expected true and got', balancedBrackets(s))
// console.log('expected true and got', balancedBrackets(s1))
// console.log('expected false and got', balancedBrackets(s2))
// console.log('expected true and got', balancedBrackets(s3))
// console.log('expected true and got', balancedBrackets(s4))
// console.log('expected false and got', balancedBrackets(s5))
// console.log('expected false and got', balancedBrackets(s6))
// console.log('expected false and got', balancedBrackets(s7))

/* Given n integers a1, a2, ..., an, where each represents a point at coordinate (i, ai), n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines which together with the x-axis forms a container, such that the container contains the most water and returns the maximum amount of water that can be held

input: [1, 1]
output: 1

input: [1, 2, 1]
output: 2

input: [4, 3, 2, 1, 4]
output: 16

input: [1, 8, 6, 2, 5, 4, 8, 10, 7]
output: 49

input: [1, 8, 10, 2, 5, 4, 8, 10, 7]
output: 50

input: [1, 8, 10, 100, 100, 4, 8, 10, 7]
output: 100  
*/

function findMaxWater(arr, left = 0, right = arr.length - 1) {
  let currMax = calculateArea(arr, left, right)
  let ultimateMax = currMax
  let i = 0

while (i < arr.length) {
  if (arr[left] < arr[right] && arr[left + 1] > arr[left]) { //Only increment the left pointer if doing so will eliminate the limiting factor of height
    left++
  } else if (arr[left] > arr[right] && arr[right - 1] > arr[right]) { //Only increment the right pointer if doing so will eliminate the limiting factor of height
    right--
  } else {                                                   //When the values being compared at the left and right indicies are equal
    const indicies = findLargerValues(arr, left, right)     
    if (indicies.length === 0) return ultimateMax         
    if (indicies.length === 2) return calculateArea(arr, indicies[0], indicies[1])

    for (const index of indicies) {
      let area = (right - index) * Math.min(arr[index], arr[right])
      ultimateMax = Math.max(area, ultimateMax)
    }
  }

  currMax = calculateArea(arr, left, right)     //Now that either the left or right pointer, calculate the current maximum area
  ultimateMax = Math.max(currMax, ultimateMax)
  i++                                           //Repeat this process so that we can check again if there's a greater maximum area
}
  return ultimateMax
}

function findLargerValues(arr, left, right) { //Finds any values that are greater than the current height
  let indicies = []                             //i.e. [1, 2, 1] -> height is 1 and this function sees that 2 is greater than 1
  let height = Math.min(arr[left], arr[right])
  for (let i = left + 1; i < right; i++) {
    if (arr[i] > height) indicies.push(i)
  }
  return indicies
}

function calculateArea(arr, left, right) {
  let width = right - left
  let height = Math.min(arr[left], arr[right])
  return width * height
}

// console.log('expecting 1 and returns ', findMaxWater([1, 1]))
// console.log('expecting 2 and returns ', findMaxWater([1, 2, 1]))
// console.log('expecting 16 and returns', findMaxWater([4, 3, 2, 1, 4]))
// console.log('expecting 49 and returns', findMaxWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// console.log('expecting 50 and returns', findMaxWater([1, 8, 10, 2, 5, 4, 8, 10, 7]))
// console.log('expecting 100 and returns', findMaxWater([1, 8, 10, 100, 100, 4, 8, 10, 7]))

function threeSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let result = [];

  for (let mainPtr = 0; mainPtr < array.length - 2; mainPtr++) {
    let leftPtr = mainPtr + 1;
    let rightPtr = array.length - 1;
    while (leftPtr < rightPtr) {
      let currSum = array[mainPtr] + array[leftPtr] + array[rightPtr];
      if (currSum < targetSum) {
        leftPtr++;
      } else if (currSum > targetSum) {
        rightPtr--;
      } else {
          result.push([array[mainPtr], array[leftPtr], array[rightPtr]]);
      }
    }
  }
  return result;
}

console.log("sorted", threeSum([12, 3, 1, 2, -6, 5, -8, 6], 0))