const { performance } = require('perf_hooks');

// function findNemo(array) {
//     let startTime = performance.now();
//     for (let i = 0; i< array.length; i++) {
//         if (array[i] === 'nemo') console.log('Found NEMO!');
//     }
//     let endTime = performance.now();
//     console.log(`Call to find Nemo took ${endTime - startTime} milliseconds`);
// }
// const array1 = ['dory', 'b', 'asdf', 'm', 'd', 'nemo', 'adsfdd', 'fjfjf', 'pbpbp', 'qqqq']
// const array2 = new Array(100).fill('nemo');

// findNemo(array2)

const array1 = ['a', 'b', 'c', 'x', 'a', 'b'];
const array2 = ['z', 'y', 'g'];
//O(n + m) time | O(n) - where n is the size of arr1, m is the size of arr2
function containsCommonItem(arr1, arr2) {
  let store = {};
  for (const element of arr1) {
    store[element] = true;
  }
  console.log(store);
  for (const item of arr2) {
    if (item in store) return true;
  }
  return false;
}

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
console.log(newArray.get(0));
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.push('are');
newArray.push('nice');
newArray.delete(2);
console.log(newArray);
