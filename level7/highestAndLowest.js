function highAndLow(numbers) {
  let arr = numbers.split(" ");
  console.log(numbers.split(" "));
  let nums = arr.map(function (str) {
    return parseInt(str);
  });

  let max = Math.max(...nums).toString();
  let min = Math.min(...nums).toString();

  console.log(max);
  console.log(min);
  return max + " " + min;
}
