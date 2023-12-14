var current_users = ['John', 'Alice', 'Bob', 'Eva', 'Mia'];
var new_users = ['ALICE', 'Bob', 'Sarah', 'MIA', 'Chris'];
var _loop_1 = function (i) {
    var newUserLowerCase = new_users[i].toLowerCase(); // Convert to lowercase for comparison
    if (current_users.some(function (user) { return user.toLowerCase() === newUserLowerCase; })) {
        console.log("Sorry, the username '".concat(new_users[i], "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_users[i], "' is available."));
    }
};
for (var i = 0; i < new_users.length; i++) {
    _loop_1(i);
}
// let current_users = ["ali","haris","noor"]
// let new_users = ["M","chris","ALI"]
// for (let i = 0; i < new_users.length; i ++){
//     new_users[i].toLocaleLowerCase();
// }
