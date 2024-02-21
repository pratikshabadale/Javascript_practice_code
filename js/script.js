//values and variable declaration

let firstName = "Pratiksha";
console.log(firstName);

//Eg-Declare variables called country, state and population and assign their values according to your own country

let country = "India";
let state = "Maharashtra";
let population = 50000;

console.log(country);
console.log(state);
console.log(population);

//-----------------------------------------------------------------------------------------------------------------------------

//Data Types

let age = true;
console.log(age);

/* Typeof operator we can used for which type of data we can declare */
console.log(typeof "pratiksha"); //string
console.log(typeof 10); //Number
console.log(typeof true); //Boolean

let year; //Undefined data type
console.log(year);
console.log(typeof year);

//Basic Operators

//1.mathematical operators

const ageOfGirl = 60 + 10;
const ageOfBoy = 50 - 25;

console.log(ageOfGirl, ageOfBoy);
//----------------------------------------------
const now = 5000;
const ageJohn = 100;
const ageSara = 200;
console.log(ageJohn, ageSara);

console.log(ageJohn * 2, ageSara / 10);

//-----------------------------------------------
//2.Concat operator
const firstNam = "Pratiksha";
const lastName = "Badale";
console.log(firstNam + " " + lastName);

//3.Assignment operator
let x = 10 + 5; //15
x += 10; // x = x+10
x *= 4; //x=x * 4=100;
x++;
x = x + 1;
x--;
console.log(x);

//4.comparison operator(< ,>,<=,>=)
//we used comparison operator for declaring boolean values

const John = 100;
const Sara = 200;

console.log(John > Sara);

//Strings and templates literals

const name = "Pratiksha";
const job = "Software Engg";
const birthYear = "1996";
const newYear = 2024;

const pratiksha =
  "I'm" + name + " , a " + (newYear - birthYear) + "years old " + job + "!";
console.log(pratiksha);

//template literals

const pratikshaNew = `I' m ${name} , a ${newYear - birthYear} year old ${job}`;
console.log(pratikshaNew);

//string with multiple lines using template literals backticks

console.log(`String with
multiple
lines`);
