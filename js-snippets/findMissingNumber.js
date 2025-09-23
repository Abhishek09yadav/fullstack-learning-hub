function findMissingNumber(arr, n) {
  let total = arr.reduce((acc, initial) => (acc = acc + initial), 0);
  const sum = (n * (n + 1)) / 2;
  return sum - total;
}
console.log(findMissingNumber([1, 2, 4, 5], 5));
