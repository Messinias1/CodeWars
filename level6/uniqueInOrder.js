var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let arr = [];
  console.log(typeof iterable);
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      console.log(iterable[i]);
      arr.push(iterable[i]);
    }
  }
  console.log(arr);
  return arr;
};

uniqueInOrder("ABBCcAD");
uniqueInOrder([1, 2, 2, 3, 3]);
