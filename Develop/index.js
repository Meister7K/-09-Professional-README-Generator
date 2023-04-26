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
        message: 'If you selected Description, please enter your description. If not, click enter.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'If you selected Installation, please enter your Installation directions. If not, click enter.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'If you selected Usage, please enter your Usage directions. If not, click enter.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'If you shave an image to share, please enter your URL. If not, click enter.',
        name: 'image'
    },
    {
        type: 'list',
        message: 'Select your License',
        name: 'license',
        choices: [
            'Apache',
            'Boost',
            'BSD',
            'CCO',
            'Eclipse',
            'GNU',
            'IBM',
            'ISC',
            'MIT',
            'Mozilla',
            'ODC',
            'Perl'
        ],
        filter(value){
            return value;
        }
    },
    {
        type: 'input',
        message: 'If you selected Contributions, please add your contributors. If not, click enter.',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'If you selected Tests, please enter your testings directions. If not, click enter.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'If you selected Questions, please ask them here. If not, click enter.',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'If you selected Cited, please enter your cited information here. If not, click enter.',
        name: 'cited'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'git'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
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