// 1. What will be the output of this code snippet and why?

let day = "Monday"; // The output will be printed from default as condition has upper case M where as switch case has lower case m.

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

// 2. Build an ATM Cash Withdrawal System
// Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100.
// Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

let withdrawAmount = "500";

if (withdrawAmount % 100 === 0) {
  console.log("Withdrawal successful.");
} else {
  console.log("Invalid amount.");
}

// 3. Build a Calculator with switch-case
// Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers.
// Print the output on the console.

let a = 10;
let b = 5;
let operator = "-";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid operator.");
}

// 4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:

// Children (<18 years): $3
// Adults (18 - 60 years): $10
// Seniors (60+ years): $8

// Write a program that prints the ticket price based on the person’s age.

let age = "61";

if (age > 60) {
  console.log(`Your age is ${age}. The ticket price for you is $8.`);
} else if (age > 17) {
  console.log(`Your age is ${age}. The ticket price for you is $10.`);
} else if (age < 18) {
  console.log(`Your age is ${age}. The ticket price for you is $3.`);
}

// 5. Horoscope Sign Checker
// Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month.
// Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

let birthMonth = "March";

switch (birthMonth) {
  case "January":
    console.log("Your zodiac is either Capricorn or Aquarius.");
    break;
  case "February":
    console.log("Your zodiac is either Aquarius or Pisces.");
    break;
  case "March":
    console.log("Your zodiac is either Pisces or Aries.");
    break;
  case "April":
    console.log("Your zodiac is either Aries or Taurus.");
    break;
  case "May":
    console.log("Your zodiac is either Taurus or Gemini.");
    break;
  case "June":
    console.log("Your zodiac is either Gemini or Cancer.");
    break;
  case "July":
    console.log("Your zodiac is either Cancer or Leo.");
    break;
  case "August":
    console.log("Your zodiac is either Leo or Virgo.");
    break;
  case "September":
    console.log("Your zodiac is either Virgo or Libra.");
    break;
  case "October":
    console.log("Your zodiac is either Libra or Scorpio.");
    break;
  case "November":
    console.log("Your zodiac is either Scorpio or Sagittarius.");
    break;
  case "December":
    console.log("Your zodiac is either Sagittarius or Capricorn.");
    break;
}

// 6. Which Triangle?
// A triangle has 3 sides. A Triangle type is determined by its sides:

// All sides equal is called, Equilateral Triangle.
// Two sides equal is called, Isosceles Triangle.
// All sides different is called, Scalene Triangle.
// Take the sides of a triangle as input and write a program to determine the triangle type.
// Change the inputs everytime manually to see if the output changes correctly.

let sideA = 15;
let sideB = 12;
let sideC = 15;

if (sideA == sideB && sideB == sideC) {
  console.log("This is an Equilateral Triangle.");
} else if (sideA == sideB || sideA == sideC || sideB == sideC) {
  console.log("This is an Isosceles Triangle.");
} else if (sideA != sideB || sideA != sideC || sideB != sideC) {
  console.log("This is a Scalene Triangle.");
}
