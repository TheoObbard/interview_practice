
// reverse an integer, can be negative

var reverse = function(x) {
    let str = x + "";
    let negative = false;
    if (str[0] === '-') {
        negative = true;
        str = str.split('');
        str.shift();
        str = str.join('')
    }
    let arr = str.split('');
    let reved = arr.reverse()

    reved = reved.join('');
    let newNum = parseInt(reved);
    if (negative) {
        return newNum * -1;
    }
    return newNum;
};

console.log(reverse(-321));


var isPalindrome = function(x) {
    let str = x + "";
    let arr = str.split('');
    let backward = arr.reverse().join('');
    let forward = arr.reverse().join('')
    if (forward === backward) {
        return true;
    }
    return false;
};

//important node: calling .reverse() will actually reverse the arr not just the new variable


console.log(isPalindrome(-121));
