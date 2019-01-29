// quicksort in place

function quicksortInPlace(arr) {
  let pivot = Math.floor(Math.random() * arr.length); 
  if (arr.length <= 1) {
    return arr;
  }
  [arr[pivot], arr[0]] = [arr[0], arr[pivot]]
  pivot = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      [arr[i], arr[pivot + 1]] = [arr[pivot + 1], arr[i]]
      pivot += 1;
    }
  }

  [arr[0], arr[pivot] = arr[pivot], arr[0]]
  quicksortInPlace(arr.slice(1, pivot));
  quicksortInPlace(arr.slice(pivot + 1));
  return arr;
};

let test = [9, 2, 8, 3, 7, 4, 6, 1, 5];

console.log(quicksortInPlace(test));

// function quicksort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let pivot = Math.floor(Math.random() * arr.length); 
//   let left = arr.filter((el) => el < arr[pivot])
//   let right = arr.filter((el) => el > arr[pivot])

//   return quicksort(left).concat([arr[pivot]]).concat(quicksort(right))

// }

// let test = [9, 2, 8, 3, 7, 4, 6, 1, 5];

// console.log(quicksort(test));



// function mergeSort(arr) {

// };

// function merge(left, right) {

// };

function post(node) {
  if (node.null) {
    return [];
  }

  let left = post(node.left);
  let right = post(node.right);

  return left.concat(right).push(node);
};

function dfs(node, target) {
  if (node.value === target) {
    return node;
  }

  dfs(node.left);
  dfs(node.right);
}