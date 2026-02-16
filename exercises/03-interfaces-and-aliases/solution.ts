// ============================================
// Exercise 03: Interfaces & Type Aliases — SOLUTION
// ============================================

// 1. Product interface
interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// 2. Product object
const laptop: Product = {
  id: 1,
  name: "MacBook Pro",
  price: 2499.99,
  inStock: true,
};

// 3. User interface with optional age
interface User {
  id: number;
  username: string;
  email: string;
  age?: number;
}

// 4. Two User objects
const userWithAge: User = {
  id: 1,
  username: "alice",
  email: "alice@example.com",
  age: 28,
};

const userWithoutAge: User = {
  id: 2,
  username: "bob",
  email: "bob@example.com",
};

// 5. Admin extends User
interface Admin extends User {
  role: string;
  permissions: string[];
}

// 6. Admin object
const admin: Admin = {
  id: 3,
  username: "superadmin",
  email: "admin@example.com",
  age: 35,
  role: "administrator",
  permissions: ["read", "write", "delete", "manage-users"],
};

// 7. ID type alias
type ID = string | number;

// 8. Status literal type alias
type Status = "active" | "inactive" | "banned";

// 9. Post interface
interface Post {
  id: ID;
  title: string;
  content: string;
  author: User;
  status: Status;
}

// 10. Post object
const post: Post = {
  id: "post-001",
  title: "Getting Started with TypeScript",
  content: "TypeScript is a superset of JavaScript...",
  author: userWithAge,
  status: "active",
};

// ============================================
// Verification
// ============================================
console.log("2:", laptop);
console.log("4a:", userWithAge);
console.log("4b:", userWithoutAge);
console.log("6:", admin);
console.log("10:", post);
