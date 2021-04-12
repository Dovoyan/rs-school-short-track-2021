/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let z = 0;
  const s = [];
  for (let i = 0; i < matrix.length; i++) {
    const res = [];
    for (let y = 0; y < matrix[0].length; y++) {
      z = 0;
      if (matrix[i][y + 1]) {
        z++;
      }
      if (matrix[i][y - 1]) {
        z++;
      }
      if (matrix[i + 1] && matrix[i + 1][y]) {
        z++;
      }
      if (matrix[i - 1] && matrix[i - 1][y]) {
        z++;
      }
      if (matrix[i - 1] && matrix[i - 1][y - 1]) {
        z++;
      }
      if (matrix[i - 1] && matrix[i - 1][y + 1]) {
        z++;
      }
      if (matrix[i + 1] && matrix[i + 1][y - 1]) {
        z++;
      }
      if (matrix[i + 1] && matrix[i + 1][y + 1]) {
        z++;
      }
      res.push(z);
    }
    s.push(res);
  }
  return s;
}

module.exports = minesweeper;
