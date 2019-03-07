
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
