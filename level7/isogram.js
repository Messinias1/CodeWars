function isIsogram(str) {
  let lowered = str.toLowerCase();
  let arr = [];

  for (const el of lowered) {
    if (arr.includes(el)) {
      return false;
    }
    arr.push(el);
  }
  return true;
}
