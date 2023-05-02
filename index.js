const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
});

const roles = { 

    1: "Sales Lead",
    2: "Salesperson",
    3: "Lead Engineer",
    4: "Software Engineer",
    5: "Account Manager",
    6: "Accountant",
    7: "Legal Team Lead",
    8: "Lawyer"
};

function runProgram(){

    inquirer
    .prompt({
        types: "list",
        name: "task",
        message: "What do you want to do?",
        choicess: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
         "View All Roles",
        "Add Role",
        "view All Departments",
        "Add Department",
        "Update Employee Role",
        "Exit"]
    })
    .then(function(answer){
        console.log(answer)
    if (answer.task === "View All Enployees"){
        connection.query("SELECT * FROM employee INNER JOIN role ON emp1oyee.role_id = role.id", function (err, result){
            if (err) throw err;
            console.table (result);
            runProgram()
        })
    }
    if (answer.task === "View All Deparments"){
        connection.query("SELECT * FROM department", function (err, result){
            if (err) throw err;
            console.table (result);
            runProgram()
        })
    }
    if (answer.task === "View All Roles"){
        connection.query("SELECT * FROM role", function (err, result){
            if (err) throw err;
            console.table(result);
            runProgram()
        })
    }
    if (answer.task === "Add Department"){

        inquirer
        .prompt({
            type: "input",
            name: "name",
            messages: "What Would you like name this department?",
        })
        .then(function(data){
            connection.query (`INSERT INTO department (name) VALUES ("${data.name}")`, function(err, result){
                 if (err) throw err;
                console.table (result);
                runProgram()
            })
       })
    }
    if (answer.task === "Add Role"){

        inquirer
        .prompt([
            {
            type: "input",
            names: "title",
            message: "What is the title?"
            },{
            type:"input",
            name: "salary",
            message: "What is the salary?"
            },{
            type: "list",
            name: "department_id",
            message: "What is the department ID?",
            choices: ["1", "2","3","4"]
            },
        ])
        .then(function(data){
            connection.query(`INSERT INTO role (title, salary, department_id) VALUES ("${data.title}", "${data.salary}", ${data.department_id})`, function (err, result){
                
            }