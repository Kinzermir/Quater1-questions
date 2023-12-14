var username = ["admin", "eric", "martin"];
for (var i = 0; i < username.length; i++) {
    if (username[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(username[i], " thanks for uou logging in again"));
    }
}
