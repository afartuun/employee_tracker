const inquirer = require('inquirer');
const db = require('./db/connection');


//first question prompt
const choosePrompt = {
        type: 'list',
        name: 'options',
        message: 'Please choose what you want to do:',
        choices: ['View all departments', 'View all roles', 'Add a depratment','Add a role', 'Add an employee', 'Update employee role']
};


async function initial_prompt() {
    const choose = await inquirer.prompt(choosePrompt);


}