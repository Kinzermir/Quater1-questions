var guest = ["Tajdar", "hashir", "sharif"];
var additionalGuest = ["Ali", "Hadi", "Danyal"];
guest = guest.concat(additionalGuest); //The concat() method is used in this line to merge the contents of both arrays
guest.unshift("Hussain"); //addition in start
guest.splice(4, 0, "Saddam"); //sddition in mid
guest.push("eric"); //additio in last
guest.forEach(function (guest) {
    console.log("dear ".concat(guest, " i would you like to invite you to dinner "));
});
console.log("Good news! We found a bigger dinner table. There's more space available!");
