function latestClock(a, b, c, d) {
  let arr = [];
  let timeArr = [];
  let len = 4;

  arr.push(a, b, c, d);
  console.log(arr);

  if (arr.includes(2) && timeArr[0] == null) {
    timeArr[0] = 2;
    console.log("zero", timeArr[0]);
    let index = arr.findIndex((element) => element === 2);

    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < 2 && timeArr[0] == null) {
      timeArr[0] = element;
      console.log("zero", timeArr[0]);
    } else if (
      (element <= 9 && timeArr[0] < 2 && timeArr[1] == null) ||
      (element <= 3 && timeArr[0] == 2 && timeArr[1] == null)
    ) {
      timeArr[1] = element;
      console.log("one", timeArr[1]);
    } else if (element <= 5) {
      timeArr[2] = element;
      console.log("two", timeArr[2]);
    } else if (element <= 9 && timeArr[3] == null) {
      timeArr[3] = element;
      console.log("three", timeArr[3]);
    }
  }

  console.log(timeArr);
}

latestClock(9, 1, 2, 5);
latestClock(1, 2, 8, 9);
latestClock(2, 4, 0, 0);
