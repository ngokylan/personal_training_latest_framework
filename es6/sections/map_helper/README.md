var numbers = [2,3,4];

var doubledNumbers = [];

for(var i=0;i<numbers.length;i++){
	doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function(num){
	return num * 3;
});

doubled;
doubledNumbers;



/////////////////////////////////////////
var cars = [
	{model: "Comodo", price: "cheap"},
	{model: "bmw", price: "expenseive"}
];

var prices = cars.map(function(car){
	return car.price;
});

prices;
////////////////////////////////////////

/*
Calculating Values with Map

Using map, create a new array that contains the distance / time value from each trip.  In other words, the new array should contain the (distance / time) value.  
Assign the result to the variable 'speeds'.
*/

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds;

speeds = trips.map(function(trip){
   return trip.distance / trip.time;
});

/*
Really Hard - Implementing 'Pluck'

This is a hard one!
Implement a 'pluck' function.  Pluck should accept an array and a string representing a property name and return an  array containing that property from each object. 

Example: 

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

Hint:

Remember that you can access a property on an object by using square bracket notation. For example...

var person = { name: 'Bill' };
person['name'] // returns 'Bill'
*/

function pluck(array, property) {
    return array.map(function(arr){
       return arr[property]; 
    });
}