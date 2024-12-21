const readline = require("readline");

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser() {
  rl.question('Enter a string (or type "exit" to quit): ', (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Exiting the program. Goodbye!");
      rl.close();
      return;
    }

    // Check if the input string is a palindrome
    if (isPalindrome(input)) {
      console.log(`The string '${input}' is a palindrome.`);
    } else {
      console.log(`The string '${input}' is not a palindrome.`);
    }

    promptUser();
  });
}

promptUser();
