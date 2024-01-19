function numberJoy(n) {
  let numArr = Array.from(n.toString(), Number);
  let sum = 0;

  numArr.forEach((num) => {
    sum += num;
  });

  let reverseSum = parseInt(sum.toString().split("").reverse().join(""));

  return !!(n % sum === 0 && sum * reverseSum === n);
}
