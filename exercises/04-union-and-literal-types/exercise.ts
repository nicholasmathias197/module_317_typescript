// ============================================
// Exercise 04: Union & Literal Types
// ============================================
// Instructions: Use union types and literal types as described.
// Run this file with: tsx exercises/04-union-and-literal-types/exercise.ts
// ============================================

// 1. Create a variable `id` that can be either a string or a number.
//    Assign it a number first, then reassign it to a string.
// YOUR CODE HERE

// 2. Create a type alias `Direction` that only allows: "up" | "down" | "left" | "right"
// YOUR CODE HERE

// 3. Create a function `move` that takes a Direction and logs "Moving <direction>".
// YOUR CODE HERE

// 4. Create a type alias `HttpStatus` that only allows: 200 | 301 | 404 | 500
// YOUR CODE HERE

// 5. Create a function `getStatusMessage` that takes an HttpStatus and returns a string:
//    200 → "OK"
//    301 → "Moved Permanently"
//    404 → "Not Found"
//    500 → "Internal Server Error"
// YOUR CODE HERE

// 6. Create these interfaces for a discriminated union:
//    - `SuccessResponse` with: { success: true, data: string }
//    - `ErrorResponse` with: { success: false, error: string }
//    - A type alias `ApiResponse` that is a union of both
// YOUR CODE HERE

// 7. Create a function `handleResponse` that takes an ApiResponse:
//    - If success is true, log "Data: <data>"
//    - If success is false, log "Error: <error>"
// YOUR CODE HERE

// 8. Create a type alias `Padding` that can be: number | string
//    Create a function `applyPadding` that takes a value (string) and padding (Padding):
//    - If padding is a number, return value padded with that many spaces on the left
//    - If padding is a string, return padding + value
// YOUR CODE HERE

// ============================================
// Verification — uncomment when done:
// ============================================
// console.log("1:", id);
// move("up");           // Moving up
// move("left");         // Moving left
// console.log("5:", getStatusMessage(200));  // OK
// console.log("5:", getStatusMessage(404));  // Not Found
// handleResponse({ success: true, data: "User data loaded" });
// handleResponse({ success: false, error: "Network timeout" });
// console.log("8:", applyPadding("hello", 4));       // "    hello"
// console.log("8:", applyPadding("hello", ">>> "));  // ">>> hello"
