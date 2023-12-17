function multiply(number) {
  const absNum = Math.abs(number);
  const digitLength = absNum.toString().length;
  console.log(digitLength);
  console.log(number * 5 ** digitLength);
  return number * 5 ** digitLength;
}

multiply(-50);
