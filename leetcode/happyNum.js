/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sum = 0;
  let iterationCount = 0;
  const maxIterations = 1000;

  while (sum !== 1) {
    sum = 0; // Reset sum for each iteration
    while (n > 0) {
      let digit = n % 10;
      sum += Math.pow(digit, 2);
      n = Math.floor(n / 10);
    }
    n = sum; // Set n to sum for the next iteration
    console.log("N", n);

    iterationCount++;
    if (iterationCount > maxIterations) {
      console.log("Infinite loop detected.");
      return false;
    }
  }

  if (sum === 1) {
    console.log("Process completed successfully. Sum is 1.");
    return true;
  }

  console.log(sum);
};

isHappy(2);
