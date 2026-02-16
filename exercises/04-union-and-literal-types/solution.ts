// ============================================
// Exercise 04: Union & Literal Types — SOLUTION
// ============================================

// 1. Union type variable
let id: string | number = 42;
id = "abc-123";

// 2. Direction literal type
type Direction = "up" | "down" | "left" | "right";

// 3. Move function
function move(direction: Direction): void {
  console.log(`Moving ${direction}`);
}

// 4. HttpStatus literal type
type HttpStatus = 200 | 301 | 404 | 500;

// 5. getStatusMessage
function getStatusMessage(status: HttpStatus): string {
  switch (status) {
    case 200:
      return "OK";
    case 301:
      return "Moved Permanently";
    case 404:
      return "Not Found";
    case 500:
      return "Internal Server Error";
  }
}

// 6. Discriminated union
interface SuccessResponse {
  success: true;
  data: string;
}

interface ErrorResponse {
  success: false;
  error: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

// 7. handleResponse
function handleResponse(response: ApiResponse): void {
  if (response.success) {
    console.log(`Data: ${response.data}`);
  } else {
    console.log(`Error: ${response.error}`);
  }
}

// 8. Padding
type Padding = number | string;

function applyPadding(value: string, padding: Padding): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + value;
  }
  return padding + value;
}

// ============================================
// Verification
// ============================================
console.log("1:", id);
move("up");
move("left");
console.log("5:", getStatusMessage(200));
console.log("5:", getStatusMessage(404));
handleResponse({ success: true, data: "User data loaded" });
handleResponse({ success: false, error: "Network timeout" });
console.log("8:", applyPadding("hello", 4));
console.log("8:", applyPadding("hello", ">>> "));
