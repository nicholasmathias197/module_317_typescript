# TypeScript: A Comprehensive One-Day Course

## Table of Contents

1. [JavaScript vs. TypeScript](#javascript-vs-typescript)
   - [Introduction to TypeScript](#introduction-to-typescript)
   - [Static Typing](#static-typing)
   - [A JavaScript Superset](#a-javascript-superset)
   - [Type Errors at Runtime](#type-errors-at-runtime)
   - [Catching Mistakes with TypeScript](#catching-mistakes-with-typescript)
   - [Benefits of TypeScript](#benefits-of-typescript)
2. [Getting Started with TypeScript](#getting-started-with-typescript)
   - [TypeScript Installation](#typescript-installation)
   - [Available Types](#available-types)
   - [Compile-Time Error Checking](#compile-time-error-checking)
   - [Code Predictability](#code-predictability)
3. [TypeScript Techniques](#typescript-techniques)
   - [Defining Types](#defining-types)
   - [Structural Typing](#structural-typing)
   - [Type Assertions](#type-assertions)
   - [Access Modifiers](#access-modifiers)
   - [Aliases](#aliases)
   - [Type Composition](#type-composition)
   - [Type Narrowing](#type-narrowing)
4. [Conclusions](#conclusions)
   - [TypeScript Use Cases and Statistics](#typescript-use-cases-and-statistics)
   - [Disadvantages of TypeScript](#disadvantages-of-typescript)
   - [TypeScript Alternatives](#typescript-alternatives)

---

## JavaScript vs. TypeScript

### Introduction to TypeScript

TypeScript is a **statically-typed superset of JavaScript** developed and maintained by Microsoft. It adds optional type annotations, interfaces, generics, and other features on top of standard JavaScript. Every valid JavaScript program is also a valid TypeScript program, but TypeScript gives you additional tools to catch errors **before your code ever runs**.

TypeScript code compiles (or "transpiles") down to plain JavaScript, meaning it runs anywhere JavaScript runs: browsers, Node.js, Deno, serverless functions, etc.

**JavaScript (before TypeScript):**
```js
// We have no idea what types these parameters are
function greet(name, age) {
  return "Hello, " + name + "! You are " + age + " years old.";
}

// This works, but what if someone passes the wrong type?
greet("Alice", 30);      // "Hello, Alice! You are 30 years old."
greet(42, "oops");        // "Hello, 42! You are oops years old." — no error!
```

**TypeScript (after):**
```ts
function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

greet("Alice", 30);      // ✅ Works perfectly
greet(42, "oops");        // ❌ Error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

> **Key Takeaway:** TypeScript catches type mismatches at compile time, not at runtime.

---

### Static Typing

JavaScript is **dynamically typed** — variable types are determined at runtime. TypeScript introduces **static typing**, where types are checked at compile time.

**JavaScript — Dynamic Typing:**
```js
let message = "Hello";
message = 42;           // No error — JavaScript allows this
message = true;         // Still no error
console.log(message);   // true
```

**TypeScript — Static Typing:**
```ts
let message: string = "Hello";
message = 42;           // ❌ Error: Type 'number' is not assignable to type 'string'.
message = true;         // ❌ Error: Type 'boolean' is not assignable to type 'string'.
console.log(message);   // "Hello"
```

Even without explicit type annotations, TypeScript uses **type inference**:

```ts
let count = 10;         // TypeScript infers 'number'
count = "ten";          // ❌ Error: Type 'string' is not assignable to type 'number'.
```

---

### A JavaScript Superset

TypeScript is a **superset** of JavaScript. This means:

- All JavaScript code is valid TypeScript code.
- You can gradually adopt TypeScript in an existing project.
- TypeScript adds features **on top** of JavaScript — it never removes JavaScript functionality.

```
┌──────────────────────────────┐
│         TypeScript           │
│  ┌────────────────────────┐  │
│  │      JavaScript        │  │
│  │                        │  │
│  └────────────────────────┘  │
│  + Types, Interfaces,        │
│    Generics, Enums, etc.     │
└──────────────────────────────┘
```

**JavaScript (valid TypeScript):**
```js
// This is valid JavaScript AND valid TypeScript
const fruits = ["apple", "banana", "cherry"];
const upper = fruits.map(f => f.toUpperCase());
console.log(upper); // ["APPLE", "BANANA", "CHERRY"]
```

**TypeScript (with added types):**
```ts
// Same code, but with explicit type annotations
const fruits: string[] = ["apple", "banana", "cherry"];
const upper: string[] = fruits.map((f: string): string => f.toUpperCase());
console.log(upper); // ["APPLE", "BANANA", "CHERRY"]
```

---

### Type Errors at Runtime

In JavaScript, type errors often hide until the code actually executes — sometimes only in edge cases that are hard to test.

**JavaScript — Hidden Runtime Error:**
```js
function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea("10", 5);
console.log(area);        // 50 — works due to implicit coercion
console.log(typeof area); // "number"

const area2 = calculateArea("ten", 5);
console.log(area2);       // NaN — silent failure!

// Even worse — this might not be caught for weeks:
function getDiscount(price, discount) {
  return price - (price * discount);
}

getDiscount(100, "10%"); // NaN — no error, just wrong output
```

**TypeScript — Caught Before Runtime:**
```ts
function calculateArea(width: number, height: number): number {
  return width * height;
}

calculateArea("10", 5);    // ❌ Error: Argument of type 'string' is not assignable to 'number'.
calculateArea("ten", 5);   // ❌ Error: Same compile-time error.
calculateArea(10, 5);      // ✅ Returns 50

function getDiscount(price: number, discount: number): number {
  return price - (price * discount);
}

getDiscount(100, "10%");   // ❌ Error: Argument of type 'string' is not assignable to 'number'.
getDiscount(100, 0.10);    // ✅ Returns 90
```

---

### Catching Mistakes with TypeScript

TypeScript catches a wide range of common JavaScript mistakes:

**1. Typos in property names:**

```js
// JavaScript — no error, just undefined
const user = { name: "Alice", age: 30 };
console.log(user.nme); // undefined — typo goes unnoticed
```

```ts
// TypeScript — caught immediately
const user = { name: "Alice", age: 30 };
console.log(user.nme); // ❌ Property 'nme' does not exist on type '{ name: string; age: number; }'.
```

**2. Calling methods that don't exist:**

```js
// JavaScript — runtime crash
const value = "hello";
value.touppercase(); // TypeError: value.touppercase is not a function
```

```ts
// TypeScript — caught before running
const value: string = "hello";
value.touppercase(); // ❌ Property 'touppercase' does not exist. Did you mean 'toUpperCase'?
```

**3. Wrong number of arguments:**

```js
// JavaScript — extra args silently ignored, missing args become undefined
function add(a, b) { return a + b; }
add(1, 2, 3);     // 3 — third argument ignored
add(1);            // NaN — b is undefined
```

```ts
// TypeScript — both caught
function add(a: number, b: number): number { return a + b; }
add(1, 2, 3);     // ❌ Expected 2 arguments, but got 3.
add(1);            // ❌ Expected 2 arguments, but got 1.
```

**4. Null/undefined access:**

```js
// JavaScript — runtime crash
const items = [1, 2, 3];
const item = items.find(i => i > 5);
console.log(item.toFixed(2)); // TypeError: Cannot read property 'toFixed' of undefined
```

```ts
// TypeScript — caught at compile time
const items: number[] = [1, 2, 3];
const item = items.find(i => i > 5); // Type: number | undefined
console.log(item.toFixed(2)); // ❌ 'item' is possibly 'undefined'.

// Fix:
if (item !== undefined) {
  console.log(item.toFixed(2)); // ✅ Safe
}
```

---

### Benefits of TypeScript

| Benefit | Description |
|---------|-------------|
| **Early Error Detection** | Catch bugs at compile time, not in production |
| **Better IDE Support** | Autocomplete, inline docs, refactoring tools |
| **Self-Documenting Code** | Types serve as living documentation |
| **Safer Refactoring** | Change a type and see all affected code instantly |
| **Team Collaboration** | Types create clear contracts between modules |
| **Gradual Adoption** | Add types incrementally to existing JS projects |

---

## Getting Started with TypeScript

### TypeScript Installation

**Global Installation:**
```bash
npm install -g typescript
```

**Project-Level Installation (recommended):**
```bash
npm init -y
npm install --save-dev typescript
```

**Initialize a TypeScript config:**
```bash
npx tsc --init
```

This creates a `tsconfig.json` file. Key options:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

**Compile TypeScript:**
```bash
npx tsc                   # Compile all files based on tsconfig.json
npx tsc src/index.ts      # Compile a single file
npx tsc --watch           # Watch mode — recompile on changes
```

**Run TypeScript directly (without compiling):**
```bash
npm install -g ts-node
ts-node src/index.ts
```

Or with `tsx` (faster):
```bash
npm install -g tsx
tsx src/index.ts
```

---

### Available Types

TypeScript includes all JavaScript primitive types plus additional ones:

#### Primitive Types

```ts
// string
let firstName: string = "Alice";

// number (integers and floats)
let age: number = 30;
let price: number = 9.99;

// boolean
let isActive: boolean = true;

// null and undefined
let empty: null = null;
let notDefined: undefined = undefined;

// bigint
let bigNumber: bigint = 100n;

// symbol
let uniqueId: symbol = Symbol("id");
```

#### Object Types

```ts
// Object type annotation
let person: { name: string; age: number } = {
  name: "Alice",
  age: 30,
};

// Array types (two equivalent syntaxes)
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple — fixed-length, fixed-type array
let pair: [string, number] = ["Alice", 30];

// Enum
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let move: Direction = Direction.Up;
```

#### Special Types

```ts
// any — disables type checking (avoid if possible!)
let anything: any = "hello";
anything = 42;
anything = true;

// unknown — safer alternative to 'any'
let uncertain: unknown = "hello";
// uncertain.toUpperCase(); // ❌ Error — must narrow type first
if (typeof uncertain === "string") {
  uncertain.toUpperCase(); // ✅ Works after type guard
}

// void — function that returns nothing
function logMessage(msg: string): void {
  console.log(msg);
}

// never — function that never returns (throws or infinite loop)
function throwError(msg: string): never {
  throw new Error(msg);
}

// Type inference — TypeScript figures it out
let inferred = "hello"; // TypeScript infers: string
let nums = [1, 2, 3];   // TypeScript infers: number[]
```

**JavaScript comparison — no types at all:**
```js
let firstName = "Alice";   // Could be reassigned to anything
let age = 30;              // No guarantee it stays a number
let isActive = true;       // No enforcement
let person = { name: "Alice", age: 30 }; // Shape can change freely
```

---

### Compile-Time Error Checking

TypeScript's compiler (`tsc`) checks your code for errors **before** it runs:

**JavaScript — errors discovered at runtime:**
```js
function divide(a, b) {
  return a / b;
}

// This produces Infinity — no warning!
console.log(divide(10, 0));

// This produces NaN — no warning!
console.log(divide("hello", 2));
```

**TypeScript — errors caught at compile time:**
```ts
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

divide("hello", 2);  // ❌ Compile error: 'string' not assignable to 'number'
divide(10, 0);        // Compiles, but our runtime guard handles it
```

**How to use compile-time checking:**
```bash
# Check for errors without producing output files
npx tsc --noEmit

# Strict mode catches even more issues
npx tsc --strict --noEmit
```

---

### Code Predictability

TypeScript makes code more predictable by enforcing contracts:

**JavaScript — unpredictable:**
```js
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Shirt", price: 29.99 });
cart.addItem({ name: "Pants", prce: 49.99 }); // Typo! 'prce' instead of 'price'
console.log(cart.getTotal()); // NaN — bug is hidden
```

**TypeScript — predictable:**
```ts
interface CartItem {
  name: string;
  price: number;
}

class ShoppingCart {
  items: CartItem[] = [];

  addItem(item: CartItem): void {
    this.items.push(item);
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Shirt", price: 29.99 });
cart.addItem({ name: "Pants", prce: 49.99 }); // ❌ Error: 'prce' does not exist. Did you mean 'price'?
```

---

## TypeScript Techniques

### Defining Types

There are multiple ways to define types in TypeScript:

#### Interfaces

Interfaces define the **shape** of an object:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean;       // Optional property (? makes it optional)
  readonly createdAt: Date; // Cannot be modified after creation
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date(),
};

user.name = "Bob";       // ✅ Allowed
user.createdAt = new Date(); // ❌ Error: Cannot assign to 'createdAt' because it is a read-only property.
```

**JavaScript equivalent:**
```js
// No way to enforce this shape in JavaScript
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date(),
};

// Nothing prevents this:
user.createdAt = "not a date"; // No error
user.nonExistent = "oops";    // No error
```

#### Extending Interfaces

```ts
interface Animal {
  name: string;
  sound: string;
}

interface Dog extends Animal {
  breed: string;
  fetchBall(): void;
}

const myDog: Dog = {
  name: "Rex",
  sound: "Woof",
  breed: "German Shepherd",
  fetchBall() {
    console.log(`${this.name} fetches the ball!`);
  },
};
```

#### Function Types

```ts
// Function type with interface
interface MathFunction {
  (a: number, b: number): number;
}

const add: MathFunction = (a, b) => a + b;
const multiply: MathFunction = (a, b) => a * b;

// Arrow function type annotation
const greet: (name: string) => string = (name) => `Hello, ${name}!`;

// Function with optional and default parameters
function createUser(name: string, age: number, role: string = "user"): User {
  return { id: Date.now(), name, email: "", createdAt: new Date() };
}
```

---

### Structural Typing

TypeScript uses **structural typing** (also called "duck typing"). If it looks like a duck and quacks like a duck, it's a duck.

```ts
interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point): void {
  console.log(`(${p.x}, ${p.y})`);
}

// This object was never declared as a Point, but it has the right shape:
const myPoint = { x: 10, y: 20, z: 30 };
printPoint(myPoint); // ✅ Works! Has x and y, TypeScript is satisfied.

// Compare to a nominal type system (like Java) where this would NOT work
// because myPoint was not explicitly created as an instance of Point.
```

**Another example:**

```ts
interface HasLength {
  length: number;
}

function logLength(item: HasLength): void {
  console.log(`Length: ${item.length}`);
}

logLength("hello");       // ✅ string has .length
logLength([1, 2, 3]);     // ✅ array has .length
logLength({ length: 10 }); // ✅ object has .length property
logLength(42);            // ❌ number doesn't have .length
```

---

### Type Assertions

Type assertions tell the compiler "trust me, I know what this is." They don't change the runtime value.

```ts
// "as" syntax (preferred)
const inputElement = document.getElementById("username") as HTMLInputElement;
inputElement.value = "Alice"; // ✅ TypeScript knows this is an HTMLInputElement

// Angle bracket syntax (not available in JSX/TSX files)
const input = <HTMLInputElement>document.getElementById("username");

// Without assertion:
const element = document.getElementById("username"); // Type: HTMLElement | null
// element.value = "Alice"; // ❌ Error: Property 'value' does not exist on type 'HTMLElement'.
```

**When to use assertions:**

```ts
// ✅ Good — you know more than TypeScript
const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// ✅ Good — parsing JSON with known structure
interface Config {
  port: number;
  host: string;
}
const config = JSON.parse(configString) as Config;

// ❌ Bad — lying to the compiler
const num = "hello" as unknown as number; // Compiles but will cause runtime errors!
```

**Non-null assertion (postfix !):**
```ts
// Tells TypeScript the value is definitely not null/undefined
const element = document.getElementById("app")!; // Type: HTMLElement (not HTMLElement | null)

// Use with caution — if it IS null, you'll get a runtime error
```

---

### Access Modifiers

TypeScript adds **access modifiers** to classes, similar to Java or C#:

**JavaScript — no access control:**
```js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;   // Anyone can access and modify
    this._pin = 1234;         // Convention only — not enforced
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

const account = new BankAccount("Alice", 1000);
account.balance = 999999;     // No protection!
console.log(account._pin);    // Accessible despite the _ convention
```

**TypeScript — enforced access control:**
```ts
class BankAccount {
  public owner: string;           // Accessible everywhere (default)
  protected balance: number;      // Accessible in this class and subclasses
  private pin: number;            // Accessible only in this class
  readonly accountNumber: string; // Cannot be changed after initialization

  constructor(owner: string, balance: number, pin: number) {
    this.owner = owner;
    this.balance = balance;
    this.pin = pin;
    this.accountNumber = `ACC-${Date.now()}`;
  }

  public getBalance(): number {
    return this.balance;
  }

  private validatePin(inputPin: number): boolean {
    return this.pin === inputPin;
  }

  public withdraw(amount: number, inputPin: number): void {
    if (!this.validatePin(inputPin)) {
      throw new Error("Invalid PIN");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
  }
}

const account = new BankAccount("Alice", 1000, 1234);
console.log(account.owner);        // ✅ public
console.log(account.balance);      // ❌ Error: 'balance' is protected
console.log(account.pin);          // ❌ Error: 'pin' is private
account.accountNumber = "HACKED";  // ❌ Error: Cannot assign to 'accountNumber' — readonly

// Shorthand constructor (parameter properties):
class BankAccountShort {
  readonly accountNumber = `ACC-${Date.now()}`;

  constructor(
    public owner: string,
    protected balance: number,
    private pin: number
  ) {}
}
```

---

### Aliases

**Type aliases** create a custom name for a type. Great for reusability and readability:

```ts
// Simple alias
type ID = string | number;

// Object type alias
type User = {
  id: ID;
  name: string;
  email: string;
};

// Function type alias
type Callback = (data: string) => void;

// Tuple alias
type Coordinate = [number, number];

// Literal type alias
type Direction = "north" | "south" | "east" | "west";
type HttpStatus = 200 | 301 | 404 | 500;
```

**Type Aliases vs. Interfaces:**

```ts
// Both can describe object shapes:
type UserType = { name: string; age: number };
interface UserInterface { name: string; age: number }

// Interfaces can be extended:
interface Admin extends UserInterface { role: string }

// Type aliases can use unions and intersections:
type Admin2 = UserType & { role: string };
type StringOrNumber = string | number; // Can't do this with an interface

// Interfaces can be merged (declaration merging):
interface Window { myCustomProp: string }
// Type aliases CANNOT be merged — redeclaring causes an error
```

**Rule of thumb:** Use `interface` for object shapes you might extend. Use `type` for unions, tuples, and everything else.

---

### Type Composition

Combine types to create more complex types:

#### Union Types ( `|` )

A value can be **one of several types**:

```ts
// JavaScript — no enforcement
function formatId(id) {
  return "ID: " + id;
}
formatId(123);      // Works
formatId("abc");    // Works
formatId(true);     // Works... but shouldn't

// TypeScript — union type
function formatId(id: string | number): string {
  return `ID: ${id}`;
}
formatId(123);      // ✅
formatId("abc");    // ✅
formatId(true);     // ❌ Error: 'boolean' is not assignable to 'string | number'
```

#### Intersection Types ( `&` )

A value must satisfy **all combined types**:

```ts
interface HasName {
  name: string;
}

interface HasAge {
  age: number;
}

type Person = HasName & HasAge;

const person: Person = {
  name: "Alice",
  age: 30,
}; // ✅ Must have BOTH name and age

const partial: Person = {
  name: "Bob",
}; // ❌ Error: Property 'age' is missing
```

#### Literal Types

Restrict a value to specific **exact values**:

```ts
// JavaScript
let status = "active"; // Could be changed to anything

// TypeScript — literal types
type Status = "active" | "inactive" | "pending";
let status: Status = "active";   // ✅
status = "inactive";             // ✅
status = "deleted";              // ❌ Error: '"deleted"' is not assignable to type 'Status'.

// Literal types with numbers
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let roll: DiceRoll = 3;    // ✅
roll = 7;                   // ❌

// Combined with other types
type Theme = "light" | "dark";
type FontSize = "small" | "medium" | "large";

interface AppSettings {
  theme: Theme;
  fontSize: FontSize;
  notifications: boolean;
}
```

#### Discriminated Unions

A powerful pattern combining union types with a common discriminant property:

```ts
interface Circle {
  kind: "circle";
  radius: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

type Shape = Circle | Rectangle | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}

getArea({ kind: "circle", radius: 5 });           // 78.54
getArea({ kind: "rectangle", width: 10, height: 5 }); // 50
```

---

### Type Narrowing

**Type narrowing** is the process of refining a broad type to a more specific one within a code block. TypeScript is smart about understanding control flow.

#### typeof Guards

```ts
function padLeft(value: string, padding: string | number): string {
  // TypeScript knows 'padding' could be string or number
  if (typeof padding === "number") {
    // TypeScript narrows: padding is 'number' here
    return " ".repeat(padding) + value;
  }
  // TypeScript narrows: padding is 'string' here
  return padding + value;
}

padLeft("Hello", 4);       // "    Hello"
padLeft("Hello", ">>> ");  // ">>> Hello"
```

#### instanceof Guards

```ts
class Dog {
  bark() { return "Woof!"; }
}

class Cat {
  meow() { return "Meow!"; }
}

function makeSound(animal: Dog | Cat): string {
  if (animal instanceof Dog) {
    return animal.bark();   // ✅ TypeScript knows it's a Dog
  }
  return animal.meow();     // ✅ TypeScript knows it's a Cat
}
```

#### Truthiness Narrowing

```ts
function printName(name: string | null | undefined): void {
  if (name) {
    // TypeScript narrows: name is 'string' here (truthy)
    console.log(name.toUpperCase());
  } else {
    console.log("No name provided");
  }
}
```

#### `in` Operator Narrowing

```ts
interface Fish {
  swim(): void;
}

interface Bird {
  fly(): void;
}

function move(animal: Fish | Bird): void {
  if ("swim" in animal) {
    animal.swim(); // ✅ TypeScript knows it's a Fish
  } else {
    animal.fly();  // ✅ TypeScript knows it's a Bird
  }
}
```

#### Custom Type Guards

```ts
interface Cat {
  type: "cat";
  meow(): void;
}

interface Dog {
  type: "dog";
  bark(): void;
}

// Custom type guard — returns a type predicate
function isCat(animal: Cat | Dog): animal is Cat {
  return animal.type === "cat";
}

function handleAnimal(animal: Cat | Dog): void {
  if (isCat(animal)) {
    animal.meow(); // ✅ TypeScript knows it's a Cat
  } else {
    animal.bark(); // ✅ TypeScript knows it's a Dog
  }
}
```

---

## Generics

Generics allow you to write **reusable code** that works with multiple types while maintaining type safety:

**JavaScript — no type safety:**
```js
function identity(value) {
  return value;
}

identity("hello"); // Returns "hello" — but what type is it?
identity(42);      // Returns 42 — again, unknown type
```

**TypeScript — with generics:**
```ts
function identity<T>(value: T): T {
  return value;
}

const str = identity<string>("hello"); // Type: string
const num = identity<number>(42);      // Type: number
const inferred = identity("hello");    // Type: string (inferred)
```

#### Generic Interfaces and Classes

```ts
// Generic interface
interface Repository<T> {
  getAll(): T[];
  getById(id: number): T | undefined;
  create(item: T): void;
}

// Generic class
class DataStore<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T {
    return this.items[index];
  }

  getAll(): T[] {
    return [...this.items];
  }
}

const stringStore = new DataStore<string>();
stringStore.add("hello");
stringStore.add("world");
// stringStore.add(42); // ❌ Error: 'number' is not assignable to 'string'

const numberStore = new DataStore<number>();
numberStore.add(1);
numberStore.add(2);
```

#### Generic Constraints

```ts
// Constrain T to types that have a .length property
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(item: T): void {
  console.log(`Length: ${item.length}`);
}

logLength("hello");     // ✅ string has .length
logLength([1, 2, 3]);   // ✅ array has .length
logLength(42);           // ❌ Error: number doesn't have .length
```

#### Multiple Generic Types

```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = merge({ name: "Alice" }, { age: 30 });
// Type: { name: string } & { age: number }
console.log(result.name); // "Alice"
console.log(result.age);  // 30
```

---

## Conclusions

### TypeScript Use Cases and Statistics

- **Adoption:** TypeScript is consistently in the top 5 most loved languages in Stack Overflow's Developer Survey.
- **Industry:** Used by Microsoft, Google (Angular), Airbnb, Slack, Stripe, and most major tech companies.
- **Frameworks:** Angular is built with TypeScript. React, Vue, and Next.js have excellent TypeScript support.
- **Backend:** Widely used with Node.js, Deno (TypeScript-first), and NestJS.
- **Best for:**
  - Large codebases with multiple developers
  - APIs and libraries consumed by other teams
  - Projects requiring long-term maintenance
  - Any project where bugs are costly

### Disadvantages of TypeScript

| Disadvantage | Details |
|-------------|---------|
| **Learning Curve** | Additional syntax and concepts to learn |
| **Build Step Required** | Must compile to JavaScript before running |
| **Slower Development (initially)** | Writing types takes more time upfront |
| **Complex Type Errors** | Error messages can be verbose and confusing |
| **Third-Party Types** | Some libraries lack TypeScript definitions |
| **Over-Engineering Risk** | Complex types can reduce readability |

### TypeScript Alternatives

| Alternative | Description |
|------------|-------------|
| **JSDoc + `@ts-check`** | Add type annotations in comments without changing to `.ts` files |
| **Flow** | Facebook's static type checker for JavaScript |
| **Dart** | Google's language (used with Flutter), compiles to JS |
| **ReScript** | Strongly-typed language that compiles to JS, OCaml-based |
| **Elm** | Functional language for web frontends with no runtime exceptions |
| **Plain JavaScript** | For small projects or prototypes where types add overhead |

**JSDoc example (TypeScript checking without `.ts` files):**
```js
// @ts-check

/**
 * @param {string} name
 * @param {number} age
 * @returns {string}
 */
function greet(name, age) {
  return `Hello, ${name}! You are ${age} years old.`;
}

greet("Alice", 30);  // ✅
greet(42, "oops");   // ❌ Error (with @ts-check enabled in VS Code)
```

---

## Summary

TypeScript is JavaScript with superpowers. It adds a type system that catches errors before runtime, improves developer tooling, and makes code more maintainable. Since it's a superset of JavaScript, you can adopt it gradually and still use all your existing JavaScript knowledge.

**Quick Reference:**

```ts
// Basic types
let str: string = "hello";
let num: number = 42;
let bool: boolean = true;
let arr: number[] = [1, 2, 3];

// Union and literal types
type Status = "active" | "inactive";
let id: string | number = "abc";

// Interface
interface User { name: string; age: number; }

// Type alias
type Point = { x: number; y: number };

// Generic function
function first<T>(arr: T[]): T | undefined { return arr[0]; }

// Class with modifiers
class Animal {
  constructor(public name: string, private sound: string) {}
  speak(): string { return `${this.name} says ${this.sound}`; }
}

// Type narrowing
function process(val: string | number) {
  if (typeof val === "string") { /* val is string */ }
  else { /* val is number */ }
}
```

Now proceed to the **exercises** folder for hands-on practice, and the **assignment** folder for your graded lab!
