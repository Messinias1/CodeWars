function arrCheck(value) {
  let count = 0;
  for (const element of value) {
    console.log(element);
    if (Array.isArray(element)) {
      count += 1;
    }
  }
  if (count === value.length) {
    console.log(true);
    return true;
  } else {
    return false;
  }
}

arrCheck([[1], [2], {}]);
