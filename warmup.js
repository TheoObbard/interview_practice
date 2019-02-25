// quicksort

function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = arr.filter((el) => el < pivot);
  let right = arr.filter((el) => el > pivot);

  return quicksort(left).concat([pivot]).concat(quicksort(right));
}

let test = [9, 4, 8, 2, 5, 6, 7, 1, 0];

// console.log(quicksort(test))