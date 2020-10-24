/**
 * @summary Basic example of binary search
 * @param {Array} a array of numbers
 * @param {Number} t target
 * @returns {Number} if element exists ? k : -1  
 */
module.exports = function(a, t) {
  let k = null, i = 0, j = a.length - 1

  while(i <= j) {
    k = Math.floor((i + j) / 2)
    if (a[k] === t) return k
    else if (a[k] > t) j = k - 1
    else i = k + 1
  }

  return -1
}