// 1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided"); // answer will be not provided because it's the nullish operator

// 2. What will happen if we try to modify a frozen object?
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); // No change will happen and a remain 1

// 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring
let persons = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

let { name } = persons;
let {
  company: { name: companyName },
} = persons;
let {
  company: {
    location: { city },
  },
} = persons;

console.log(name, companyName, city);

// 4. Build a Student Management System
// Store student details in an object (name, age, grades).
// Implement a method to calculate the average grade.

let student = {
  name: "Justina",
  age: 39,
  grades: {
    science: 94,
    maths: 85,
    english: 74,
    computer: 100,
    language: 63,
  },
  avgGrades: function () {
    let totalGrades = 0;
    for (let subject in this.grades) {
      totalGrades += this.grades[subject];
    }
    return totalGrades / Object.keys(this.grades).length;
  },
};
console.log(student.avgGrades());

// 5. Book Store Inventory System
// Store books in an object.
// Add functionality to check availability and restock books.

const library = {
  book1: "The Great Gatsby",
  book2: "1984",
  book3: "The Hobbit",
  book4: "To Kill a Mockingbird",
  isBookAvailable: function (book) {
    for (let key in this) {
      return this[key] == book
        ? `${book} is available in the library.`
        : `${book} is not available. It needs to be restocked.`;
    }
  },
};

console.log(library.isBookAvailable("40 days of JS"));

// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples
// Object.keys() returns an array of keys in an array and Object.entries converts an array into an object.

// 7. How do you check if an object has a certain property?
// Same as Answer 5, for in loop can be used.

// 8. What will be the output and why?
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name); // Output will be Doe because both the objects are referring to the same address in HEAP.

// 9. What’s the best way to deeply copy a nested object? Expalin with examples
// structuredClone(obj) is the way to deeply clone objects
let student2 = {
  name: "Justina",
  age: 39,
  grades: {
    science: 94,
    maths: 85,
    english: 74,
    computer: 100,
    language: 63,
  },
};
const student3 = structuredClone(student2); // deep cloning done
student2.grades.computer = 99; // grades changed for student 2
console.log(student3); // student 3 remains the cloned object as both are deeply cloned and not referring to the same address.

// 10. Loop and print values using Object destructuiring
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (let { name, address, age } of users) {
  console.log(`${name} lives at ${address} and is ${age} years old.`);
}
