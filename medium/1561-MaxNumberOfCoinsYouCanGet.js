// Youtube Link - https://youtu.be/KIRrp_fwI_s
// LeetCode Link - https://leetcode.com/problems/maximum-number-of-coins-you-can-get/

var maxCoins = function (piles) {
  // create a result variable to keep track of our piles
  // create a length variable set to 2/3s the length of the piles array
  let res = 0,
    len = piles.length * (2 / 3);
  // sort the piles array in decending order
  piles.sort((a, b) => b - a);
  // loop through the piles starting at 1, ending at 2/3s the length of the piles array, and incrementing by 2 so we only look at the odd indexes
  for (let i = 1; i < len; i += 2) {
    // increase our result variable by the piles index value
    res += piles[i];
  }
  // return res as our answer
  return res;
};

var maxCoinsONELINE = (piles) =>
  piles
    .sort((a, b) => {
      return b - a;
    })
    .reduce(
      (a, b, i) => (i % 2 === 1 && i < piles.length * (2 / 3) ? a + b : a + 0),
      0
    );

console.log(maxCoins([2, 4, 1, 2, 7, 8])); // 9
console.log(maxCoins([2, 4, 5])); // 4
console.log(maxCoinsONELINE([9, 8, 7, 6, 5, 1, 2, 3, 4])); // 18
