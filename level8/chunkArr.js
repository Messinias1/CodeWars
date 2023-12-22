function eachCons(array, n) {
  let arr = [];
  for (let i = 0; i < array.length; i += n) {
    const chunk = array.slice(i, i + n);
    arr.push(chunk);
  }
  console.log(arr);
}

// enumerable magic #20-Cascading Subsets
