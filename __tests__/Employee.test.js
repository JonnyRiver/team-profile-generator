const Employee = require ('../lib/Employee')

test ("create a employee", () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
});

test ("test name", () => {
    const name = "Jonny";
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
});

test ("test Id", () => {
    const Id = 1;
    const employee = new Employee("Jonny", Id);

    expect(employee.getId()).toBe(Id)
});

test ("test email", () => {
    const email = "jonnyriver6@gmail.com";
    const employee = new Employee ("Jonny", 1, email);

    expect(employee.email).toBe(email);
});

test ("Get name from getName method", () => {
    const name = "Jonny";
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
});

test ("Get Id from getId method", () =>{
    const Id = 1;
    const employee = new Employee("Jonny", Id);

    expect(employee.getId()).toBe(Id)
});

test ("Get Email from getEmail", () => {
    const email = "jonnyriver6@gmail.com";
    const employee = new Employee("Jonny", 1, email);

    expect(employee.getEmail()).toBe(email);
});

test("Get role from getRole method", () => {
    const role = "Employee";
    const employee = new Employee("Jonny", 1, "jonnyriver6@gmail.com");

    expect(employee.getRole()).toBe(role)
});

