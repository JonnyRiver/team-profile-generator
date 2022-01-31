const Engineer = require("../lib/Engineer");


test("generate github", () => {
    const GitHub = "JonnyRiver";
    const employee = new Engineer("Jonny", 1, "jonnyriver6@gmail.com", GitHub);

    expect(employee.getGithub()).toBe(GitHub);
});

test("Github return github", () => {
    const returnGithub = "JonnyRiver";
    const employee = new Engineer("Jonny", 1, "jonnyriver6@gmail.com", returnGithub);

    expect(employee.getGithub()).toBe(returnGithub)
});

test("Generate role", ()=> {
    const returnRole = "Engineer";
    const employee = new Engineer("Jonny", 1, "jonnyriver6@gmail.com", "JonnyRiver");

    expect(employee.getRole()).toBe(returnRole);
});