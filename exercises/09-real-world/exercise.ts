// ============================================
// Exercise 09: Real-World Scenarios
// ============================================
// Instructions: Apply everything you've learned to solve realistic problems.
// Run this file with: tsx exercises/09-real-world/exercise.ts
// ============================================

// ---- SCENARIO 1: Todo App ----
// Create a complete type-safe Todo system:
//
// 1. Define a `Priority` type: "low" | "medium" | "high"
// 2. Define a `TodoStatus` type: "pending" | "in-progress" | "completed"
// 3. Define a `Todo` interface with:
//    - id: number
//    - title: string
//    - description (optional): string
//    - priority: Priority
//    - status: TodoStatus
//    - createdAt: Date
// 4. Create a class `TodoList` with:
//    - private todos: Todo[]
//    - addTodo(todo: Omit<Todo, "id" | "createdAt">): Todo  — auto-generates id and createdAt
//    - removeTodo(id: number): boolean
//    - getTodosByStatus(status: TodoStatus): Todo[]
//    - getTodosByPriority(priority: Priority): Todo[]
//    - updateStatus(id: number, status: TodoStatus): Todo | undefined
//    - getAllTodos(): Todo[]
// YOUR CODE HERE

// ---- SCENARIO 2: Generic API Response Handler ----
// Create a type-safe API response system:
//
// 1. Define a generic interface `ApiResponse<T>` with:
//    - success: boolean
//    - data?: T
//    - error?: string
//    - statusCode: number
// 2. Create a generic function `createSuccess<T>(data: T): ApiResponse<T>`
// 3. Create a function `createError(message: string, code: number): ApiResponse<never>`
// 4. Create a generic function `handleResponse<T>` that takes an ApiResponse<T>
//    and a callback `(data: T) => void`. If success, call the callback with data.
//    If error, log the error message.
// YOUR CODE HERE

// ---- SCENARIO 3: Event Emitter ----
// Create a type-safe event emitter:
//
// 1. Define an interface `EventMap` where keys are event names (strings)
//    and values are the callback parameter types. For example:
//    { click: { x: number; y: number }, resize: { width: number; height: number } }
// 2. Create a generic class `TypedEventEmitter<T extends Record<string, any>>` with:
//    - private listeners stored as a map of event name → array of callbacks
//    - on<K extends keyof T>(event: K, callback: (data: T[K]) => void): void
//    - emit<K extends keyof T>(event: K, data: T[K]): void
// YOUR CODE HERE

// ============================================
// Verification — uncomment when done:
// ============================================

// ---- Test Scenario 1 ----
// const todoList = new TodoList();
// const todo1 = todoList.addTodo({ title: "Learn TypeScript", priority: "high", status: "in-progress" });
// const todo2 = todoList.addTodo({ title: "Build a project", priority: "medium", status: "pending" });
// const todo3 = todoList.addTodo({ title: "Read docs", description: "TypeScript handbook", priority: "low", status: "pending" });
// console.log("All todos:", todoList.getAllTodos());
// console.log("High priority:", todoList.getTodosByPriority("high"));
// console.log("Pending:", todoList.getTodosByStatus("pending"));
// todoList.updateStatus(todo2.id, "in-progress");
// console.log("Updated:", todoList.getTodosByStatus("in-progress"));

// ---- Test Scenario 2 ----
// const successResponse = createSuccess({ name: "Alice", age: 30 });
// console.log("Success:", successResponse);
// const errorResponse = createError("Not found", 404);
// console.log("Error:", errorResponse);
// handleResponse(successResponse, (data) => console.log("Got data:", data));
// handleResponse(errorResponse, (data) => console.log("Got data:", data));

// ---- Test Scenario 3 ----
// interface MyEvents {
//   click: { x: number; y: number };
//   resize: { width: number; height: number };
//   message: { text: string; from: string };
// }
// const emitter = new TypedEventEmitter<MyEvents>();
// emitter.on("click", (data) => console.log(`Clicked at (${data.x}, ${data.y})`));
// emitter.on("resize", (data) => console.log(`Resized to ${data.width}x${data.height}`));
// emitter.on("message", (data) => console.log(`${data.from}: ${data.text}`));
// emitter.emit("click", { x: 100, y: 200 });
// emitter.emit("resize", { width: 1024, height: 768 });
// emitter.emit("message", { text: "Hello!", from: "Alice" });
