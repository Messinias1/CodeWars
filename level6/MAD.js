function gettingMad(array) {
  let sumsArr = [];
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    let num = array[i];

    for (let x = 0; x < array.length; x++) {
      console.log("i", i, "x", x);
      console.log(i * x);
      console.log("num", num, " sumsArr[x]", array[x]);
      if (i != x) {
        sumsArr.push(Math.abs(num - array[x]));
      }
    }
  }

  console.log(sumsArr);
  console.log(Math.min(...sumsArr));
  console.log("hi");
  return Math.min(...sumsArr);
}

gettingMad([-10, 0, -3, 1]);
