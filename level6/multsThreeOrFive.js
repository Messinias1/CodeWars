function solution(n) {
  if (n < 0) {
    return 0;
  }
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  console.log(sum + 1);
  return sum;
}
