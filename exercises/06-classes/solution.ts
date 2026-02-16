// ============================================
// Exercise 06: Classes — SOLUTION
// ============================================

// 1. Person class
class Person {
  public name: string;
  private age: number;
  readonly id: number;

  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  public greet(): string {
    return `Hi, I'm ${this.name}!`;
  }

  public getAge(): number {
    return this.age;
  }
}

// 2. Employee extends Person
class Employee extends Person {
  protected salary: number;
  public position: string;

  constructor(
    name: string,
    age: number,
    id: number,
    salary: number,
    position: string
  ) {
    super(name, age, id);
    this.salary = salary;
    this.position = position;
  }

  public describe(): string {
    return `${this.name} works as a ${this.position}`;
  }

  public getSalary(): number {
    return this.salary;
  }
}

// 3. Manager extends Employee
class Manager extends Employee {
  private directReports: Employee[] = [];

  constructor(name: string, age: number, id: number, salary: number) {
    super(name, age, id, salary, "Manager");
  }

  addReport(employee: Employee): void {
    this.directReports.push(employee);
  }

  getTeamSize(): number {
    return this.directReports.length;
  }

  getTeamBudget(): number {
    const reportSalaries = this.directReports.reduce(
      (sum, emp) => sum + emp.getSalary(),
      0
    );
    return this.salary + reportSalaries;
  }
}

// 4. Counter with parameter properties
class Counter {
  private count: number = 0;

  constructor(readonly name: string) {}

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  getCount(): number {
    return this.count;
  }

  reset(): void {
    this.count = 0;
  }
}

// ============================================
// Verification
// ============================================
const person = new Person("Alice", 30, 1);
console.log(person.greet());
console.log(person.getAge());
console.log(person.name);

const emp1 = new Employee("Bob", 25, 2, 50000, "Developer");
const emp2 = new Employee("Carol", 28, 3, 60000, "Designer");
console.log(emp1.describe());
console.log(emp1.getSalary());

const mgr = new Manager("Dave", 40, 4, 90000);
mgr.addReport(emp1);
mgr.addReport(emp2);
console.log(mgr.describe());
console.log(mgr.getTeamSize());
console.log(mgr.getTeamBudget());

const counter = new Counter("clicks");
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());
console.log(counter.name);
counter.reset();
console.log(counter.getCount());
