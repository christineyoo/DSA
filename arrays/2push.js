// 2. Explore the push() method
// Using the Array class you just created above, add an item to the array. Use the following function:
const Array = require('./array');

function main() {
  Array.SIZE_RATIO = 3;
  // Create an instance of the Array class
  let arr = new Array();
  // Add an item to the array
  arr.push("tauhida")

  console.log(arr);
}

// What is the length, capacity and memory address of your array?
//  length: 1, capacity: 3 because 1*3=3, memory address: 0
// Add the following in the main function and then print the array:

//     ...
//     arr.push(5);
//     arr.push(15);
//     arr.push(19);
//     arr.push(45);
//     arr.push(10);
// What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
// length: 6, capacity: 6, memory address: 0 through 5?
// When the first 3 was pushed, the capacity was 3. So the _resize function didn't need to get called until line 13. Before the 19 could be pushed, the capacity increased by a factor of 3. So now, the capacity is 6 and therefore there is enough space to push 19, 45, and 10 into the array.
