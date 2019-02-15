// given n, how many unique BST's could a range of 1...n make

var numTrees = function (n) {
  let range = [];
  let count = 1;
  while (count < n) {
    range.push(count);
    count++;
  }
  let sum = 0;
  for (let i = 0; i < range.length; i++) {
    let dup = range.slice();
    dup.splice(0);
    sum += makeTree(range[i], dup);
  }
  return sum;
};

function makeTree(root, arr) {
  if (arr.length === 1) {
    return 1;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let thing = arr.splice(i);
    if (thing.length === 2) {
      if (Math.min(thing) < el) {
        return 1;
      }
    }
    count += makeTree(el, thing);
  }
  return count;
}