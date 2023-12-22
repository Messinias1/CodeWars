function positiveSum(arr) {
  let sum = 0;

  for (const element of arr) {
    if (element >= 0) {
      sum += element;
    }
  }
  return sum;
}
