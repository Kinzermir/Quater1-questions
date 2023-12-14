// Author: [kizner]
// Date : [12/6/2023]
// Variable arithematic operators

console.log(5+3);  // add 5+3 =8
console.log(10-2); // sub 10-2 = 8
console.log(16/2); // divid 16/2 = 8
console.log(4*2);  // mult 4*2 = 8

// Author: [kizner]
// Date : [12/6/2023]

// storing the person name in a variable
let personName = ("Eric");

// printing the name in lower case, upper case and titlecase

console.log(personName.toLocaleLowerCase());
console.log(personName.toUpperCase());

function toTitleCase(str:string){
    const string = str.split(" ").map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(" ")
    return string;
}

const toTitle = toTitleCase("hello this is pakistan")
console.log(toTitle);

