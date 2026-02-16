// ============================================
// Exercise 05: Type Narrowing
// ============================================
// Instructions: Use type guards to narrow types within functions.
// Run this file with: tsx exercises/05-type-narrowing/exercise.ts
// ============================================

// 1. Create a function `formatValue` that takes a parameter of type `string | number`.
//    - If it's a string, return it in uppercase.
//    - If it's a number, return it with 2 decimal places (use .toFixed(2)).
//    Use `typeof` for type narrowing.
// YOUR CODE HERE

// 2. Create two classes:
//    - `Dog` with a method `bark()` that returns "Woof!"
//    - `Cat` with a method `meow()` that returns "Meow!"
//    Then create a function `makeSound` that takes `Dog | Cat`
//    and returns the appropriate sound using `instanceof`.
// YOUR CODE HERE

// 3. Create interfaces:
//    - `Fish` with property `swim: () => string`
//    - `Bird` with property `fly: () => string`
//    Create a function `move` that takes `Fish | Bird`
//    and calls the appropriate method using the `in` operator.
// YOUR CODE HERE

// 4. Create a discriminated union:
//    - `Circle` with { kind: "circle", radius: number }
//    - `Rectangle` with { kind: "rectangle", width: number, height: number }
//    - `Triangle` with { kind: "triangle", base: number, height: number }
//    Type alias `Shape` is the union of all three.
//    Create a function `getArea` that computes the area using a switch on `kind`.
// YOUR CODE HERE

// 5. Create a custom type guard function `isString` that checks if a value is a string.
//    Then use it in a function `processInput` that takes `unknown`
//    and returns the string in uppercase or "Not a string" otherwise.
// YOUR CODE HERE

// 6. Create a function `getLength` that takes `string | string[] | null`.
//    - If null, return 0.
//    - If string, return the string length.
//    - If array, return the array length.
//    Use truthiness narrowing and typeof/Array.isArray.
// YOUR CODE HERE

// ============================================
// Verification — uncomment when done:
// ============================================
// console.log("1:", formatValue("hello"));      // "HELLO"
// console.log("1:", formatValue(3.14159));       // "3.14"
// console.log("2:", makeSound(new Dog()));       // "Woof!"
// console.log("2:", makeSound(new Cat()));       // "Meow!"
// const fish: Fish = { swim: () => "Swimming!" };
// const bird: Bird = { fly: () => "Flying!" };
// console.log("3:", move(fish));                 // "Swimming!"
// console.log("3:", move(bird));                 // "Flying!"
// console.log("4:", getArea({ kind: "circle", radius: 5 }));            // ~78.54
// console.log("4:", getArea({ kind: "rectangle", width: 4, height: 6 })); // 24
// console.log("4:", getArea({ kind: "triangle", base: 10, height: 5 }));  // 25
// console.log("5:", processInput("hello"));      // "HELLO"
// console.log("5:", processInput(42));            // "Not a string"
// console.log("6:", getLength("hello"));          // 5
// console.log("6:", getLength(["a", "b", "c"]));  // 3
// console.log("6:", getLength(null));              // 0
