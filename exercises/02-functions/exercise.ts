// ============================================
// Exercise 02: Functions
// ============================================
// Instructions: Add type annotations to all function parameters and return types.
// Implement the function bodies where indicated.
// Run this file with: tsx exercises/02-functions/exercise.ts
// ============================================

// 1. Add parameter types and return type to this function
function add(a, b) {
  return a + b;
}

// 2. Add parameter types and return type to this function
function isEven(num) {
  return num % 2 === 0;
}

// 3. Add types. This function should return nothing (void).
function logMessage(message) {
  console.log(`[LOG]: ${message}`);
}

// 4. Add an OPTIONAL parameter `greeting` with a default value of "Hello".
//    Return type should be string.
function greet(name) {
  return `${name}!`;
}

// 5. Create a function called `multiply` that takes two numbers and returns their product.
//    Use arrow function syntax.
// YOUR CODE HERE

// 6. Create a function called `getFirst` that takes an array of strings
//    and returns the first element, or undefined if the array is empty.
//    (Hint: return type should be string | undefined)
// YOUR CODE HERE

// 7. Create a function called `describeAge` that takes a number `age`.
//    - If age < 13, return "child"
//    - If age < 20, return "teenager"
//    - Otherwise, return "adult"
//    Use a literal return type: "child" | "teenager" | "adult"
// YOUR CODE HERE

// 8. Create a function `repeat` that takes a string and a number,
//    and returns the string repeated that many times (use .repeat()).
// YOUR CODE HERE

// ============================================
// Verification — uncomment when done:
// ============================================
// console.log("1:", add(5, 3));              // 8
// console.log("2:", isEven(4));              // true
// logMessage("Testing");                     // [LOG]: Testing
// console.log("4:", greet("Alice"));         // Hello, Alice!
// console.log("4:", greet("Alice", "Hi"));   // Hi, Alice!
// console.log("5:", multiply(3, 7));         // 21
// console.log("6:", getFirst(["a", "b"]));   // "a"
// console.log("6:", getFirst([]));           // undefined
// console.log("7:", describeAge(10));        // "child"
// console.log("7:", describeAge(15));        // "teenager"
// console.log("7:", describeAge(25));        // "adult"
// console.log("8:", repeat("ha", 3));        // "hahaha"
