/*
Capturing Arguments with REST and Spread
*/

//Example 1
function addNumbers(numbers){
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}

addNumbers([1,2,3,4,5]);

//ES6 applying Rest arguments
function addNumbers2(...numbers){
	return numbers.reduce((sum, number) => {
		return sum + number;
	}, 0);
}

addNumbers2(1,2,3,4,5,6,7);

//Example 2 - Spread
const defaultColors = ["red", "green"];
const userFavouriteColors = ["orange", "yellow"];
const fallColors = ["fire red", "fall orange"];

defaultColors.concat(userFavouriteColors);
//or
//note: if we dont use "..." before the array, the new created array will be ["red","green",["orange","yellow"]]
[...defaultColors, ...userFavouriteColors];

[ "green", "blue", ...fallColors, ...defaultColors, ...userFavouriteColors];

//Example 3
function validateShoppingList(...items){
	if(items.indexOf("milk") < 0){
		return ["milk", ...items];
	}

	return items;
}

validateShoppingList("oranges", "bread", "eggs");


//Example 4
/*
In real life implementation, We can use to apply the change without breaking the existing code which has already included this library
Solution: pass function call to the new function without requiring existing implementation to change the code
*/
const MathLibrary = {
	calclateProduct(...rest){//we dont have to worry how many parameters passed through this function anymore
		console.log("Please use the multiply method instead");
		return this.multiply(...rest);
	},
	multiply(a, b){
		return a * b;
	}
};


//////////////////////////////
//Exercise 1
/*
Many, Many Arguments

Refactor the following function to use the rest operator.  
Remember, an argument using the rest operator does *not* need to be called 'rest'.
*/
function product(...numbers) {
  //var numbers = [a,b,c,d,e];
  
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

//Exercise 2
/*
Spreadin' Arrays

Refactor the following to use the spread operator.

function join(array1, array2) {
  return array1.concat(array2);
}
*/
function join(array1, array2) {
  return [...array1, ...array2];
}

//Exercise 3
/*
Mixing Rest and Spread

Refactor the following to use the only the rest operator
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
*/
function unshift(array, ...numbers) {
  
  return [...numbers, ...array];
}


