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

// const newArray = new MyArray();
// console.log(newArray.get(0));
// newArray.push('hi');
// newArray.push('you');
// newArray.push('!');
// newArray.push('are');
// newArray.push('nice');
// newArray.delete(2);
// console.log(newArray);

//Create a function that reverses a string: 'Hi' => 'iH'
// O(n) time | O(n) space where n is the # of characters in the string.
function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') return null;
    let reversed = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i]);
    }
    return reversed.join('');
}

const reverse2 = str => str.split('').reverse().join('');

const reverse3 = str => [...str].reverse().join('');

// console.log(reverse3('green beans'))

//take a string and separate each char into an array element using .split();
//start at the end of the array and push those characters onto a new array
//.join them all together.

//Create a function that takes two sorted arrays and merges them into one sorted array.
//O(n + m) time | O(n + m) space
function mergeSortedArrays(arr1, arr2) {
    let ptrA = 0;
    let ptrB = 0;
    let result = [];
    while (ptrA < arr1.length && ptrB < arr2.length) {
        if (arr1[ptrA] < arr2[ptrB]) {
            result.push(arr1[ptrA]);
            ptrA++;
        } else {
            result.push(arr2[ptrB]);
            ptrB++;
        }
    }
    if (!arr2[ptrB]) result.push(arr1[ptrA]);
    else if (!arr1[ptrA]) result.push(arr2[ptrB]);
    return result;
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
//create two pointers. one for arr1, one for arr2, both starting at the 0th index.
//compare the values at those indicies.
//if the value at arr1 is lesser, then push it onto the new array. increment the pointer for arr1.
//if the value at arr2 is lesser, then push that value onto the new array.incremenet the poitner for arr2.
//we want to keep doing this until both pointers for arr1 and arr2 have reached the end of the array (&&, reached the length);
//return the resulting array

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const index = this._hash(key);
        if (!this.data[index]) {
            this.data[index] = [];
        }
        this.data[index].push([key, value])
        return this.data;
    }

    get(key) {
        const index = this._hash(key);
        const currBucket = this.data[index];
        if (currBucket) {
            for (let i = 0; i < currBucket.length; i++) {
                if (currBucket[i][0] === key) return currBucket[i][1];
            }
        }
        return undefined
    }

    keys() {
        if (!this.data.length) {
          return undefined
        }
        let result = []
        // loop through all the elements
        for (let i = 0; i < this.data.length; i++) {
            // if it's not an empty memory cell
            if (this.data[i] && this.data[i].length) {
              // but also loop through all the potential collisions
              if (this.data.length > 1) {
                for (let j = 0; j < this.data[i].length; j++) {
                  result.push(this.data[i][j][0])
                }
              } else {
                result.push(this.data[i][0])
              } 
            }
        }
        return result; 
      }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('apples', 54)
myHashTable.set('oranges', 2)
// myHashTable.get('grapes')
// console.log(myHashTable._hash('grapes'))
console.log(myHashTable.keys())