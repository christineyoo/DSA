// Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

// Input:
// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];

// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

function twoDArray3(matrix) {
  if (!matrix || matrix.length === 0) {
    return;
  }

  let zero_rows = new Set();
  let zero_cols = new Set();

  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        if (!zero_rows.has(i)) {
          zero_rows.add(i);
        }
        if (!zero_cols.has(j)) {
          zero_cols.add(j);
        }
      }
    }
  }

  zero_rows.forEach(function (r) {
    for (let c = 0; c < cols; c++) {
      matrix[r][c] = 0;
    }
  });

  zero_cols.forEach(function (c) {
    for (let r = 0; r < rows; r++) {
      matrix[r][c] = 0;
    }
  });

  console.log(matrix);
}

twoDArray3([
    [1, 0, 1],
    [0, 1, 1],
    [1, 1, 1]
  ]);

//   Complexity is quadratic because the nested for loops is n^2 and there are 2 more forEach methods, which I believe is n + n = 2n. So the sum is n^2 + 2n, which behaves quadratically as the size of the input tends to infinity!