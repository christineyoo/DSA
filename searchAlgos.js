// Exercise 2: Adding a React UI
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return console.log(
        `It took ${i + 1} iterations to find ${value} in linear time`
      );
    }
  }
  return console.log('Could not find that value');
}

var count = 0;
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length - 1 : end;
  if (start > end) {
    return console.log(`Could not find that value`);
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
//   console.log('start to end', start, end);

  if (item === value) {
    count++;
    return console.log(
      `It took ${count} iterations to find ${value} in logarithmic time`
    );
  } else if (item < value) {
    count++;
    console.log(`${item} < ${value}`, count);
    binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    count++;
    console.log(`${item} > ${value}`, count);
    binarySearch(array, value, start, index - 1);
  }
}

const arr = [17, 18, 6, 12, 11, 8, 5, 15, 3, 14];
const sortedArr = arr.sort((a, b) => a - b);
binarySearch(sortedArr, 8);

indexOf([17, 18, 6, 12, 11, 8, 5, 15, 3, 14], 8);
