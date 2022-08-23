const Department = require("./Department");

class Role extends Department {
    constructor(role,salary,depName){
        super(depName);
        this.role = role;
        this.salary = salary;
    }
    getRoleId(id) {
        return this.id = id;
    }
};

module.exports = Role;