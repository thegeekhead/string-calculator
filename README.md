# String Calculator Kata

## Problem Statement

This project is an implementation of the [String Calculator Kata](https://blog.incubyte.co/blog/tdd-assessment/) using **Test-Driven Development (TDD)**.

The goal is to implement a function with the signature:

```
int add(string numbers)
```

that can handle various input formats and follow the rules defined in the kata.

---

## Features Implemented

* Return 0 for an empty string
* Return number itself when only one number is provided
* Return sum of two numbers separated by a comma
* Support an unknown amount of numbers
* Support newlines as delimiters along with commas
* Support custom single-character delimiters (`//;\n1;2`)
* Throw an exception for negative numbers (list all negatives)
* Ignore numbers bigger than 1000 (`2 + 1001 = 2`)
* Support delimiters of any length (`//[***]\n1***2***3`)
* Support multiple delimiters (`//[*][%]\n1*2%3`)
* Support multiple delimiters with length longer than one character (`//[***][%%]\n1***2%%3`)

---

## Tech Stack

* JavaScript (Node.js)
* [Jest](https://jestjs.io/) for testing

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/string-calculator.git
cd string-calculator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run tests

```bash
npm test
```

---

## Example Usage

```javascript
const add = require('./src/stringCalculator');

console.log(add("")); // 0
console.log(add("1,2,3")); // 6
console.log(add("1\n2,3")); // 6
console.log(add("//;\n1;2")); // 3
console.log(add("//[***]\n1***2***3")); // 6
console.log(add("//[*][%]\n1*2%3")); // 6
console.log(add("//[***][%%]\n1***2%%3")); // 6
```

---

## Development Approach

This project was implemented using the **Red → Green → Refactor** cycle of TDD.

Each commit demonstrates one small step:

* `test:` add a failing test
* `feat:` add minimal implementation to make the test pass
* `refactor:` clean up the code without changing behavior

This ensures the code evolves incrementally and remains simple and maintainable.

### Example commit history

```
test: Add returns 0 for empty string
feat: implement Add to return 0 for empty string
refactor: clarify empty-input handling
test: Add returns sum of two numbers
feat: support addition of two numbers
refactor: unify parsing logic
...
feat: support multiple delimiters with any length
```

---

## Repository Structure

```
string-calculator/
├─ src/
│  └─ stringCalculator.js       # implementation
├─ tests/
│  └─ stringCalculator.test.js  # Jest tests
├─ package.json
└─ README.md
```


