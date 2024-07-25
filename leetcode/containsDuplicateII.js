/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // BRUTE FORCE SOLUTION
  if (nums.length <= 1) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        if (Math.abs(i - j) <= k) {
          return true;
        }
      }
    }
  }
  return false;

  /* HASHMAP SOLUTION
      let indexMap = {}; // This will store the last seen index of each element

    for (let i = 0; i < nums.length; i++) {
        if (indexMap.hasOwnProperty(nums[i])) {
            if (i - indexMap[nums[i]] <= k) {
                return true;
            }
        }
        // Update the last seen index of the current element
        indexMap[nums[i]] = i;
    }
    return false;
  */
};
