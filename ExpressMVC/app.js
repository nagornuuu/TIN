const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const employeeController = require('./controllers/employeeController');

app.get('/', (req, res) => {
    res.redirect('/employees');
});

app.get('/employees', employeeController.listEmployees);
app.get('/employees/add', employeeController.showEmployeeForm);
app.post('/employees/add', employeeController.addEmployee);
app.get('/employees/:id', employeeController.showEmployeeDetails);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
