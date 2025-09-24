function memoizedSquare() {
  let cache = {}; 

  return function (n) {
    if (cache[n] !== undefined) {
      console.log("Fetching from cache...");
      return cache[n];
    }
    console.log("Calculating...");
    cache[n] = n * n;
    return cache[n];
  };
}

const square = memoizedSquare();

console.log(square(5)); 
console.log(square(5)); 
console.log(square(6)); 
