// ============================================
// Exercise 09: Real-World Scenarios — SOLUTION
// ============================================

// ---- SCENARIO 1: Todo App ----

type Priority = "low" | "medium" | "high";
type TodoStatus = "pending" | "in-progress" | "completed";

interface Todo {
  id: number;
  title: string;
  description?: string;
  priority: Priority;
  status: TodoStatus;
  createdAt: Date;
}

class TodoList {
  private todos: Todo[] = [];
  private nextId: number = 1;

  addTodo(todo: Omit<Todo, "id" | "createdAt">): Todo {
    const newTodo: Todo = {
      ...todo,
      id: this.nextId++,
      createdAt: new Date(),
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  removeTodo(id: number): boolean {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) return false;
    this.todos.splice(index, 1);
    return true;
  }

  getTodosByStatus(status: TodoStatus): Todo[] {
    return this.todos.filter((t) => t.status === status);
  }

  getTodosByPriority(priority: Priority): Todo[] {
    return this.todos.filter((t) => t.priority === priority);
  }

  updateStatus(id: number, status: TodoStatus): Todo | undefined {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.status = status;
    }
    return todo;
  }

  getAllTodos(): Todo[] {
    return [...this.todos];
  }
}

// ---- SCENARIO 2: Generic API Response Handler ----

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  statusCode: number;
}

function createSuccess<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    data,
    statusCode: 200,
  };
}

function createError(message: string, code: number): ApiResponse<never> {
  return {
    success: false,
    error: message,
    statusCode: code,
  };
}

function handleResponse<T>(
  response: ApiResponse<T>,
  callback: (data: T) => void
): void {
  if (response.success && response.data !== undefined) {
    callback(response.data);
  } else {
    console.log(`Error (${response.statusCode}): ${response.error}`);
  }
}

// ---- SCENARIO 3: Event Emitter ----

class TypedEventEmitter<T extends Record<string, any>> {
  private listeners: {
    [K in keyof T]?: ((data: T[K]) => void)[];
  } = {};

  on<K extends keyof T>(event: K, callback: (data: T[K]) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(callback);
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      eventListeners.forEach((callback) => callback(data));
    }
  }
}

// ============================================
// Verification
// ============================================

// ---- Test Scenario 1 ----
const todoList = new TodoList();
const todo1 = todoList.addTodo({
  title: "Learn TypeScript",
  priority: "high",
  status: "in-progress",
});
const todo2 = todoList.addTodo({
  title: "Build a project",
  priority: "medium",
  status: "pending",
});
const todo3 = todoList.addTodo({
  title: "Read docs",
  description: "TypeScript handbook",
  priority: "low",
  status: "pending",
});
console.log("All todos:", todoList.getAllTodos());
console.log("High priority:", todoList.getTodosByPriority("high"));
console.log("Pending:", todoList.getTodosByStatus("pending"));
todoList.updateStatus(todo2.id, "in-progress");
console.log("Updated:", todoList.getTodosByStatus("in-progress"));

// ---- Test Scenario 2 ----
const successResponse = createSuccess({ name: "Alice", age: 30 });
console.log("Success:", successResponse);
const errorResponse = createError("Not found", 404);
console.log("Error:", errorResponse);
handleResponse(successResponse, (data) => console.log("Got data:", data));
handleResponse(errorResponse, (data) => console.log("Got data:", data));

// ---- Test Scenario 3 ----
interface MyEvents {
  click: { x: number; y: number };
  resize: { width: number; height: number };
  message: { text: string; from: string };
}

const emitter = new TypedEventEmitter<MyEvents>();
emitter.on("click", (data) =>
  console.log(`Clicked at (${data.x}, ${data.y})`)
);
emitter.on("resize", (data) =>
  console.log(`Resized to ${data.width}x${data.height}`)
);
emitter.on("message", (data) => console.log(`${data.from}: ${data.text}`));

emitter.emit("click", { x: 100, y: 200 });
emitter.emit("resize", { width: 1024, height: 768 });
emitter.emit("message", { text: "Hello!", from: "Alice" });
