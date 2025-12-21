// 1. Write a Function to Convert Celsius to Fahrenheit
// Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit.
// Formula: (Celsius * 9/5) + 32 = Fahrenheit

function celsiusToFahrenheit(celsius) {
  fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(100));

// 2. Create a Function to Find the Maximum of Two Numbers
// Write a function findMax(num1, num2) that returns the larger of the two numbers.
// It should work for negative numbers as well.

function findMax(num1, num2) {
  num1 > num2 ? (result = num1) : (result = num2);
  return result;
}

console.log(findMax(50, -10));

// 3. Function to Check if a String is a Palindrome
// Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward).
// You can not use any string function that we have not learned in the series so far.

function isPalindrome(text) {
  let rightToLeft = "";
  for (i = text.length - 1; i >= 0; i--) {
    rightToLeft += text[i];
  }
  text == rightToLeft
    ? console.log(`${text} is a palindrome.`)
    : console.log(`${text} is not a palindrome.`);
}

isPalindrome("hannah");

// 4. Write a Function to Find Factorial of a Number
// Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1

function factorial(n) {
  let factorial = 1;
  for (i = n; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5));

// 5. Write a function to Count Vowels in a String
// Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("vowel"));

// 6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
// Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word.
// You can use the toUpperCase() method of string to convert the lowercase to uppercase.

function capitalizeWords(sentence) {
  let newString = "";
  for (let i = 0; i < sentence.length; i++) {
    i == 0 || sentence[i - 1] == " "
      ? (newString += sentence[i].toUpperCase())
      : (newString += sentence[i]);
  }
  console.log(newString);
}

capitalizeWords("i love learning javascript.");

// 7. Use an IIFE to Print “Hello, JavaScript!”
// Write an IIFE that prints "Hello, JavaScript!" to the console.
// Here the Second word must be supplied using paramneter and argument.

(function (word) {
  console.log(`Hello, ${word}!`);
})("Javascript");

// 8. Create a Simple Callback Function
// Write a function greet(name, callback), where callback prints a message using the name parameter.

function greet(name, callback) {
  callback(name);
}

// 9. Create Call Stack Execution Diagram for this flow
/* 
-------
 f1();
-------
 f2();  
 */

// 10. Create Call Stack Execution Diagram for this flow
/* 
-------
 f1(); Finally f1 executes alone.
-------
 f1(); 
-------
 f3(); When f1 and then f3 executes, it moves out of the call stack.
-------
 f2(); When f2 executes, it moves out of the call stack.

 */
