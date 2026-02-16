# TypeScript Exercises

A series of hands-on exercises to practice TypeScript concepts. Each exercise has:

- **`exercise.ts`** — Starter file with instructions in comments. Learners complete this file.
- **`solution.ts`** — The completed solution for reference.

## How to Run

```bash
# Install TypeScript globally (if not already)
npm install -g typescript tsx

# Run any file directly
tsx exercises/01-basic-types/exercise.ts

# Or compile and check for errors
npx tsc exercises/01-basic-types/exercise.ts --noEmit --strict
```

## Exercises

| # | Topic | Concepts |
|---|-------|----------|
| 01 | Basic Types | Primitives, arrays, type annotations |
| 02 | Functions | Parameter types, return types, optional params |
| 03 | Interfaces & Type Aliases | Object shapes, extending, unions |
| 04 | Union & Literal Types | Union types, literal types, discriminated unions |
| 05 | Type Narrowing | typeof, instanceof, in, custom guards |
| 06 | Classes | Access modifiers, inheritance, readonly |
| 07 | Generics | Generic functions, classes, constraints |
| 08 | Type Composition | Intersections, mapped types, utility types |
| 09 | Real-World Scenarios | Putting it all together |

Work through them in order — each builds on concepts from previous exercises.
