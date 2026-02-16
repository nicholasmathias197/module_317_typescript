// ============================================
// Exercise 08: Type Composition — SOLUTION
// ============================================

// 1. Intersection type
interface HasName {
  name: string;
}

interface HasEmail {
  email: string;
}

type Contact = HasName & HasEmail;

const contact: Contact = { name: "Alice", email: "alice@mail.com" };

// 2. Partial<T>
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

// 3. Pick<T, K>
type UserPreview = Pick<User, "id" | "name">;

function toPreview(user: User): UserPreview {
  return { id: user.id, name: user.name };
}

// 4. Omit<T, K>
type CreateUserInput = Omit<User, "id">;

function createUser(input: CreateUserInput): User {
  return { id: Date.now(), ...input };
}

// 5. Record<K, V>
type PhoneBook = Record<string, string>;

function lookupPhone(phonebook: PhoneBook, name: string): string {
  return phonebook[name] ?? "Not found";
}

// 6. Required<T>
interface Config {
  host?: string;
  port?: number;
  debug?: boolean;
}

type StrictConfig = Required<Config>;

// 7. Readonly<T>
type FrozenUser = Readonly<User>;

// ============================================
// Verification
// ============================================
console.log("1:", contact);

const user: User = { id: 1, name: "Alice", email: "alice@mail.com", age: 30 };
const updated = updateUser(user, { name: "Alicia", age: 31 });
console.log("2:", updated);

const preview = toPreview(user);
console.log("3:", preview);

const newUser = createUser({ name: "Bob", email: "bob@mail.com", age: 25 });
console.log("4:", newUser);

const phonebook: PhoneBook = { Alice: "555-1234", Bob: "555-5678" };
console.log("5:", lookupPhone(phonebook, "Alice"));
console.log("5:", lookupPhone(phonebook, "Carol"));

const strictConfig: StrictConfig = {
  host: "localhost",
  port: 3000,
  debug: true,
};
console.log("6:", strictConfig);

const frozen: FrozenUser = {
  id: 1,
  name: "Alice",
  email: "a@b.com",
  age: 30,
};
// frozen.name = "Bob"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.
console.log("7:", frozen);
