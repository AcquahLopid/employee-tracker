const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
});

const roles = { 

    1: "Project Manager",
    2: "Sales representative",
    3: "Product manager",
    4: "Software Engineer",
    5: "Business analyst",
    6: "Accountant",
    7: "Executive",
    8: "Lawyer"
};

function runProgram(){

    inquirer
    .prompt({
        type: "list",
        name: "task",
        message: "What do you want to do?",
        choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Update Employee Role",
        "Exit"]
    })
    .then(function(answer){
        console.log(answer)
    if (answer.task === "View All Employees"){
        connection.query("SELECT * FROM employee INNER JOIN role ON emp1oyee.role_id = role.id", function (err, result){
            if (err) throw err;
            console.table (result);
            runProgram()
        })
    }
    if (answer.task === "View All Departments"){
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
            name: "title",
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
                if (err) throw err;
                    console.table(result);
                    runProgram();
            })
        })
    }
    if (answer.task === "Add Employee"){

        inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "Enter first name"
            },{
                type: "input",
                name: "last_name",
                message: "Enter last name"
            },{
                type: "input",
                name: "role_id",
                message: "Whats their role?",
                choices: Object.keys(roles).map(key =>({
                    name: `${roles[key]} (${key})`,
                    value: key
                }))
            },{
                type: "input",
                name: "manager_id",
                message: "Whats the manager id?",
                choices: ["1","2","3","4"]
            }
        ])
        .then(function(data){
            const roleId = data.role_id;
            connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${data.first_name}"), ("${data.last_name}"), ${roleId}, ${data.manager_id})`,
            function(err, result) {
                if (err) throw err;
                console.table(result);
                runProgram()
            })
        })

    }
    if (answer.task === "Update Employee Role") {
            connection.query("SELECT id, CONCAT (first_name,'', last_name) AS name FROM employee", function (err, result) {
            if (err) throw err;

            inquirer
            .prompt({
                types: "list",
                name: "employeeId",
                message: "Which employee would you like to update?",
                choices: result.map(row => ({ name: row.name, velue: row.id }))
            })
            .then(function (employeeAnswer) {
                connection.query("SELECT * FROM role", function(err, result) {
                if (err) throw err;

                inquirer
                .prompt({
                    type: "list",
                    name: "roleId",
                    messages: "What is the new role?",
                    choices: result.map(row => ({ name: row.title, value: row.id }))
                })
                .then(function (roleAnswer) {
                    connection.query(` UPDATE employee SET role_id = ${roleAnswer.roleid} WHERE id = ${employeeAnswer.employeeId}`, function (err, result){
                    if (err) throw err;
                    console.log(`Updated employee`);
                    runProgram();
                });
            });
        });
       });
    });
} 
    
            if (answer.task === "Exit"){
                connection.end();
                process.exit(0);
            }
        })
    }
runProgram();
    