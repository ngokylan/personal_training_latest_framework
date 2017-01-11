/*
Generators
*/

//Exampl1
const colors = ['red', 'green', 'blue'];

//where color is represent for the each element and colors is the array
for(let color of colors){

}

const numbers = [1,2,3,4,5];

let total = 0;
for(let number of numbers){
	total += number;
}


//Example 2 - generators function
function *numbers(){
	yield;// keyword ES6 
}

numbers();

const gen = numbers();
gen.next(); // echo : {'done': false}
gen.next(); // echo : {'done': true}

//Example 3 - generators function
function* shopping(){
	//stuff on the sidewalk

	//walking down the sidewalk

	//go into the store with cash
	const stuffFromStore = yield 'cash';
	//walking to laundry place
	const cleanClothes = yield 'laundry';

	//walking back home
	return [stuffFromStore, cleanClothes];
}
//stuff in the store
const gen = shopping();
gen.next();//leaving our house
//walked into the store
//walking up and down the aisles...
//purchase our stuff

gen.next('groceries');//leaving the store with groceries
gen.next('clean clothes');



//Example 4 - generators
function* colors(){
	yield 'red';
	yield 'blue';
	yield 'green';
}

const gen = colors();
gen.next();//{'value':'red','done':false}
gen.next();//{'value':'blue','done':false}
gen.next();//{'value':'green','done':false}
gen.next();//{'done':true}

const myColors = [];
for(let color of colors()){
	myColors.push(color);
}
myColors;

/*
	Purpose of Generators: use generator to create a custom iteration through an object with 
	different type of structure with yield values
*/

//Example 5 - Delegation of generators: use in the case we have multible generator in a for loop

const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill',
	//purpose of Symbol.iterator to teach loop how to iterate through this object
	[Symbol.iterator]: function* (){
		yield this.lead;
		yield this.tester;
	}
};

const engineeringTeam = {
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
	//testingTeam: testingTeam
	//or
	testingTeam,// must be exactly same as const testingTeam variable
	//dont need TeamIterator function anymore
	[Symbol.iterator]: function* (){
		yield this.lead;
		yield this.manager;
		yield this.engineer;
		yield* this.testingTeam;
	}
};

function* TeamIterator(team){
	yield team.lead;
	yield team.manager;
	yield team.engineer;
	//yield team.testingTeam.lead; //for the future re-user, we declare in a separate Iterator instead
	
	//*** this case, we have to have TestingTeamIterator function
	//const testingTeamGenetator = TestingTeamIterator(team.testingTeam);
	//yield* testingTeamGenetator;
	//or for the short code

	yield* team.testingTeam;//*****in this case, we dont need the function TestingTeamIterator anymore	
}

function* TestingTeamIterator(team){
	yield team.lead;
	yield team.tester;
}

const name = [];
for(let name of TeamIterator(engineeringTeam)){
	names.push(name);
}
names;



//Example 6 - Generators with Recursion
class Comment {
	constructor(content, children){
		this.content = content;
		this.children = children;
	}

	//create a generator function in Comment object
	*[Symbol.iterator](){
		yield this.content;
		for (let child of this.children){
			yield* child;
		}
	}
}

const children = [
	new Comment('good comment', []),
	new Comment('bad Comment', []),
	new Comment('meh', [])
];

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree){
	values.push(value);
}
values;
