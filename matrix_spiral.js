var spiralOrder = function (matrix) {

  let ans = [];
  matrix[0].forEach(el => {
    ans.push(el);
  });
  matrix.shift()

  if (matrix.length === 0) {
    return ans;
  }

  matrix.forEach(arr => {
    let el = arr.pop();
    ans.push(el);
  });

  if (matrix.length === 0) {
    return ans;
  }

  let lastArr = matrix[matrix.length - 1];
  for (let i = lastArr.length - 1; i >= 0; i--) {
    let el = lastArr[i];
    ans.push(el)
  }
  matrix.pop()

  if (matrix.length === 0) {
    return ans;
  }

  for (let i = matrix.length - 1; i >= 0; i--) {
    let arr = matrix[i];
    let el = arr.shift();
    ans.push(el)
  }

  return ans.concat(spiralOrder(matrix))
};

let test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

