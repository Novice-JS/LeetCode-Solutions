// Youtube Link - https://youtu.be/KjfBYnf5bDY
// LeetCode Link - https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/

var minSubsequence = function (nums) {
  // sort the array in decreasing order
  nums.sort((a, b) => b - a);
  // create a variable 'half' that is set to half the value of the sum of all elements in the nums array
  let half = nums.reduce((a, c) => a + c, 0) / 2;
  // create a result variable that is set to an empty array, create a variable to keeps a running sum of the elements in there result array
  let res = [],
    sum = 0;
  // loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    // push the current iteration of the nums array into the result array
    res.push(nums[i]);
    // add the current iteration of the nums array to the sum value
    sum += nums[i];
    // if the sum variable is greater than the half variable...
    if (sum > half) {
      // return the result array
      return res;
    }
  }
};

// console.log(minSubsequence([4,3,10,9,8])); // [10, 9]
// console.log(minSubsequence([4,4,7,6,7])); // [7, 7, 6]
// console.log(minSubsequence([6])); // [6]
