const Manager = require("../lib/Manager");


test("Generate office number", () => {
    const officeNumber = 1;
    const employee = new Manager("Jonny", 1, "jonnyriver6@gmail.com", officeNumber);

    expect(employee.getOfficeNumber()).toBe(officeNumber);
});

test("Return office number", () => {
    const officeNumber =1;
    const employee = new Manager("Jonny", 2, "jonnyriver6@gmail.com", officeNumber);

    expect(employee.getOfficeNumber()).toBe(officeNumber);
});

test("Generate role", () => {
    const returnRole = "Manager";
    const employee = new Manager("Jonny", 1, "jonnyriver6@gmail.com", 1);

    expect(employee.getRole()).toBe(returnRole);
});