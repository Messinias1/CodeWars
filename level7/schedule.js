function dayPlan(hours, tasks, duration) {
  let arr = [];
  let totalTime = hours * 60;
  let taskTime = tasks * duration;
  let interval = tasks - 1;
  let intervalTime = Math.round((totalTime - taskTime) / interval);
  let scheduleBrackets = tasks + interval;
  console.log(scheduleBrackets);

  if (totalTime < taskTime) {
    return `You're not sleeping tonight!`;
  }

  for (let i = 0; i < scheduleBrackets; i++) {
    console.log(i);
    if (i % 2 == 0) {
      arr.push(duration);
    } else {
      arr.push(intervalTime);
    }
  }
  console.log(totalTime);
  console.log(taskTime);
  console.log(intervalTime);
  console.log(arr);
}

dayPlan(8, 5, 30);
