// ============================================
// Exercise 08: Type Composition
// ============================================
// Instructions: Practice intersections, utility types, and advanced type patterns.
// Run this file with: tsx exercises/08-type-composition/exercise.ts
// ============================================

// 1. Create two interfaces:
//    - `HasName` with property `name: string`
//    - `HasEmail` with property `email: string`
//    Use an INTERSECTION type to create a type `Contact` that has both name and email.
//    Create a Contact object.
// YOUR CODE HERE

// 2. Use the built-in `Partial<T>` utility type:
//    Given the interface below, create a function `updateUser` that takes
//    a User and a Partial<User>, and returns a new merged User object.
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
// YOUR CODE HERE

// 3. Use the built-in `Pick<T, K>` utility type:
//    Create a type `UserPreview` that only contains `id` and `name` from User.
//    Create a function `toPreview` that takes a User and returns a UserPreview.
// YOUR CODE HERE

// 4. Use the built-in `Omit<T, K>` utility type:
//    Create a type `CreateUserInput` that is User WITHOUT the `id` property.
//    Create a function `createUser` that takes CreateUserInput and returns a full User
//    (generate an id using Date.now()).
// YOUR CODE HERE

// 5. Use the built-in `Record<K, V>` utility type:
//    Create a type `PhoneBook` that is Record<string, string> (name → phone number).
//    Create a function `lookupPhone` that takes a PhoneBook and a name,
//    and returns the phone number or "Not found".
// YOUR CODE HERE

// 6. Use `Required<T>`:
//    Given the interface below, create a type `StrictConfig` where ALL properties are required.
interface Config {
  host?: string;
  port?: number;
  debug?: boolean;
}
// YOUR CODE HERE

// 7. Use `Readonly<T>`:
//    Create a type `FrozenUser` from User where all properties are readonly.
//    Try to modify a property — it should error.
// YOUR CODE HERE

// ============================================
// Verification — uncomment when done:
// ============================================
// const contact: Contact = { name: "Alice", email: "alice@mail.com" };
// console.log("1:", contact);

// const user: User = { id: 1, name: "Alice", email: "alice@mail.com", age: 30 };
// const updated = updateUser(user, { name: "Alicia", age: 31 });
// console.log("2:", updated);

// const preview = toPreview(user);
// console.log("3:", preview);  // { id: 1, name: "Alice" }

// const newUser = createUser({ name: "Bob", email: "bob@mail.com", age: 25 });
// console.log("4:", newUser);

// const phonebook: PhoneBook = { Alice: "555-1234", Bob: "555-5678" };
// console.log("5:", lookupPhone(phonebook, "Alice"));  // "555-1234"
// console.log("5:", lookupPhone(phonebook, "Carol"));  // "Not found"

// const strictConfig: StrictConfig = { host: "localhost", port: 3000, debug: true };
// console.log("6:", strictConfig);

// const frozen: FrozenUser = { id: 1, name: "Alice", email: "a@b.com", age: 30 };
// // frozen.name = "Bob"; // ❌ Should error
// console.log("7:", frozen);
