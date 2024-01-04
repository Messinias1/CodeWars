function latestClock(a, b, c, d) {
  let maxHour = 23;
  let maxMin = 59;
  let str = a.toString() + b.toString() + c.toString() + d.toString();

  let strLength = str.length;
  let charArr = [];
  let numArr = [];
  let hourArr = [];
  let minArr = [];
  let currentIndex = 0;

  while (currentIndex < strLength) {
    let char = str.charAt(currentIndex);
    let x;
    let arrTemp = [char];
    for (x in charArr) {
      arrTemp.push("" + charArr[x] + char);
    }
    charArr = charArr.concat(arrTemp);
    currentIndex++;
  }
  console.log(charArr);

  const filtered = charArr.filter((c) => c.length === 2);
  //   let final = [...filtered];

  console.log(filtered);

  for (let i = 0; i < filtered.length; i++) {
    //final.push(filtered[i].split("").reverse().join(""));
    numArr.push(parseInt(filtered[i]));
  }
  //console.log(final);

  //   for (let i = 0; i < final.length; i++) {
  //     numArr.push(parseInt(final[i]));
  //   }
  console.log(numArr);

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] <= 23) {
      hourArr.push(numArr[i]);
    }
  }
  console.log(Math.max(...hourArr));
}

latestClock(9, 1, 2, 5);
latestClock(1, 2, 8, 9);
//latestClock(2, 4, 0, 0);
