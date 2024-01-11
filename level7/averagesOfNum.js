function averages(numbers) {
  let arr = [];
  if (numbers.length <= 1 || !numbers) {
    return [];
  }
  for (let i = 0; i < numbers.length; i++) {
    //     if(numbers[i] === null) {
    //       return []
    //     }
    if (i + 1 < numbers.length) {
      console.log((numbers[i] + numbers[i + 1]) / 2);
      arr.push((numbers[i] + numbers[i + 1]) / 2);
    }
  }
  return arr;
}
