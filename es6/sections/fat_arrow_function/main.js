/*
Fat Arrow Function
*/

//example 1
//ES5
const add = function(a, b){
	return a + b;
}

add(1,2);

//ES6 
const add2 = (a, b) => {
	return a + b;
}
add2(1,2);

//or 
const add3 =  (a, b) => a + b;
add3(1,2);

//example 2
const double = function(number){
	return 2 * number;
};
double(8);

//ES6
const double2 = (number) => 2 * number;

//or 
//note: brackets can be removed for 1 parameter only and required for more than 2 parameters
const double3 = number => 2 * number;

//example 3
const double4 = (number1, number2) => 2 * number;

//example 4

const numbers = [1, 2, 3];

numbers.map(function(number){
	return 2 * number;
});

//or 
numbers.map(number => 2 * number);

//example 5
const team = {
	members: ["Jane", "Dennis"],
	teamName: "Skye",
	teamSummary: function(){
		return this.members.map(function(member){
			return `${member} is on team ${this.teamName}`;
		});
	}
};

team.teamSummary();
//Note: the code above will generate ${this.teamName} as undefined 
//due to function in map_helper to call a new function without having access to ${this.teamName} in const team

//solution will be 
//ES5
const team2 = {
	members: ["Jane", "Dennis"],
	teamName: "Skye",
	teamSummary: function(){
		return this.members.map(function(member){
			return `${member} is on team ${this.teamName}`;
		}.bind(this));
	}
};

team2.teamSummary();

//ES6
const team3 = {
	members: ["Jane", "Dennis"],
	teamName: "Skye",
	teamSummary: function(){
		//this === team
		return this.members.map((member) => {
			return `${member} is on team ${this.teamName}`;
		});
	}
};

team3.teamSummary();

////////////////////////////////
//Exercise 1
/*
Refactoring Keyword Functions

The function below uses the 'function' keyword.  There's nothing wrong with using the 'function' keyword here, but it might look a bit nicer if we refactor it to use the fat arrow syntax instead.  

Refactor the code below to use a fat arrow function.  Remember the rules of fat arrow functions:

If the function has a single expression in its body, the curly braces and 'return' keyword can be removed
If the function has a single argument, the parentheses around the argument list can be removed

const fibonacci = function(n) {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
*/

const fibonacci = n => {
    if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

//Exercise 2
/*
Arrow Functions Aren't Always a Solution

Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.  The code below has an object that represents a users profile.  The profile has a 'name' currently.  Add another key to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.  Does the solution work with a fat arrow function or will you have to use a function keyword instead?
const profile = {
    name: 'Alex'
};
*/

const profile = {
    name: 'Alex',
    getName: () => profile.name
};
profile.getName();


