// 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

// {code
// code
// variable1 = "abc";
// code
// code
// variable2 = "def";
// code
// code
// variable3 = "ghi";}

// TDZ for variable1 is from starting of the code block until line 5.
// TDZ for variable2 is from starting of the code block until line 8.
// TDZ for variable3 is from starting of the code block until line 11.

//------------------------------------------------------------------------------------------------------------------//

// 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

// Hoisting means - variables memory is assigned (value is undefined if var) and functions is allocated to the memory.
// Then in the execution phase the value to the variable is assigned and function is executed.

console.log(count); // Outputs: undefined (Declaration hoisted, but not value)
var count = 5;
console.log(count); // Outputs: 5
