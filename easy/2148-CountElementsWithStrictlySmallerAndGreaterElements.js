<<<<<<< HEAD
// Youtube Link - https://youtu.be/BnmmeaBCLVQ
// LeetCode Link - https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

// loop solution
var countElementsLOOP = function (nums) {
  // set variables for the smallest and largest values in nums, also creat a count variable
  let low = Math.min(...nums),
    high = Math.max(...nums),
    count = 0;
  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // if the current iteration of nums is not equal to low AND not equal to high...
    if (nums[i] !== low && nums[i] !== high) {
      // increment the count by 1
      count++;
    }
  }
  // return the count as the answer
  return count;
};

// filter solution
var countElementsFILTER = function (nums) {
  // set variables for the smallest and largest values in nums
  let low = Math.min(...nums),
    high = Math.max(...nums);
  // return the length of a newly filtered nums array where we filter for numbers that are not equal to low AND not equal to high
  return nums.filter((i) => i !== low && i !== high).length;
};

// One-line soluton
var countElementsONELINE = (nums) =>
  nums.filter((i) => i !== Math.min(...nums) && i !== Math.max(...nums)).length;

// console.log(countElementsLOOP([11, 7, 2, 15])); // 2
// console.log(countElementsFILTER([-3, 3, 3, 90])); // 2
// console.log(countElementsONELINE([11, 7, 4, 15, 4])); // 3
=======
// Youtube Link - https://youtu.be/BnmmeaBCLVQ
// LeetCode Link - https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/

// loop solution
var countElementsLOOP = function (nums) {
  // set variables for the smallest and largest values in nums, also creat a count variable
  let low = Math.min(...nums),
    high = Math.max(...nums),
    count = 0;
  // loop through nums
  for (let i = 0; i < nums.length; i++) {
    // if the current iteration of nums is not equal to low AND not equal to high...
    if (nums[i] !== low && nums[i] !== high) {
      // increment the count by 1
      count++;
    }
  }
  // return the count as the answer
  return count;
};

// filter solution
var countElementsFILTER = function (nums) {
  // set variables for the smallest and largest values in nums
  let low = Math.min(...nums),
    high = Math.max(...nums);
  // return the length of a newly filtered nums array where we filter for numbers that are not equal to low AND not equal to high
  return nums.filter((i) => i !== low && i !== high).length;
};

// One-line soluton
var countElementsONELINE = (nums) =>
  nums.filter((i) => i !== Math.min(...nums) && i !== Math.max(...nums)).length;

console.log(countElementsLOOP([11, 7, 2, 15])); // 2
console.log(countElementsFILTER([-3, 3, 3, 90])); // 2
console.log(countElementsONELINE([11, 7, 4, 15, 4])); // 3
>>>>>>> 0e104d014f84408d2ab5e3cd5a43068a0aa80b1d
