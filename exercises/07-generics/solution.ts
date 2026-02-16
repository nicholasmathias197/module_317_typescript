// ============================================
// Exercise 07: Generics — SOLUTION
// ============================================

// 1. Generic identity function
function identity<T>(value: T): T {
  return value;
}

// 2. Generic getFirst
function getFirst<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

// 3. Generic merge
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// 4. Generic wrapInArray
function wrapInArray<T>(value: T): T[] {
  return [value];
}

// 5. Generic Pair interface and factory function
interface Pair<T, U> {
  first: T;
  second: U;
}

function makePair<T, U>(first: T, second: U): Pair<T, U> {
  return { first, second };
}

// 6. Generic Stack class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// 7. CHALLENGE: filterBy with keyof
function filterBy<T>(arr: T[], key: keyof T, value: T[keyof T]): T[] {
  return arr.filter((item) => item[key] === value);
}

// ============================================
// Verification
// ============================================
console.log("1:", identity<string>("hello"));
console.log("1:", identity<number>(42));
console.log("2:", getFirst([10, 20, 30]));
console.log("2:", getFirst([]));
console.log("3:", merge({ a: 1 }, { b: "two" }));
console.log("4:", wrapInArray("hello"));
console.log("4:", wrapInArray(42));
console.log("5:", makePair("hello", 42));

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("6 peek:", stack.peek());
console.log("6 pop:", stack.pop());
console.log("6 size:", stack.size());
console.log("6 empty:", stack.isEmpty());

interface Person {
  name: string;
  age: number;
  city: string;
}
const people: Person[] = [
  { name: "Alice", age: 30, city: "NYC" },
  { name: "Bob", age: 25, city: "LA" },
  { name: "Carol", age: 30, city: "NYC" },
  { name: "Dave", age: 25, city: "Chicago" },
];
console.log("7:", filterBy(people, "city", "NYC"));
console.log("7:", filterBy(people, "age", 25));
