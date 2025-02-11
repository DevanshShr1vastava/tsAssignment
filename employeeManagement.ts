class Employee{
    name:string;
    protected id:number;
    private salary:number;
    constructor(name:string = 'John Doe',id:number = 100,salary:number = 50000){
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    calculateBonus ():number {
        return this.salary * 10 / 100;
    } 
    getSalary():number{
        return this.salary;
    }
}

class Manager extends Employee{
    public designation : string;
    constructor(name:string,id:number,salary:number,designation:string){
        super(name,id,salary);
        this.designation = designation;
    }
    calculateBonus():number{
        return this.getSalary() * 30 / 100;
    }

}

class Engineer extends Employee{
    public project : string;
    constructor(name:string,id:number,salary:number,project:string){
        super(name,id,salary);
        this.project = project;
    }
    calculateBonus():number{
        return this.getSalary() * 20 / 100;
    }

}

type supervisorType = Engineer | Manager;

class Intern extends Employee{
    public supervisor : supervisorType;
    constructor(name:string,id:number,salary:number,supervisor:supervisorType){
        super(name,id,salary);
        this.supervisor = supervisor;
    }
    calculateBonus():number{
        return this.getSalary() * 15 / 100;
    }
}

const emp1 = new Employee();

const manager1 = new Manager('Johnathan Williams',6,560000,'HR');
const engineer1 = new Engineer('Hoshiyumi Nagumo',1,450000,'Surgical Robot');
const intern1 = new Intern('Ulysses Yggrite',2,16000,engineer1);


console.log(emp1);
console.log(`${emp1.name}`,'bonus : ',emp1.calculateBonus());
console.log("------------------------------------------------------");

console.log(manager1);
console.log(`${manager1.name} for the ${manager1.designation} manager position`,'bonus : ',manager1.calculateBonus());
console.log("------------------------------------------------------");

console.log(engineer1);
console.log(`${engineer1.name} working on ${engineer1.project}`,'bonus : ',engineer1.calculateBonus());
console.log("------------------------------------------------------");

console.log(intern1);
console.log(`${intern1.name} supervised by ${intern1.supervisor.name}`,'bonus : ',intern1.calculateBonus());
