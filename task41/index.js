// Array of magician's names
var magicianNames = ['Merlin', 'Houdini', 'David Copperfield', 'Penn & Teller'];
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Calling the function to show the names of magicians
showMagicians(magicianNames);
