/*
Promises - standard in browser and has 3 states:
 - unresolved: waiting for something to finish
 - resolved: something finished and it all went ok => "then" call back function
 - rejected: something finished and something went bad => "catch" call back function
*/

//Example1 - creating promises
let promise = new Promise((resolve, reject) => {
	
	//either 
	//resolve();//only then statements are executed

	//or
	//reject();// only catch statements are executed

	//wait for 3 seconds before executing next
	// setTimeout(() => {
	// 	reject();
	// }, 3000);

	var request = new XHTMLRequest();
	//make request
	request.onload = () =>{
		resolve();
	};
});

promise
	.then(() => {
		//this function will be executed if resolve() is called in promise function
		console.log("Finally finished!");
	})
	.then(() => console.log("All good!"))
	.catch(() => console.log("Oopsss!"));


//Example 2 - Ajax request with Fetch
url = "https://google.com";
fetch(url)
	.then(response => reponse.json())
	.then(data => console.log(data));


//Example 3 - Ajax request with Fetch
url = "https://google.com";
fetch(url)
	.then(response => reponse.json())
	.catch(error => console.log('BAD', error));












