const Employee = require ('../lib/Employee')

test ('creates an employee object', () => {
    const employee = Employee('nicole', 90, 'nicole@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
})