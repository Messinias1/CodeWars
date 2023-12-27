function squareDigits(num) {
  console.log(num);
  let splitNum = num.toString().split("");
  console.log(splitNum);

  let nums = splitNum.map(function (s) {
    return parseInt(s);
  });
  console.log(nums);

  let raised = nums.map((n) => Math.pow(n, 2));

  console.log(raised);
  let str = raised.map(function (s) {
    return s.toString();
  });
  console.log(parseInt(str.join("")));
  return parseInt(str.join(""));
}
