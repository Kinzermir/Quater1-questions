var usernames = ["tajdar", "hashir", "farooq"];
// Check if the list of users is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Original code to determine the stage of life based on age
    var age = 25;
    if (age < 2) {
        console.log("The person is a baby.");
    }
    else if (age >= 2 && age < 4) {
        console.log("The person is a toddler.");
    }
    else if (age >= 4 && age < 13) {
        console.log("The person is a kid.");
    }
    else if (age >= 13 && age < 20) {
        console.log("The person is a teenager.");
    }
    else if (age >= 20 && age < 65) {
        console.log("The person is an adult.");
    }
    else {
        console.log("The person is an elder.");
    }
}
// removing all usernames form the array 
usernames = [];
// checking for an empty list of usernames again
if (usernames.length === 0) {
    console.log("we need to find some users");
}
