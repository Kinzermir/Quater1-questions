function result(city, country) {
    if (city === void 0) { city = "karachi"; }
    if (country === void 0) { country = "pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
result();
result("washington", "America");
result("Dehli", "India");
//                      OR
// function describeCity(city: string, country: string = 'Unknown Country'): void {
//     console.log(`${city} is in ${country}.`);
// }
// // Calling the function for different cities
// describeCity('Karachi', 'Pakistan');
// describeCity('London', 'United Kingdom');
// describeCity('New York'); // This will use the default country
