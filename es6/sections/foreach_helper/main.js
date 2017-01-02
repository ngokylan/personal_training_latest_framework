//create an array of numbers
var numbers = [2,3,4,5,6];

//create a total variable
var sum = 0 ;

function total(number){
	sum+= number;
}

//loop through the array, calc incrementing sum variable
numbers.forEach(total);

//print the sum
sum;