function showMagicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
function makeGreat(magician) {
    return magician.map(function (magician) { return "the great ".concat(magician); });
}
var magicianNames = ["mir", "hadi"];
var greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
