// /*
// Destructuring
// */

// //example 1
// //ES5
// var expense = {
// 	type: "Business",
// 	amount: "$45 USD"
// };

// // var type = expense.type;
// // var amount = expense.amount;

// //ES6
// const {type} = expense;
// const {amount} = expense;
// //or
// const {type, amount, test} = expense;
// type;
// mount;
// test;//test will be undefined or "" due to unmatching with "expense" variable
// //Note: the attribute type and amount have to be exact to attribute in expense variable

// //Example2
// var saveFiled = {
// 	extension: ".jpg",
// 	name: "repost",
// 	size: 14040
// };

// function fileSummary(file){
// 	return `The file ${file.name}.${file.extension} is of size ${file.size}`;

// }

// fileSummary(saveFiled);

// //destructuring
// function fileSummary2({name, extension, size}, {color}){
// 	return `${color} The file ${name}.${extension} is of size ${size}`;

// }

// fileSummary2(saveFiled, {color: "red"});

// //Example 3
// const companies = [
// 	"Google",
// 	"Facebook",
// 	"Uber"
// ];

// //note: only the first one is allocated to name, the more index in the left, it will increment until the end of the  companies variable
// const [name1, name2] = companies;
// name1;
// name2;
// const {length} = companies;//will pull the property length of the array companies

// //or 
// const companyName = companies[0];

// //or
// const [nam1, ...rest] = companies;
// nam1;
// rest;



// //Example 4
// //Destructuring arrays and objects at the same time
// const companies = [
// 	{name: "Google", location: "Mountain View"},
// 	{name: "Facebook", location: "Menlo Park"},
// 	{name: "Uber", location: "San Francisco"}
// ];

// //var location = companies[0].location;

// const{locations: [ location ]} = companies;
// location; //print out "Mountain View"



// //Example 5
// const Google = {
// 	locations: ["Mountain View", "New York", "London"]
// };

// const {locations: [ location]} = Google;
// location;//print out Mountain View only

// const {locations: locations} = Google;
// locations;//print out "Mountain View", "New York", "London"



// //Example 6
// function signup(username, password, email, dateOfBirth, city){
// 	//create new user
// }

// //other code 
// //other code

// signup("myname", "mypassword", "test@example.com", "1/1/1990", "New York");

// //stop remember the very long arguments list
// //add curly bracket in the parameter list
// // => this way we dont have to worry about the order of the parameters
// function signup({username, password, email, dateOfBirth, city}){

// }
// const user = {
// 	username: 'myname',
// 	password: 'mypassword',
// 	email: 'test@example.com',
// 	dateOfBirth: '1/1/1990',
// 	city: 'New York'
// };
// signup(user);


// //Example 7
// const points = [
// 	[4, 5],
// 	[10, 1],
// 	[0, 40]
// ];
// //but some graph library require following format
// /*
// [
// 	{x: 4, y: 5},
// 	{x: 10, y: 1},
// 	{x: 0, y: 40}
// ]
// */

// points.map(pair => {
// 	// const x = pair[0];
// 	// const y = pair[1];

// 	//or 
// 	const [x, y] = pair;
// });

// //or
// points.map(([x, y]) => {
// 	// return {x: x, y: y};
// 	return {x, y};
// });

// ///////////////////////////
// //Exercise 1
// /*
// Destructuring in Practice

// The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function.  Perhaps we can reduce the amount of code used for referencing the 'title' and 'department' properties.  Refactor this code to use destructuring.  Can you get the body of the 'isEngineer' function down to a single line?

// const profile = {
//   title: 'Engineer',
//   department: 'Engineering'
// };

// function isEngineer(profile) {
//   var title = profile.title;
//   var department = profile.department;
//   return title === 'Engineer' && department === 'Engineering';
// }
// */
// const profile = {
//   title: 'Engineer',
//   department: 'Engineering'
// };

// function isEngineer({title, department}) {
//   return title === 'Engineer' && department === 'Engineering';
// }


// //Exercise 2
// /*
// Array Destructuring in Practice

// The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.  Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.  Use array destructuring and the map helper.

// An array for a class has the form [subject, time, teacher]

// The resulting data structure should look something like the following:

// const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
// ----------------------
// const classes = [
//   [ 'Chemistry', '9AM', 'Mr. Darnick' ],
//   [ 'Physics', '10:15AM', 'Mrs. Lithun'],
//   [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
// ];

// const classesAsObject;
// */
// const classes = [
//   [ 'Chemistry', '9AM', 'Mr. Darnick' ],
//   [ 'Physics', '10:15AM', 'Mrs. Lithun'],
//   [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
// ];

// const classesAsObject = classes.map(([subject, time, teacher]) => {
//     return {subject, time, teacher};
// });


//Exercise 3
/*
Recursion with Destructuring

Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multiplied by two.  Do not use any array helpers! Sure, the map, forEach, or reduce helpers would make this extremely easy but give it a shot the hard way anyways :)

Input:

double([1,2,3])

Output

[2,4,6]

Hint: Don't forget that with recursion you must add a base case so you don't get an infinite call stack.  For example, if 'const [ number, ...rest ] = numbers' and number is undefined do you need to keep walking through the array?

*/
const numbers = [1, 2, 3];
//et output = [];

function double(numbers) {
    const [number1, ...rest] = numbers;
    if(number1 !== undefined){
        return [number1*2, ...(double(rest))];
    }else{
        return [];
    }
}
double(numbers);

