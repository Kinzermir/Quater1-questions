var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function showMagicians(magicians) {
    magicians.forEach(function (magic) {
        console.log(magic);
    });
}
function makeGreat(magicians) {
    return magicians.map(function (magic) { return "The Great ".concat(magic); });
}
var magiciansName = ["martin", "James", "viliam"];
var modifiedNames = makeGreat(__spreadArray([], magiciansName, true)); // making copy for not changing in orgnal array 
showMagicians(magiciansName); // Show original names
showMagicians(modifiedNames); // Show names with "the Great" added
