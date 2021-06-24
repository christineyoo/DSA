// 7. Max sum in the array
// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12 because 4 + 6 + -3 + 5
function getMaxSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    console.log(maxSum);
  }

  getMaxSum([4, 6, -3, 5, -2, 1])

  // Complexity: linear O(n). There is another way to do this using nested loops, but the time complexity would be quadratic for that approach.