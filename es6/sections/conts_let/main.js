/*
Benefit of const and let
- develer a clean code
- easy to distinguise the changable and static variable within a function
*/

//Example 1
var name = "Jane";
var title = "Software Engineer";
var hourlyWage = 40;

//ES6
const name = "Jane";//cant assign the new value anymore 
let title = "Software Engineer";//value can be re-assigned
let hourlyWage = 40;

//some time later...
title = "Senior Software";
hourlyWage = 50;



//example 2
function count(targetString){
	var characters = ['a', 'e', 'i', 'o', 'u'];
	var number = 0;

	for(var i=0;i<targetString.length;i++){
		if(characters.includes(targetString[i])){
			number++;
		}
	}

	return number;
}

count('ascewyro23iufb23iuhupwi');

// ES6
function count2(targetString){
	const characters = ['a', 'e', 'i', 'o', 'u'];
	let number = 0;

	for(let i=0;i<targetString.length;i++){
		if(characters.includes(targetString[i])){
			number++;
		}
	}

	return number;
}

///////////////////////////////////
// Exercise 1
/*
A Constant Exercise of Letting Variables Be Variables

Imagine that you are building an application to manage a user's Facebook profile.  A profile might have a 'name', 'age', and 'dateOfBirth'.
Declare three variables with these same names, making sure to use 'const' or 'let' depending on whether you expect the value to change over time.
*/
let name = "";
let age = 28;
const dateOfBirth = "12/12/2012";

//Exercise 2
/*
Const/Let Refactoring

The following code uses 'var' instead of 'const' and 'let'. Refactor the function to use the new keywords.  Be sure to consider whether the variable should be declared using 'const' or 'let' depending on whether the variable gets reassigned or not.
var statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
*/

const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}


