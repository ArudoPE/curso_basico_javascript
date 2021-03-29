//Declarative
function myFunction1() {
    return 3;
}
myFunction1();
//Expressive or anonymous function, because it doesn't have a name

var myFunction2 = function(){
    return 5;
}
myFunction2();

//function example 1
function sayHi(value) {
    console.log(`Hi ${value}`);
}
var student = "Aldo";
sayHi(student);

//function example 2

function sum(a,b) {
    return a + b;
}
//I print the result in the console
console.log(sum(2,2));

//Scope Class
var myName = "Aldo";

function Name() {
    var myLastName ="Ortiz";
    console.log(myName + " " + myLastName);
}
Name();

//Hoisting
console.log(myName2);
var myName2 = "Aldo";

//example2
hey();
function hey(){
    console.log("Hi3 " + myName3);
}
var myName3 = "Aldo";
//Valores Truthy y Falsy:
console.log(Boolean(1)); // true
console.log(Boolean(-10)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(false)); // false
console.log(Boolean("")); // false
console.log(Boolean(function(){})); // true, funciones son verdaderas
console.log(Boolean(true)); // true

//Operators:
console.log("Operators");
console.log(3 + 2); // Sum
console.log(50 - 10); // Substraction
console.log(3 * 2); // Multiplication
console.log(6 / 2); // Division
console.log("Aldo" + " Ortiz"); // Concatenation
console.log(!false); // Negation (!), the result is true
var a = 1; // Asignation (=)
var b = -5; // Asignation (=)
console.log(3 == "3"); // Comparation (==), the result is true, is comparing the value.
console.log(3 === "3"); // Comparation (===), the result is false, compares value and data type.
console.log(5 < 3); // Less than (<), the result is false
console.log(5 > 3); // More than (>), the result is true
console.log(5 <= 6); // Less or equal than (<=), the result is true
console.log(5 >= 6); // More or equal than (>=), the result is false
a && b; // Both must be true for the result to be true
a || b // One or both must be true for the result to be true
var age = 40;
age++; //Incremental
console.log(age); // The result is 41
age += 2; // The operator (+=), is the same as: age = age + 2;
console.log(age); // The result is 43
age *= 2; //The operator (*=), is the same as: age = age * 2;
console.log(age); // The result is 86
age /= 2; //The operator (/=), is the same as: age = age / 2;
console.log(age); // The result is 43
age -= 2; //The operator (-=), is the same as: age = age - 2;
console.log(age); // The result is 41
//
//If class
console.log("If class");
//Only works if the statement is true
if (true) { //this block prints a "Hi" in the console
    console.log("Hi");
}
//
if (false) { //this block DOESN'T print a "Hi" in the console, because the statement is false
    console.log("Hi");
} else {
    console.log("Now this is the true") // This block prints a "Hi" in the console
}
//
var age = 21;
if (age === 18) {
    console.log("You can vote, is going to be your first time :).");
} else if (age > 18) { // A new validation if the first doesn't work
    console.log("You can vote, again.");
} else {
    console.log("You can't vote.");
}
//condition ? true : false; that's another way to use conditions
var number = 2;
var result = number === 1 ? "Yes, I'm ONE.": "No, I'm not ONE.";
console.log(result);

//switch
var number = 30;
switch (number) {
    case 1:
        console.log("I'm one");
        break;
    case 10:
        console.log("I'm a 10");
        break;
    case 100:
        console.log("I'm a 100!");
        break;
    default:
        console.log("I'm nothing");
        break;
}

//Arrays class
var fruits = ["Apple", "Banana", "Strawberry", "Pineapple"];
console.log(fruits.length); // how many items array.lenght
console.log(fruits[0]); // select the first item of the array
var moreFruits = fruits.push("Grape"); // Push a new element in the last place
console.log(fruits);
var lastFruit = fruits.pop(); // Delete the last element in the array
console.log(fruits);
var newLenght = fruits.unshift("Tomato"); // Put this element as the FIRST element in the array
console.log(fruits);
var  deleteFruit = fruits.shift(); // Delete the first element in the array
console.log(fruits);
console.log(fruits.indexOf("Banana")); // It shows the index location of the element

//Loops class
var students = ["Maria", "Sergio", "Rosa", "Daniel"];
//alt+96=``
function greetStudent(student) {
    console.log(`Hi, ${student}`);
}
//for cycle
for(var i = 0; i < students.length; i++) {
    greetStudent(students[i] + " , for :).");
}
//for...of cycle
for(var student of students) {
    greetStudent(student + " for...of :).");
}

//While class
var htmlStudents = ["Maria", "Rosa", "Carlos", "Manuel"];

function greetHtmlStudent(htmlStudent) {
    console.log(`Hi, ${htmlStudent}`);
}
//while loop
while(htmlStudents.length > 0) {
    var htmlStudent = htmlStudents.shift();
    greetHtmlStudent(htmlStudent);
}

//Objects class
//This is how we declare an object in JavaScript
var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    carDetail: function(){
        console.log(`Car ${this.model} ${this.year}`);
    }
};
//we can access a value we can use:
console.log(myCar.brand);
//we can call a function inside an object
myCar.carDetail();

//Objects: Constructor function class
function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}
var newCar = new car("Tesla", "Model 3", 2020);
console.log(newCar);
var newCar2 = new car("Tesla", "Model X", 2018);
console.log(newCar2);
var newCar3 = new car("Toyota", "Corolla", 2019);
console.log(newCar3);

//Arrays methods
var storeArticles = [
    { name: "Bicycle", cost: 3000},
    { name: "TV", cost: 2500},
    { name: "Book", cost: 320},
    { name: "Cellphone", cost: 10000},
    { name: "Laptop", cost: 20000},
    { name: "Keyboard", cost: 500},
    { name: "Headphones", cost: 1700},
];
//First method: Filter will make a new array with the result
var filteredArticles = storeArticles.filter(function(article){
    return article.cost <= 500;
});
console.log(filteredArticles);
//Second method: Map will make a new array with the result
var nameMapArticles = storeArticles.map(function(article){
    return article.name;
});
console.log(nameMapArticles);
//Third method: find(), it search and returns the FIRST element it finds
var findArticle = storeArticles.find(function(article){
    return article.name === "Laptop";
});
console.log(findArticle);
//Fourth method: forEach(), It does what we tell it with each element of the array-
storeArticles.forEach(function(article){
    console.log(article.name);
});
//Fifth method: some(), it validate if at least one of the elements meets the condition
//it returns true or false
var cheapArticles = storeArticles.some(function(article){
    return article.cost <= 700;
});
console.log(cheapArticles);