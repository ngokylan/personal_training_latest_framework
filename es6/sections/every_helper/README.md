var computers = [
  {name: "Apple", ram: 24},
  {name: "HP", ram: 4},
  {name: "Dell", ram: 32},
];
var allComputerCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for(let i = 0;i< computers.length;i++){
  let computer = computers[i];
  
  if(computer.ram < 16){
    //allComputerCanRunProgram = false; 
  }else{
    //onlySomeComputersCanRunProgram = true;
  }
}

//allComputerCanRunProgram;
//onlySomeComputersCanRunProgram

/////////ES6 version
// every return true -> overall will be true
// one of each is false -> overall will be false
// this is use && operator
computers.every(function(computer){
  return computer.ram > 16;
});

//this is use || operator
computers.some(function(computer){
  return computer.ram > 16
});


//example 2
var names = [
  "Alexandria",
  "Mathew",
  "Joe"
];

names.every(function(name){
  return name.length > 4;
});

names.some(function(name){
  return name.length > 4;
});


///////example 3
function Field(value){
  this.value = value;
}

Field.prototype.validate = function(){
  return this.value.length > 0;
}

var username = new Field("super");
var password = new Field("nothing2");
var birthdate = new Field("10/10/2000");

//validate
username.validate() && password.validate();

//or

var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field){
  return field.validate();
});

if(formIsValid){
  //allow user to submit!
}else{
  //show an error message
}


//----------------------------------------
//exercise 1
/*
Finding Submitted Users

Given an array of users, return 'true' if every user has submitted a request form.  
Assign the result to the variable 'hasSumbmitted'.
*/

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted;
hasSubmitted.every(function(sub){
   return sub.hasSubmitted === true; 
});

//exercise 2
/*
In Progress Network Requests

Given an array of network objects representing network requests, 
assign the boolean 'true' to the variable 'inProgress' if any n
etwork request has a 'status' of 'pending'.
*/
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress;
inProgress = requests.some(function(request){
    return request.status === "pending";
});