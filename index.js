const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "name",
    message: "Please provide your first and last name:",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "employee id",
    message: "Enter your employee ID:",
    validate: (employeeIDInput) => {
      if (employeeIDInput) {
        return true;
      } else {
        console.log("Please provide your employee ID:");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please provide your email:");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "office number",
    message: "Enter your office number:",
    validate: (officeNoInput) => {
      if (officeNoInput) {
        return true;
      } else {
        console.log("Please provide your office number:");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "team",
    message: "Would you like to add an engineer or intern?",
    choices: ["engineer", "intern"],
    when: ({ confirmTeam }) => {
      if (confirmTeam) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please provide your GitHub username:");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    // make a readme file and add to dist folder
    fs.writeFile("./dist/index.html", data, (err) => {
      // if there's an error, reject the Promise and send the error to .catch() method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't continue to execute the resolve() function
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the .then() method
      resolve({
        ok: true,
        message: console.log(
          'Great job! Navigate to the "dist" folder to see your team!'
        ),
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((userInput) => {
    return generateMarkdown(userInput);
  })
  .then((html) => {
    return writeToFile(html);
  })
  .catch((err) => {
    console.log(err);
  });
