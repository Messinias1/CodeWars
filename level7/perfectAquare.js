var isSquare = function (n) {
  for (let i = 0; i <= n; i++) {
    if (i * i === n) {
      console.log(i);
      return true;
    }
  }
  return false;
};

isSquare(3);
