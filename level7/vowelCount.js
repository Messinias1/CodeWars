function getCount(str) {
  let count = 0;
  let vowelReg = /^[aeiou]$/i;
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(vowelReg)) {
      count += 1;
    }
  }

  return count;
}
