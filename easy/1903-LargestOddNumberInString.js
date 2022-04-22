// Youtube Link - https://youtu.be/BL6u5HLRwoQ
// LeetCode Link - https://leetcode.com/problems/largest-odd-number-in-string/

var largestOddNumber = function (num) {
  // We want to loop starting at the digit in the ones column and make our way to the initial digit in the string
  for (let i = num.length - 1; i >= 0; i--) {
    // if the i indexed digit in num is odd, return num
    if (num[i] % 2 === 1) return num;
    // set num equal to num with its last digit sliced off
    num = num.slice(0, -1);
  }
  // if we have completed the loop and there are no odd digits then return an empy string
  return "";
};

console.log(largestOddNumber("1001")); // 1001
console.log(largestOddNumber("1002")); // 1
console.log(largestOddNumber("76543")); // 76543
console.log(largestOddNumber("76544")); // 765
