// in a row of trees, the i - th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

// Add one piece of fruit from this tree to your baskets.If you cannot, stop.
// Move to the next tree to the right of the current tree.If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure ?

const totalFruit = function (tree) {
  let finalCount = 0; 
  let currSet = {};
  let currCount = 0; 
  let currDistinctNums = 0;
  for (let i = 0; i < tree.length; i++) {
    if (currSet[tree[i]]) {
      currCount += 1;
    } else {
      if (currDistinctNums < 2) {
        currDistinctNums += 1;
        currSet[tree[i]] = true;
        currCount += 1;
      } else {
        if (finalCount < currCount) {
          finalCount = currCount;
        }
        currCount = 0;
        currSet = {};
      }
    }
  }
  return finalCount;
};