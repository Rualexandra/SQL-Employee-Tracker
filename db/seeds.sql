INSERT INTO department (name) VALUES
('Sales'), ('Engineering'), ('Finance'), ('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES
('Salesperson', 50000, 1),
('Engineer', 80000, 2),
('Accountant', 60000, 3),
('HR Manager', 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Sam', 'Johnson', 3, 1),
('Sue', 'Williams', 4, NULL);
