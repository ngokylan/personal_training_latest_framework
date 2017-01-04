var numbers = [10, 20, 30];
var sum = 0;

for(let i=0;i<numbers.length;i++){
	sum += numbers[i];


//////ES6 version
// where 0 is initially allocate to sum instead of predefining var sum = 0
numbers.reduce(function(sum, number){
	return sum + number;
}, 0);

//////////////////////////
//example 2
var primaryColors = [
	{color: "red"},
	{color: "yellow"},
	{color: "blue"},
];

primaryColors.reduce(function(previous, primaryColor){
	previous.push(primaryColor.color);

	return previous;
}, []);

//////////////////////////////
///example 3
"()()()()";
"((()))"
"))))";
"())))))";
")(";
")()(";

function balancedParens(string){
	return !string.split("").reduce(function(previous, char){
		if(previous < 0){return previous;}
		if(char === "("){ return ++previous;}
		if(char === ")"){ return --previous;}
		return previous;
	}, 0);
}

balancedParens("((((");

