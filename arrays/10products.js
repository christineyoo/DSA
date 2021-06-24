// 10. Products
// Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

function products(arr) {
  let productArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      const productWithoutZero = productArr
        .splice(i, 1)
        .reduce((a, b) => a * b, 1);
      productArr.push(productWithoutZero);
    } else {
      const product = arr.reduce((a, b) => a * b) / arr[i];
      productArr.push(product);
    }
  }
  console.log(productArr);
}

products([0, 3, 9, 4]);

// Complexity is linear.
