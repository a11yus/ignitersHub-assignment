const fs = require("fs");
const levenshtein = require("./levenshtein");

function loadWordsFromFile(filePath) {
  try {
    // Read the file and split by lines
    return fs
      .readFileSync(filePath, "utf-8")
      .split("\n")
      .map((word) => word.trim())
      .filter(Boolean);
  } catch (error) {
    console.error("Error reading the file:", error);
    return [];
  }
}

function findClosestWords(input, words, k = 3) {
  if (!input) {
    return "Please provide a valid input.";
  }

  const wordDistances = words.map((word) => ({
    word,
    distance: levenshtein(input, word),
  }));

  // Sort the words by their distance to the input (ascending order)
  wordDistances.sort((a, b) => a.distance - b.distance);

  // If no suitable matches found, return message
  if (
    wordDistances.length === 0 ||
    wordDistances[0].distance > Math.floor(input.length / 2)
  ) {
    return [];
  }

  return wordDistances.slice(0, k).map((item) => item.word);
}

module.exports = { loadWordsFromFile, findClosestWords };
