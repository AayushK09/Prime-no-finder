 # Prime Number Finder

This project demonstrates the use of HTML5 features including Web Storage, Web Worker.

## Features
- **Web Storage:** Save a number input from the user to the browser's local storage.
- **Web Worker:** Increment the stored number until it becomes a prime number.

## Getting Started

### Prerequisites
- A modern web browser with support for HTML5 features.
- A web server to serve the HTML file (e.g., Live Server extension for Visual Studio Code).

### Usage

1. **Open `index.html` with Live Server:**
   - Ensure you have the Live Server extension installed in Visual Studio Code.
   - Right-click on `index.html` and select "Open with Live Server".
   - This will launch the HTML file in your default web browser.

2. **Web Storage:**
   - Enter a number (less than 100) in the input field.
   - Click the "Save" button to store the number in the browser's local storage.

3. **Web Worker:**
   - Click the "Start" button to initiate the web worker.
   - The worker will increment the stored number until it becomes a prime number.
   - The result will be displayed on the web page.
   - Click the "End" button to terminate the worker.
### Files

- `index.html`: The main HTML file containing the user interface.
- `worker.js`: The Web Worker script for incrementing the number.
### Notes
- Ensure the number input is saved before starting the web worker.
- The web worker will automatically stop when the number becomes prime or when the "End" button is clicked.
