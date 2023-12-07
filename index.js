const { Triangle, Square, Circle } = require('./lib/shapes');

const inquirer = require('inquirer');

const fs = require('fs');

// Function writes the SVG file based on data provided by user input gathered through inquirer prompt
function generateFile(fileName, userInput) {
    // Empty svgString is then populated with the basic structure of an SVG file as defined in materials provided within Challenge README 
    let svgString = "";
    svgString =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${userInput.shape}`;
  
    
    // This code dynamically generates SVG code based on the user's chosen shape by cycling through a conditional statement
    // This ensures that the appropriate shape tags are used for each instance along with individually defined positioning and dimensions for each of the shape instances
    let shapeChoice;
    if (userInput.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${userInput.backgroundShapeColour}"/>`;
    } else if (userInput.shape === "Circle") {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${userInput.backgroundShapeColour}"/>`;
    } else {
      shapeChoice = new Triangle();
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${userInput.backgroundShapeColour}"/>`;
    }

    // User-provided text & text colour added to the SVG file, with positioning defined as approximately in the middle of overall SVG container
    // 'g' tag used to group together the multiple SVG elements and apply a uniform styling is closed, followed by the 'svg' root element enclosing the entire SVG file
    svgString += `<text x="150" y="120" text-anchor="middle" font-size="35" fill="${userInput.textColour}">${userInput.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";
  
    // File system module used to generate svg file
    // Three parameters given to native fs function. Local code block therein makes use of a ternary operator to either handle error or log console message indicating successful file creation
    fs.writeFile(fileName, svgString, (err) => {
        err
        ? console.error(err)
        : console.log(
      "Logo.svg file generated via command line"
      );
    });
  }

// inquirer's native '.prompt' function used to collect the user's input in the command line and save those answers
function collectUserInput() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What text would you like to display on your logo (Please enter up to a maximum of five characters to ensure it fits within your chosen shape)?',
        name: 'text',
      },

      {
        type: 'input',
        message: 'Choose a text color in either a hexadecimal number notation or simple color keyword format (see: \'blue\', or \'#ff0000\' for examples)',
        name: 'textColour',
      },

      {
        type: 'list',
        message: 'Which of the following pre-determined shapes would you like to render your logo with?',
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shape',
      },

      {
        type: 'input',
        message: 'Choose a background color for your shape in either a hexadecimal number notation or simple color keyword format (see: \'blue\', or \'#ff0000\' for examples)',
        name: 'backgroundShapeColour',
      },
    ])
    .then((userInput) => {
    // Calling generate file function to generate SVG file
    generateFile("logo.svg", userInput);
    });
}
// Function is called to begin process of user prompts / code block when the application is ran on the command line with 'node index.js'
collectUserInput();