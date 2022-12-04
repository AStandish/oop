const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./utils/Employee.js");
const Engineer = require("./utils/Engineer.js");
const Intern = require("./utils/Intern.js");
const Manager = require("./utils/Manager.js");

const managerQuestions = [
  {
    type: "input",
    name: "manager_name",
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
    name: "manager_id",
    message: "Enter your manager ID:",
    validate: (managerIDInput) => {
      if (managerIDInput) {
        return true;
      } else {
        console.log("Please provide your manager ID:");
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
    choices: ["engineer", "intern", "exit"],
  },
];
const engineerQuestions = [
  {
    type: "input",
    name: "engineer_name",
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
    name: "engineer_id",
    message: "Enter your engineer ID:",
    validate: (engineerIDInput) => {
      if (engineerIDInput) {
        return true;
      } else {
        console.log("Please provide your engineer ID:");
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

const internQuestions = [
  {
    type: "input",
    name: "intern_name",
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
    name: "school",
    message: "Enter your school",
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please provide your school:");
        return false;
      }
    },
  },
];

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
  return inquirer.prompt(managerQuestions);
}

// Function call to initialize app
init()
  .then((managerAnswers) => {
    // return (userInput);
    console.log(managerAnswers);
    if(managerAnswers.team === "Engineer"){
      promptEngineerQuestions()
    }
    else if(managerAnswers.team === "Intern"){
      promptInternQuestions()
    }
    else{
      return;
    }
  })
  //.then((html) => {
  //   return writeToFile(html);
  // })
  .catch((err) => {
    console.log(err);
  });

  function promptEngineerQuestions(){
    inquirer.prompt(engineerQuestions).then((engineerAnswers)=>{
      let engineerOBJ=

    })
  }

  function promptInternQuestions(){
    inquirer.prompt(internQuestions).then((internAnswers)=>{
      
    })
  }