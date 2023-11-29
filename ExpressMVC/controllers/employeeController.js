const employeeModel = require('../models/employeeModel');

function listEmployees(req, res) {
    const employees = employeeModel.getAllEmployees();
    res.render('employees/index', { employees });
}

function showEmployeeForm(req, res) {
    res.render('employees/add');
}

function addEmployee(req, res) {
    const { name, position } = req.body;
    const newEmployee = { name, position };
    employeeModel.addEmployee(newEmployee);
    res.redirect('/employees');
}

function showEmployeeDetails(req, res) {
    const employees = employeeModel.getAllEmployees();
    const employeeId = parseInt(req.params.id);
    const selectedEmployee = employees.find(employee => employee.id === employeeId);
    res.render('employees/details', { employee: selectedEmployee });
}

module.exports = {
    listEmployees,
    showEmployeeForm,
    addEmployee,
    showEmployeeDetails,
};
