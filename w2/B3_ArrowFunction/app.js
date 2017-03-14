// function statement
function greet() {
	console.log('hi');
}
greet();

// function expression
var greetMe = function() {
	console.log('Hi Tony!');
}
greetMe();

//arrow
greetCherry = ()=>{console.log('Hello!Cherry!');}
greetCherry();

greetYou = name =>{console.log(`Hello! ${name}!`);}
greetYou('Mao');