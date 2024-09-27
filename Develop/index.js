// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'What is the description of your project?',
    'What are the installation instructions?',
    'What is the usage information?',
    'What are the contribution guidelines?',
    'What license would you like to use?',
    'What is your GitHub username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('File written successfully');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'license',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'github',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[7]
        }
    ]).then((answers) => {
        writeToFile(generateMarkdown(answers));
    });

}

// Function call to initialize app
init();
