/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index1 = m - 1; // Last index of the original part of nums1
  let index2 = n - 1; // Last index of nums2
  let mergeIndex = m + n - 1; // Last index of the merged array

  // Merge in reverse order
  while (index1 >= 0 && index2 >= 0) {
    // Pick the larger among the elements of nums1 and nums2, and place them in the correct position at the end of nums1
    if (nums1[index1] > nums2[index2]) {
      nums1[mergeIndex--] = nums1[index1--];
    } else {
      nums1[mergeIndex--] = nums2[index2--];
    }
  }

  // If nums2 still has elements left, fill nums1 with remaining elements of nums2
  // (No need to check for nums1 because if nums1 has elements left, they are already in correct place)
  while (index2 >= 0) {
    nums1[mergeIndex--] = nums2[index2--];
  }
};
