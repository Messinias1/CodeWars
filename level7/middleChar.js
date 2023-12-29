function getMiddle(s) {
  if (s.length % 2 != 0) {
    console.log(s.length);
    console.log(Math.floor(s.length / 2));
    let target = Math.floor(s.length / 2);
    console.log(s[target]);
    return s[target];
  }
  console.log(s.length / 2);
  let first = s.length / 2 - 1;
  let second = s.length / 2 + 1;
  console.log(s.length / 2 - 1);
  console.log(s.slice(first, second));
  return s.slice(first, second);
}

getMiddle("testin");
