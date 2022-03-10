// Youtube Link - https://youtu.be/BLok46u3fJo
// LeetCode Link - https://leetcode.com/problems/k-diff-pairs-in-an-array/

var findPairs = function (nums, k) {
  // create an empty object that will store every value we have previously checked. Create a counter for the amount of pairs
  let prev = {},
    pairs = 0;
  // sort the nums array in ascending order
  nums.sort((a, b) => a - b);
  // loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    // create a variable 'key' that is set to the 'i'th index number in nums
    let key = nums[i];
    // check if 'key' is NOT already in the 'prev' object
    if (!prev[key]) {
      // create a variable 'dif' that is set to the difference of 'key' minus 'k'
      let dif = key - k;
      // check if 'dif' is present in the 'prev' object. If so, increate 'pairs' by 1
      if (prev[dif] !== undefined) {
        pairs++;
      }
      // add the 'key' to the 'prev' object with a value of 1
      prev[key] = 1;
      // edge case. Check if 'k' is === 0
    } else if (k === 0) {
      // check if 'key' is present in the 'prev' object with a value of 1, if so increase 'pairs' by 1
      if (prev[key] === 1) {
        pairs++;
      }
      // increase the value of 'key' in the 'prev' object by 1
      prev[key]++;
    }
  }
  // after the loop return 'pairs' as the answer
  return pairs;
};

// console.log(findPairs([3,1,4,1,5], 2)); // 2
// console.log(findPairs([1,2,3,4,5], 1)); // 4
// console.log(findPairs([1,3,1,5,4], 0)); // 1
