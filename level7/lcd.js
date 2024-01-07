function reduce(fraction) {
  let largerNum = fraction[0] > fraction[1] ? fraction[0] : fraction[1];
  let LCD;
  let LCDArr = [];

  for (let i = 0; i <= largerNum; i++) {
    if (
      Number.isInteger(fraction[0] / i) &&
      Number.isInteger(fraction[1] / i)
    ) {
      LCD = i;
    }
  }
  LCDArr.push(fraction[0] / LCD);
  LCDArr.push(fraction[1] / LCD);
  return LCDArr;
}
