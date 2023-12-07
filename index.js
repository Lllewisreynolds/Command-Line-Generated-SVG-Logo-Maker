// Individual shape classes brought in from ./lib/shapes module
const { Triangle, Square, Circle } = require("./lib/shapes");

// Inquirer & File System node libraries/modules made accessible via import
const inquirer = require("inquirer");

const fs = require("fs");

// inquirer's native '.prompt' function used to collect the user's input in the command line and save those answers

function collectUserInput() {
    inquirer
      .prompt([
        {
          type: "input",
          message:
            "What text would you like to display on your logo (Please enter up to a maximum of three characters)?",
          name: "text",
        },
      
        {
          type: "input",
          message:
            "Choose a text color in either a hexadecimal number notation or simple colour keyword format (see: 'pink', or '#ff0000' for examples)",
          name: "textColour",
        },
    
        {
          type: "list",
          message: "Which of the following pre-determined shapes would you like to render your logo with?",
          choices: ["Square", "Circle", "Triangle"],
          name: "shape",
        },
      
        {
          type: "input",
          message:
            "Choose a background color for your shape in either a hexadecimal number notation or simple colour keyword format (see: 'pink', or '#ff0000' for examples)",
          name: "backgroundShapecolour",
        },
      ])
    }