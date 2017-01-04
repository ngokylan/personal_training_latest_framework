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

balancedParens("(((())))");



//////---------------------------
//exercise 1
/*
Distance Traveled

Use the 'reduce' helper to find the sum of all the distances traveled.  
Assign the result to the variable 'totalDistance'
*/
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;
totalDistance = trips.reduce(function(previous, trip){
    return previous + trip.distance;
}, 0);

//exercise 2
/*
Reducing Properties

Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  
The object returned should have the form '{ sitting: 3, standing: 2 }'.  
The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
*/
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    if(desk.type === "sitting"){ previous.sitting++;}
    if(desk.type === "standing"){ previous.standing++;}
    return previous;
}, { sitting: 0, standing: 0 });



//exercise 3
/*
Hardmode: Custom 'Unique' Helper

Another really hard one!  Write a function called 'unique' 
that will remove all the duplicate values from an array.

For example, given the following array:
var numbers = [1, 1, 2, 3, 4, 4];
Your function should return
[1, 2, 3, 4]
Hint: Use the 'reduce' and 'find' helpers.  
*/

var numbers = [1, 1, 2, 3, 4, 4];


function unique(array) {
  return array.reduce(function(previous, arr){
      if(previous.length > 0){
          var is_duplicate = previous.find(function(prev){
             return prev === arr; 
          });
          if(!is_duplicate){
              previous.push(arr);
          }
      }else{
          previous.push(arr);
      }
      return previous;
  }, []);
}

//run the test
unique(numbers);
