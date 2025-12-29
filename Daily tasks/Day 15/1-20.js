//  T-001: Create an array of 5 elements using the Array Constructor.
const elements = new Array("gold", "silver", "copper", "steel", "iron");
console.log(elements);

// T-002: Create an array of 3 empty slots.
const emptyArray = new Array(3);
console.log(emptyArray);

// T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig"];
console.log(fruits[fruits.length - 3]);

// T-004: Use the for loop on the above array to print elements in the odd index.
for (const element of fruits) {
  if (fruits.indexOf(element) % 2) console.log(element);
}

// T-005: Add one element at the front and the end of an array.
fruits.unshift("Guava");
fruits.push("Grapes");
console.log(fruits);

// T-006: Remove an element from the front and the end of an array.
fruits.pop();
fruits.shift();
console.log(fruits);

// T-007: Create an array containing the name of your favourite foods(10 foods).
// Destructure the 6th food element from the array using destructuring.
const foods = [
  "Pizza",
  "Lasagna",
  "Burger",
  "Noodles",
  "Dumplings",
  "Laska",
  "Dosa",
  "Biryani",
  "Chowmein",
  "Idli",
];
const [, , , , , , myFavFoodItem] = foods;
console.log(myFavFoodItem);

// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [, , ...myFavFoodItemList] = foods;
console.log(myFavFoodItemList);

// T-009: Clone an Array(Shallow cloning)
const anotherFoods = foods.slice();
console.log(anotherFoods);

// T-010: Empty an array using its length property
foods.length = 0;
console.log(foods);

// T-011: Create an array of 10 elements(number 1 to 10).
// Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let item of numberList) {
  if (item === 5) {
    numberList.length = 6;
    break;
  }
}
console.log(numberList);

// T-012: Create an Array of 10 elements. Use the splice() method to empty the array.
const vegies = new Array(
  "tomato",
  "potato",
  "onion",
  "beans",
  "cabbage",
  "peas",
  "beetroot",
  "lemon",
  "ginger",
  "garlic"
);
vegies.splice(0);
console.log(vegies);

// T-013: Create an Array of 10 elements. You can empty the array in multiple ways:
// using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method.
// Which among these methods are most efficient and why?
// Ans-The most efficient way of clearing an array is the .length=0 method. Rest all the other methods have more lines of code or parameters.

// T-014: What happens when you concatenate two empty arrays?
const arr1 = [];
const arr2 = [];
const arr3 = arr1.concat(arr2);
console.log(arr3); // Ans-It returns an empty array.

//  T-015: How can you check if a value is partially matching with any of the elements of an Array?
// Ans-array.some() method can check if a value is partially matching.

// T-016: What is the difference between the slice() and splice() methods?
// Ans-slice() is used to copy all or a part of an array. splice() is used to select, delete and append elements in existing array.

// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders.
// You must be doing this in an immutable way such that the source array never gets modified.
const products = new Array("DLXZ5475", "123Parts", "Zo45o");
const sortedProducts = products.toSorted();
const reversedProducts = products.toReversed();
console.log(sortedProducts);
console.log(reversedProducts);
console.log(products);

// T-018: Can you give examples of sparse and dense arrays?
// Ans-A dense array is a normal array where the indices hold value. arr = [1, 2, 3];
// A sparse array have holes and not all indices hold value. new Array(100) This array has 100 empty elements.

// T-019: Give a practical usages of the .fill() method
const templateColors = ["red", "white", "blue"];
templateColors.fill("pink");
console.log(templateColors);

// T-020: How to convert an array to a string?
const nameAlphabets = ["J", "U", "S", "T", "I", "N", "A"];
console.log(nameAlphabets.join(""));
