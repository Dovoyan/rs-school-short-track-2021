function getMatrixElementsSum(matrix) {
  const arr = [];

  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let y = 0; y < matrix[i].length; y++) {
      if (matrix[i][y] === 0) arr.push(y);
      if (arr.indexOf(y) === -1) sum += matrix[i][y];
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
