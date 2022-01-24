// Youtube Link - https://www.youtube.com/watch?v=xfrMupld-eQ
// LeetCode Link - https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  // create an empty object where we can store each value of num and its indicie as a key:value pair
  const hash = {};
  // loop through each value of the nums array
  for (let i = 0; i < nums.length; i++) {
    // calc the difference and set it to a variable
    let d = target - nums[i];
    // if the value of the difference is present in the hash object...
    if (hash[d] !== undefined) {
      // return the indices of the difference value in the hash (hash[d]), and the current indice (i)
      return [hash[d], i];
      // if the value of the difference is NOT present in the hash object...
    } else {
      // add the value of the current num and its indicie as a key:value pair to the hash object
      hash[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([3, 3], 6)); // [0, 1]
