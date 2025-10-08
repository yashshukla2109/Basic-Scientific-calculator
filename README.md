Scientific Calculator

A web-based scientific calculator built using HTML, CSS, and JavaScript, capable of performing basic arithmetic, advanced mathematical functions, and trigonometric calculations in DEG/RAD mode, with inverse trig support and theme toggling.

Project Overview

The calculator consists of three main files:

HTML (index.html)

CSS (styles.css)

JavaScript (script.js)

These files work together to provide a fully functional and interactive calculator interface.

File Descriptions
1. HTML (index.html)

Structure & Layout:

Defines the main calculator container with a display screen and buttons.

Buttons include numbers, arithmetic operators, trigonometric functions, inverse trig (via INV mode), logarithms, roots, constants (π, e), and special actions (C, ⌫, =).

Mode Toggles:

DEG/RAD toggle to switch between degree and radian calculations.

INV toggle to switch trig functions to their inverse counterparts.

Theme toggle for light/dark mode.

Keyboard Support:

Listens for the Enter key to trigger calculations.

Integration:

Links to styles.css for styling and script.js for logic.

2. CSS (styles.css)

Calculator Styling:

Centers the calculator on the page with flexbox.

Styles the display screen, buttons, and container with colors, shadows, and rounded corners.

Button Layout:

Uses CSS grid for arranging buttons in rows and columns.

Provides hover and active effects for better user interaction.

Themes:

Supports dark mode by default.

Includes light mode (display-light class) toggled by the theme button.

Responsive Design:

Buttons and display scale properly for a neat layout.

3. JavaScript (script.js)

Input Handling:

Appends numbers, operators, and functions to the display.

Handles backspace and clear actions.

Expression Evaluation:

Supports arithmetic (+, -, *, /, ^), constants (π, e), square roots (√()), logarithms (log(), ln()), and parenthesis.

Trigonometry & Inverse Trig:

Standard trig: sin(), cos(), tan()

Inverse trig: asin(), acos(), atan()

Handles DEG/RAD conversion automatically for both trig and inverse trig functions.

Mode Toggles:

DEG/RAD toggle: Converts between degrees and radians for trig calculations.

INV toggle: Changes trig buttons to their inverse functions (sin → asin, etc.) dynamically.

Theme Toggle:

Switches between dark and light modes for the display and buttons.

Safe Calculation:

Defines trig and inverse trig functions in local scope to ensure calculations are accurate and avoid errors like asin(0.5) in DEG mode.

Evaluates expressions safely and handles errors, displaying Error for invalid input.

How It Works

User Input: Click a button or type a number/operator. The input is stored in a string current.

Expression Construction: Functions, constants, and operators are appended into current as a valid JavaScript expression.

Evaluation: On pressing =, the calculator evaluates the expression:

Trig functions are wrapped to handle DEG/RAD correctly.

Inverse functions return degrees if DEG mode is active.

Display Result: The calculated result is shown in the display with floating-point precision.

Error Handling: Invalid expressions reset the display to Error.
