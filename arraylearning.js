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

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);
console.log(children); //output: [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

// Description
// The concat() method concatenates (joins) two or more arrays.

// The concat() method returns a new array, containing the joined arrays.

// The concat() method does not change the existing arrays.


// Syntax
// array1.concat(array2, array3, ..., arrayX)
// Parameters

// array1,...	Required: The array(s) to be concatenated.

// Return Value

//The content from the joined arrays.

/*
* 
*/

//constructor	//Returns the function that created the Array prototype
// The constructor property returns the function that created the Array prototype.

// For JavaScript arrays the constructor property returns:

// function Array() { [native code] }

const fruitz = ["Banana", "Orange", "Apple", "Mango"];
let text = fruitz.constructor;
console.log(text) //output: [Function: Array]

/*
* 
*/

// The copyWithin() method copies array elements to another position in an array.

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

//copyWithin()	//Copies array elements within the array, to and from specified positions
const fruitas = ['bellend', 'orangaid', 'leland manego', 'purple nurple', 'kiwi'];
console.log(fruitas)
fruitas.copyWithin(1,0); //Copy to index 1, all elements from index 0:
console.log(fruitas)

// Syntax
// array.copyWithin(target, start, end)

/*
* 
*/

// entries()	Returns a key/value pair Array Iteration Object

// The entries() method returns an Iterator object with the key/value pairs from an array:

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// The entries() method does not change the original array.

// Create an Array
const fruita = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const list = fruita.entries();

console.log(list) //array iterator

// List the Entries

for (let x of list) {
    console.log(x)
}

// Syntax
// array.entries()
// Parameters
// NONE

/*
* 
*/

// every()	Checks if every element in an array pass a test

// The every() method executes a function for each array element.

// The every() method returns true if the function returns true for all elements.

// The every() method returns false if the function returns false for one element.

// The every() method does not execute the function for empty elements.

// The every() method does not change the original array

//create an array

let ages = [32, 33, 16, 40];

//create a Test Function

function checkAge(age){
    return age > 18;
}

//Are all ages over 18? 
console.log(ages.every(checkAge)) //output false

// Syntax
// array.every(function(currentValue, index, arr), thisValue)
// Parameters

// function()	Required: A function to be run for each element in the array.

// currentValue	Required: The value of the current element.

// index	Optional: The index of the current element.
// arr	Optional: The array of the current element.