// // Original array containing names of people to invite to dinner
// let guests = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela","hashir"];
// // Printing a message that we can invite only two people for dinner
// console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
// // Selecting only two guests for dinner
// guests.splice(0,2),
// // Sending out invitations to the selected guests
// guests.forEach(guest => {
//     console.log(`Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
// });
// // Original array containing names of people to invite to dinner
// let payingGuest= ["Albert Einstein", "Ada Lovelace", "Nelson Mandela", "Marie Curie", "Leonardo da Vinci", "Rosa Parks", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"];
// // Printing a message that we can invite only two people for dinner
// console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
// // Removing guests until only two names remain
// while (payingGuest.length > 2) {
//     let removedGuest: string = payingGuest.pop()!; // Remove the last guest
//     console.log(`Sorry, ${removedGuest}, I'm unable to invite you to dinner.`);
// }
// // Sending out invitations to the remaining two guests
// payingGuest.forEach(payingGuest => {
//     console.log(`Dear ${payingGuest}, I would like to invite you to dinner. It would be an honor to have you join us.`);
// });
// Original array containing names of people to invite to dinner
var guests = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela", "Marie Curie", "Leonardo da Vinci", "Rosa Parks", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"];
// Printing a message that we can invite only two people for dinner
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
// Removing guests until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove the last guest
    console.log("Sorry, ".concat(removedGuest, ", I'm unable to invite you to dinner."));
}
guests.splice(0, 2); // Removing remaining names in the array
// Sending out invitations to the remaining two guests
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner. Hope to see you there!"));
});
console.log("List of guests:", guests);
