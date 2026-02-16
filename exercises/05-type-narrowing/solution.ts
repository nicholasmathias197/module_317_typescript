// ============================================
// Exercise 05: Type Narrowing — SOLUTION
// ============================================

// 1. typeof narrowing
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// 2. instanceof narrowing
class Dog {
  bark(): string {
    return "Woof!";
  }
}

class Cat {
  meow(): string {
    return "Meow!";
  }
}

function makeSound(animal: Dog | Cat): string {
  if (animal instanceof Dog) {
    return animal.bark();
  }
  return animal.meow();
}

// 3. `in` operator narrowing
interface Fish {
  swim: () => string;
}

interface Bird {
  fly: () => string;
}

function move(animal: Fish | Bird): string {
  if ("swim" in animal) {
    return animal.swim();
  }
  return animal.fly();
}

// 4. Discriminated unions
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

// 5. Custom type guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processInput(input: unknown): string {
  if (isString(input)) {
    return input.toUpperCase();
  }
  return "Not a string";
}

// 6. Truthiness + type narrowing
function getLength(value: string | string[] | null): number {
  if (!value) {
    return 0;
  }
  return value.length;
}

// ============================================
// Verification
// ============================================
console.log("1:", formatValue("hello"));      // "HELLO"
console.log("1:", formatValue(3.14159));       // "3.14"
console.log("2:", makeSound(new Dog()));       // "Woof!"
console.log("2:", makeSound(new Cat()));       // "Meow!"
const fish: Fish = { swim: () => "Swimming!" };
const bird: Bird = { fly: () => "Flying!" };
console.log("3:", move(fish));                 // "Swimming!"
console.log("3:", move(bird));                 // "Flying!"
console.log("4:", getArea({ kind: "circle", radius: 5 }));
console.log("4:", getArea({ kind: "rectangle", width: 4, height: 6 }));
console.log("4:", getArea({ kind: "triangle", base: 10, height: 5 }));
console.log("5:", processInput("hello"));      // "HELLO"
console.log("5:", processInput(42));            // "Not a string"
console.log("6:", getLength("hello"));          // 5
console.log("6:", getLength(["a", "b", "c"])); // 3
console.log("6:", getLength(null));             // 0
