type countries = "pakistan" | "America" | "India"
function result (city : string = "karachi",country : countries = "pakistan"){
    console.log(`${city} is in ${country}`);

}
result();
result("washington","America")
result("Dehli","India")



//                      OR
// function describeCity(city: string, country: string = 'Unknown Country'): void {
//     console.log(`${city} is in ${country}.`);
// }

// // Calling the function for different cities
// describeCity('Karachi', 'Pakistan');
// describeCity('London', 'United Kingdom');
// describeCity('New York'); // This will use the default country
