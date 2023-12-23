function candies(kids) {
  let max = Math.max(...kids);
  let diffArr = [];
  let sum = 0;

  if (kids == 0 || kids.length == 1) {
    return -1;
  }

  for (const element of kids) {
    diffArr.push(max - element);
  }
  console.log(diffArr);
  for (const element of diffArr) {
    sum += element;
  }
  console.log(sum);
  return sum;
}
