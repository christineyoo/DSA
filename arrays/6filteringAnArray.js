// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

// input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> [5, 6, 7, 8, 9, 10]
// input: [-1, -3, 4, 1, 10] --> [10]

// take in an array
// loop through the array
// if the value is less than 5, remove it.

function filterLessThanFive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      newArr;
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

filterLessThanFive([-1, -3, 4, 1, 10]);
filterLessThanFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Complexity: linear O(n). It might be able to be optimized if we perform a sort first and then check the middle and cut the problem in half with each iteration. But I'm not sure if the sorting part would be O(n).
