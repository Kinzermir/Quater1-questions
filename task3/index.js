var personName = ("Eric");
console.log(personName.toLocaleLowerCase());
console.log(personName.toUpperCase());
function toTitleCase(str) {
    var string = str.split(" ").map(function (i) { return i[0].toUpperCase() + i.substring(1).toLowerCase(); }).join(" ");
    return string;
}
var toTitle = toTitleCase("hello this is pakistan");
console.log(toTitle);
