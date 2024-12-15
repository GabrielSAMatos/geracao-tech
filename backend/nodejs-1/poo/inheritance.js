class Person {
    name;
    cpf;
    date_birth;

    constructor(name, cpf, date_birth){
        this.name = name;
        this.cpf = cpf;
        this.date_birth = date_birth;
    }

    authentication(){
        console.log(`${this.name} - authenticating`);
    }
}

class Manager extends Person{

    constructor(name, cpf, date_birth){
        super(name, cpf, date_birth);
    }
}

const person = new Person('Gabriel', '11111111', '1999');
const manager = new Manager('Matos', '22222222', '9991');

//console.log(person);
//console.log(manager);

class Car{
    constructor(model){
        this.model = model;
    }

    static accelerate(){
        console.log("accelerating");
    }
}

const car = new Car('Voyage');
console.log(car);
Car.accelerate();
