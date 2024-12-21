const fs = require("fs");
const math = require("mathjs");

function readExpressions(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return data.split("\n").filter((line) => line.trim() !== "");
  } catch (error) {
    console.error("Error reading the file:", error);
    return [];
  }
}

// Function to evaluate an expression and return the result
function evaluateExpression(expression) {
  try {
    // Remove the trailing '=' and any unnecessary spaces
    expression = expression.replace("=", "").trim();

    // Evaluate the arithmetic expression using math.js
    const result = math.evaluate(expression);

    return `${expression} = ${result}`;
  } catch (error) {
    console.error("Error evaluating expression:", error);
    return `${expression} = Error`;
  }
}

// Function to write results to an output file
function writeResults(filePath, results) {
  try {
    fs.writeFileSync(filePath, results.join("\n"), "utf-8");
    console.log("Results written to output.txt");
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}

function processExpressions() {
  const inputFile = "input.txt";
  const outputFile = "output.txt";

  // Step 1: Read the expressions from input file
  const expressions = readExpressions(inputFile);

  // Step 2: Evaluate each expression
  const results = expressions.map(evaluateExpression);

  // Step 3: Write the results to the output file
  writeResults(outputFile, results);
}

processExpressions();
