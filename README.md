# Command Line Generated SVG Logo Maker

## Table of Contents

  * [Description](#description)
  * [Licence](#licence)
  * [Installation](#installation)
  * [Demo Video](#demovideo)
  * [Questions](#questions)

## Description

This Node.js command-line application takes in user input to generate a logo saved as an `.svg` file. The idea behind this application is to provide a means by which a web developer might produce simple logos for their clients' projects without the need to then outsource wotk to graphic designers at often considerable cost. 

This application is executed through the following processes: the inquirer package's native '.prompt' function is used to collect user input in the command line based on a set of predetermined factors: namely, what shape, background colour, text and text colour they would like for their logo. These answers are then used within a function that generates the logo by populating the basic shell structure of an SVG file with the user's additional choices via a conditional statement, before dynamically writing the SVG file to the directory. The user can then view this generated logo within the browser to see the finished article as a graphic.

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  
## Licence

This application has the following licence:

Apache license 2.0

[Link to licence](https://opensource.org/licenses/Apache-2.0)

## Installation
    
To run the application, the following installation is required:

  * Node.js must be installed. You can download the installer directly from the [Nodejs website](https://nodejs.org). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install node
```

  * Your next step is to initialize a project by creating a package.json file that will keep track of libraries installed for use in your application by adding the installed package's name and version. This is achieved by typing the following in the command line:

```bash
npm init -y
```

  * This command line application makes use of the following two dependencies:

  * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

  * Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

  * To install these packages, run the following commands from the CLI:

```bash
npm i inquirer@8.2.4
```
```bash
npm i jest
```
  * If you wish to run the test suite provided by the Jest package, type the following command within the terminal:

```bash
npm run test
```

  * And finally: please type the following command within the terminal to invoke the application:

```bash
node index.js
```

## Demo Video

[Link to video walkthrough of SVG Logo generation](https://drive.google.com/file/d/1cC5F482ylhh6dd9Fh_UIxUATRL5dUI5X/view)
      
## Questions

  For further questions:

  If you have any further questions or feedback at this time regarding the repo or application, my contact info can be found as below.
  
  Contact Info:

  GitHub: [Lllewisreynolds](https://github.com/Lllewisreynolds)

  Email: [lsreynolds108@gmail.com](mailto:lsreynolds108@gmail.com)