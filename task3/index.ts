let personName = ("Eric");
console.log(personName.toLocaleLowerCase());
console.log(personName.toUpperCase());

function toTitleCase(str:string){
    const string = str.split(" ").map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(" ")
    return string;
}

const toTitle = toTitleCase("hello this is pakistan")
console.log(toTitle);
