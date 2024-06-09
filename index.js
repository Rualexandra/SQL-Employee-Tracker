const inquirer = require('inquirer');
const queries = require('./queries');

const mainMenu = async () => {
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ]);

  switch (choice) {
    case 'View all departments':
      console.table(await queries.getDepartments());
      break;
    case 'View all roles':
      console.table(await queries.getRoles());
      break;
    case 'View all employees':
      console.table(await queries.getEmployees());
      break;
    case 'Add a department':
      const { departmentName } = await inquirer.prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'Enter the name of the department:'
        }
      ]);
      await queries.addDepartment(departmentName);
      break;
    case 'Add a role':
      const { roleName, roleSalary, roleDepartment } = await inquirer.prompt([
        {
          type: 'input',
          name: 'roleName',
          message: 'Enter the name of the role:'
        },
        {
          type: 'input',
          name: 'roleSalary',
          message: 'Enter the salary of the role:'
        },
        {
          type: 'input',
          name: 'roleDepartment',
          message: 'Enter the department ID of the role:'
        }
      ]);
      await queries.addRole(roleName, roleSalary, roleDepartment);
      break;
    case 'Add an employee':
      const { employeeFirstName, employeeLastName, employeeRole, employeeManager } = await inquirer.prompt([
        {
          type: 'input',
          name: 'employeeFirstName',
          message: 'Enter the first name of the employee:'
        },
        {
          type: 'input',
          name: 'employeeLastName',
          message: 'Enter the last name of the employee:'
        },
        {
          type: 'input',
          name: 'employeeRole',
          message: 'Enter the role ID of the employee:'
        },
        {
          type: 'input',
          name: 'employeeManager',
          message: 'Enter the manager ID of the employee (leave blank if none):',
          default: null
        }
      ]);
      await queries.addEmployee(employeeFirstName, employeeLastName, employeeRole, employeeManager);
      break;
    case 'Update an employee role':
      const { employeeId, newRoleId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'employeeId',
          message: 'Enter the ID of the employee you want to update:'
        },
        {
          type: 'input',
          name: 'newRoleId',
          message: 'Enter the new role ID for the employee:'
        }
      ]);
      await queries.updateEmployeeRole(employeeId, newRoleId);
      break;
    case 'Exit':
      client.end();
      process.exit();
  }

  mainMenu();
};

mainMenu();
