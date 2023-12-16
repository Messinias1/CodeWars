function take(arr, n) {
  if (arr.length === 0) {
    return [];
  } else if (n > arr.length) {
    return arr;
  } else {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
      newArr.push(arr[i]);
    }
    console.log(newArr);
    return newArr;
  }
}

take([0, 1, 2, 3, 5, 8, 13], 3);
