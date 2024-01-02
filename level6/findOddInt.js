function findOdd(A) {
  let twoDArr = [];
  let tempArr = [];
  let sorted = A.sort();

  for (let i = 0; i < sorted.length; i++) {
    tempArr.push(sorted[i]);
    if (sorted[i] !== sorted[i + 1] || i === sorted.length - 1) {
      twoDArr.push(tempArr);
      tempArr = [];
    }
  }
  for (let i = 0; i < twoDArr.length; i++) {
    if (twoDArr[i].length % 2 === 1) {
      for (let j = 0; j < twoDArr[i].length; j++) {
        return twoDArr[i][j];
      }
    }
  }
}
