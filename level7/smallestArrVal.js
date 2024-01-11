function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  } else {
    let min = Math.max(...arr);
    let ind = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        ind = i;
      }
    }
    console.log(ind);
    return ind;
  }
}
