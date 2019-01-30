// Tricks to simplify things JS doesn't make super easy

// 1) Get unique elements of arr - you could do this iteritively which is simple but 
// in an interview you may just want a quick one liner so you can spend more time 
// showing off your logic. Heres a super simple way that works in ES6: 

function unique(arr) {
  return [...new Set(arr)];
}

console.log(unique([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 6]));

// above is done in a func to test but it can be done anywhere by just setting a
// variable to an array, spreading in a new Set and instantiating it with the original 
// arr. 



// 2) Get max from an array - again this can be done simply but is a pain to code out.
// Here is a very simple implementation. 

function max(arr) {
  return arr.reduce((a, b) => {
    return Math.max(a, b)
  })
}

console.log(max([1, 2, 3, 4, 5, 90, 6]));

// and again, it's done in a func here but you can just reduce, pass it a and b, and 
// then return Math.max of a and b in a callback. 