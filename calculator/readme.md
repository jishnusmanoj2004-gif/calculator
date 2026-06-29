## tailwind css project

# Calculator

A simple calculator built using **HTML**, **Tailwind CSS**, and **JavaScript**. It performs basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- Clean and responsive UI
- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)
- Decimal number support
- Clear (C) button
- Result calculation (=)

[live@](https://jishnusmanoj2004-gif.github.io/calculator/)

![sss](./photo.png)


## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript

## Project Structure

```
calculator/
│
├── index.html
├── scripts.js
└── README.md
```

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in any modern web browser.

No installation or server is required.

## Functions Used

| Function | Description |
|----------|-------------|
| `onNumber(value)` | Appends the selected number or decimal point to the display. |
| `onOperator(operator)` | Adds the selected operator to the expression. |
| `onClear()` | Clears the calculator display. |
| `calculate()` | Evaluates the expression and displays the result. |

## Current Issues

The HTML contains a few small mistakes that should be fixed:

- `onNUmber()` should be `onNumber()` for the **0** and **.** buttons.
- The **C** button should use:
  ```html
  onclick="onClear()"
  ```
  instead of
  ```html
  onclick="onclear"
  ```
- The **=** button should call a function, for example:
  ```html
  onclick="calculate()"
  ```
- Ensure `scripts.js` contains the implementations of all required functions.

## Future Improvements

- Keyboard support
- Backspace button
- Percentage (%)
- Plus/Minus (+/-)
- Calculation history
- Better error handling
- Scientific calculator mode

## Author

Created as a JavaScript practice project.