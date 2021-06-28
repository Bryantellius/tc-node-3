# June 28th, 2021

## To Do

1. Review JavaScript up to DOM Manipulation
2. Cover the JS DOM Quiz
3. Finish the JS DOM Exercise
4. Cover the JS Error Handling Lecture and Exercise
5. Codewars Practice
6. Introduce Asynchronous JS

## Review

What is JavaScript?

- Web-based, interpreted, prototype driven program scripting language created by Netscape (later Mozilla) that allows you to add interactive functionality to web pages

### Variables and Value Types

- Used to store values that are later used/referenced in the program
- Declare with keywords `let`, `var`, and `const`
- Assign values to variables with `=`
- Value types:
  - Primitive Data Types:
    - Strings
    - Symbols
    - Numbers
    - BigInt
    - Boolean
    - Null
    - Undefined
  - Structural Data Types
    - Objects (Array, ...etc)
    - Functions
- Weakly Typed, introduces _Type Coercion_
  - Meaning that JS will convert value types to make evaluations, since value types are not explicit

### Operators

#### Categories

- Unary: one operand and one operator
  - Ex: Pre/Post increment/decrement (++,--), Logical Negation (!), Arithmetic Negation (-), typeof
- Binary: two operands and one operator
- Ternary/Conditional
  - Ex: `(condition) ? value1 : value2`

#### Arithmetic

- Add (+), Subtract (-), Multiply (\*), Divide(/), Exponentiation (\*\*), Modulus(%), Pre/Post(++,--)

#### Logical

- And (&&), Or (||), Not (!)

#### Comparison

- Loose Equal (==), Strict Equal (===), Loose Inequality (!=), Strict Inequality (!==), Greater than / equal to (>, >=), lesser than / equal to (< / <=)

#### Assignment

- Assignment (=), Property Assignment (:), Add (+=), Subtract (-=), Multiply (\*=), Divide(/=), Exponentiation (\*\*=), Modulus(%=), Pre/Post(++,--)

### Loops

- While

```
while (condition) {

}
```

- For

```
for (initialization; condition; action) {

}
```

- Do/While

```
do {

} while(condtion)
```

- For/In

```
for (let variable in object) {

}
```

- For/Of

```
for (let variable of iterable object) {

}
```

### Functions

- Create by:
  - `function` keyword to _declare_ a function
  - Or assign a function value (definition) to a variable
- Can `return` values
- Can take parameters (arguments)
- Can be reused as many times as needed
- **Call** or **Invoke** to use

```
function func(...arguments) {
    // some code
}

const func = function (...arguments) { // some code }

const func = (...arguments) => { // some code }
```

- Higher-order Functions are functions that operate with/on function values, either by returning a function value or taking a function value as a parameter.

### Objects

- Object literal syntax `{}`
- Key/value pairs:

```
{
    property: value,
    property: value
}
```

- Functions assigned to properties are referred to as methods

- Object.prototype

  - Base object in JS
  - We can create prototypes to add/manipulate models for instantiated objects from those types

- Class Notation

```
class Name <extends> <Parent> {
    constructor() {

    }

    method1() {

    }
}
```
