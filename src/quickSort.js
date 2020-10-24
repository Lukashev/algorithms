module.exports = function quickSort(a) {
  if (a.length < 2) return a

  let pivot = a[0], left = [], right = []

  for (let i = 0; i < a.length; i++) {
    if (a[i] < pivot) left.push(a[i])
    else if (a[i] > pivot) right.push(a[i])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}