'use strict'
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    printGreeting () {
        console.log(`Hello! I am ${this.name}, and ${this.age} years old.`);
    }
}

var person1 = new Person('Cherry',21);
person1.printGreeting();

var person2 = new Person('Edward',18);
person2.printGreeting();

class PersonList extends Person {
    constructor(name,age,gender){
        super(name,age);
        this.gender = gender;
    }
    printGreeting() {
        super.printGreeting();
        console.log(`Gender : ${this.gender}`);
    }
}

var list1 = new PersonList('Eric',25,'Male');
list1.printGreeting();

var list2 = new PersonList('Yesung',34,'Male');
list2.printGreeting();