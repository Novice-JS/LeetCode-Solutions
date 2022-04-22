// Youtube Link - https://youtu.be/qNJOL3p6Jmw
// LeetCode Link - https://leetcode.com/problems/rearrange-array-elements-by-sign/

var rearrangeArray = function (nums) {
  // create a result array that matches the length of nums.
  // create counters for positive (even index, starting at 0) and negative (odd index, starting at 1) numbers that will be used as index positions in the result array
  let res = new Array(nums.length).fill(0),
    p = 0,
    n = 1;
  // loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    // if the number is positive...
    if (nums[i] > 0) {
      // set the value in the 'res' array at index 'p' equal to the current iteration in the nums array
      res[p] = nums[i];
      // increase the 'p' counter by 2
      p += 2;
      // if the number is negative
    } else {
      // set the value in the 'res' array at index 'n' equal to the current iteration in the nums array
      res[n] = nums[i];
      // increase the 'n' counter by 2
      n += 2;
    }
  }
  // return res as the answer
  return res;
};

// console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // [3,-2,1,-5,2,-4]
// console.log(rearrangeArray([-1, 1])); // [1,-1]
