// GLOBAL VARIABLES AND DEPENDENCIES

const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');


// QUESTIONS TO ASK USER

const questions = [

    {
        type: 'input',
        name: 'username',
        message: 'What is your username for Github?',
        
    },
    
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your app?',
        
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your app?',
        
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        
    },

    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this app?',
        
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose your license for your project.',
        choices: ['Mozilla', 'Apache', 'MIT', 'ISC', 'GNU', ]
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'Who helped contribute to your app?',
        
    },

    {
        type: 'input',
        name: 'questions',
        message: 'Add your email for future questions!',
        
    },
];

// FUNCTION TO WRITE README FILE

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Success! Your README for your app has been created!')
    });
}

const writeFileAsync = util.promisify(writeToFile);

// FUNCTION TO INITIATE APP

async function init() {
    try {

    
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);
    
        await writeFileAsync('example-README.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// FUNCTION TO CALL APP
init();
