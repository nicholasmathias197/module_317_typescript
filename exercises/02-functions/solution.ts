// ============================================
// Exercise 02: Functions — SOLUTION
// ============================================

// 1. Add parameter types and return type
function add(a: number, b: number): number {
  return a + b;
}

// 2. Add parameter types and return type
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// 3. Returns nothing (void)
function logMessage(message: string): void {
  console.log(`[LOG]: ${message}`);
}

// 4. Optional `greeting` parameter with default value
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}

// 5. Arrow function: multiply
const multiply = (a: number, b: number): number => a * b;

// 6. getFirst — returns string | undefined
function getFirst(arr: string[]): string | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

// 7. describeAge — literal return type
function describeAge(age: number): "child" | "teenager" | "adult" {
  if (age < 13) return "child";
  if (age < 20) return "teenager";
  return "adult";
}

// 8. repeat
function repeat(str: string, times: number): string {
  return str.repeat(times);
}

// ============================================
// Verification
// ============================================
console.log("1:", add(5, 3));              // 8
console.log("2:", isEven(4));              // true
logMessage("Testing");                     // [LOG]: Testing
console.log("4:", greet("Alice"));         // Hello, Alice!
console.log("4:", greet("Alice", "Hi"));   // Hi, Alice!
console.log("5:", multiply(3, 7));         // 21
console.log("6:", getFirst(["a", "b"]));   // "a"
console.log("6:", getFirst([]));           // undefined
console.log("7:", describeAge(10));        // "child"
console.log("7:", describeAge(15));        // "teenager"
console.log("7:", describeAge(25));        // "adult"
console.log("8:", repeat("ha", 3));        // "hahaha"
