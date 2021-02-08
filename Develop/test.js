// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
let badge;
let license;

// TODO: Create an array of questions for user input
const promptUser = () => {
    const mockData = {
        title: 'Readme Generator',
        description: 'This application asks the user a number of questions and then generates a professional readme for github.',
        install: 'To install the correct dependencies please run "npm install" in the terminal.  Once that is installed you can run "node index" and the application will run.',
        usage: 'The application is strickly used to generate a readme file for github.',
        license: 'MIT',
        contribute: 'Nate Schroeder',
        tests: 'If you would just like to test the application and see what the output looks like then run "node test" in the terminal.',
        question: 'n8dogg59',
        email: 'imnotgivingmyrealemail@aol.com.org'
    }
    var projectData = mockData;
    init("README.md", generateMarkdown(projectData, badge, license));
}

promptUser();

// TODO: Create a function to initialize app
function init(fileName, projectData) {
    fs.writeFile(fileName, projectData, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Readme Created!")
        }
    })
}
