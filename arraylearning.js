// The Array object is used to store multiple values in a single variable.
//exs:

const cars1 = ["Saab", "Volvo", "BMW"];
let cars2 = ["Saab", "Volvo", "BMW"];
var cars3 = ["Saab", "Volvo", "BMW"];

/*
* 
*/
[ ]	//The [ ] constructor creates a new empty array object.:

const cars = [];
// Add Values to the Set
cars.push("Saab");
cars.push("Volvo");
cars.push("BMW");

console.log(cars) //output: [ 'Saab', 'Volvo', 'BMW' ]

/*
* 
*/

new Array()	//another way of createing a new Array ex:

const vehicles = new Array();
// Add Values to the Set
vehicles.push("Saab");
vehicles.push("Volvo");
vehicles.push("BMW");

console.log(vehicles) //output: [ 'Saab', 'Volvo', 'BMW' ]

/*
* 
*/

 //at()	//Returns an indexed element of an array

// Get the third element of fruits:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit) //output: Apple

/*
* 
*/

//concat()	//Joins arrays and returns an array with the joined arrays