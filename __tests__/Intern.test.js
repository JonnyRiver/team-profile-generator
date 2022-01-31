const Intern = require("../lib/Intern");


test("Generate school", () => {
    const School = "School";
    const employee = new Intern("Jonny", 1, "jonnyriver6@gmail.com", School);

    expect(employee.getSchool()).toBe(School);
});

test("Generate Email", () => {
    const email = "jonnyriver6@gmail.com";
    const employee = new Intern("Jonny", 1, "jonnyriver6@gmail.com", email);

    expect(employee.getEmail()).toBe(email);
});

test("Generate role", () => {
    const returnRole = "Intern";
    const employee = new Intern("Jonny", 1, "jonnyriver6@gmail.com", "JonnyRiver");
    
    expect(employee.getRole()).toBe(returnRole)
});