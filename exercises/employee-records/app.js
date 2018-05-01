var employees = [];

function Employee(name, title, salary, status = 'Full Time') {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printEmployeeForm = function() {
    var employeeForm = `Name: ${this.name}, Job Title: ${this.title}, `;
    employeeForm += `Salary: ${this.salary}, Status: ${this.status}`;
    console.log(employeeForm);
}

var bob = new Employee('Bob', 'V School Instructor', '$3000/hr', 'Part Time');
var carl = new Employee('Carl', 'Singer', '$10,000/hr', 'Contractor');
var rebecca = new Employee('Rebecca', 'Lawyer', '$1,000,000/year');

bob.printEmployeeForm();
carl.printEmployeeForm();
rebecca.printEmployeeForm();

function addToEmployees(employee) {
    employees.push(employee);
}

addToEmployees(bob);
addToEmployees(carl);
addToEmployees(rebecca);

console.log(employees);