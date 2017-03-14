// Your Javascript Code Goes Here
function greet(){
    console.log('Hello!');
}
greet();

function logGreeting(fn){
    fn();
}
logGreeting(greet);

var greetMe = function(){
    console.log('Hello! Cherry');
}
greetMe();
logGreeting(greetMe);