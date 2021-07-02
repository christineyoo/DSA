// BUBBLE SORT

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

function bubbleSort(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swaps++;
      //   console.log('swaps', swaps);
      //   console.log('array so far', array);
    }
  }

  if (swaps > 0) {
    return bubbleSort(array);
  }
  console.log(array);
}

// MERGE SORT

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex] = left[leftIndex];
      leftIndex++;
    } else {
      array[outputIndex] = right[rightIndex];
      rightIndex++;
    }
    outputIndex++;
  }
  //   after the first while loop is done, one of these two for loops will execute bc there will be one array that is non-exhausted
  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex] = left[i];
    outputIndex++;
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex] = right[i];
    outputIndex++;
  }
  return array;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

// QUICK SORT
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle); //sort the left side. once that's done..
  array = quickSort(array, middle + 1, end); //sort the right side
  return array; //at this point, both sides are sorted
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  console.log('pivot', pivot);
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
      console.log('array', array);
      console.log('j', j);
    }
  }
  swap(array, end - 1, j);
  console.log('array after for loop', array);
  console.log('j after for loop', j);
  return j;
}

console.log(quickSort([6, 3, 2, 5, 4]));
