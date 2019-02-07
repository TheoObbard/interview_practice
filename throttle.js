function throttle(func, timeLimit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= timeLimit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, timeLimit - Date.now() - lastRan);
    }
  }
}

let colorChange = throttle(function() {
  // get element of button and change it's color randomly
}, 2000)
  // ever 2 seconds