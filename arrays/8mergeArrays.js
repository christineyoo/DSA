// 8. Merge arrays
// Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function mergeArrays(arr1, arr2) {
  const merged = arr1.concat(arr2).sort((a, b) => a-b);
  console.log(merged);
}

mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

// Complexity: O(n) linear. Each item must get sorted, which means each element must be inspected and compared to the one adjacent to it.
