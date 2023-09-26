// The text to be typed
const textToType =
  "This website is Stefin Racho's Final Project for Bay Valley Tech, Module 2, Cohort 236. It is a project that helps users learn how to type efficiently, using all of their fingers.";

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

// Define a mapping of characters to their corresponding key IDs and finger IDs
const charMap = {
  // First row of keys on the keyboard
  1: {
    keyId: "key-1",
    fingerId: "left-pinky",
    color: "green",
  },
  2: {
    keyId: "key-2",
    fingerId: "left-ring",
    color: "rgb(30,144,255)",
  },
  3: {
    keyId: "key-3",
    fingerId: "left-middle",
    color: "purple",
  },
  4: {
    keyId: "key-4",
    fingerId: "left-index",
    color: "yellow",
  },
  5: {
    keyId: "key-5",
    fingerId: "left-index",
    color: "yellow",
  },
  6: {
    keyId: "key-6",
    fingerId: "right-index",
    color: "orange",
  },
  7: {
    keyId: "key-7",
    fingerId: "right-index",
    color: "orange",
  },
  8: {
    keyId: "key-8",
    fingerId: "right-middle",
    color: "purple",
  },
  9: {
    keyId: "key-9",
    fingerId: "right-ring",
    color: "rgb(30,144,255)",
  },
  0: {
    keyId: "key-0",
    fingerId: "right-pinky",
    color: "green",
  },
  "-": {
    keyId: "key-minus",
    fingerId: "right-pinky",
    color: "green",
  },
  "=": {
    keyId: "key-equal",
    fingerId: "right-pinky",
    color: "green",
  },

  // Second row of keys on the keyboard
  q: {
    keyId: "key-q",
    fingerId: "left-pinky",
    color: "green",
  },
  w: {
    keyId: "key-w",
    fingerId: "left-ring",
    color: "rgb(30,144,255)",
  },
  e: {
    keyId: "key-e",
    fingerId: "left-middle",
    color: "purple",
  },
  r: {
    keyId: "key-r",
    fingerId: "left-index",
    color: "yellow",
  },
  t: {
    keyId: "key-t",
    fingerId: "left-index",
    color: "yellow",
  },
  y: {
    keyId: "key-y",
    fingerId: "right-index",
    color: "orange",
  },
  u: {
    keyId: "key-u",
    fingerId: "right-index",
    color: "orange",
  },
  i: {
    keyId: "key-i",
    fingerId: "right-middle",
    color: "purple",
  },
  o: {
    keyId: "key-o",
    fingerId: "right-ring",
    color: "rgb(30,144,255)",
  },
  p: {
    keyId: "key-p",
    fingerId: "right-pinky",
    color: "green",
  },
  "[": {
    keyId: "key-l-brack",
    fingerId: "right-pinky",
    color: "green",
  },
  "]": {
    keyId: "key-r-brack",
    fingerId: "right-pinky",
    color: "green",
  },

  // Third row of keys on the keyboard
  a: {
    keyId: "key-a",
    fingerId: "left-pinky",
    color: "green",
  },
  s: {
    keyId: "key-s",
    fingerId: "left-ring",
    color: "rgb(30,144,255)",
  },
  d: {
    keyId: "key-d",
    fingerId: "left-middle",
    color: "purple",
  },
  f: {
    keyId: "key-f",
    fingerId: "left-index",
    color: "yellow",
  },
  g: {
    keyId: "key-g",
    fingerId: "left-index",
    color: "yellow",
  },
  h: {
    keyId: "key-h",
    fingerId: "right-index",
    color: "orange",
  },
  j: {
    keyId: "key-j",
    fingerId: "right-index",
    color: "orange",
  },
  k: {
    keyId: "key-k",
    fingerId: "right-middle",
    color: "purple",
  },
  l: {
    keyId: "key-l",
    fingerId: "right-ring",
    color: "rgb(30,144,255)",
  },
  ":": {
    keyId: "key-semi",
    fingerId: "right-pinky",
    color: "green",
  },
  "'": {
    keyId: "key-s-quote",
    fingerId: "right-pinky",
    color: "green",
  },

  // Fourth row of keys on the keyboard
  z: {
    keyId: "key-z",
    fingerId: "left-pinky",
    color: "green",
  },
  x: {
    keyId: "key-x",
    fingerId: "left-ring",
    color: "rgb(30,144,255)",
  },
  c: {
    keyId: "key-c",
    fingerId: "left-middle",
    color: "purple",
  },
  v: {
    keyId: "key-v",
    fingerId: "left-index",
    color: "yellow",
  },
  b: {
    keyId: "key-b",
    fingerId: "left-index",
    color: "yellow",
  },
  n: {
    keyId: "key-n",
    fingerId: "right-index",
    color: "orange",
  },
  m: {
    keyId: "key-m",
    fingerId: "right-index",
    color: "orange",
  },
  ",": {
    keyId: "key-comma",
    fingerId: "right-middle",
    color: "purple",
  },
  ".": {
    keyId: "key-period",
    fingerId: "right-ring",
    color: "rgb(30,144,255)",
  },
  "/": {
    keyId: "key-f-slash",
    fingerId: "right-pinky",
    color: "green",
  },

  // Fifth row of keys on the keyboard
  " ": {
    keyId: "key-space",
    fingerId: "right-thumb",
    color: "white",
  },
};

// Function to highlight a letter
const highlightLetter = (index) => {
  if (index >= textToType.length) return;

  const letterElement = document.getElementById(`letter-${index}`);
  const { color } = getKeyAndFingerByChar(textToType[index]);

  if (color === "white") {
    letterElement.style.backgroundColor = "grey";
  }

  if (color) {
    letterElement.style.color = color;
    letterElement.style.textShadow = `
      -2px -2px 0 #000,  
      2px -2px 0 #000,
      -2px 2px 0 #000,
      2px 2px 0 #000
    `; // This adds a black stroke around the text
  } else {
    letterElement.style.color = ""; // Reset to default color
    letterElement.style.textShadow = ""; // Reset to default if no color is specified
  }
};

// Function to remove highlight from a letter
const removeHighlight = (index) => {
  const letterElement = document.getElementById(`letter-${index}`);

  letterElement.style.color = ""; // Reset to default color
  letterElement.style.textShadow = ""; // Remove the stroke
  letterElement.style.backgroundColor = "";
};

// Function to map characters to keys and fingers
const getKeyAndFingerByChar = (char) => {
  // Return the mapping for the given character, or defualt if the character is not in the map
  return (
    charMap[char.toLowerCase()] || {
      keyId: null,
      fingerId: null,
    }
  );
};

// Function to highlight the key and finger based on the character
const highlightKeyAndFinger = (char) => {
  const { keyId, fingerId } = getKeyAndFingerByChar(char);

  if (keyId) {
    document.getElementById(keyId).classList.add("highlighted");
  }

  if (fingerId) {
    document.getElementById(fingerId).classList.add("highlighted");
  }
};

// Function to remove the highlight from the key and finger
const removehighlightKeyAndFinger = () => {
  const highlightedKeys = document.querySelectorAll(".key.highlighted");
  const highlightedFingers = document.querySelectorAll(".finger.highlighted");

  highlightedKeys.forEach((key) => key.classList.remove("highlighted"));
  highlightedFingers.forEach((finger) =>
    finger.classList.remove("highlighted")
  );
};

// Initialize the index to 0 (first letter)
let currentIndex = 0;
// Initialize counters for correct and incorrect keypresses
let correctCount = 0;
let incorrectCount = 0;
// Initialize timer and typingStarted
let timerInterval;
let startTime = null;
let isTypingStarted = false;
let isTimerRunning = false;

const startTimer = () => {
  startTime = Date.now();
  isTimerRunning = true;

  timerInterval = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    document.getElementById("timer").textContent = `Timer: ${String(
      minutes
    ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  isTimerRunning = false;
};

// Function that resets the test
const resetTest = () => {
  // Reset counters
  currentIndex = 0;
  correctCount = 0;
  incorrectCount = 0;

  // Reset UI
  const allLetters = document.querySelectorAll("#typingText span");
  allLetters.forEach((letter) => {
    letter.style.color = "";
    letter.style.backgroundColor = "";
    letter.style.textShadow = "";
  });

  removehighlightKeyAndFinger();

  // Highlight the first letter and corresponding key/finger
  highlightLetter(currentIndex);
  highlightKeyAndFinger(textToType[currentIndex]);
  startTime = new Date();

  stopTimer();
  document.getElementById("timer").textContent = "Timer: 00:00";
};

const calculateAccuracy = (correctCount) => {
  return ((correctCount / textToType.length) * 100).toFixed(0);
};

// Highlight the first letter initially
highlightLetter(currentIndex);
highlightKeyAndFinger(textToType[currentIndex]);

// Add an event listener for keydown events
document.addEventListener("keydown", (event) => {
  // Get the current highlighted letter
  const currentLetter = textToType[currentIndex];

  // Get the key that was pressed
  const pressedKey = event.key;

  // Handle the Backspace key
  if (pressedKey === "Backspace") {
    // Remove highlight from the current letter, key, and finger
    removeHighlight(currentIndex);
    removehighlightKeyAndFinger();
    correctCount--;

    // Check if the current letter has a red background (indicating a typo)
    const currentLetterElement = document.getElementById(
      `letter-${currentIndex - 1}`
    );
    if (currentLetterElement.style.backgroundColor === "red") {
      incorrectCount--;
      correctCount++; // Decrement the incorrectCount
      currentLetterElement.style.backgroundColor = ""; // Reset the background color
    }

    // Decrement the index
    currentIndex--;

    // Highlight the previous letter, key, and finger
    highlightLetter(currentIndex);
    highlightKeyAndFinger(textToType[currentIndex]);

    return;
  }

  if (event.key === " ") {
    event.preventDefault(); // Prevent the default behavior
  }

  // Ignore special keys like "Shift"
  if (pressedKey.length > 1) {
    return;
  }

  // Remove highlight from the current letter
  removeHighlight(currentIndex);

  // Remove highlight from the previous key and finger
  removehighlightKeyAndFinger();

  // Check if the pressed key matches the current letter
  if (pressedKey === currentLetter) {
    correctCount++;
  } else {
    // Count as incorrect and change the text backgroundColor to red
    incorrectCount++;
    document.getElementById(`letter-${currentIndex}`).style.backgroundColor =
      "red";
  }

  // Increment the index
  currentIndex++;

  // Check if currentIndex is within the bounds of the string
  if (currentIndex < textToType.length) {
    // Highlight the next letter
    highlightLetter(currentIndex);

    // Highlight the next key and finger
    highlightKeyAndFinger(textToType[currentIndex]);
  }

  if (!isTimerRunning) {
    startTimer();
  }

  if (!isTypingStarted) {
    startTime = new Date();
    isTypingStarted = true;
  }

  if (currentIndex === textToType.length) {
    const endTime = new Date();
    const timeDiff = (endTime - startTime) / 1000; // Convert to seconds
    const minutes = timeDiff / 60; // Convert to mintutes
    const totalWords = textToType.length / 5; // Average English word length.
    const wpm = totalWords / minutes; // Calculate words per minute
    const accuracy = calculateAccuracy(correctCount);

    // Display WPM
    alert(
      `Your typing speed is ${Math.round(
        wpm
      )} WPM!, and your accuracy is ${accuracy}%`
    );
    resetTest();
  }
  console.log(incorrectCount, correctCount);
});
