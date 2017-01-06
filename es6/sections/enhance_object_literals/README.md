/*
Enhance Object Literals
*/

//example 1
//ES6
function createBookShop(inventory){
	return {
		inventory: inventory,
		inventoryValue: function(){
			return this.inventory.reduce((total, book) => total + book.price, 0);
		},
		priceForTitle: function(title){
			return this.inventory.find(book => book.title === title).price;
		}
	};
}

const inventory = [
	{title: "Harry Potter", price: 10},
	{title: "Javscript ES6", price: 200}
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle("Harry Potter");

//ES6 enhanced object literals
function createBookShop2(inventory){
	return {
		inventory,
		inventoryValue(){
			return this.inventory.reduce((total, book) => total + book.price, 0);
		},
		priceForTitle(title){
			return this.inventory.find(book => book.title === title).price;
		}
	};
}

const inventory2 = [
	{title: "Harry Potter", price: 10},
	{title: "Javscript ES6", price: 200}
];

const bookShop2 = createBookShop2(inventory2);

bookShop2.inventoryValue();
bookShop2.priceForTitle("Harry Potter");



//example 2
function saveFile(){
	$.ajax({
		method: 'POST',
		url: url, 
		data: data
	});
}
const url = "http://fileupload.com";
const data = {color: 'red'};

saveFile(url, data);

//ES6 enhanced object literals
function saveFile2(){
	$.ajax({
		method: 'POST',
		url, 
		data
	});
}
const url2 = "http://fileupload.com";
const data2 = {color: 'red'};

saveFile(url2, data2);

///////////////////////////////////
//exercise 1
/*
Multiple Properties with Enhanced Notation

Refactor to use enhanced literal notation

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red: red, blue: blue };
*/

const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

//Exercise 2
/*
Condensing Code with Enhanced Literals

Refactor the following to use enhance object literal syntax

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields: fields };
*/

const fields = ['firstName', 'lastName', 'phoneNumber'];
      
const props = { fields };

//Exercise 3
/*
Literals in Functions

Refactor to use enhanced literal notation
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width: width, 
    height: height 
  };
}
*/

const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}

//Exercise 4
/*
Refactor to use enhanced literal notation

const color = 'red';

const Car = {
  color: color,
  drive: function() {
    return 'Vroom!';
  },
  getColor: function() {
    return this.color;
  }
};
*/
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};

