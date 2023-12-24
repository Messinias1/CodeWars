// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/javascript

function queueTime(customers, n) {
  // Initialize tills
  let tills = new Array(n).fill(0);

  // Process each customer
  customers.forEach((customer) => {
    // Find the till that will be free the soonest
    let nextTill = tills.indexOf(Math.min(...tills));
    console.log(nextTill);

    // Add the customer's time to this till's time
    tills[nextTill] += customer;
    console.log(tills[nextTill]);
  });

  // Return the maximum time from all tills
  console.log(Math.max(...tills));
  return Math.max(...tills);
}

queueTime([2, 3, 6, 10], 30);
