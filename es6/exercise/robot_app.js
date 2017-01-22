/*
Description:
The application is a simulation of a toy robot moving on a squaretabletop, of dimensions 5 units x 5 units.There are no other obstructions on the table surface.
The robot is free to roam around the surface of the table, but must beprevented from falling to destruction. 
Any movement that would resultin the robot falling from the table must be prevented, however furthervalid movement commands must still be allowed.
Create an application that can read in commands of the following form - PLACE X,Y,F MOVE LEFT RIGHT REPORT Where PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. 
The origin (0,0) can be considered tobe the SOUTH WEST most corner.It is required that the first command to the robot is a PLACE command,after that, any sequence of commands may be issued, in any order, includinganother PLACE command. 
The application should discard all commands inthe sequence until a valid PLACE command has been executed. Where MOVE will move the toy robot one unit forward in the directionit is currently facing.Where LEFT and RIGHT will rotate the robot 90 degrees in the specifieddirection without changing the position of the robot.Where REPORT will announce the X,Y and F of the robot. 
This can being any form, but standard output is sufficient.A robot that is not on the table can choose the ignore the MOVE, LEFT,RIGHT and REPORT commands.
Input can be from a file, or from standard input, as the developer chooses.Provide test data to exercise the application.
Constraints:
- The toy robot must not fall off the table during movement. 
- This alsoincludes the initial placement of the toy robot. 
- Any move that would causethe robot to fall must be ignored.
Example Input and Output:
+ a)----------------PLACE 0,0,NORTH MOVE ;REPORT => Output: 0,1,NORTH
+ b)----------------PLACE 0,0,NORTH LEFT ;REPORT => Output: 0,0,WEST
+ c)----------------PLACE 1,2,EAST MOVE MOVE LEFT MOVE ;REPORT => Output: 3,3,NORTH

Deliverables: The source files, the test data and any test code.It is not required to provide any graphical output showing the movementof the toy robot.
*/


let input = [0,0,'NORTH', 'RIGHT', 'MOVE'];
const compass = [{index: 0, way: 'NORTH'}, {index: 1, way: 'EAST'}, {index: 2, way: 'SOUTH'}, {index: 3, way: 'WEST'}];
const dimensions = {x: 5, y: 5};

class Position{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	get(){
		return [this.x, this.y];
	}
}

class Robot{
	
	constructor(inputs){
		inputs = inputs.split(' ');

		this.currentPosition = new Position(-1, -1);
		this.currentFacing = '';
		this.instructions = [];
		let robot = inputs.reduce(function(robot, input){
			input = input.trim();

			if(!isNaN(input) && robot.currentPosition.x === -1){
				robot.currentPosition.x = parseInt(input);
				
			}else if(!isNaN(input) && robot.currentPosition.y === -1){
				robot.currentPosition.y = parseInt(input);
				
			}else if(isNaN(input) && robot.currentFacing === ''){
				robot.currentFacing = input;
				
			}else if(input === 'LEFT' || input === 'RIGHT' || input === 'NORTH' || input === 'SOUTH' || input === 'WEST' || input === 'EAST' || input === 'MOVE'){
				robot.instructions.push(input);
				
			}else{
				$("#lblResult").html("Invalid input format");
				
			}
			return robot;
		}, {currentPosition: this.currentPosition, currentFacing: this.currentFacing, instructions: this.instructions});
	
		this.currentPosition = robot.currentPosition;
		this.currentFacing = robot.currentFacing;
		this.instructions = robot.instructions;
	}

	run(){
		if(this.instructions != null && this.instructions.length > 0){
			this.instructions.forEach((instruction) => {
				if(instruction === 'LEFT' || instruction === 'RIGHT'){
					this.turn(instruction);
				}
				if(instruction === 'MOVE'){//for movement only
					this.move(this.currentPosition);
				}
			});

		}else{
			console.log("No instructions");
		}
	}

	turn(instruction){
		let index= 0;
		let newFacingIndex = 0;
		let currentFacing = this.currentFacing;
		compass.forEach((com) => {
			if(com.way === currentFacing && instruction === 'LEFT'){
				if(index === 0){//handle exceptional case for min array index
					newFacingIndex = 3;
				}else{
					newFacingIndex = index - 1;
				}
				return newFacingIndex;
			}else if(com.way === currentFacing && instruction === 'RIGHT'){
				if(index === 3){//handle exceptional case for max array index
					newFacingIndex = 0;
				}else{
					newFacingIndex = index + 1;
				}
				return newFacingIndex;
			}
			index++;
		});

		this.facing = compass[newFacingIndex].way;

	}

	isFall(position){
		if(position.x < 0 || position.y < 0 || position.x > (dimensions.x - 1) || position.y > (dimensions.y - 1)) {
			return true;
		}
		return false;	
	}

	move(currentPosition){
		let newPosition = currentPosition;
		if(this.facing === 'NORTH'){
			newPosition.y++;
		}else if(this.facing === 'SOUTH'){
			newPosition.y--;
		}else if(this.facing === 'WEST'){
			newPosition.x--;
		}else if(this.facing === 'EAST'){
			newPosition.x++;
		}

		//validate new position
		if(this.isFall(newPosition) == false){
			this.currentPosition = newPosition;
			console.log(this.currentPosition);
			$("#lblResult").html(`New robot position: [x: ${this.currentPosition.x} , y: ${this.currentPosition.y}], Facing: ${this.facing}`);

			return true;
		}else{
			console.log(this.currentPosition);
			$("#lblResult").html(`Robot will fall over`);

			return false;
		}
	}
}

/*
function to calculate Date Diff from input
*/
$("document").ready(function(){
	$("#btnCalculate").on("click",function(){
		//reset global dates array
		
		//collect input data
		let instructions = $("#txtInstructions").val();
		//init robot instructions
		let robot = new Robot(instructions);
		//robot peforms run
		robot.run();
		//alert("Calculate is done");
	});
});
