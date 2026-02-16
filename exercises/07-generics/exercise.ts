// ============================================
// Exercise 07: Generics
// ============================================
// Instructions: Create generic functions and classes.
// Run this file with: tsx exercises/07-generics/exercise.ts
// ============================================

// 1. Create a generic function `identity<T>` that takes a value of type T
//    and returns it. Test with string, number, and boolean.
// YOUR CODE HERE

// 2. Create a generic function `getFirst<T>` that takes an array of T
//    and returns the first element (or undefined if empty).
// YOUR CODE HERE

// 3. Create a generic function `merge<T, U>` that takes two objects
//    and returns a merged object (use spread). Return type should be T & U.
// YOUR CODE HERE

// 4. Create a generic function `wrapInArray<T>` that takes a single value of type T
//    and returns it wrapped in an array: T[].
// YOUR CODE HERE

// 5. Create a generic interface `Pair<T, U>` with properties `first: T` and `second: U`.
//    Create a function `makePair<T, U>` that takes two parameters and returns a Pair.
// YOUR CODE HERE

// 6. Create a generic class `Stack<T>` with:
//    - private items: T[]
//    - push(item: T): void
//    - pop(): T | undefined
//    - peek(): T | undefined
//    - isEmpty(): boolean
//    - size(): number
// YOUR CODE HERE

// 7. CHALLENGE: Create a generic function `filterBy<T>` that takes:
//    - an array of T
//    - a key of T (use keyof T)
//    - a value to match
//    Returns all elements where element[key] === value.
//    Hint: The function signature might look like:
//    function filterBy<T>(arr: T[], key: keyof T, value: T[keyof T]): T[]
// YOUR CODE HERE

// ============================================
// Verification — uncomment when done:
// ============================================
// console.log("1:", identity<string>("hello"));       // "hello"
// console.log("1:", identity<number>(42));             // 42
// console.log("2:", getFirst([10, 20, 30]));           // 10
// console.log("2:", getFirst([]));                     // undefined
// console.log("3:", merge({ a: 1 }, { b: "two" }));   // { a: 1, b: "two" }
// console.log("4:", wrapInArray("hello"));             // ["hello"]
// console.log("4:", wrapInArray(42));                  // [42]
// console.log("5:", makePair("hello", 42));            // { first: "hello", second: 42 }

// const stack = new Stack<number>();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log("6 peek:", stack.peek());    // 3
// console.log("6 pop:", stack.pop());      // 3
// console.log("6 size:", stack.size());    // 2
// console.log("6 empty:", stack.isEmpty()); // false

// interface Person { name: string; age: number; city: string; }
// const people: Person[] = [
//   { name: "Alice", age: 30, city: "NYC" },
//   { name: "Bob", age: 25, city: "LA" },
//   { name: "Carol", age: 30, city: "NYC" },
//   { name: "Dave", age: 25, city: "Chicago" },
// ];
// console.log("7:", filterBy(people, "city", "NYC"));
// console.log("7:", filterBy(people, "age", 25));
