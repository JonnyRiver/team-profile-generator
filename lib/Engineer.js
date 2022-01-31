const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
        this.email = email;
    }

    getGithub() {
        return this.github;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;