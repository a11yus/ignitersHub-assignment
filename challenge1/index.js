// src/app.js
const readlineSync = require("readline-sync");
const { loadWordsFromFile, findClosestWords } = require("./utils/search");

const wordsFile = "./data/words.txt";

const words = loadWordsFromFile(wordsFile);

function startPrompt() {
  while (true) {
    const userInput = readlineSync
      .question('Enter a word (or type "exit" to quit): ')
      .trim();

    if (userInput.toLowerCase() === "exit") {
      console.log("Goodbye!");
      break;
    }

    if (!userInput) {
      console.log("No input provided. Please enter a word.");
      continue;
    }

    const suggestions = findClosestWords(userInput, words);

    if (suggestions.length === 0) {
      console.log(`No suitable suggestions found for "${userInput}".`);
    } else {
      console.log(`Suggestions for "${userInput}": ${suggestions.join(", ")}`);
    }
  }
}

startPrompt();
