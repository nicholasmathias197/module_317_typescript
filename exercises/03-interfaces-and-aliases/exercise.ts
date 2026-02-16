// ============================================
// Exercise 03: Interfaces & Type Aliases
// ============================================
// Instructions: Define interfaces and type aliases as described.
// Create objects that conform to those types.
// Run this file with: tsx exercises/03-interfaces-and-aliases/exercise.ts
// ============================================

// 1. Define an interface `Product` with:
//    - id: number
//    - name: string
//    - price: number
//    - inStock: boolean
// YOUR CODE HERE

// 2. Create a variable `laptop` of type Product with appropriate values.
// YOUR CODE HERE

// 3. Define an interface `User` with:
//    - id: number
//    - username: string
//    - email: string
//    - age (optional): number
// YOUR CODE HERE

// 4. Create two User objects — one WITH age, one WITHOUT.
// YOUR CODE HERE

// 5. Define an interface `Admin` that EXTENDS `User` and adds:
//    - role: string
//    - permissions: string[]
// YOUR CODE HERE

// 6. Create an Admin object.
// YOUR CODE HERE

// 7. Define a TYPE ALIAS called `ID` that can be either a string or a number.
// YOUR CODE HERE

// 8. Define a TYPE ALIAS called `Status` that is a literal type:
//    "active" | "inactive" | "banned"
// YOUR CODE HERE

// 9. Define an interface `Post` with:
//    - id: ID (use your type alias from #7)
//    - title: string
//    - content: string
//    - author: User (use your interface from #3)
//    - status: Status (use your type alias from #8)
// YOUR CODE HERE

// 10. Create a Post object and log it.
// YOUR CODE HERE

// ============================================
// Verification — uncomment when done:
// ============================================
// console.log("2:", laptop);
// console.log("4a:", userWithAge);
// console.log("4b:", userWithoutAge);
// console.log("6:", admin);
// console.log("10:", post);
