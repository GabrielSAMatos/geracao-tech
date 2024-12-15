class Person {
    name = '';
    cpf = '';
    age = '';

    constructor(name, cpf, age){
        this.name = name;
        this.cpf = cpf;
        this.age = age;

    }

    run(){
        console.log(`${this.name} is running...`);
    }

    sleep(){
        log(`${this.name} is sleeping`);
    }
};


const person1 = new Person("Grabiel", "1111111111", "25");
const person2 = new Person("Maria", "2222222", "52");

person1.name = 'Gabriel'

console.log(person1);
console.log(person2);

person1.run();
person2.run();