function cantBeatSoJoin(numbers) {
  let sumArr = [];
  let finalArr = [];
  console.log(numbers);
  for (const element of numbers) {
    const sum = element.reduce((partialSum, a) => partialSum + a, 0);
    sumArr.push(sum);
  }

  while (sumArr.length > 0) {
    console.log("length ", sumArr.length);
    let maxIndex = sumArr.indexOf(Math.max(...sumArr));
    console.log(maxIndex);
    finalArr.push(numbers[maxIndex]);
    sumArr.splice(maxIndex, 1);
    numbers.splice(maxIndex, 1);
    console.log(sumArr);
  }
  console.log(finalArr);
  let flattened = finalArr.flat();
  console.log(flattened);
  return flattened;
}
