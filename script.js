// Selects and stores the HTML element with the ID 'calorie-counter'.
const calorieCounter = document.getElementById('calorie-counter');

// Selects and stores the HTML input element for the budget.
const budgetNumberInput = document.getElementById('budget');

// Selects and stores the dropdown element for choosing the meal type or exercise.
const entryDropdown = document.getElementById('entry-dropdown');

// Selects and stores the button element used to add a new entry.
const addEntryButton = document.getElementById('add-entry');

// Selects and stores the button element used to clear the form.
const clearButton = document.getElementById('clear');

// Selects and stores the element where the output (e.g., remaining calories) will be displayed.
const output = document.getElementById('output');

// Initializes a boolean variable to track if there is an error.
let isError = false;

// Function to remove plus, minus signs, or spaces from the input string.
function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

// Function to check if the input string is in scientific notation (e.g., '1e10').
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}

// Function to add a new entry field for calories and meal type or exercise.
function addEntry() {
  // Selects the container for the input based on the dropdown selection.
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  
  // Counts the number of text input elements already present.
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length;

  // Prepares the HTML string for the new entry fields.
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function getCaloriesFromInputs(list) {
  let calories = 0;

  for (let i = 0; i < list.length; i++) {
    const currVal = cleanInputString(list[i].value);
    const invalidInputMatch = isInvalidInput(currVal);

    if (invalidInputMatch) {

    }
  }
}