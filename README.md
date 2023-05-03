# Employee-Tracker

## Table Of Contents
*[Technology Used](#technology-used)

*[Description](#description)

*[Code Snippet](#code-snippet)

*[Credits](#credits)

*[Author](#author)

## Technology used

| Technology Used         | Resource URL  |
| -------------           |:-------------:|
| Node.js                 | [https://nodejs.org/en](https://nodejs.org/en) | 
| npm                     | [https://www.npmjs.com/](https://www.npmjs.com/)      |
| Inquirer             | [https://www.npmjs.com/package/inquirer#prompt](https://www.npmjs.com/package/inquirer#prompt)
| Git                     | [https://git-scm.com/](https://git-scm.com/)     | 
| JavaScript              | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| MYSQL                  | [https://www.mysql.com/](https://www.mysql.com/) |

## Description
This application

## Code Snippet
This is a view of all the prompts I made and one example if a prompt is used. in this case viewing all employees. it either diplays the table of employees or ir throws an error if the request isnt valid.

```JavaScript
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
  })
```
## Credits
[Using object.key() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

[mySQL syntax](https://www.mysqltutorial.org/mysql-cheat-sheet.aspx)

## Author
```MD
### Emanuel Molina

[GitHub](https://github.com/AcquahLopid)
[LinkedIn](https://www.linkedin.com/in/emanuel-molina-65b84426b/)
[GitLab](https://ucb.bootcampcontent.com/emanuelmolina2k-BAsayK)

```