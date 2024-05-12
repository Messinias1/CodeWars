/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  console.log(prices);
  let max = 0;
  let min = 1000000;

  for (let i = 0; i <= prices.length; i++) {
    if (prices[i] > max) {
      max = prices[i];
    }
    if (prices[i] < min) {
      min = prices[i];
    }
    // prices.splice(0, i);

    if(prices.indexOf(min) > prices.indexOf(max)) {
        prices.splice(0, prices.indexOf(max))
    }
  }
//   console.log(max);
//   console.log(min);

//   console.log(prices.indexOf(max), prices.indexOf(min));
};

maxProfit([2, 4, 1]); // 2
maxProfit([7, 1, 5, 3, 6, 4]); // 1
maxProfit([7, 6, 4, 3, 1]); // 0
