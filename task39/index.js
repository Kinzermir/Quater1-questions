// function cityCountry(city: string, country: string) {
//     return `${city}, ${country}`;
// }
// // Calling the function with different city-country pairs
// let city1 = cityCountry('Lahore', 'Pakistan');
// let city2 = cityCountry('Paris', 'France');
// let city3 = cityCountry('Tokyo', 'Japan');
// // Printing the values returned by the function
// console.log(city1);
// console.log(city2);
// console.log(city3);
function cityCountry(city, country) {
    return "".concat(city, " ").concat(country);
}
var a = cityCountry("peshawar", "pakistan");
var b = cityCountry("paris", "France");
var c = cityCountry("tokyo", "Japan");
console.log(a);
console.log(b);
console.log(c);
// we cannot use this code in object cuz it cann't execute multiple code.
// let cityCountry :{
//     city : string,
//     country : string
// }={
//     city : "peshawar",
//     country : "Pakistan"
// }
// console.log(cityCountry.city);
// console.log(cityCountry.country);
