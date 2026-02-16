// ============================================
// Exercise 01: Basic Types — SOLUTION
// ============================================

// 1. Annotate as a string
let greeting: string = "Hello, TypeScript!";

// 2. Annotate as a number
let age: number = 25;

// 3. Annotate as a boolean
let isStudent: boolean = true;

// 4. Annotate as an array of numbers
let scores: number[] = [95, 87, 73, 100, 68];

// 5. Annotate as an array of strings
let colors: string[] = ["red", "green", "blue"];

// 6. This variable should be a number — fixed the value from "19.99" to 19.99
let price: number = 19.99;

// 7. Annotate this tuple: [string, number, boolean]
let userInfo: [string, number, boolean] = ["Alice", 30, true];

// 8. Create a variable called `nothing` that is explicitly typed as `null`
let nothing: null = null;

// 9. Create a variable called `notSure` typed as `unknown` and assign it the string "mystery"
let notSure: unknown = "mystery";

// 10. Create a variable `coordinates` typed as an array of number tuples [number, number]
let coordinates: [number, number][] = [
  [40.7128, -74.006],
  [34.0522, -118.2437],
];

// ============================================
// Verification
// ============================================
console.log("1:", greeting);
console.log("2:", age);
console.log("3:", isStudent);
console.log("4:", scores);
console.log("5:", colors);
console.log("6:", price);
console.log("7:", userInfo);
console.log("8:", nothing);
console.log("9:", notSure);
console.log("10:", coordinates);
