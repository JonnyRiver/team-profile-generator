const Employee = require('./Employee')

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
        this.email = email;
    }

    getSchool() {
        return this.school;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;