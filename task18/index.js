var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array containing places to visit
var placesToVisit = ["Peshawar", "Lahore", "Karachi", "Gawadar"];
console.log("orignal order:", placesToVisit); // Print the array in its original order
// it's important to note that the sort() method alters the original array directly and also returns the sorted array.
//  console.log("Alphabetical Order:", placesToVisit.sort());
//    OR
//If you want to preserve the original order of placesToVisit and only display the sorted version
console.log("Alphabetical Order:", __spreadArray([], placesToVisit, true).sort());
// Print the array to show it's still in its original order
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the orignal order.
console.log("Reverse Alphabetical Order:", __spreadArray([], placesToVisit, true).sort().reverse());
// print the array that it is in orignal order
console.log("It's still in it is orignal order:", placesToVisit);
// Reverse the order of the list (t chhande orignal)
console.log("reverse:", placesToVisit.reverse());
// again change the order to revert into orignal order
console.log("Revert to orignal:", placesToVisit.reverse());
// sort your array in alphabetical order(orignal order list has changed now)
console.log("Sorting in alphabetical order", placesToVisit.sort());
console.log("Reverse alphabetical order:", placesToVisit.sort().reverse());
