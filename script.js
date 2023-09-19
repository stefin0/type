// The text to be typed
const textToType =
  "This is the text that you need to type in order to pass.↵This is the second line.";

// Get the container div
const typingText = document.getElementById("typingText");

// Split the text into individual letters and wrap them in span tags
const letters = textToType
  .split("")
  .map((letter, index) => {
    return `<span id="letter-${index}">${letter}</span>`;
  })
  .join("");

// Insert the spans into the container div
typingText.innerHTML = letters;

// Function to highlight a letter
const highlightLetter = (index) => {
  const letterElement = document.getElementById(`letter-${index}`);

  letterElement.style.backgroundColor = "yellow";
};

// Function to remove highlight from a letter
const removeHighlight = (index) => {
  const letterElement = document.getElementById(`letter-${index}`);

  letterElement.style.backgroundColor = "";
};

// Initialize the index to 0 (first letter)
let currentIndex = 0;
// Initialize counters for correct and incorrect keypresses
let correctCount = 0;
let incorrectCount = 0;

// Highlight the first letter initially
highlightLetter(currentIndex);

// Add an event listener for keydown events
document.addEventListener("keydown", (event) => {
  // Get the current highlighted letter
  const currentLetter = textToType[currentIndex];

  // Get the key that was pressed
  const pressedKey = event.key;

  // Handle the Enter key
  if (pressedKey === "Enter") {
    // Remove highlight from the current letter
    removeHighlight(currentIndex);

    // Check if the pressed key matches the current letter
    if (currentLetter === "↵") {
      // Count as correct
      correctCount++;
    } else {
      // Count as incorrect and change the text color to red
      incorrectCount++;
      document.getElementById(`letter-${currentIndex}`).style.color = "red";
    }

    // Increment the index
    currentIndex++;

    // Highlight the next letter
    highlightLetter(currentIndex);

    return;
  }

  // Handle the Backspace key
  if (pressedKey === "Backspace") {
    // Remove highlight from the current letter
    removeHighlight(currentIndex);

    // Decrement the index
    currentIndex--;

    // Reset the text color to its original state for the current letter
    document.getElementById(`letter-${currentIndex}`).style.color = "";

    // Highlight the previous letter
    highlightLetter(currentIndex);

    return;
  }

  // Ignore special keys like "Shift"
  if (pressedKey.length > 1) {
    return;
  }

  // Remove highlight from the current letter
  removeHighlight(currentIndex);

  // Check if the pressed key matches the current letter
  if (pressedKey === currentLetter) {
    correctCount++;
  } else {
    // Count as incorrect and change the text color to red
    incorrectCount++;
    document.getElementById(`letter-${currentIndex}`).style.color = "red";
  }

  // Increment the index
  currentIndex++;

  // Highlight the next letter
  highlightLetter(currentIndex);
});
