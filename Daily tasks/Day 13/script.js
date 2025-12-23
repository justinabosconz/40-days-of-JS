// 1. Create a table of two columns, situation and value. Now add the rows for every situations and the value of this in that situation.
// • Situation • Value
// • At the Global • This is the window object but undefined if used in strict mode
// • Inside an Object Method • if function then refers to the object, but if it’s arrow then refers to window object
// • Inside the Satandalone non-Arrow Function • Refers to window object
// • Inside an Arrow Function(standalone) • Refers to window object
// • Inside an Arrow Function(as object method) • Refers to window object unless there is an outer function covering the arrow function
// • Inside an object created with the Constructor Function • Refers to object

// 2. What is the problem here? Fix it to log the correct name and explain the fix
const user = {
  name: "tapaScript",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
// Changed it to normal function so this refers to its own object.
// Arrow function refers to parent object which is the window object in this case.

// 3.Can you explain what is the problem here and fix the issue to log the correct name?
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
console.log(greetFn.call(obj));
// When we save the function into a variable it gets converted to a stand alone function and this refers to window object
// Object is binded for this to refer to the object

// 4. What is the problem with the following code? Why isn't it logging the name correctly?
const user2 = {
  name: "Alex",
  greet: function () {
    let inner = () => {
      console.log(`Hello, ${this.name}!`);
    };
    inner();
  },
};

console.log(user2.greet());
//inner function is not an arrow function hence it's looking for the object reference in its own scope which is missing in the outer function.
// to fix this the inner function can be made an arrow function

// 5. Create a Sports constructor function that takes name and number of players as arguments and assigns them using this keyword.
// Then, create two sports instances and log their details

const Sports = function (name, numberOfPlayers) {
  (this.name = name), (this.numberOfPlayers = numberOfPlayers);
};

const sports1 = new Sports("Hockey", 12);
const sports2 = new Sports("Cricket", 12);
console.log(sports1, sports2);

// 6. Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

console.log(car1.describe.call(car2)); // solution one
console.log(car1.describe.apply(car2)); // solution two
let describeCar = car1.describe.bind(car2); // solution three
console.log(describeCar());

// 7. What will be the output of the following code and why?
const person = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
//Answer is B: "Charlie" and undefined
// sayHello will print Charlie as this refers to the object which is in its own scope as per the rule.
// sayHello Arrow will print undefined as this refers to window object which is its parent object as per the rule.
