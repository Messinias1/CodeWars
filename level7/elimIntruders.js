function eliminateUnsetBits(number) {
  let count = 0;
  let arr = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] === "1") {
      arr.push(number[i]);
      count++;
    }
  }
  if (count === 0) {
    return 0;
  }
  console.log(parseInt(arr.join(""), 2));
  return parseInt(arr.join(""), 2);
}
