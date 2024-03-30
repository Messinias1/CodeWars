/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let max = nums[0];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  console.log(max);
};

majorityElement([1, 2, 2, 3, 4, 5]);
