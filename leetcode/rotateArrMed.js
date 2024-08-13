var rotate = function (nums, k) {
  while (k !== 0) {
    let lastEl = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = lastEl;
    k--;
  }
  return nums;
};
