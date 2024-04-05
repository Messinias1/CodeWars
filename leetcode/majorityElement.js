/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const countMap = {};
  let maxCount = 0;
  let mostFrequentElement = null;

  nums.forEach((element) => {
    countMap[element] = (countMap[element] || 0) + 1;

    if (countMap[element] > maxCount) {
      maxCount = countMap[element];
      mostFrequentElement = element;
    }
  });

  console.log(mostFrequentElement);
  console.log(maxCount);
};

majorityElement([1, 2, 2, 3, 4, 5]);
