// given an arr of ints, tell what 3 will sum to 0

function threeSum(arr, x) {


  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      if (sum === x) {
        ans.push([i, start, end])
        break;
      } else if (sum < x) {
        start += 1;
      } else {
        end -= 1;
      }
    }
  }
  return ans;
}


let test = [2, -1, 4, -6];

// ans = [0, 2, 3]

console.log(threeSum(test, 0));
