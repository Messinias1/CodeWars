function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    console.log(i);
    arr.push(i);
  }
  return arr;
}

generateRange(-10, 1, 1);
