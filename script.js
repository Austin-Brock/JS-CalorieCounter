const calorieCounter = document.getElementById('calorie-counter');
// Selects and stores the HTML element with the ID 'calorie-counter'.

const budgetNumberInput = document.getElementById('budget');
// Selects and stores the HTML input element for the budget.

const entryDropdown = document.getElementById('entry-dropdown');
// Selects and stores the dropdown element for choosing the meal type or exercise.

const addEntryButton = document.getElementById('add-entry');
// Selects and stores the button element used to add a new entry.

const clearButton = document.getElementById('clear');
// Selects and stores the button element used to clear the form.

const output = document.getElementById('output');
// Selects and stores the element where the output (e.g., remaining calories) will be displayed.

let isError = false;
// Initializes a boolean variable to track if there is an error.

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  // Defines a regular expression to match plus, minus signs, or spaces.

  return str.replace(regex, '');
  // Returns the input string with all occurrences of the matched characters removed.
}

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  // Defines a regular expression to match scientific notation numbers (e.g., 1e10).
  // However, the function is incomplete as it does not return any value or perform any actions.
}
