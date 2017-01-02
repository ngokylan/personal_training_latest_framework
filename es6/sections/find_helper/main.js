var users = [
	{name: "Dennis"},
	{name: "Annie"},
	{name: "Elisa", id: 4},
	{name: "William"},
	{name: "Elisa", ic: 5},
];

var user;

for(var i=0;i<users.length;i++){
	if(users[i].name === "Elisa"){
		user = users[i];
		break;
	}
}

user;

////////////
users.map(function(user){
	return user.name === "Elisa";
});

//*** Note: only the first occured element will be returned
//*** Note: users.filter will return all occurance


/////////example 1
function car(model){
	this.model = model;
}

var cars = [
	new car("Honda"),
	new car("Ford"),
	new car("Holden")
];

cars.filter(function(car){
	return car.model === "Ford";
});

////////example 2
var posts = [
	{id: 1, title: "New Post"},
	{id: 2, title: "Old Post"}
];

var comment = {postid: 1, content: "Great Post"};

function postForComment(posts, comment){
	return posts.find(function(post){
		return post.id === comment.postid;
	});
}

postForComment(posts, comment);

/////exercise

/*
Finding Admin Users

Find the user in the users's array who is an admin.  
Assign this user to the variable 'admin'.
*/
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;
admin = users.find(function(user){
    return user.admin === true;
});

/*
What's Your Balance?

Find the account with a balance of 12 and assign it to the variable 'account'.
*/
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account;
account = accounts.find(function(acc){
    return acc.balance === 12;
});

/*
Really Challenging: Custom findWhere Helper

This is a tough one!  The most common find operation is to an object that has a given property.  
Rather than writing out a full function every time, 
it would be great if we has a shorthand syntax to find an object like this:
findWhere(ladders, { height: '20 feet' });
The object { ladders: '20 feet' } should be used as the search criteria 
- we would want to find a ladder whose 'height' property was '20 feet';


Your goal: Write a 'findWhere' function that achieves this shorthand approach.  
'findWhere' should return the found object.

In summary:

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

findWhere(ladders, { height: 25 }); // result: { id:3, height: 25 }

Hint: the hard part of this is figuring out the name of the proeprty on the criteria.  
You can use Object.keys(criteria)[0] to figure out the name of the property on the object.  
For example, Object.keys({ height: '20 feet' }) would return 'height'.  
You could then check to see if a given element in the array had a property equal to 
the criteria's value with something like element[property] === criteria[property].
*/

