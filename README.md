# SQL-Employee-Tracker

## Description

The SQL Employee Tracker is a a command-line application built from scratch to manage a company's employee database using Node.js, Inquirer, and PostgreSQL.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install the SQL Employee Tracker, follow these steps:Clone the Repository:git clone https://github.com/Rualexandra/SQL-Employee-Tracker.git
Install Dependencies: npm install
Set Up Environment Variables:
Create a .env file in the root directory and add your PostgreSQL credentials: DB_USER=your_postgresql_username
DB_HOST=localhost
DB_NAME=employeetracker_db
DB_PASSWORD=your_postgresql_password
DB_PORT=5432

Set Up Database:
npm run setup

Run the Application:
node index.js
Additional Notes
Ensure you are using Node.js v20.12.1 or later.
Make sure PostgreSQL is installed and running on your machine.

## Usage

1. .Start the Application:node index.js

2. Main Menu:
   When you start the application, you will be presented with the main menu options:
   View all department.
   View all roles.
   View all employees.
   Add a department.
   Add a role.
   Add an employee.
   Update an employee role.
   Exit

3. Viewing Data:
   View all departments: Select this option to see a table with all department names and their IDs.
   View all roles: Select this option to see a table with job titles, role IDs, the departments they belong to, and their salaries.
   View all employees: Select this option to see a table with employee IDs, first names, last names, job titles, departments, salaries, and their managers.

4. Adding Data:
   Add a department: Select this option and you will be prompted to enter the name of the new department.
   Add a role: Select this option and you will be prompted to enter the role name, salary, and the department ID it belongs to.
   Add an employee: Select this option and you will be prompted to enter the employee’s first name, last name, role ID, and manager ID.

5. Updating Data:
   Update an employee role: Select this option and you will be prompted to choose an employee and then enter their new role ID.

6. Exiting the Application: Select this option to exit the application. The PostgreSQL client connection will be closed, and the process will terminate.

## License

This project is licensed under the [None]() license.

## Contributing

## Demo Video

https://watch.screencastify.com/v/zQIsfRgMIAmAdRObFMqM


## Questions

If you have any questions, you can contact me at Rualexandra. You can also find more of my work at [Rualexandra99@gmail.com](https://github.com/Rualexandra).
