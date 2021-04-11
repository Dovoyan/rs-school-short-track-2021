/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // const dog = '@';
  // let z = 0;
  // let em = email.split('');
  // for (let i = 0; i < em.length; i++) {
  //   if (em[i] === dog)z = i;
  // }
  const arr = email.split('@');
  return arr[arr.length - 1];
}

module.exports = getEmailDomain;
