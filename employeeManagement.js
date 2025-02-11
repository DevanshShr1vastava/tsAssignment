"use strict";
class Employee {
    constructor(name = 'John Doe', id = 100, salary = 50000) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    calculateBonus() {
        return this.salary * 10 / 100;
    }
    getSalary() {
        return this.salary;
    }
}
class Manager extends Employee {
    constructor(name, id, salary, designation) {
        super(name, id, salary);
        this.designation = designation;
    }
    calculateBonus() {
        return this.getSalary() * 30 / 100;
    }
}
class Engineer extends Employee {
    constructor(name, id, salary, project) {
        super(name, id, salary);
        this.project = project;
    }
    calculateBonus() {
        return this.getSalary() * 20 / 100;
    }
}
class Intern extends Employee {
    constructor(name, id, salary, supervisor) {
        super(name, id, salary);
        this.supervisor = supervisor;
    }
    calculateBonus() {
        return this.getSalary() * 15 / 100;
    }
}
const emp1 = new Employee();
const manager1 = new Manager('Johnathan Williams', 6, 560000, 'HR');
const engineer1 = new Engineer('Hoshiyumi Nagumo', 1, 450000, 'Surgical Robot');
const intern1 = new Intern('Ulysses Yggrite', 2, 16000, engineer1);
console.log(emp1);
console.log(`${emp1.name}`, 'bonus : ', emp1.calculateBonus());
console.log(manager1);
console.log(`${manager1.name} for the ${manager1.designation} manager position`, 'bonus : ', manager1.calculateBonus());
console.log(engineer1);
console.log(`${engineer1.name} working on ${engineer1.project}`, 'bonus : ', engineer1.calculateBonus());
console.log(intern1);
console.log(`${intern1.name} supervised by ${intern1.supervisor.name}`, 'bonus : ', intern1.calculateBonus());
