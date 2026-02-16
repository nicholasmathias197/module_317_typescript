# Setting Up the TypeScript Assignment Locally

## Prerequisites

- **Node.js** (v16 or later) — [Download here](https://nodejs.org/) (Note: you likely have node installed already from previous lessons)
- **npm** (comes bundled with Node.js)
- **VS Code** (recommended) — [Download here](https://code.visualstudio.com/)

Verify your installations:

```bash
node -v
npm -v
```

---

## Step 1: Install Dependencies

Open a terminal in the `assignment/` folder and run:

```bash
cd assignment
npm install
```

This installs:

- `typescript` — the TypeScript compiler
- `parcel-bundler` — a zero-config bundler that handles `.ts` files automatically

---

## Step 2: Rename `index.js` to `index.ts`

Rename the source file from JavaScript to TypeScript:

---

## Step 3: Update `index.html`

Open `index.html` and change the script reference from `index.js` to `index.ts`:

```html
<!-- Before -->
<script src="src/index.js"></script>

<!-- After -->
<script src="src/index.ts"></script>
```

Parcel will automatically compile the `.ts` file when serving.

---

## Step 4: Add `// @ts-check` (Optional Context)

At the very top of `src/index.ts`, add:

```ts
// @ts-check
```

> **Note:** When working in a `.ts` file with a `tsconfig.json` that has `"strict": true`, TypeScript checking is already fully enabled. The `// @ts-check` directive is primarily useful for `.js` files. However, the assignment asks you to add it, so include it for completeness.

---

## Step 5: Run the Development Server

Start the Parcel development server:

```bash
npm start
```

This will:
1. Compile your TypeScript code.
2. Open a browser window at `http://localhost:1234`.
3. Watch for file changes and auto-reload.

Open the **browser console** (F12 → Console tab) to see `console.log` output.

---

## Step 6: Check TypeScript Errors in VS Code

VS Code provides real-time TypeScript error checking:

1. Open the `assignment/` folder in VS Code.
2. Open `src/index.ts`.
3. Red/yellow squiggles will appear under code with type errors.
4. Hover over squiggles to see the error message.
5. Open the **Problems** panel (`Ctrl+Shift+M` / `Cmd+Shift+M`) to see all errors in one place.

### Recommended VS Code Extensions

- **TypeScript and JavaScript Language Features** — built into VS Code (no install needed)
- **Error Lens** — shows errors inline next to the code

---

## Step 7: Compile Without the Dev Server (Alternative)

If you prefer to compile manually without Parcel:

```bash
npx tsc
```

Or in watch mode:

```bash
npx tsc --watch
```

To only check for errors without generating output files:

```bash
npx tsc --noEmit
```

---

## Project Structure

```
assignment/
├── index.html          # Entry HTML file
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript compiler configuration
├── setting_up.md       # This file
├── assignment.md       # Assignment instructions
└── src/
    ├── index.ts        # Your TypeScript code (renamed from index.js)
    └── styles.css      # Stylesheet
```

---

## Troubleshooting

| Issue | Solution |
|-------|---------|
| `npm start` fails | Delete `node_modules/` and `.cache/`, then run `npm install` again |
| TypeScript errors not showing | Ensure `tsconfig.json` exists and VS Code is using the workspace TS version |
| Browser doesn't open | Manually navigate to `http://localhost:1234` |
| `parcel` command not found | Run `npx parcel index.html --open` instead of `npm start` |
| Port 1234 in use | Kill the process using that port or change the port: `npx parcel index.html --port 3000` |

---

## Next Steps

Once setup is complete, follow the instructions in [assignment.md](assignment.md) to:

1. Fix TypeScript errors in the existing code (Part 2)
2. Create the generic `NCycle` class (Part 3)
3. Test your code (Part 4)
