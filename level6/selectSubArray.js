function selectSubarray(arr) {
  console.log(arr);
  let skip = 0;
  let i = 0;
  let newArr = [];

  while (skip < arr.length) {
    if (i === skip) {
      i++;
    }
    if (i === arr.length) {
      skip++;
      i = 0;
      console.log("-----------");
    }
    console.log(arr[i], i);
    newArr.push(arr[i]);
    i++;
  }
  console.log(newArr);
}
// https://www.codewars.com/kata/581bb3c1c221fb8e790001ef/train/javascript
selectSubarray([1, 23, 2, -8, 5]);
