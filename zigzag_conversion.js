function zigzagConversion(str, len) {
  let mtx = [[null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null], [null, null, null, null, null, null, null]];
  // let count = 0;
  // while (count < len) {
  //   mtx.push(new Array(Math.floor(len/2)));
  //   count++;
  // }
  let col = 0;
  let up = false;
  let word = str.split('');
  let row = 0;
  while (word.length > 0) {
    if (!up) {
      mtx[row][col] = word.shift();
    }
    if (row === len - 1) {
      up = true;
    } else if (row === 0) {
      up = false;
    }
    if (up) { row -= 1 }
    if (!up) { row += 1 }
    if (up) {
      col += (len - 1) - row;
      mtx[row][col] = word.shift();
    }
  }
  let ans = [];
  mtx.forEach(row => {
    row.forEach(el => {
      if (el) {
        ans.push(el);
      }
    })
  }) 
  return ans.join('');
}

let inp = "PAYPALISHIRING"
// output should be "PINALSIGYAHRPI"

console.log(zigzagConversion(inp, 4))

function assert(str, str2) {
  let test = zigzagConversion(str, 4);
  return (test === str2)
}

console.log(assert('PAYPALISHIRING', 'PINALSIGYAHRPI'))