// The text to be typed
const textToType =
  "This is the text that you need to type in order to pass.↵This is the second line. This will be another line of text.";

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

const getKeyAndFingerByChar = (char) => {
  // Define a mapping of characters to their corresponding key IDs and finger IDs
  const charMap = {
    // Row 1
    esc: { keyId: "key-esc", fingerId: "pinky" },
    1: { keyId: "key-1", fingerId: "pinky" },
    2: { keyId: "key-2", fingerId: "ring" },
    3: { keyId: "key-3", fingerId: "middle" },
    4: { keyId: "key-4", fingerId: "l-index" },
    5: { keyId: "key-5", fingerId: "l-index" },
    6: { keyId: "key-6", fingerId: "r-index" },
    7: { keyId: "key-7", fingerId: "r-index" },
    8: { keyId: "key-8", fingerId: "middle" },
    9: { keyId: "key-9", fingerId: "ring" },
    0: { keyId: "key-0", fingerId: "pinky" },
    "-": { keyId: "key-minus", fingerId: "pinky" },
    "=": { keyId: "key-equal", fingerId: "pinky" },
    "⌫": { keyId: "key-bckspc", fingerId: "pinky" },

    // Row 2
    q: { keyId: "key-q", fingerId: "pinky" },
    w: { keyId: "key-w", fingerId: "ring" },
    e: { keyId: "key-e", fingerId: "middle" },
    r: { keyId: "key-r", fingerId: "l-index" },
    t: { keyId: "key-t", fingerId: "l-index" },
    y: { keyId: "key-y", fingerId: "r-index" },
    u: { keyId: "key-u", fingerId: "r-index" },
    i: { keyId: "key-i", fingerId: "middle" },
    o: { keyId: "key-o", fingerId: "ring" },
    p: { keyId: "key-tab", fingerId: "pinky" },
    "[": { keyId: "key-l-brack", fingerId: "pinky" },
    "]": { keyId: "key-r-brack", fingerId: "pinky" },

    // Row 3
    a: { keyId: "key-a", fingerId: "pinky" },
    s: { keyId: "key-s", fingerId: "ring" },
    d: { keyId: "key-d", fingerId: "middle" },
    f: { keyId: "key-f", fingerId: "l-index" },
    g: { keyId: "key-g", fingerId: "l-index" },
    h: { keyId: "key-h", fingerId: "r-index" },
    j: { keyId: "key-j", fingerId: "r-index" },
    k: { keyId: "key-k", fingerId: "middle" },
    l: { keyId: "key-l", fingerId: "ring" },
    ":": { keyId: "key-semi", fingerId: "pinky" },
    '"': { keyId: "key-s-quote", fingerId: "pinky" },
    "↵": { keyId: "key-enter", fingerId: "pinky" },

    // Row 4
    z: { keyId: "key-z", fingerId: "pinky" },
    x: { keyId: "key-x", fingerId: "ring" },
    c: { keyId: "key-c", fingerId: "middle" },
    v: { keyId: "key-v", fingerId: "l-index" },
    b: { keyId: "key-b", fingerId: "l-index" },
    n: { keyId: "key-n", fingerId: "r-index" },
    m: { keyId: "key-m", fingerId: "r-index" },
    ",": { keyId: "key-comma", fingerId: "middle" },
    ".": { keyId: "key-period", fingerId: "ring" },
    "/": { keyId: "key-f-slash", fingerId: "pinky" },

    // Row 5
    " ": { keyId: "key-space", fingerId: "thumb" },
  };

  // Return the mapping for the given character, or defualt if the character is not in the map
  return charMap[char.toLowerCase()] || { keyId: null, fingerId: null };
};

// Function to highlight the key and finger based on the character
// Function to highlight the key and finger based on the character
const highlightKeyAndFinger = (char) => {
  const { keyId, fingerId } = getKeyAndFingerByChar(char);

  if (keyId) {
    document.getElementById(keyId).classList.add("highlighted");
  }

  if (fingerId) {
    const side = fingerId.startsWith("l") ? "left" : "right";
    document.getElementById(`${side}-${fingerId}`).classList.add("highlighted");
  }
};

// Function to remove the highlight from the key and finger
const removeKeyAndFingerHighlight = () => {
  const highlightedKeys = document.querySelectorAll(".key.highlighted");
  const highlightedFingers = document.querySelectorAll(".finger.highlighted");

  highlightedKeys.forEach((key) => key.classList.remove("highlighted"));
  highlightedFingers.forEach((finger) =>
    finger.classList.remove("highlighted")
  );
};

// Modify the keydown event listener
document.addEventListener("keydown", (event) => {
  // ... [rest of your existing code]

  // Remove highlight from the previous key and finger
  removeKeyAndFingerHighlight();

  // Highlight the next key and finger
  highlightKeyAndFinger(textToType[currentIndex]);
});

// Initially highlight the first key and finger
highlightKeyAndFinger(textToType[0]);
