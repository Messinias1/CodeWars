// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  console.log(customers[0]);
  console.log(Math.max(...customers) === customers[0]);
  if (customers == []) {
    return;
  }
  if (n === 1) {
    return [...customers].reduce((partialSum, a) => partialSum + a, 0);
  }
  if (
    n > 1 &&
    n < customers.length &&
    Math.max(...customers) === customers[0]
  ) {
    console.log(customers[0]);
    return customers[0];
  }
  if (n > 1 && n < customers.length) {
    console.log(
      [...customers].reduce((partialSum, a) => partialSum + a, 0) / n
    );
    return [...customers].reduce((partialSum, a) => partialSum + a, 0) / n;
  }
  if (n > customers.length) {
    return Math.max([...customers]);
  }
}

queueTime([10, 2, 3, 3], 2);
