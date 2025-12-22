// 1. What will be the output of the following code and why?
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer(); // surprisingly the answer is Bob and not Alice. It's assigning the value when the funtion CP gets created.

// 2. What is the mistake in the code below?
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}
add(5);
add(10);
console.log(total); // variable is global scoped and manipulated inside function.

// 3. Create a function with a nested function and log a variable from the parent function.
function outer() {
  let name = "Justina";
  function inner() {
    console.log("Helo " + name);
  }
  inner();
}
outer();

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
function loop() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
console.log(i); // cannot access it outside. let is block scope.

// 5. Write a function that tries to access a variable declared inside another function.
function first() {
  let name = "justina";
  console.log(name);
}

function second() {
  console.log(name);
}
second(); // does not work.

// 6. What will be the output and why?
console.log(a);
let a = 10;
// It will say cannot access "a" as let only allocates memory but does not assign as undefined.

// 7. Where is the age variable accessible?
function showAge() {
  let age = 25;
  console.log(age);
} // answer is B: Only inside showAge

console.log(age);

// 8. What will be the output and explain the output?
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}
outer(); // output will be HI due to variable shadowing.

// 10. What will be the output and why?
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
// This is a closure so answer is -2. Every time it will reduce by 1.
