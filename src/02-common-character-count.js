/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s3 = s1.split('');
  const s4 = s2.split('');
  let sum = 0;

  for (let i = 0; i < s3.length; i++) {
    for (let y = 0; y < s4.length; y++) {
      if (s3[i].indexOf(s4[y]) !== -1) {
        sum++;
        s4.splice(y, 1);
        break;
      }
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
