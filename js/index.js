//Conditional statements

//if statement => (if condition true then it will execute ... if condition is not true it will not execute)
//if ... else statement => (if condition is true code inside if is executed ... else code inside else block is executed)
//if else ... if else statement

//if statement

const age = 15;

if (age > 14) {
  console.log("Pratiksha can start driving");
}
//--------------------------------------------------------------------------

//if else statement

const ageValue = 15;

if (ageValue > 16) {
  console.log("Pratiksha can start driving"); //block of code if condition true
} else {
  console.log("Pratiksha can not start driving"); //block of code if condition false
}

//------------------------------------------------------------------------------

//if else statement

let x = 10;

if (x > 15) {
  console.log("x is greater than 5");
} else {
  console.log("x is not greater than 5");
}
//---------------------------------------------------------------------------------

//if else ... if else statement

let y = 7;

if (y > 5) {
  console.log("y is greater than 10");
} else if (y === 4) {
  console.log("y is equal to 10");
} else {
  console.log("y is less than 10");
}

//--------------------------------------------------------------------------------

let z = 12;

if (z > 15) {
  console.log("z is greater than 15");
} else if (z > 10) {
  console.log("z is greater than 10 but less than or equal to 15");
} else if (z > 5) {
  console.log("z is greater than 5 but less than or equal to 10");
} else {
  console.log("z is less than or equal to 5");
}

//---------------------------------------------------------------------------

//Switch statement

let day = "Saturday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week!");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("It's a weekday.");
    break;
  case "Friday":
    console.log("It's Friday, almost the weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Not a valid day.");
}

//--------------------------------------------------------------------------------

const expr = "Oranges";

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
//----------------------------------------------------------------------------

//Type conversion
