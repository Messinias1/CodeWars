function closeCompare(a, b, margin) {
  let difference = 0;

  if (a > b) {
    difference = a - b;
  } else {
    difference = b - a;
  }

  if (margin == undefined) {
    margin = 0;
  }

  if (margin >= difference) {
    return 0;
  } else if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
}
