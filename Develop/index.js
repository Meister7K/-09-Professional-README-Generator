// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Hello, what is the title of your project?',
        name: 'title'
    },
    {
        type: 'checkbox',
        message: 'select your Table of Contents items.',
        name: 'tableOfContents',
        choices: [
            'Description',
            'Installation',
            'Usage',
            'License',
            'Contributions',
            'Tests',
            'Questions',
            'Cited'
        ]
    },
    {
        type: 'input',
        message: 'please enter your description.',
        name: 'description'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./README.md', generateMarkdown(data), (err) => err ? console.error(err) : console.log('Success!'))

    // title: process.argv[2]
    // Description: process.argv[3]
        // 
    // Install: process.argv[4] or [3,0]
    // Usage: process.argv[5] or [3,1]
    // License: process.argv[6] or [3,2]
    // Cont: process.argv[7] or [3,3]
    // Test: process.argv[8] or [3,4]
    // Questions: process.argv[9] or [3,5]
    // Cited: process.argv[10] or [3,6]
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) =>{
        console.log(data);
        writeToFile('./README.md', data);
    })
};

// Function call to initialize app
init();

// end result is readme.md created with correct styling for links and image
// title, table of contents(must be links), description, installation, usage, license(list + badge + notice), contributions, tests, questions(adds username + link to github + email)
//  