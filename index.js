const inquirer = require("inquirer")
const mysql = require("mysql2");
const cTable = require("console.table");

function init() {
    inquirer.prompt([
    {
    type: "list",
    message: "Please choose an action.",
    name: "Menu",
    choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees", 
            "Add Department",
            "Add Role",
            "Add Employee",
            "Update Employee Role"
            ]
    }])}




init();