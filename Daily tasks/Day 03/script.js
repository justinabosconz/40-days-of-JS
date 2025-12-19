// 1. Odd or Even?
//  Take a number and find if the number is an odd or even number.
// Print the number and result in the console.

let x = Math.floor(Math.random() * 35) + 1;

x % 2 == 0
  ? console.log(`${x} is an even number.`)
  : console.log(`${x} is an odd number.`);

// 2. Do you have a driving License?
// Manage age as a variable.
//  Check if the age is elligible for a driving license and print it on the console accordingly.

let age = Math.floor(Math.random() * 35) + 1;

age >= 18
  ? console.log(`Your age is ${age}. You are eligible for a driving license.`)
  : console.log(
      `Your age is ${age}. You are not eligible for a driving license.`
    );

// 3. Calculate CTC with a Bonus.
//  You get 12,300 rupees as your monthly salary.
// You get a 20% bonus on your annual salary.
// How much money do you make per annum as a CTC?

let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;
let ctc = annualSalary + annualSalary * 0.2;
console.log(`Per annum CTC is ${ctc}.`);

// 4. Write a program for the Traffic Light Simulation.
//  Create a color variable.
// Based on the color variable's value print in the console if a traveller needs to STOP or GO.
// The Red color is for STOP and the Green color is for GO.

let color = null;
color = "Red";
if (color == "Red") {
  console.log("You need to STOP!");
} else if (color == "Green") {
  console.log("You can GO!");
}

// 5. Create an Electricity Bill Calculator.
// Create a units variable. Based on this value you will calculate the total electricity bill for a months.
// If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
// If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

function calculateElectricityBill(units) {
  let monthlyBill = units * 150;
  let AnnualBill = monthlyBill * 12;
  let billAfterDiscount = AnnualBill - AnnualBill * 0.2;
  console.log(`The annual bill is Rs${billAfterDiscount}`);
}
calculateElectricityBill(150);

// 6. Leap Year Checker
// Take year as input.
// Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

function isLeapYear(year) {
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return isLeap
    ? console.log(`${year} is a leap year.`)
    : console.log(`${year} is not a leap year.`);
}
isLeapYear(4);

// 7. Max of Three Numbers
// Take three numbers and assign them to variables p, q, and r.
// Now find the maximum of these three numbers using the comparison operators.

const p = 28;
const q = 13;
const r = 14;

p > q
  ? console.log(`${p} is highest.`)
  : q > r
  ? console.log(`${q} is highest.`)
  : r > p
  ? console.log(`${r} is highest.`)
  : console.log(`${p} is highest.`);

// 8. Bitwise Doubling
// Create a variable count and assign a value, say, 5.
// Now use the Bitwise shift operator to make the number double.
// Print it on the console.

let y = 5;
y = y << 1;
console.log(y);
