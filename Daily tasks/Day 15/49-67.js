//  T-049: Given the array-like object below, access the second element and log it:
const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log("T-049: ", arrayLike[1]);

// T-050: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
function convertArgsToArray() {
  return Array.from(arguments);
}
console.log("T-050: ", convertArgsToArray(5, 4, 6));

// T-051: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
// const allDivs = document.querySelectorAll("div");
// console.log("T-051: ", allDivs.from());

// T-052: Merge these two arrays into a single array:
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = arr1.concat(arr2);
console.log("T-052: ", arr3);

// T-053: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
const arrLikeObj = {
  0: "A",
  1: "A",
  2: "A",
  3: "A",
  4: "A",
  length: 5,
};
console.log("T-053: ", Array.from(arrLikeObj));

// T-054: Use Array.from to convert a string like "Hello" into an array of characters.
const str = "Hello";
console.log("T-054: ", Array.from(str));

// T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().
const fruits = ["apple", "banana", "apricot", "mango", "blueberry"];
const groupedFruits = Object.groupBy(fruits, (fruit) => {
  return fruit[0];
});
console.log("T-055: ", groupedFruits);

// T-057: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.
const arr = [3, 7, 3, 2, 3, 8, 7, 7];
const counts = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
const maxFreq = Math.max(...Object.values(counts));
const mostRepeated = Object.keys(counts)
  .filter((key) => counts[key] === maxFreq)
  .map(Number);
console.log("Most Repeated Number: ", mostRepeated.join(" and "));

//  T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].
const numList = [5, 2, 9, 1, 3, 6, 8];
const sortedList = numList.toSorted((prvValue, nextValue) => {
  return prvValue - nextValue;
});
let median = "";
numList.length % 2 === 0
  ? (median =
      (sortedList[numList.length / 2 - 1] + sortedList[numList.length / 2]) / 2)
  : (median = sortedList[numList.length / 2 - 0.5]);
console.log(`T-058: Median is ${median}.`);

//  T-059: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
const array1 = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const convertedArray = Object.fromEntries(array1);
console.log("T-059: ", convertedArray);

//  T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].
const inputArray = [
  ["a", "b"],
  ["c", "d"],
];
const convertedInputArray = inputArray.flatMap((i) => {
  return [i[0].toUpperCase(), i[1].toUpperCase()];
});
console.log("T-060: ", convertedInputArray);

//  T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
const fruitArray = ["apple", "banana", "apple", "mango", "banana", "banana"];
const convertObj = fruitArray.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] | 0) + 1;
  return acc;
}, {});
console.log("T-061:");
for (const [key, value] of Object.entries(convertObj)) {
  console.log(`${key} occurs ${value} times`);
}

//  T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
const alphabets = ["a", "b", "c", "d", "e"];
const slicedAlphabets = alphabets.slice(1, 4);
console.log("T-062: ", slicedAlphabets);

//  T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
const NumArray = [9, 3, 1, 6, 8];
const sortedArr = NumArray.toSorted();
console.log("T-063: ", sortedArr);

//  T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
const numberArray = [1, 2, 3, 4, 5];
const reversedArray = numberArray.toReversed();
console.log(reversedArray);

//  T-065: Group the follwing array elements based on age(Adult vs Non-Adult):
const users = [
  { name: "Alice", age: 55 },
  { name: "Bob", age: 3 },
  { name: "Charlie", age: 25 },
];
const groups = Object.groupBy(users, (person) => {
  return person.age >= 18 ? "Adult" : "Non-Adult";
});
console.log("T-065: ", groups);

//  T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";
let sentArray = sentence.split(" ");
let longestWord = "";
sentArray.forEach((word) => {
  if (word.length > longestWord.length) {
    return (longestWord = word);
  }
});
console.log(`T-066: The first longest word in the sentence is ${longestWord}.`);

//  T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
const list1 = [1, 2, 3, 4];
const list2 = [3, 4, 5, 6];

const commonEl = list1.filter((el) => list2.some((el2) => el === el2));
console.log("T-067: The common elements are", commonEl);
