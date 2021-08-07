const {performance} = require('perf_hooks');

function findNemo(array) {
    let startTime = performance.now();
    for (let i = 0; i< array.length; i++) {
        if (array[i] === 'nemo') console.log('Found NEMO!');
    }
    let endTime = performance.now();
    console.log(`Call to find Nemo took ${endTime - startTime} milliseconds`);
}
const array1 = ['dory', 'b', 'asdf', 'm', 'd', 'nemo', 'adsfdd', 'fjfjf', 'pbpbp', 'qqqq']
const array2 = new Array(100).fill('nemo');

findNemo(array2)