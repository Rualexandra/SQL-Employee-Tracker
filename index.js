const inquirer = require('inquirer');
const { client, getDepartments, getRoles, getEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./queries'); // Import the client object and query functions

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
      console.table(await getDepartments()); // Use getDepartments directly
      await mainMenu()

      break;
    case 'View all roles':
      console.table(await getRoles()); // Use getRoles directly
      await mainMenu()
      break;
    case 'View all employees':
      console.table(await getEmployees()); // Use getEmployees directly
      await mainMenu()
      break;
    case 'Add a department':
      const { departmentName } = await inquirer.prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'Enter the name of the department:'
        }
      ]);
      await addDepartment(departmentName); // Use addDepartment directly
      await mainMenu()
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
      await addRole(roleName, roleSalary, roleDepartment); // Use addRole directly
      await mainMenu()
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
      const managerId = employeeManager ? employeeManager : null;
      
      await addEmployee(employeeFirstName, employeeLastName, employeeRole, employeeManager); // Use addEmployee directly
      await mainMenu()
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
      await updateEmployeeRole(employeeId, newRoleId); // Use updateEmployeeRole directly
      await mainMenu()
      break;
    case 'Exit':
      client.end(); // End the PostgreSQL client
      process.exit(); // Exit the process
  }
};

// Start the main menu
mainMenu();
