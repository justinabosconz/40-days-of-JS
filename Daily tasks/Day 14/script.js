// 1. What will be the output of the following code?
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}
// It'll print the Reference error line as p is not defined and error name is Reference error.

// 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance.
// If any condition fails, throw appropriate errors

let balance = 3000;
function processPayment(amount) {
  try {
    if (amount < 0) throw new Error("Amount is less than 0.");
    if (balance < amount) throw new Error("Amount is exceeding the balance.");
  } catch (error) {
    console.error(error.message);
  }
}

processPayment(5500);

// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

function UserError(message) {
  this.name = UserError;
  this.message = message;
}

function PaymentError(message) {
  this.name = PaymentError;
  this.message = message;
}

function ServerError(message) {
  this.name = ServerError;
  this.message = message;
}

function EmailError(message) {
  this.name = EmailError;
  this.message = message;
}

const password = "";
const payment = 10;
const amount = 0;
const data = "";
const email = "";

try {
  console.log("Initializing data...");
  if (!password) throw new UserError("You need to enter a password.");
  if (!(payment < amount)) throw new PaymentError("Insufficient balance.");
  if (!data) throw new ServerError("Unable to fetch the data.");
  if (!email.includes("@"))
    throw new EmailError("The email address entered is incorrect.");
} catch (error) {
  console.error(error);
}

// 4. Simulate an API call function fetchData(url).
// If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url) {
  console.log(url);
}

try {
  fetchData("www.google.com");
  if (url.startsWith("https")) throw new Error("Invalid URL");
} catch (error) {
  console.error("Invalid url entered. https missing.");
}

// 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

function ValidationError(message) {
  this.name = "Validation Error";
  this.message = message;
}

function validateUser(userInput) {
  try {
    if (userInput.username == "")
      throw new ValidationError("Username cannot be empty");
    if (userInput.age < 0)
      throw new ValidationError("Age must be a positive number.");
  } catch (error) {
    console.error(error.name, ": ", error.message);
  }
}

const userInput = { username: "", age: -2 };
validateUser(userInput);

// 6. Write a function readFile(filePath) that simulates reading a file.
// If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch.
// Make sure you have code to handle releasing the IO resources
// Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.

function readFile(filePath) {
  console.log(filePath);
}

try {
  readFile();
  console.log("Reading the file.");
  if (!filePath) throw new Error();
} catch (error) {
  console.error("File not found.");
} finally {
  console.log("Releasing the IO resources now.");
}

// 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse().
// If parsing fails, catch the error and return "Invalid JSON"

function parseJson(str) {
  JSON.parse(str);
}

try {
  parseJson("str");
} catch (error) {
  console.error("Invalid JSON");
}

// 8. What is the purpose of throw in JavaScript?
// It creates a new error manually

// 9. What does the finally block do in a try...catch statement?
// Runs regardless of whether an error occurs or not

// 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object
/* 
TRY - is used to execute the original or starting code where a possible error is expected or manual error is created.
CATCH - is used to catch the error (manual or JS generated) and print the error object
THROW - is used to create a manual error
RETHROW - is used to throw and handle another error after the first error is thrown
ERROR - is the object created by JS which contains name, message and stack with the error information
*/
