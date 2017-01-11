/*
Classes
*/
//ES5 syntax
function Car(options){
	this.title = options.title;
}

Car.prototype.drive = function(){
	return "vroom";
}

function Toyota(options){
	//link Toyota with Car object
	Car.call(this, options);
	this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function(){
	return "beep";
}

const car = new Car({title: "Focus"});
car.drive();
car;

const toyota = new Toyota({color: "red", title: "Daily Driver"});
'---';
toyota;
toyota.drive();
toyota.honk();


//Example 2
class Car2 {
	constructor({title}){
		this.title = title;
	}

	drive(){
		return "vroom";
	}
}

// const car = new Car({title: "Toyota"});
// car;
// car.drive();
//ES6 will use extends Car next to Toyota
class Honda extends Car2 {
	constructor(options){
		//important here, assign title from car to toyota
		super(options);//Car.constructor()

		this.color = options.color;
	}

	honk(){
		return "beep";
	}
}

const honda = new Honda({color: "red", title: "Daily Driver"});
'---';
honda.honk();
honda.drive();
honda;

//Example 3
// React.createClass({
// 	doSomething(){

// 	},

// 	doSomethingElse(){

// 	}
// });

// class MyComponent extends Component{
// 	doSomething(){

// 	}

// 	doSomethingElse(){

// 	}
// }

////////////////////////////
//Exercise 1
/*
Subclassing Monsters

Now that you have a monster created, create a subclass of the Monster called Snake.  

The Snake should have a 'bite' method.  The only argument to this method is another instance of a Snake.
The instance of Snake that is passed in should have their health deducated by 10
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake {

}

*/
class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
    constructor(options){
        super(options);
    }
    bite(snake){
        return snake.health -= 10;
    }
}

const snake = new Snake({name: "Dragon"});
const snake2 = new Snake({name: "Tiger"});
snake.bite(snake2);





