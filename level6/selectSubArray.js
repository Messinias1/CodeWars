function selectSubarray(arr) {
  console.log(arr);
  let skip = 0;
  let i = 0;
  let newArr = [];
  let tempArr = [];

  while (skip < arr.length) {
    if (i === skip) {
      i++;
    }
    if (i === arr.length) {
      skip++;
      i = 0;
      // console.log("-----------");
      if (tempArr.length > 0) {
        newArr.push(tempArr);
        tempArr = [];
      }
    }
    //console.log(arr[i], i);
    tempArr.push(arr[i]);

    if (tempArr.length === arr.length - 1) {
      newArr.push(tempArr);
      tempArr = [];
    }
    i++;
  }
  console.log(newArr);

  // q = SubProduct/SubSum. get the sub arr products and sums
  let productsArr = [];
  let sumsArr = [];
  let quotientArr = [];
  let product = 1;
  let sum = 0;
  let quotient = 0;

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      sum += newArr[i][j];
      product *= newArr[i][j];
    }
    sumsArr.push(sum);
    productsArr.push(product);

    sum = 0;
    product = 1;
  }
  console.log(productsArr);
  console.log(sumsArr);

  for (let i = 0; i < productsArr.length; i++) {
    quotient = Math.abs(productsArr[i] / sumsArr[i]);
    quotientArr.push(quotient);
  }
  console.log(quotientArr);
  console.log(Math.min(...quotientArr));
  let index = quotientArr.indexOf(Math.min(...quotientArr));
  let value = arr[index];
  console.log([index, value]);
  console.log(arr.length);
  return [index, value];
}
// https://www.codewars.com/kata/581bb3c1c221fb8e790001ef/train/javascript
selectSubarray([
  -174, -40, -129, -21, -106, 137, 196, -74, 157, 152, -17, -142, 8, 151, -70,
  155, 110, -90, 149, 70, 192, -103, 109, 23, 37, 170, -193, 150, 43, -178, 13,
  -98, -36, 15, -183, 91, 29, 147, -190, 187, 126, -192, 7, -76, 39, 169, -169,
  171, 66,
]);
