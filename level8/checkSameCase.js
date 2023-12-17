function sameCase(a, b) {
  if (!a.match(/[a-z]/i) || !b.match(/[a-z]/i)) {
    console.log(-1);
    return -1;
  } else if (
    a.charCodeAt() >= 65 &&
    a.charCodeAt() <= 90 &&
    b.charCodeAt() >= 65 &&
    b.charCodeAt() <= 90
  ) {
    console.log(1);
    return 1;
  } else if (
    a.charCodeAt() >= 97 &&
    a.charCodeAt() <= 122 &&
    b.charCodeAt() >= 97 &&
    b.charCodeAt() <= 122
  ) {
    console.log(1);
    return 1;
  } else if (
    (a.charCodeAt() >= 65 &&
      a.charCodeAt() <= 90 &&
      b.charCodeAt() >= 97 &&
      b.charCodeAt() <= 122) ||
    (a.charCodeAt() >= 97 &&
      a.charCodeAt() <= 122 &&
      b.charCodeAt() >= 65 &&
      b.charCodeAt() <= 90)
  ) {
    console.log(0);
    return 0;
  }
}

sameCase("A", "F");
