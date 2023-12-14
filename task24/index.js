var equality = "sharif";
var inequality = "HASHIR";
// test for equality and inequality with strings.
console.log(equality === inequality);
console.log(equality !== inequality);
// test using the lower case function
console.log(equality.toLocaleLowerCase() === "sharif");
// test using the upper case function
console.log(inequality.toUpperCase() !== "HASHIR");
// Numerical tests
var number = 15;
var number2 = 10;
console.log(number == number2); //False (check equality)
console.log(number !== number2); //true
console.log(number > number2); //true
console.log(number < number2); //false
console.log(number >= number2); // true
console.log(number <= number2); //false
// test using and and or operators
console.log(number === 15 && number2 === 1); // false we used === cuz you checked vaiable with data type but in above ex we have checked variable with variable
console.log(number === 15 || number2 === 98); // true
//  test item with in an array 
// conditions in an array 
var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.includes(3)); // true 
console.log(arr.includes(45)); //fa;se
console.log(!arr.includes(43));
