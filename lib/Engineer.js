const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(id, name, email) {
        super(id, name, email);
        this.getGithub = this.getGithub;
    }

    getGithub() {
        return this.getGithub;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;