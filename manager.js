class Manager extends Employee {
    departament = '';
    constructor(name, departament) {
        super(name);
        this.departament = departament;
    }
    displayInfo() {
        return `Name: ${this.name} \nDepartament: ${this.departament}`;
    }
}