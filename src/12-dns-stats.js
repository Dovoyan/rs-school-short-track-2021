/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const z = {};
  domains.forEach((e) => {
    const domainItem = e.split('.').reverse();
    let name = '';
    domainItem.forEach((el, index) => {
      name += `.${domainItem[index]}`;
      if (z[name] === undefined) {
        z[name] = 1;
      } else {
        z[name] += 1;
      }
    });
  });
  return z;
}

module.exports = getDNSStats;
