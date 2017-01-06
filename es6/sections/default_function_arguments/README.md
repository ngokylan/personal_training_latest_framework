/*
Default Function Arguments
*/

//Example1
function makeAjaxRequest(url, method){

	if(!method){
		method = 'GET';
	}
	//logic to make the request

}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');

//ES6
function makeAjaxRequest2(url, method = 'GET'){
	//logic to make the request

}

makeAjaxRequest2('google.com');
//or
makeAjaxRequest2('google.com', undefined);

//note: null will not match with initial "GET" => therefore not execute function
makeAjaxRequest2('google.com', null);
makeAjaxRequest2('google.com', 'POST');

//Example 2
function User(id){
	this.id = id;
}

function generateId(){
	return Math.random() * 999999;
}

function createAdminUser(user){
	user.admin = true;

	return user;
}

createAdminUser(new User(generateId()));

//ES6
function User2(id){
	this.id = id;
}

function generateId2(){
	return Math.random() * 999999;
}

function createAdminUser2(user = new User(generateId2)){
	user.admin = true;

	return user;
}

const user = new User(generateId2());	
createAdminUser();


//////////////////////////////
//Exercise 1
/*
Using Default Arguments

Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.
function sum(a, b) {
  if (a === undefined) {
    a = 0; 
  }
  
  if (b === undefined) {
    b = 0; 
  }
  
  return a + b;
}

*/
function sum(a = 0, b = 0) {
  
  return a + b;
}

//Exercise 2
/*
Dumping Unused Code

Refactor the following code to use default function arguments.  Be sure to remove any unused code after you refactor it.

function addOffset(style) {
  if (!style) {
    style = {}; 
  }
  
  style.offset = '10px';
  
  return style;
}
*/
function addOffset(style = {}) {
  style.offset = '10px';
  
  return style;
}




