/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = [];
  let k = 1;
  let z = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      k++;
    } else if (str[i] !== str[i + 1]) {
      if (k !== 1) {
        arr[z] = `${k}${str[i]}`;
      } else {
        arr[z] = str[i];
      }
      z++;
      k = 1;
    }
  }

  return arr.join('');
}
module.exports = encodeLine;
