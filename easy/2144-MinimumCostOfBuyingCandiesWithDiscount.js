// Youtube Link - https://youtu.be/tq50lXY171E
// LeetCode Link - https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/

var minimumCost = function (cost) {
  // sort the array in descending order
  cost.sort((a, b) => b - a);
  // create a variable to count the total starting at 0
  let total = 0;
  // loop through the cost array
  for (let i = 0; i < cost.length; i++) {
    // if the index + 1 is NOT divisible by 3...
    if ((i + 1) % 3 !== 0) {
      // add it to the total cost
      total += cost[i];
    }
    // if it is divisible by 3, then do nothing
  }
  return total;
};

console.log(minimumCost([1, 2, 3])); // 5
console.log(minimumCost([6, 5, 7, 9, 2, 2])); // 23
console.log(minimumCost([3, 3])); // 6

// One-line soluton
var minimumCostOneLine = (cost) =>
  cost
    .sort((a, b) => b - a)
    .reduce((a, b, i) => ((i + 1) % 3 !== 0 ? a + b : a + 0), 0);
