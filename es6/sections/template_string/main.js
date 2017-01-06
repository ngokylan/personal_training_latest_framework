function getMessage(){
	const year = new Date().getFullYear();

	return "The year is " + year;
}

getMessage();

//ES6
function getMessage2(){
	const year = new Date().getFullYear();
	return `The year is ${year - 2}`;
}

getMessage2();
//or
function getMessage3(){
	
	return `The year is ${new Date().getFullYear()}`;
}

getMessage3();

//example 2
//php
//$data = '{"device_id":"'.$device_id.'","guid":"'.$guid.'","username":"'.$username.'",'"}';

data = '{"device_id":"'+$device_id+'","guid":"'+$guid+'","username":"'+$username+'",'"}';

//ES6
const device_id = 4;
const guid = 20;
const username = "super";

data = `{"device_id":"${device_id}","guid":"${guid}","username":"'${username}"}`;


//example 3
const year = 2016;
const yearMessage = `The Year is ${year}`;
yearMessage;

/////////////
//Exercise 1
/*
Template Strings in Practice

Refactor the function to use template strings
function doubleMessage(number) {
  return "Your number doubled is " + (2 * number);
}
*/
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}
//Exercise 2
/*
Name Helpers

Refactor the function to use template strings
function fullName(firstName, lastName) {
  return firstName + lastName;
}
*/
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}



