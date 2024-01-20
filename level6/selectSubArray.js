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
  -48, -155, 60, -143, 112, -162, 66, -76, -142, 80, -170, 71, -33, -77, 137, 3,
  -18, 122, -121, -181, 125, 72, 133, 184, 65, 30, 139, 140, -103, -192, -146,
  -15, 116, -83, 55, 189, 185, 163, -73, 104, 126, -132, 7, 39, -68, 115, 87,
  38, -172,
]);
