const { Client } = require('pg');

const client = new Client({
  user: 'yourusername',
  host: 'localhost',
  database: 'ypostgres',
  password: '171237SQL',
  port: 5432,
});

client.connect();

module.exports = client;

module.exports = {
    getDepartments: async () => {
      const res = await client.query('SELECT * FROM department');
      return res.rows;
    },
    getRoles: async () => {
      const res = await client.query(`
        SELECT role.*, department.name AS department
        FROM role
        JOIN department ON role.department_id = department.id
      `);
      return res.rows;
    },
    getEmployees: async () => {
      const res = await client.query(`
        SELECT employee.*, role.title, department.name AS department
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN department ON role.department_id = department.id
      `);
      return res.rows;
    },
    addDepartment: async (name) => {
      await client.query('INSERT INTO department (name) VALUES ($1)', [name]);
    },
    addRole: async (title, salary, department_id) => {
      await client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
    },
    addEmployee: async (first_name, last_name, role_id, manager_id) => {
      await client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id]);
    },
    updateEmployeeRole: async (employee_id, role_id) => {
      await client.query('UPDATE employee SET role_id = $1 WHERE id = $2', [role_id, employee_id]);
    }
  };
  