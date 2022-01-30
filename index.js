const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const fs = require('fs');
const generateTeam = require('./dist/generateTeam')



teamArray = [];

const Questions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's id?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?",
        },
        {
            type: "list",
            name: "addPosition",
            message: "What position would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more positions."],
        }
    ])
    .then((answers) => {
    
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
        teamArray.push(manager)
        switch(answers.addPosition) {
            case "Engineer":
                engineerQs();
                break;
            case "Intern":
                internQs();
                break;
            default: 
            writeToFile("dist/index.html", generateTeam(teamArray))
        }
    });
};


const engineerQs = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's id?",
        },
        {
            type: "input",
            name: "engineeerEmail",
            message: "What is the engineer's Email?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's GitHub?",
        },
        {
            type: "list",
            name: "AddPosition",
            message: "What type of position would you like to add next?",
            choices: ["Engineer", "Intern", "I don't want to add any more positions."],
        }
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        teamArray.push(engineer)
        switch(answers.AddPosition) {
            case "Engineer":
                engineerQs();
                break;
            case "Intern":
                internQs();
                break;
            default: 
            writeToFile("dist/index.html", generateTeam(teamArray))
        }
    })
};


const internQs = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's Email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the intern go to?"
        },
        {
            type: "list",
            name: "addPosition",
            message: "What type of position would you like to add next?",
            choices: ["Engineer", "Intern", "I don't want to add any more postions."],
        }
    ])
    .then((answers) => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teamArray.push(intern)
        switch(answers.addPosition){
            case "Engineer":
                engineerQs();
                break;
            case "Intern":
                internQs();
                break;
            default:
                writeToFile("dist/index.html", generateTeam(teamArray))
        }
    })
};


Questions();


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log("Your team has been created!")
    });
};