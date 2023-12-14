var guest = ["Hashir", "Kinzer", "Tajdar", "Hadi"];
guest.splice(-1, 1, "Sharif");
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, " i would like to invite you to dinner "));
});
