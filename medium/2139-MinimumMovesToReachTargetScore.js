// Youtube Link - https://www.youtube.com/watch?v=VehsFCXDd4c
// LeetCode Link - https://leetcode.com/problems/minimum-moves-to-reach-target-score/

var minMoves = function (target, maxDoubles) {
  // create a variable to count our moves
  let moves = 0;
  // loop while target is greater than 1. once we reach 1 we will have our answer
  while (target > 1) {
    // if we have any max doubles...
    if (maxDoubles > 0) {
      // and if the target is even...
      if (target % 2 === 0) {
        // set the target to half of its current value
        target /= 2;
        // and decrease the max doubles by one
        maxDoubles--;
        // if the target is odd..
      } else {
        // decrease the target by 1
        target--;
      }
      // after the conditional increase the moves counter by 1
      moves++;
      // if we don't have any maxDoubles...
    } else {
      // increase the moves by the value of target - 1
      moves += target - 1;
      // and set the target to 1 to short-circuit the loop
      target = 1;
    }
  }
  // return moves as our answer
  return moves;
};

console.log(minMoves(5, 0)); // 4
console.log(minMoves(19, 2)); // 7
console.log(minMoves(10, 4)); // 4
console.log(minMoves(999999999, 0)); // 999999998
