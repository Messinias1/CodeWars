function timeConvert(num) {
  let copy = num;
  let hour = 0;
  let mins = 0;

  for (let i = 0; i <= num; i++) {
    if (copy >= 60) {
      hour += 1;
      copy -= 60;
    } else if (copy < 60) {
      mins = copy;
    }
  }

  let hourStr = hour.toString();
  let minsStr = mins.toString();

  if (hour.toString().length === 1) {
    hourStr = "0" + hourStr;
  }

  if (mins.toString().length === 1) {
    minsStr = "0" + minsStr;
    console.log("0" + minsStr);
  }

  console.log(hourStr + ":" + minsStr);
  console.log("Hours: " + hour);
  console.log("Mins: " + mins);

  return hourStr + ":" + minsStr;
}
