function catchSignChange(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      (i + 1 < arr.length && arr[i + 1] < 0 && arr[i] >= 0) ||
      (arr[i + 1] >= 0 && arr[i] < 0)
    ) {
      count += 1;
    }
  }
  console.log(count);
  return count;
}
catchSignChange([-47, 84, -30, -11, -5, 74, 77]);
