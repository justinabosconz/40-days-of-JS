// 1. Generate a Pyramid Pattern using Nested Loop as it is shown below:

let pattern = "";
for (let i = 1; i <= 5; i++) {
  pattern += "* ";
  console.log(pattern);
}

// 2. Craete Multiplication Table (Using for loop)
// Write a program to print the multiplication table of a given number up to 10.

let N = 3;

for (let i = 1, j = N; i <= 10; i++, j += N) {
  console.log(`${N} X ${i} = ${j}`);
}

// 3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.

let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2) {
    sum += i;
  }
}
console.log(sum);

// 4. Skipping Multiples of 3
// Write a program to print numbers from 1 to 20, but skip multiples of 3.

let Number = 3;
let limit = 20;
for (let i = 1; i <= limit; i++) {
  if (i % 3) {
    console.log(i);
  }
}

// 5. Reverse Digits of a Number (Using while loop)
// Write a program to reverse the digits of a given number using a while loop.

let text = 6789;
result = "";
for (let i = text.toString().length - 1; i >= 0; i--) {
  result += text.toString()[i];
}
console.log(result);

// 6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.

// for - is used when we know the number of iterations we want.
// while - is used intil the condition is true (can lead to infinite loops).
// do-while - executes the code at least once and then checks the condition.
