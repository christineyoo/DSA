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

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(insertionSort(numbers));
