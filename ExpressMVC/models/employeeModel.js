const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/employees.json');

function getAllEmployees() {
    try {
        const rawData = fs.readFileSync(dataFilePath, 'utf-8');

        if (!rawData || rawData.length === 0) {
            return [];
        }

        // Przetwórz dane na tablice pracowników
        const employees = JSON.parse(rawData);

        for (let i = 0; i < employees.length; i++) {
            employees[i].id = i + 1; // Dodaj 1, aby uniknąć indeksu od zera
        }

        return employees;
    } catch (error) {
        console.error('Bląd podczas odczytu lub parsowania pliku z danymi pracowników:', error.message);
        return [];
    }
}

function addEmployee(employee) {
    const employees = getAllEmployees();

    employees.push(employee);

    fs.writeFileSync(dataFilePath, JSON.stringify(employees, null, 2));
}

module.exports = {
    getAllEmployees,
    addEmployee,
};
