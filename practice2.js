function threeSum (array, targetSum) {
    array.sort((a, b) => a - b);
  
    let mainPtr = 0;
    let result = [];
  
    while (mainPtr < array.length - 2) {
      let leftPtr = mainPtr + 1;
      let rightPtr = array.length - 1;
      while (leftPtr < rightPtr) {
        let currSum = array[mainPtr] + array[leftPtr] + array[rightPtr];
        if (currSum < targetSum) {
          leftPtr++;
        } else if (currSum > targetSum) {
          rightPtr--;
        } else {
            result.push([array[mainPtr], array[leftPtr], array[rightPtr]])
        }
      }
      mainPtr++;
    }
    return result;
  }
  
  const sampleArray = [12, 3, 1, 2, -6, 5, -8, 6];
  const targetSum = 0;

  console.log('something', threeSum(sampleArray, targetSum));