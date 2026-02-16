// ============================================
// Exercise 06: Classes
// ============================================
// Instructions: Build TypeScript classes with access modifiers, inheritance, and readonly.
// Run this file with: tsx exercises/06-classes/exercise.ts
// ============================================

// 1. Create a class `Person` with:
//    - public property `name` (string)
//    - private property `age` (number)
//    - readonly property `id` (number)
//    - Constructor that takes all three
//    - Public method `greet()` that returns "Hi, I'm <name>!"
//    - Public method `getAge()` that returns the age
// YOUR CODE HERE

// 2. Create a class `Employee` that extends `Person` with:
//    - protected property `salary` (number)
//    - public property `position` (string)
//    - Constructor that takes name, age, id, salary, position
//    - Public method `describe()` that returns "<name> works as a <position>"
//    - Public method `getSalary()` that returns the salary
// YOUR CODE HERE

// 3. Create a class `Manager` that extends `Employee` with:
//    - private property `directReports` (Employee[])
//    - Constructor that takes name, age, id, salary and sets position to "Manager"
//    - Method `addReport(employee: Employee)` that adds to directReports
//    - Method `getTeamSize()` that returns the number of direct reports
//    - Method `getTeamBudget()` that returns the sum of all direct report salaries
//      plus the manager's own salary (hint: you can access `salary` because it's protected)
// YOUR CODE HERE

// 4. Create a class `Counter` using the shorthand constructor syntax (parameter properties):
//    - private `count` defaulting to 0
//    - readonly `name` (string)
//    - Methods: increment(), decrement(), getCount(), reset()
// YOUR CODE HERE

// ============================================
// Verification — uncomment when done:
// ============================================
// const person = new Person("Alice", 30, 1);
// console.log(person.greet());          // "Hi, I'm Alice!"
// console.log(person.getAge());         // 30
// console.log(person.name);             // "Alice"
// // console.log(person.age);           // ❌ Should error — private
// // person.id = 99;                    // ❌ Should error — readonly

// const emp1 = new Employee("Bob", 25, 2, 50000, "Developer");
// const emp2 = new Employee("Carol", 28, 3, 60000, "Designer");
// console.log(emp1.describe());         // "Bob works as a Developer"
// console.log(emp1.getSalary());        // 50000

// const mgr = new Manager("Dave", 40, 4, 90000);
// mgr.addReport(emp1);
// mgr.addReport(emp2);
// console.log(mgr.describe());          // "Dave works as a Manager"
// console.log(mgr.getTeamSize());       // 2
// console.log(mgr.getTeamBudget());     // 200000

// const counter = new Counter("clicks");
// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.getCount());      // 2
// console.log(counter.name);            // "clicks"
// counter.reset();
// console.log(counter.getCount());      // 0
