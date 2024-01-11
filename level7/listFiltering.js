function filter_list(l) {
  let arr = [];
  for (const element of l) {
    if (Number.isInteger(element)) {
      arr.push(element);
    }
  }
  return arr;
}

filter_list([1, 2, "a", "b"]);
