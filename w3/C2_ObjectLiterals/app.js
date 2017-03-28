// Your Javascript Code Goes Here
var introduction1 = {
    Name1: 'Cherry',
    Age: 21,
    Apartment: 
    {
        floor: 12,
        Number: 2
    }
};
var introduction2 = {
    firstname: 'Yi-Xuan',
    lastname: 'Lin',
    greet: function(){
        console.log(`Hello!${this.firstname} ${this.lastname}`);
    }
};
introduction2.greet();
console.log(introduction2['firstname']);

let name,phone;
let info = {
    name,
    phone,
    printInfo: function(){
        console.log(`Name:${this.name}, Phone: ${this.phone}`);
    }
}

info.name = "Cherry";
info.phone = "123456789";
info.printInfo();