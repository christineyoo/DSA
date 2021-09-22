// O(n^2) time | O(1) space
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < array.length; i++) {
    let min = i; //set the current index as the index of the minimum
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j; // update minimum if current is lower than what we had previously
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
  
}

function insertionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            array.unshift(array.splice(i, 1)[0]); // move number to the first position
        } else {
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    array.splice(j, 0, array.splice(i, 1)[0]);    // move number to the right spot
                }
            }
        }
    }
    return array;
}

function mergeSort(array) { //this function splits the array down to half each time
  if (array.length === 1) {
    return array;
  }

  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) { //takes the left and right element and compares them and places the elements in the correct position
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);

//SORT TYPES
// Bubble Sort
// Selection Sort
// Insertion Sort
// Merge Sort
// Quick Sort

//#1 - Sort 10 schools around your house by distance: insertion sort - it's the simplest for this type of data

//#2 - eBay sorts listings by the current Bid amount: Radix or counting sort because you're dealing with numbers from 1 to <50,000

//#3 - Sport scores on ESPN: quick sort - it's the most efficient :)

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data: Merge sort because it's already not fitting into the memory, so you want to optimize the time

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews: insertion sort - becasue i'm assuming that most of the data is already sorted

//#6 - Temperature Records for the past 50 years in Canada: radix sort or counting sort because you're working with small numbers

//#7 - Large user name database needs to be sorted. Data is very random: quick sort bc it's space efficient

//#8 - You want to teach sorting for the first time: bubble sort, selection sort, insertion sort

