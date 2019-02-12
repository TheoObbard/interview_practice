// practicing with prototypal inheritance

// Ruby has a method .first which can be called on arrays and returns
// the first element in the array. JS does not, you have to index. 
// technically indexing is less lines but .first is easy. lets 
// make that work on js. 

// step 1) create an arr

let myArr = [1, 2, 3, 4, 5];

// step 2) see what .first returns 

// console.log(myArr.first)

// ^ undefined

// step 3) fix that problem 

Array.prototype.first = function() {
  let arr = this;
  return arr[0]
}

console.log(myArr.first());

// step 4) OOOOOOH WAAAAT IT WOOOORKS

// another prototypal inheritance example 

function Car(name) {
  this.name = name;
}

Car.prototype.start = function() {
  console.log(this.name + ' is starting, vroooom')
}

function Tesla(name) {
  Car.call(this, name);
}

Tesla.prototype = Object.create(Car.prototype);

let stella = new Car('stella');
let mick = new Tesla('mick');

console.log(stella.start())
mick.start();
