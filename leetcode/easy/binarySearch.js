function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return nums.indexOf(nums[i]);
    }
  }
  return -1;
}
