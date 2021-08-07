const {performance} = require('perf_hooks');

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

console.log(containsCommonItem(array1, array2));

//loop through the first array and create a hastable.
//loop through the second array and check if there is a match between that element and key in the hashtable