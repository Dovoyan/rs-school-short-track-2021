/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [];
  let z = 0;
  for (let i = 0; i < names.length; i++) {
    z = 0;
    for (let y = 0; y < i; y++) {
      if (names[i] === names[y]) z++;
    }
    if (z !== 0) {
      arr[i] = `${names[i]}(${z})`;
    } else {
      arr[i] = names[i];
      if (names[i].indexOf('(1)') !== -1) arr[i] = `${names[i]}(${1})`;
    }
  }
  return arr;
}

module.exports = renameFiles;
