// https://www.typescriptlang.org/docs/handbook/basic-types.html

// Boolean
变量 isDone: boolean = false;

// Number
变量 decimal: number = 6;
变量 hex: number = 0xf00d;
变量 binary: number = 0b1010;
变量 octal: number = 0o744;

// String
变量 color: string = "blue";
color = 'red';

// longer String
变量 fullName: string = `Bob Bobbington`;
变量 age: number = 37;
变量 sentence: string = "Hello, my name is " + fullName + ".\n\n" +
  "I'll be " + (age + 1) + " years old next month.";

// Template String
变量 sentencet: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

// Array
变量 list: number[] = [1, 2, 3];

变量 list2: Array<number> = [1, 2, 3];

// Tuple
// Declare a tuple type
变量 x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

// console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

// x[6] = true; // Error, 'boolean' isn't 'string | number'

// Enum
enum Color {Red, Green, Blue}
变量 c: Color = Color.Green;

enum Color2 {Red = 1, Green, Blue}
变量 c2: Color2 = Color2.Green;

enum Color3 {Red = 1, Green = 2, Blue = 4}
变量 c3: Color3 = Color3.Green;

enum Color4 {Red = 1, Green, Blue}
变量 colorName: string = Color4[2];

console.log(colorName); // Displays 'Green' as its value is 2 above

// Any
变量 notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

变量 notSure2: any = 4;
notSure2.ifItExists(); // okay, ifItExists might exist at runtime
notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

变量 prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

变量 listAny: any[] = [1, true, "free"];

listAny[1] = 100;

// Void
function warnUser(): void {
  console.log("This is my warning message");
}

变量 unusable: void = undefined;

// Null and Undefined
// Not much else we can assign to these variables!
变量 u: undefined = undefined;
变量 n: null = null;

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message);
}

// Inferred return type is never
function fail() {
  return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {
  }
}

// Object
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// Type assertions
变量 someValue: any = "this is a string";

变量 strLength: number = (<string>someValue).length;

// Type assertions with as-syntax
变量 someValue2: any = "this is a string";

变量 strLength2: number = (someValue2 as string).length;