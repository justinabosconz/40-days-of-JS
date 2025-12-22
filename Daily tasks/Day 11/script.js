// 1. What will be the output of the following code and why?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // Answer here will be 1.
counter(); // answer will be 2 because being a closure, the inner function remembers the count value and closes on the updated value.

// 2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()()); // answer will be 100 but if we execute this again, the answer will remain 100
// because x is not being updated to the new value after multiplication. It should say x*=x

// 3. Create a button dynamically and attach a click event handler using a closure.
// The handler should count and log how many times the button was clicked.
function clickCount() {
  let clicks = 0;
  document.getElementById("button").addEventListener("click", function () {
    clicks++;
    console.log(`The button was clicked ${clicks} times.`);
  });
}
clickCount();

// 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
function createMultiplier(a) {
  return function (b) {
    console.log(a * b);
  };
}
createMultiplier(2)(5);

// 5. What happens if a closure references an object?
// Answer - ii. The object remains in memory as long as the closure exists

// 6. Write a function factory of counter to increment, decrement, and reset a counter.
// Use closure to refer the count value across the functuions.

function counters() {
  let count = 0;
  return (countingMethods = {
    increment: () => {
      count++;
      console.log(count);
    },
    decrement: () => {
      count--;
      console.log(count);
    },
    reset: () => {
      count = 0;
      console.log(count);
    },
  });
}
let countingFactory = counters();
countingFactory.increment();
countingFactory.increment();
countingFactory.decrement();
countingFactory.reset();
countingFactory.increment();
