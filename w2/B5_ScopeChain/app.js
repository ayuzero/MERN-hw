//scope & scope chain
function a1(){
    var myVar;
    console.log(myVar);
}

function b1(){
    var myVar = 4;
    a1();
    console.log(myVar);
}

var myVar = 2;
console.log(myVar);
b1();

function b2(){
    var myVar = 3;
    function a2(){
        var myVar;
        console.log(myVar);
    }
    a2();
    console.log(myVar);
}

var myVar = 2;
console.log(myVar);
b2();

//變數提升
var firstname = 'Cherry';
var addSurname = () => {
    var surname = 'Lin';
    var fullname = firstname + " " + surname;
   // var firstname = 'Edward';
    console.log(fullname);
}

addSurname();