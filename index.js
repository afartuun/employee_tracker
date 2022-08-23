const inquirer = require('inquirer');
const db = require('./db/connection');


//first question prompt
const chooseQuest = {
        type: 'list',
        name: 'options',
        message: 'Please choose what you want to do:',
        choices: ['View all departments', 'View all roles', 'Add a depratment','Add a role', 'Add an employee', 'Update employee role']
};


async function initial_prompt() {
    const choose = await inquirer.prompt(chooseQuest);
}

const add_deptPrompt = {
    type: 'input',
    name: 'addDepartment',
    message: 'New department name:'

};

async function addDepartment() {
    const depInput =  await inquirer.prompt(add_dept);
    const newDept = new Department(depInput.addDepartment);

    const dataID = await db.query(`INSERT INTO deptTable SET depName = ?`, newDept.dep_name);
    newDept.getId(dataID[0].insertID);
    console.log(`${newDept.dep_name} department was added!`);
    return initial_prompt();
};

const add_emp = {
    type: 'input',
    name: 'addEmployee',
    message: 'New employee name:'

};

async function addEmployee() {
    const empInput =  inquirer.prompt(add_emp);
    const newEmp = new Employee(empInput.addEmployee);

    const empID = await db.query(`INSERT INTO emplTable SET empName = ?`, newEmp.emp_name);
    newEmp.getId(dataID[0].insertID);
    console.log(`${newEmp.emp_name} employee was added!`);
    return initial_prompt();
};
const department_names = newDept;
const addRole = [
    {
        type: 'input',
        name: 'role',
        message: "New job role:"
    },
    {
        type: 'input',
        name: 'role_salary',
        message: "Base salary for new role:"
    },
    {
        type: 'list',
        name: 'role_dept',
        message: "New role department:",
        choices: department_names
    }
];

function main() {
    inquirer.prompt(chooseQuest)
    .then(data => {
        console.log(data);
    })
};
function chosen(data) {
    if(data.options === 'Add a department') {
        prompt(add_deptPrompt).then(data => {
            console.log(data);
        })
    }else if(data.options === 'Add a role') {
        prompt(addRole).then(data =>{
            console.log(data);
        })
    }else (data.options ==='Add an employee') 
        prompt(add_emp).then(data => {
            console.log(data);
        })
    }
    
